import React, { useEffect, useState } from "react";
import OrderListComp from "../../components/GgShopping/OrderListComp";
import { POST } from "../../utils/restApi";

export default function MyOrder() {
  const [orders, setOrders] = useState([]);

  const getOrderData = () => {
    POST("/mall/order", {}).then((res) => {
      setOrders(res.data);
    });
  };

  const cancelOrder = (item_no) => {
    POST("/mall/order/cancel", { item_no }).then((res) => {
      getOrderData();
    });
  };

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <div className="container">
      <>
        <h3>주문/배송 내역 </h3>
        {orders.length > 0 ? (
          <OrderListComp orderData={orders} cancelOrder={cancelOrder} />
        ) : (
          <div className=""> 포인트 사용 내역이 없습니다.</div>
        )}
      </>
    </div>
  );
}
