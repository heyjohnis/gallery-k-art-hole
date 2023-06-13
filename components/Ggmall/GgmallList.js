/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";

import { commaFormat } from "../../utils/number";

const GgmallList = ({ contents, productKind }) => {
  return (
    <>
      <section className="team-area mt-5 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            {contents &&
              contents.map((content, i) => (
                <div
                  className="col-lg-3 col-sm-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={100}
                  key={i}
                >
                  <div className="single-team active">
                    <div className="team-single-img">
                      <img src={content.thumb_img} alt="Image" />
                    </div>

                    <div className="team-content">
                      <h3>{content.pd_name}</h3>
                      <p>
                        <span className="price">
                          {content.price > 0
                            ? commaFormat(content.price || 0)
                            : "별도문의"}
                        </span>
                        {content.price > 0 && "P"}
                      </p>
                    </div>
                    <Link
                      className="default-btn"
                      href={`/ggmall/${productKind}/${content.pd_no}`}
                    >
                      구매하기
                    </Link>
                  </div>
                </div>
              ))}

            {/* Pagination */}
            {/* <div className="col-lg-12">
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default GgmallList;
