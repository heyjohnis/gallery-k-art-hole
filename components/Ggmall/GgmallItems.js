/* eslint-disable react/prop-types */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Ggmall.module.scss";

import { commaFormat } from "../../utils/number";

const GgmallItems = ({ content, options }) => {
  const [optionComp, setOptionComp] = useState([]);

  const renderOptions = () => {
    const comp = [];
    for (let i = 0; i < options.length; i++) {
      const optionValue = options[i].option_value;
      const splitOptions = optionValue.split(",");
      const optionArr = [];
      for (let j = 0; j < splitOptions.length; j++) {
        optionArr.push(
          <option key={j} value={splitOptions[j]}>
            {splitOptions[j]}
          </option>
        );
      }
      comp.push(
        <div className={styles.info_wrap}>
          <span className={styles.tit}>{options[i].option}</span>
          <select>{optionArr}</select>
        </div>
      );
    }
    setOptionComp(comp);
  };

  useEffect(() => {
    renderOptions();
  }, [options]);

  return (
    <>
      <section className="news-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.items_image}>
                <img src={content.thumb_img} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.product_details_desc}>
                <h2>{content.pd_name}</h2>
                {/* <div className={styles.info_wrap}>
                  <span className={styles.tit}>브랜드:</span>
                  {content.brand}
                </div> */}
                {optionComp}
                {/* <div className={styles.info_wrap}><span className={styles.tit}>수량선택:</span></div> */}
                <h2 className={styles.price}>
                  {commaFormat(content.price || 0)}
                  <span>원</span>
                </h2>
                <div className={styles.btn_warp}>
                  <Link
                    href={{
                      pathname: "/ggmall/payment/",
                      query: {
                        pd_no: content.pd_no,
                        thumb_img: content.thumb_img,
                      },
                    }}
                    className={`default-btn ${styles.btn}`}
                  >
                    구매하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GgmallItems;
