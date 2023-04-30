import React from "react";
import Link from "next/link";
import styles from "./Mypage.module.scss"; 


const MyLevel = () => {
  return (
    <>
      <div className={`${styles.widget} ${styles.black}`}>
        <article className="row">
          <div className={`col-3 col-md-12 ${styles.level}`}>
            <div className={`${styles.thumb} ${styles.black}`}>
              <span className="black">BLACK</span>
            </div>
          </div> 
          <div className='col-9 col-md-12'>
            <div className={styles.info}>
              <div className={styles.txt}>
                <h4>박선주</h4>
                <span>sunjoo1111</span>
              </div>
              <div className={styles.txt}>
                <h4>혜택</h4>
                <span>s최대 월 7회 / 연 83회</span>
              </div>
            </div>
          </div>
        </article>     
      </div>

    </>
  );
};

export default MyLevel;
