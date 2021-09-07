import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ onPageChange, itemCount, pageSize, currentPage }) => {
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    console.log("currentPage:", currentPage);
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item " +
                            (page === currentPage ? "active" : "")
                        }
                        key={page}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
