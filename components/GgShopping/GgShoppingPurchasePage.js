import React from "react";
import { GgShoppingPurchaseAgreement } from "./GgShoppingPurchaseAgreement";
import { GgShoppingPurchaseForm } from "./GgShoppingPurchaseForm";

export const GgShoppingPurchasePage = () => {
  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <GgShoppingPurchaseForm />
        </div>
        <div className="col-lg-5 p-0">
          <GgShoppingPurchaseAgreement />
        </div>
      </div>
    </section>
  );
};
