import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ search, onChange }) => {
    return (
        <>
            <input
                type="text"
                name="searchInput"
                className="form-control"
                placeholder="Поиск..."
                value={search.searchInput}
                onChange={onChange}
            />
        </>
    );
};

SearchBar.propTypes = {
    search: PropTypes.object,
    onChange: PropTypes.func
};

export default SearchBar;
