/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import styles from "./SignupCompListWrap.module.scss";

const SignupCompListWrap = ({ LIST_ITEM }) => {
  console.log(LIST_ITEM);

  let imageName = LIST_ITEM[1][1].split(" ");
  const imageName1 = () => {
    return `styles.` + imageName[0].toLowerCase();
  };

  console.log(imageName);

  return (
    <>
      <div className={styles.rightWrap} key={LIST_ITEM[0][1]}>
        <div className={styles.imageWrap}>
          <img src={LIST_ITEM[4][1]} alt={LIST_ITEM[1][1]} />
          <div className={styles.textWrap}>
            <h2>{LIST_ITEM[2][1]}</h2>
            <div className={styles.mainLink}>
              <p>{LIST_ITEM[3][1]}</p>
              <Link href="/">
                More&ensp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="10"
                  viewBox="0 0 22 10"
                  fill="none"
                >
                  <path
                    d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupCompListWrap;
