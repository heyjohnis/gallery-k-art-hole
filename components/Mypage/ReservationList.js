/* eslint-disable react/prop-types */
import React from "react";
import { Table } from "react-bootstrap";
import styles from "./Mypage.module.scss";

const ReservationList = ({ reservations }) => {
  const showDetailInfo = (id) => {
    const targetObj = document.querySelector("#info" + id);
    const displayVal = targetObj.style.display;
    if (displayVal === "none") targetObj.style.display = "block";
    else targetObj.style.display = "none";
  };

  return (
    <>
      <div>
        {reservations.map((resv, i) => (
          <div key={i}>
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
                    {resv.reg_date}
                    <br />
                    <strong>예약번호: </strong>
                    {resv.resv_no} <br />
                    {resv.resv_date} {resv.resv_week} {resv.resv_time} <br />
                    {resv.resv_name}
                  </td>
                  <td>
                    <div>{resv.resv_stts_nm}</div>
                  </td>
                  <td>
                    <div
                      className={styles.btn_detail}
                      onClick={() => showDetailInfo(i)}
                    >
                      예약상세 &gt;
                    </div>
                    {/* <div className={`btn ${styles.btn_oneon}`}>
                            1:1문의
                          </div> */}
                  </td>
                </tr>
              </tbody>
            </Table>
            <div id={`info${i}`} style={{ display: "none" }}>
              <Table>
                <tbody>
                  <tr>
                    <th>예약자정보</th>
                    <td colSpan={2}>
                      {resv.resv_user_name} / {resv.moblie} / {resv.phone} /{" "}
                      {resv.email}
                    </td>
                  </tr>
                  <tr>
                    <th>이용자정보</th>
                    <td colSpan={2}>
                      {resv.user_name} / {resv.user_phone}
                    </td>
                  </tr>
                  {resv.memo && (
                    <tr>
                      <th>메모</th>
                      <td colSpan={2}>
                        <pre>{resv.memo}</pre>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReservationList;
