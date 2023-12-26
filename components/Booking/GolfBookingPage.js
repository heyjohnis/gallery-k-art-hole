import React, { useEffect } from "react";
import { GolfBookingAgreement } from "./GolfBookingAgreement";
import GolfBookingForm from "./GolfBookingForm";

export const GolfBookingPage = () => {
  const [bookingData, setBookingData] = React.useState({});
  useEffect(() => {
    console.log("bookingData: ", bookingData);
  }, [bookingData]);
  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6">
          <GolfBookingForm setBookingData={setBookingData} />
        </div>
        <div className="col-lg-5">
          <GolfBookingAgreement />
        </div>
      </div>
    </section>
  );
};
