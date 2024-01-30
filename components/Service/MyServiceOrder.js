import React from "react";
import { ServiceAgreement } from "./ServiceAgreement";
import { ServiceForm } from "./ServiceForm";

export const MyServiceOrder = () => {
  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <ServiceForm />
        </div>
        <div className="col-lg-5 p-0">
          <ServiceAgreement />
        </div>
      </div>
    </section>
  );
};
