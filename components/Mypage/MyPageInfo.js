import React from "react";
import Link from "next/link";
import styles from "./Mypage.module.scss";

const MyPageInfo = () => {
  return (
    <>
      <section>
        <div className="container">

          <div className={`row ${styles.point}`}>
            <div className="col-6">
              <div className={`row ${styles.item_txt} ${styles.border}`}>
                <p>잔여 이용 혜택</p>
                <h3>월 5 회 / 연 80회</h3>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.item_txt}>
                <p>월 잔여 포인트 <span className={styles.smaller}>/ 월 총 포인트</span></p>
                <h3>50,000P <span className={styles.smaller}>/ 4,160,000p</span></h3>
              </div>
            </div>
          </div>

          <div className={`${styles.user_point} ${styles.black}`}>
              <p>박선주 님은 <span className={styles.point_name}>그린갤러리 블랙</span> 이용중이십니다. </p>
              <p>최대 월 7회 / 연 83회</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default MyPageInfo;
