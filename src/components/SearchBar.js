import React from "react";

function SearchBar({setSearch, sorted, setSorted}) {
  const handleSearch = (e) => {
    setSearch(e.target.value)
  } // just function for setting search state to the input's value

  const handleSort = () => {
      setSorted(!sorted)
  }

  return (
    <div className="search" onChange={(e) => handleSearch(e)}>
      <input type="text" className="searchTerm" />
      <label>Sorted by Age:</label>
      <input type="checkbox" onClick={() => handleSort()} className="sort"/>
    </div>
  );
}

export default SearchBar;
