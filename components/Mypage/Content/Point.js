import React, { useState, useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "../Mypage.module.scss";

import Table from "react-bootstrap/Table";

import baseUrl from "../../../utils/baseUrl";
import { commaFormat } from "../../../utils/number";

const Point = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const url = `${baseUrl}/points`;
    const medq_token = cookie.get("medq_token");
    axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${medq_token}` },
      data: {},
    })
      .then(({ data }) => {
        setPoints(data);
      })
      .finally(() => {});
  }, []);

  return (
    <>
      <h3>포인트 사용내역</h3>
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

export default Point;
