/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Link from "next/link";
// import styles from "./MainBanner.module.scss";
import styles from "./home.module.scss";
import { commaFormat } from "../../utils/number";

const MainListWrap = ({ items }) => {
  console.log("MainListWrap: ", items);
  return (
    <>
      <div className={` ${styles.itemListWrap}`}>
        <ul className={`${styles.itemListUl}`}>
          {items?.map((item, index) => (
            <li className={`${styles.itemListLi}`} key={index}>
              <Link href={`/ggmall/detail/${item.pd_kind}/${item.pd_no}`}>
                <div
                  className={item.discount === 0 ? `` : `${styles.imageWrap}`}
                >
                  <img src={item.thumb_img} alt={item.pd_name} />
                </div>
                <div>
                  <h4>{item.pd_name}</h4>
                  <span className={`${styles.discript}`}>
                    {item?.info_short}
                  </span>
                  <div>
                    {item.discount_rate !== 0 && !isNaN(item.discount_rate) && (
                      <span className={styles.discountPercent}>
                        {item.discount_rate}%
                      </span>
                    )}
                    <span>
                      {item.price === 0
                        ? `가격별도문의`
                        : commaFormat(item?.price) + "P"}
                    </span>
                    {item?.origin_price !== 0 &&
                      item?.origin_price !== item?.price && (
                        <span className={styles.discountPoint}>
                          {commaFormat(item?.origin_price)}P
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
