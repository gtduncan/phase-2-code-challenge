import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({handleAddPlaneteer}) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    fetch('http://localhost:8003/planeteers', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(randomPlaneteer)
    })
    .then((res) => res.json())
    .then((data) => { console.log(data); handleAddPlaneteer(data) })
    // console.log("For the advanced deliverables", randomPlaneteer);
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
          Add a New Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
