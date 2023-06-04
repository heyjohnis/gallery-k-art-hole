import React, { useEffect, useState } from "react";
import styles from "../Mypage.module.scss";
import Table from "react-bootstrap/Table";
import { commaFormat } from "../../../utils/number";
import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../../utils/baseUrl";

const Order = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `${baseUrl}/mall/order`;
    const medq_token = cookie.get("medq_token");
    axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${medq_token}` },
      data: {},
    })
      .then(({ data }) => {
        setOrders(data);
      })
      .finally(() => {});
  }, []);

  return (
    <div className="container">
      <>
        <h3>주문/배송 내역 </h3>
        <Table bordered className={styles.table_membership}>
          <thead>
            <tr>
              <th>주문일시</th>
              <th>주문상태</th>
              <th>주문내용</th>
              <th>포인트</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i}>
                <td className="text-center">{order.order_date}</td>
                <td className="text-center">{order.order_status}</td>
                <td>
                  {order.pd_name} {order.pd_option ? " " + order.pd_option : ""}
                </td>
                <td className="text-right">
                  {commaFormat(order.total_price || 0)} P
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </div>
  );
};

export default Order;
