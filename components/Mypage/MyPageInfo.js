/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Mypage.module.scss";
import { commaFormat } from "../../utils/number.js";

const MyPageInfo = ({ user }) => {
  const yearlyPoint = user.yearly_point || 0;
  const usePoint = user.use_point || 0;
  const currentPoint = yearlyPoint - usePoint < 0 ? 0 : yearlyPoint - usePoint;

  const yearlyCount = user.yearly_count || 0;
  const monthlyCount = user.monthly_count || 0;
  const useYearlyCount = user.use_yearly_count || 0;
  const useMonthlyCount = user.use_monthly_count || 0;

  const currentYearlyCount =
    yearlyCount - useYearlyCount < 0 ? 0 : yearlyCount - useYearlyCount;
  const currentMonthlyCount =
    monthlyCount - useMonthlyCount < 0 ? 0 : monthlyCount - useMonthlyCount;

  return (
    <>
      <section>

          <div className={`row ${styles.point}`}>
            <div className="col-6">
              <div className={`row ${styles.item_txt}`}>
                <p>잔여 이용 혜택</p>
                <h3 className={styles.info_data}>
                  <span className={styles.point_txt}>월 {currentMonthlyCount} 회 / </span>
                  <span className={styles.smaller}>연 {currentYearlyCount}회</span>
                </h3>
              </div>
            </div>
            <div className="col-6">
              <div className={`row ${styles.item_txt} ${styles.border}`}>
                <p className={styles.info_data}>
                  <span>연간 잔여 포인트{" "}</span>
                  <span className={styles.smaller}>/ 연간 총 포인트</span>
                </p>
                <h3 className={styles.info_data}>
                  <span className={styles.point_txt}>
                    {commaFormat(currentPoint)}P{" "}
                  </span>
                  <span className={styles.smaller}>
                    / {commaFormat(yearlyPoint)}P
                  </span>
                </h3>
              </div>
            </div>
          </div>

          <div className={`${styles.user_point} ${styles.black}`}>
            <p>
              {user.user_name} 님은{" "}
              <span className={styles.point_name}>
                그린갤러리 {user.ms_name}
              </span>{" "}
              이용중이십니다.{" "}
            </p>
            <p>
              최대 월 {monthlyCount}회 / 연 {yearlyCount}회
            </p>
          </div>
          <p className={styles.period}>
            <strong>이용기간 :</strong> {user.start_date} ~ {user.end_date}
          </p>
          <div></div>
      </section>
    </>
  );
};

export default MyPageInfo;
