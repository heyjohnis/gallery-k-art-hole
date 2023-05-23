/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ReservationList from "../ReservationList";
import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../../utils/baseUrl";
import styles from "../Mypage.module.scss";
import { commaFormat } from "../../../utils/number";
import Table from "react-bootstrap/Table";

const Home = ({ user }) => {
  const [, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [form, setForm] = useState({
    search_start_date: "",
    search_end_date: "",
    search_word: "",
  });

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
        data: form,
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

  useEffect(() => {
    getReservationData();
    getPointData();
  }, [user]);

  return (
    <>
      <h3>예약정보</h3>
      <ReservationList reservations={reservations} />
      <h3 className="mt-5">포인트 사용내역</h3>
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
    </>
  );
};

export default Home;
