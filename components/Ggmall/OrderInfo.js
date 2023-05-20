import React from "react";
import styles from "./Ggmall.module.scss";

const OrderInfo = () => {
  return (
    <>
      <section className="pt-100">
        <div className={`row ${styles.cart_list}`}>
          <div className="col-3 col-md-2">
            <div className={styles.items_image}>
              <img src="/images/ggmall/product01.png" />
            </div>
          </div>
          <div className="col-7 col-md-8">
            <span>아이젠하임 말리 블랙휠스탠드골프백</span>
            <span className={styles.division}>/</span>
            <span>아이젠하임</span>
            <span className={styles.division}>/</span>
            <span>검정</span>
          </div>
          <div className="col-2">
            <p className={styles.price}>
              713,000<span>원</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderInfo;
