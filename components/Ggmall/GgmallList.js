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
          <p className={styles.priceNone}>
            {content.pd_type === "03" ? "신청하기" : "별도문의"}
          </p>
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
            {(contents && contents) ||
              []?.map((content, i) => (
                <div
                  className={`col-lg-3 col-sm-6`}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={100}
                  key={i}
                >
                  <Link
                    key={i}
                    href={`/ggmall/detail/${productKind}/${content.pd_no}`}
                    style={{ width: "100%" }}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default GgmallList;
