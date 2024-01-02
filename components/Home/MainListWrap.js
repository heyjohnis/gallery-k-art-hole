/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Link from "next/link";
import styles from "./MainBanner.module.scss";
import { commaFormat } from "../../utils/number";

const MainListWrap = ({ items }) => {
  console.log("MainListWrap: ", items);
  return (
    <>
      <div className={`col col-lg-12 col-md-12 ${styles.itemListWrap}`}>
        <ul className={`row col-lg-12 col-md-12 ${styles.itemListUl}`}>
          {items.map((item, index) => (
            <li className={`col col-lg-4 ${styles.itemListLi}`} key={index}>
              <Link href={`/ggmall/detail/${item.pd_kind}/${item.pd_no}`}>
                <div
                  className={
                    item.discount === 0
                      ? `${styles.img}`
                      : `${styles.imageWrap}`
                  }
                >
                  <img src={item.thumb_img} alt={item.pd_name} />
                </div>
                <div>
                  <h4>{item.pd_name}</h4>
                  <span className={`${styles.discript}`}>{item?.brand}</span>
                  <div>
                    {item.discount_rate !== 0 && (
                      <span className={styles.discountPercent}>
                        {item.discount_rate}%
                      </span>
                    )}
                    <span>
                      {item.price === 0
                        ? `가격별도문의`
                        : commaFormat(item?.price)}
                      P
                    </span>
                    {item?.discount !== 0 && (
                      <span className={styles.discountPoint}>
                        {item?.discount}P
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainListWrap;
