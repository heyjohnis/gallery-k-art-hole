/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import styles from "./SignupCompListWrap.module.scss";

const SignupCompListWrap = ({ LIST_ITEM }) => {
  console.log(LIST_ITEM[4][1]);
  return (
    <>
      <div className={`${styles.rightWrap}`} key={LIST_ITEM[0][1]}>
        <div className={`${styles.imageWrap}`}>
          <img src={LIST_ITEM[4][1]} alt={LIST_ITEM[1][1]} />
        </div>
        <div className={`${styles.textWrap}`}>
          <h2>{LIST_ITEM[2][1]}</h2>
          <div className={`${styles.mainLink}`}>
            <p>{LIST_ITEM[3][1]}</p>
            <Link href="/">Go to Main</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupCompListWrap;
