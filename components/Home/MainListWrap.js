/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Link from "next/link";
import styles from "./MainBanner.module.scss";

const MainListWrap = ({ LIST_ITEM }) => {
  return (
    <>
      <div className={`col col-lg-12 col-md-12 ${styles.itemListWrap}`}>
        <ul className={`row col-lg-12 col-md-12 ${styles.itemListUl}`}>
          {LIST_ITEM.map((itemList) => (
            <li className={`col col-lg-4 col-md-12 ${styles.itemListLi}`}>
              <Link href={`${itemList.link}`}>
                <div
                  className={
                    itemList.discount === 0
                      ? `${styles.img}`
                      : `${styles.imageWrap}`
                  }
                >
                  <img src={itemList.img} alt={itemList.title} />
                </div>
                <div>
                  <h4>{itemList.title}</h4>
                  <span className={`${styles.discript}`}>
                    {itemList.discript
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <div>
                    <span
                      className={
                        itemList.discount === 0
                          ? `${styles.displayNone}`
                          : `${styles.discountPercent}`
                      }
                    >
                      {itemList.discount}%
                    </span>
                    <span>
                      {itemList.point === 0
                        ? `가격별도문의`
                        : (itemList.point * (1 - itemList.discount / 100))
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      {itemList.point === 0 ? "" : " P"}
                    </span>
                    <span
                      className={
                        itemList.discount === 0
                          ? `${styles.displayNone}`
                          : `${styles.discountPoint}`
                      }
                    >
                      {itemList.point
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      &nbsp;P
                    </span>
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
