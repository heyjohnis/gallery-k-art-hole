import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../../utils/baseUrl";
import OrderComp from "./OrderComp";
import styles from "../Mypage.module.scss";

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
        {orders.length > 0 ? (
          orders.map((order, i) => <OrderComp order={order} key={i} />)
        ) : (
          <div className={styles.content}> 포인트 사용 내역이 없습니다.</div>
        )}
      </>
    </div>
  );
};

export default Order;
