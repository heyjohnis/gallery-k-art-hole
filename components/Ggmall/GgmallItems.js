import Link from 'next/link';
import React from "react";
import styles from "./Ggmall.module.scss";

const GgmallItems = () => {
  return (
    <>
      <section className="news-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.items_image}>
                <img src="/images/ggmall/product01.png"/>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.product_details_desc}>
                <h2>아이젠하임 말리 블랙휠스탠드골프백</h2>
                <p>브랜드: 아이젠하임</p>
                <p>색상선택</p>
                <select>
                  <option selected value="b">검정</option>
                  <option value="c">블루</option>
                </select>
                <h2 className={styles.price}>713,000원</h2>
                <div className={styles.btn_warp}>
                  <Link href="#" className={`default-btn ${styles.btn}`}>구매하기</Link> 
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
