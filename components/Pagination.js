import React from "react";

const Pagination = () => {
  return (
    <div className="col-lg-12">
      <div className="page-navigation-area">
        <nav aria-label="Page navigation example text-center">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link page-links">
                <i className="bx bx-chevrons-left"></i>
              </a>
            </li>

            <li className="page-item active">
              <a className="page-link">1</a>
            </li>

            <li className="page-item">
              <a className="page-link">2</a>
            </li>

            <li className="page-item">
              <a className="page-link">3</a>
            </li>

            <li className="page-item">
              <a className="page-link">
                <i className="bx bx-chevrons-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
