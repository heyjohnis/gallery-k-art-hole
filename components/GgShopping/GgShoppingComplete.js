import React, { useEffect, useState } from "react";
import { POST } from "../../utils/restApi";
import { useRouter } from "next/router";
import Link from "next/link";
import OrderListComp from "./OrderListComp";
export default function GgShoppingComplete() {
  const [orderNo, setOrderNo] = useState(0);
  const [orderProducts, setOrderProducts] = useState([]);
  const router = useRouter();
  const getOrderCompleteData = (order_no) => {
    POST("/mall/order/complete", { order_no }).then((res) => {
      setOrderProducts(res.data);
    });
  };

  useEffect(() => {
    setOrderNo(router.query.order_no);
  }, [router.query]);

  useEffect(() => {
    if (orderNo) getOrderCompleteData(orderNo);
  }, [orderNo]);

  return (
    <>
      <OrderListComp orderData={orderProducts} />
      <Link href={"/mypage/?service=order"}>
        <button className="purchase_status">주문현황</button>
      </Link>
    </>
  );
}
