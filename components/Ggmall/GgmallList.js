/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import styles from "./Ggmall.module.scss";

import { commaFormat } from "../../utils/number";

const GgmallList = ({ contents, productKind }) => {
  const priceComp = (content) => {
    const price = content.price || 0;
    if (price === 0) {
      return (
        <>
          <span>별도문의</span>
        </>
      );
    }

    const saleAmt = price - content.origin_price;

    if (saleAmt !== 0) {
      return (
        <>
          <p className={styles.originPrice}>
            {commaFormat(content.origin_price)}
            <span className={styles.unit}>P</span>
          </p>
          <p className={styles.price}>
            <b>{commaFormat(content.price || 0)}</b>
            <span className={styles.unit}>P</span>
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className={styles.originPrice}></p>
          <p className={styles.price}>
            <b>{commaFormat(content.price || 0)}</b>
            <span className={styles.unit}>P</span>
          </p>
        </>
      );
    }
  };

  return (
    <>
      <section className="team-area mt-5 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            {contents &&
              contents.map((content, i) => (
                <div
                  className={`col-lg-3 col-sm-6`}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={100}
                  key={i}
                >
                  <Link
                    key={i}
                    href={`/ggmall/${productKind}/${content.pd_no}`}
                  >
                    <div className={`single-team active ${styles.product}`}>
                      <div className="team-single-img">
                        <img src={content.thumb_img} alt="Image" />
                      </div>
                      <div className="team-content">
                        <label className={styles.brand}>{content.brand}</label>
                        <h3 className={styles.pdName}>{content.pd_name}</h3>
                        <h4 className={styles.infoShort}>
                          {content.info_short}
                        </h4>
                        {priceComp(content)}
                      </div>
                    </div>
                  </Link>
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
