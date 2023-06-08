/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styles from "../Mypage.module.scss";

const ReservationComp = ({ reservation }) => {
  const [isShow, setIsShow] = useState(false);
  const showDetailInfo = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <Table className={styles.info_booking}>
        <thead>
          <tr>
            <th>상품정보</th>
            <th>상태</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>예약일자: </strong>
              {reservation.reg_date}
              <br />
              <strong>예약번호: </strong>
              {reservation.resv_no} <br />
              {reservation.resv_date} {reservation.resv_week}{" "}
              {reservation.resv_time} <br />
              {reservation.resv_name}
            </td>
            <td>
              <div>{reservation.resv_stts_nm}</div>
            </td>
            <td>
              <div
                id="btn_toggle"
                className={styles.btn_detail}
                onClick={() => showDetailInfo()}
              >
                예약상세
              </div>
              {/* <div className={`btn ${styles.btn_oneon}`}>
                            1:1문의
                          </div> */}
            </td>
          </tr>
        </tbody>
      </Table>
      {isShow && (
        <Table>
          <tbody>
            <tr>
              <th>예약자정보</th>
              <td colSpan={2}>
                {reservation.resv_user_name} / {reservation.moblie} /{" "}
                {reservation.phone} / {reservation.email}
              </td>
            </tr>
            <tr>
              <th>이용자정보</th>
              <td colSpan={2}>
                {reservation.user_name} / {reservation.user_phone}
              </td>
            </tr>
            {reservation.memo && (
              <tr>
                <th>메모</th>
                <td colSpan={2}>
                  <pre>{reservation.memo}</pre>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ReservationComp;
