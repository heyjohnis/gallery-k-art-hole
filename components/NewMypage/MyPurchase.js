import React from "react";
import { MyPagePurchaseAgreement } from "./MyPagePurchaseAgreement";
import { MyPagePurchaseForm } from "./MyPagePurchaseForm";

export const MyPurchase = () => {
  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <MyPagePurchaseForm />
        </div>
        <div className="col-lg-5 p-0">
          <MyPagePurchaseAgreement />
        </div>
      </div>
    </section>
  );
};
