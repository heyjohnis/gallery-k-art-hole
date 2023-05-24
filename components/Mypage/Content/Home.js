/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import ReservationList from "../ReservationList";
import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../../utils/baseUrl";
import styles from "../Mypage.module.scss";
import { commaFormat } from "../../../utils/number";
import Table from "react-bootstrap/Table";
import ReservationModal from "../ReservationModal";
import Lottie from "react-lottie";
import Booking from "../data/booking.json";

const lottieOptions = {
  animationData: Booking,
  loop: true,
  autoplay: true,
};

const Home = ({ user }) => {
  const [, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);
  const modalRef = useRef(null);

  const [points, setPoints] = useState([]);

  const getPointData = () => {
    const url = `${baseUrl}/points`;
    const medq_token = cookie.get("medq_token");
    axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${medq_token}` },
      data: {},
    })
      .then(({ data }) => {
        setPoints(data.length > 3 ? data.splice(0, 3) : data);
      })
      .finally(() => {});
  };

  const getReservationData = () => {
    setLoading(true);
    if (user.user_no) {
      const url = `${baseUrl}/mypage/reservation`;
      const medq_token = cookie.get("medq_token");
      axios({
        method: "post",
        url: url,
        headers: { Authorization: `Bearer ${medq_token}` },
        data: {},
      })
        .then(({ data }) => {
          console.log("data: ", data);
          setReservations(data.length > 3 ? data.splice(0, 3) : data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const showReservationModal = () => {
    modalRef.current.showModal();
  };

  useEffect(() => {
    getReservationData();
    getPointData();
  }, [user]);

  return (
    <>
      <div className={styles.btn_wrap}>
        <div
          className={`btn ${styles.btn_booking}`}
          onClick={() => showReservationModal()}
        >
          <div className={styles.ani_booking}>
            <Lottie
              options={lottieOptions} // svg의 부모 div에 적용
            />
          </div>
          <span>예약신청</span>
        </div>
      </div>
      <h3>예약정보</h3>
      <ReservationList reservations={reservations} />
      <h3 className="mt-5 mb-4">포인트 사용내역</h3>
      <Table bordered className={styles.table_membership}>
        <thead>
          <tr>
            <th>일시</th>
            <th colSpan={2}>포인트 내역</th>
            <th>포인트</th>
          </tr>
        </thead>
        <tbody>
          {points.map((point, i) => (
            <tr key={i}>
              <td>{point.point_date}</td>
              <td>{point.point_type}</td>
              <td>{point.comment}</td>
              <td>{commaFormat(point.point || 0)} P</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ marginTop: "10rem" }}> </div>
      <ReservationModal
        user={user}
        updateReservation={getReservationData}
        ref={modalRef}
      />
    </>
  );
};

export default Home;
