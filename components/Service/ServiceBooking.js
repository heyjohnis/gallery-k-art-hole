import React, { useEffect, useState } from "react";
import { ServiceAgreement } from "./ServiceAgreement";
import { ServiceForm } from "./ServiceForm";
import { POST } from "../../utils/restApi";
import { useRouter } from "next/router";

export function ServiceBooking({ user }) {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [bookingData, setBookingData] = useState({});
  const [options, setOptions] = useState([]);

  const getBookingData = () => {
    console.log("form: ", form);
    POST("/mall/booking/cart", form).then((res) => {
      console.log("getBookingData: ", res.data);
      setBookingData(res.data.booking);
      setOptions(res.data.options);
    });
  };

  useEffect(() => {
    if (!router.query) return;
    const { item_no, pd_no } = router.query;
    setForm((prev) => ({ ...prev, item_no, pd_no }));
  }, [router.query]);

  useEffect(() => {
    if (form.item_no && form.pd_no) getBookingData();
  }, [form]);
  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <ServiceForm options={options} bookingData={bookingData} />
        </div>
        <div className="col-lg-5 p-0">
          <ServiceAgreement />
        </div>
      </div>
    </section>
  );
}
