/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Link from "next/link";
import styles from "./MainBanner.module.scss";

const MainListItems = ({ itemList }) => {
  console.log(itemList, "232323");

  return (
    <>
      <li>
        <Link href="#">
          <div className={`${styles.imageWrap}`}>
            <img src="" alt="" />
          </div>
          <div>
            <h4>{itemList.title}</h4>
            <span>{itemList.point}</span>
            <div>
              <span className={`discountPercent`}>10%</span>
              <span>720,000 P</span>
              <span>800,000 P</span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default MainListItems;
