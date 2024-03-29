/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Ggmall.module.scss";
import { commaFormat } from "../../utils/number";

const OrderInfo = ({ product, total, selectedOptions, optionsResult }) => {
  console.log("product: ", selectedOptions);
  return (
    <>
      <section className="pt-100">
        <div className={`row ${styles.cart_list}`}>
          <div className="col-3 col-md-2">
            <div className={styles.items_image}>
              <img src={product && product.thumb_img} />
            </div>
          </div>
          <div className="col-7 col-md-8">
            <span>{product && product.pd_name}</span>
            <span
              className={styles.division}
              dangerouslySetInnerHTML={{
                __html: optionsResult,
              }}
            ></span>
          </div>
          <div className="col-2">
            <p className={styles.price}>
              {commaFormat(total || 0)}
              <span>P</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderInfo;
