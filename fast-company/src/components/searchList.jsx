import React from "react";
import PropTypes from "prop-types";

const SearchList = ({ search, onChange }) => {
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

SearchList.propTypes = {
    search: PropTypes.object,
    onChange: PropTypes.func
};

export default SearchList;
