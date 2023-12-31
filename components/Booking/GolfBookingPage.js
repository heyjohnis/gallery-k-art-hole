import React, { useState } from "react";
import { GolfBookingAgreement } from "./GolfBookingAgreement";
import GolfBookingForm from "./GolfBookingForm";

export const GolfBookingPage = ({ user }) => {
  const [bookingInfo, setBookingInfo] = useState({});

  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6">
          <GolfBookingForm setBookingInfo={setBookingInfo} user={user} />
        </div>
        <div className="col-lg-5">
          <GolfBookingAgreement bookingInfo={bookingInfo} />
        </div>
      </div>
    </section>
  );
};
