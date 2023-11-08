/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styles from "../Mypage.module.scss";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

const ReservationComp = ({ reservation }) => {
  const [isShow, setIsShow] = useState(false);
  const [toggle, setToggle] = useState("toggle_on");
  const showDetailInfo = () => {
    setIsShow(!isShow);
    setToggle(!isShow ? "toggle_off" : "toggle_on");
  };

  const cancelReservation = (resv_no) => {
    console.log("cancelReservation: ", resv_no);

    const url = `${baseUrl}/reservation/cancel`;
    axios({ method: "post", url, data: { resv_no } })
      .then(({ data }) => {
        console.log("data: ", data);
        alert("예약이 취소되었습니다.");
        location.reload();
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <>
      <Table className={styles.info_booking}>
        <thead>
          <tr>
            <th>상품정보</th>
            <th>상태</th>
            <th></th>
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
              {["01", "05"].includes(reservation.resv_stts) && (
                <div
                  style={{ marginTop: "20px" }}
                  className={`default-btn ${styles.btn} ${styles.btn_conform}`}
                  onClick={() => cancelReservation(reservation.resv_no)}
                >
                  취소
                </div>
              )}
            </td>
            <td>
              <div
                className={`${styles.btn_detail} ${toggle}`}
                onClick={() => showDetailInfo()}
              >
                예약상세
              </div>
            </td>
          </tr>
        </tbody>
      </Table >
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
            {reservation.resv_place && (
              <tr>
                <th>골프장 정보</th>
                <td colSpan={2}>{reservation.resv_place}</td>
              </tr>
            )}
          </tbody>
        </Table>
      )
      }
    </>
  );
};

export default ReservationComp;
