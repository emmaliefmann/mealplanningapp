import React from "react";
import _ from "lodash";

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
                ? "pagination-item active"
                : "pagination-item"
            }
          >
            <a onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
