import React, { useState } from "react";
import { ScreenBookingAgreement } from "./ScreenBookingAgreement";
import ScreenBookingForm from "./ScreenBookingForm";

export const ScreenBookingPage = ({ user }) => {
  const [bookingInfo, setBookingInfo] = useState({});

  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <ScreenBookingForm user={user} setBookingInfo={setBookingInfo} />
        </div>
        <div className="col-lg-5 p-0">
          <ScreenBookingAgreement user={user} bookingInfo={bookingInfo} />
        </div>
      </div>
    </section>
  );
};
