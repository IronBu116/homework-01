import React from "react";

const SearchBar = ({ type, name, placeholder, onChange, value }) => {
  return (
    <>
      <input
        type={type}
        className="search__bar-input"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default SearchBar;
