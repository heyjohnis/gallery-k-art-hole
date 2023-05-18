import React from "react";
import Link from "next/link";
import styles from "./Mypage.module.scss";
import { commaFormat } from '../../utils/number.js'

const MyPageInfo = ({ user }) => {
  console.log("user: ", user);
  return (
    <>
      <section>
        <div className="container">

          <div className={`row ${styles.point}`}>
            <div className="col-6">
              <div className={`row ${styles.item_txt} ${styles.border}`}>
                <p>잔여 이용 혜택</p>
                <h3 className={styles.info_data}>월 {user.monthly_count} 회 / 연 {user.yearly_count}회</h3>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.item_txt}>
                <p>월 잔여 포인트 <span className={styles.smaller}>/ 월 총 포인트</span></p>
                <h3 className={styles.info_data}>{commaFormat(user.point || 0)}P <span className={styles.smaller}>/ {commaFormat(user.yearly_point || 0)}P</span></h3>
              </div>
            </div>
          </div>

          <div className={`${styles.user_point} ${styles.black}`}>
              <p>{user.user_name} 님은 <span className={styles.point_name}>그린갤러리 {user.ms_name}</span> 이용중이십니다. </p>
              <p>최대 월 {user.monthly_count}회 / 연 {user.yearly_count}회</p>
          </div>
            <p className={styles.period}>이용기간: {user.start_date} ~ {user.end_date}</p>
          <div>
          </div>


        </div>
      </section>
    </>
  );
};

export default MyPageInfo;
