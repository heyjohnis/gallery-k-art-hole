import React, { useState } from "react";
import GgShoppingPurchaseAgreement from "./GgShoppingPurchaseAgreement";
import GgShoppingPurchaseForm from "./GgShoppingPurchaseForm";

export default function GgShoppingPurchasePage({ user }) {
  const [orderProducts, setOrderProducts] = useState([]);
  const [orderInfo, setOrderInfo] = useState({ order_user_name: "" });
  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <GgShoppingPurchaseForm
            user={user}
            setOrderProducts={setOrderProducts}
            setOrderInfo={setOrderInfo}
          />
        </div>
        <div className="col-lg-5 p-0">
          <GgShoppingPurchaseAgreement
            user={user}
            orderProducts={orderProducts}
            orderInfo={orderInfo}
          />
        </div>
      </div>
    </section>
  );
}
