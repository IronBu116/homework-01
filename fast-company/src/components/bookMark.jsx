import React from "react";
import PropTypes from "prop-types";
import { iconFavoritesTrue, iconFavoritesFalse } from "../utils/bookMarkIcons";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            {status ? iconFavoritesTrue : iconFavoritesFalse}
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;
