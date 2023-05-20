import React from "react";
import Link from "next/link";

const BbsPagination = () => {
  return (
    <div className="col-lg-12">
      <div className="page-navigation-area">
        <nav aria-label="Page navigation example text-center">
          <ul className="pagination">
            <li className="page-item">
              <Link href="#" className="page-link page-links">
                <i className="bx bx-chevrons-left"></i>
              </Link>
            </li>

            <li className="page-item active">
              <Link href="#" className="page-link">
                1
              </Link>
            </li>

            <li className="page-item">
              <Link href="#" className="page-link">
                2
              </Link>
            </li>

            <li className="page-item">
              <Link href="#" className="page-link">
                3
              </Link>
            </li>

            <li className="page-item">
              <Link href="#" className="page-link">
                <i className="bx bx-chevrons-right"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BbsPagination;
