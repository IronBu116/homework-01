import React from "react";
import PropTypes from "prop-types";
import { arrowLeft, arrowRight } from "../../constants/svg";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;
  return (
    <div className="content__section-pagination m-0 d-flex justify-content-center">
      <button
        className="content__section-pagination--button mx-1"
        disabled={currentPage === 1 ? true : false}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {arrowLeft}
      </button>
      <div className="content__section-pagination--page mx-1">
        {currentPage}
      </div>
      <button
        className="content__section-pagination--button mx-1"
        disabled={currentPage === pagesCount ? true : false}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {arrowRight}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
