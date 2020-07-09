import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { count, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(count / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="pagination">
      <ul>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "pagination-item active-pagination"
                : "pagination-item"
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
