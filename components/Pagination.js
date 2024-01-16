/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const PaginationComp = ({ pageInfo, gotoPage, displayPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(pageInfo?.currentPage || 1);
  const [items, setItems] = useState([]);

  const totalPage = pageInfo?.totalPages;
  const countDisplayPage =
    totalPage - displayPage > 0 ? displayPage : totalPage;
  const middlePage = parseInt(countDisplayPage / 2);

  useEffect(() => {
    let startPageNumber =
      currentPage > middlePage ? currentPage - middlePage : 1;
    startPageNumber =
      totalPage > currentPage + middlePage
        ? startPageNumber
        : totalPage - countDisplayPage + 1;
    const pages = [];
    for (let i = 0; i < countDisplayPage; i++) {
      const pageNumber = startPageNumber + i;
      pages.push(
        <li
          className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
          key={pageNumber}
          onClick={() => setGotoPage(pageNumber)}
        >
          <a className="page-link">{pageNumber}</a>
        </li>
      );
    }
    setItems(pages);
  }, [currentPage, pageInfo]);

  const gotoBeforePageSet = () => {
    const pageNumber =
      currentPage - countDisplayPage > 0 ? currentPage - countDisplayPage : 1;
    setCurrentPage(pageNumber);
    gotoPage(pageNumber);
  };

  const gotoAfterPageSet = () => {
    const pageNumber =
      totalPage > currentPage + countDisplayPage
        ? currentPage + countDisplayPage
        : totalPage;
    setCurrentPage(pageNumber);
    gotoPage(pageNumber);
  };

  const setGotoPage = (pageNumber) => {
    gotoPage(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="col-lg-12">
      <div className="page-navigation-area">
        <nav aria-label="Page navigation example text-center">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link page-links"
                onClick={() => setGotoPage(1)}
              >
                <i className="bx bx-chevrons-left"></i>
              </a>
            </li>
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
            <li className="page-item">
              <a className="page-link" onClick={() => setGotoPage(totalPage)}>
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
