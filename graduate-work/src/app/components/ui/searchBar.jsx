import React from "react";

const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        className="search__bar-input"
        name="searchQuery"
        placeholder="Search..."
        /* onChange={handleSearchQuery} */
        value="Поиск..."
      />
    </>
  );
};

export default SearchBar;
