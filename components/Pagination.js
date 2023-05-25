/* eslint-disable react/prop-types */
import React, { useState } from "react";

const PaginationComp = ({ page, goto }) => {
  const [currentPage, setCurrentPage] = useState(page.currentPage || 1);

  const totalPage = page.totalPages;
  const countDisplayPage = totalPage - 5 > 0 ? 5 : totalPage;
  const middlePage = parseInt(countDisplayPage / 2);
  let startPageNumber =
    currentPage - middlePage > 0 ? currentPage - middlePage : 1;
  startPageNumber =
    totalPage - currentPage - middlePage > 0
      ? startPageNumber
      : startPageNumber + (totalPage - currentPage - middlePage);

  const items = [];
  for (let i = 0; i < countDisplayPage; i++) {
    const pageNumber = startPageNumber + i;

    items.push(
      <li
        className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
        key={pageNumber}
        onClick={() => gotoPage(pageNumber)}
      >
        <a className="page-link">{pageNumber}</a>
      </li>
    );
  }

  const gotoBeforePageSet = () => {
    const pageNumber =
      currentPage - countDisplayPage > 0 ? currentPage - countDisplayPage : 1;
    setCurrentPage(pageNumber);
    goto(pageNumber);
  };

  const gotoAfterPageSet = () => {
    const pageNumber =
      totalPage - (countDisplayPage + currentPage) > 0
        ? countDisplayPage + currentPage
        : totalPage;
    setCurrentPage(pageNumber);
    goto(pageNumber);
  };

  const gotoPage = (pageNumber) => {
    goto(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="col-lg-12">
      <div className="page-navigation-area">
        <nav aria-label="Page navigation example text-center">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link page-links" onClick={gotoBeforePageSet}>
                <i className="bx bx-chevrons-left"></i>
              </a>
            </li>
            {items}
            <li className="page-item">
              <a className="page-link" onClick={gotoAfterPageSet}>
                <i className="bx bx-chevrons-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginationComp;
