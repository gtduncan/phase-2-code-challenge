import React, { useEffect } from "react";
import {useState} from 'react';

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";



function App() {
  const [planeteers, setPlaneteers] = useState([])
  const [search, setSearch] = useState('')
  const [sorted, setSorted] = useState(false)
  // useState to store planeteers
  // search to update search

  useEffect(() => {
    fetch('http://localhost:8003/planeteers')
    .then((res) => res.json())
    .then((data)=> setPlaneteers(data))
  }, [])
  // fetch planeteers from url

  const searchedPlaneteers = planeteers.filter((planeteer) => {
    return planeteer.name.toLowerCase().includes(search.toLowerCase())
  })

  const sortedPlaneteers = [...searchedPlaneteers].sort((planeteer1, planeteer2) => {
      return planeteer2.born - planeteer1.born
  })
  // works to sort, doesn't work when checkbox is clicked...

  // set planeteers to be filtered into searchedPlaneteers-- only include the ones whose names include the search
  const handleAddPlaneteer = (newPlaneteer) => {
    const newPlaneteers = [...planeteers, newPlaneteer]
    setPlaneteers(newPlaneteers)
  }

  return (
    <div>
      <Header />
      <SearchBar setSearch={setSearch} sorted={sorted} setSorted={setSorted}/>
      <RandomButton handleAddPlaneteer={handleAddPlaneteer}/>
      <PlaneteersContainer planeteers={sorted ? sortedPlaneteers : searchedPlaneteers}/>
    </div>
  );
}

export default App;
