import React, { useState } from "react";

function Search({ setSearchTerm }) {
  const [search, setSearch] = useState('')

  function handleSearch(e) {
    setSearch(e.target.value)
    setSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={search} onChange={handleSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
