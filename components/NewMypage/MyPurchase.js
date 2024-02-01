import React, { useState } from "react";
import MyPagePurchaseAgreement from "./MyPagePurchaseAgreement";
import { MyPagePurchaseForm } from "./MyPagePurchaseForm";

export default function MyPurchase({ user }) {
  const [orderProducts, setOrderProducts] = useState([]);
  const [orderInfo, setOrderInfo] = useState({ order_user_name: "" });
  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <MyPagePurchaseForm
            user={user}
            setOrderProducts={setOrderProducts}
            setOrderInfo={setOrderInfo}
          />
        </div>
        <div className="col-lg-5 p-0">
          <MyPagePurchaseAgreement
            user={user}
            orderProducts={orderProducts}
            orderInfo={orderInfo}
          />
        </div>
      </div>
    </section>
  );
}
