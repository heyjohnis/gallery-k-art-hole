import React, { useState, useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "../Mypage.module.scss";

import Table from "react-bootstrap/Table";

import baseUrl from "../../../utils/baseUrl";

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
      {points.length > 0 ? (
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
                <td className="text-center">{point.point_date}</td>
                <td className="text-center">{point.point_type}</td>
                <td>
                  {point.resv_name}
                  {point.pd_name}
                </td>
                <td className="text-right">{point.point || 0} P</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className={styles.content}> 포인트 사용 내역이 없습니다.</div>
      )}
    </>
  );
};

export default Point;
