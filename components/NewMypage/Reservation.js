import React, { useState, useEffect } from "react";
import PcMyBooking from "./PcMyBooking";
import MobileMyBooking from "./MobileMyBooking";
import { POST } from "../../hooks/restApi";

export default function Reservation({ user }) {
  const [isMobile, setIsMobile] = useState(false);
  const [resvData, setResvData] = useState([]);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log("form: ", form);
  };

  const getReservationData = () => {
    POST("/mypage/reservation", form).then(({ data }) => {
      console.log("data: ", data);
      setResvData(data || []);
    });
  };

  useEffect(() => {
    getReservationData();
  }, [form]);

  useEffect(() => {
    const handWindowSize = () => {
      const { innerWidth } = window;
      if (innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handWindowSize();
    window.addEventListener("resize", handWindowSize);
    return () => {
      window.removeEventListener("resize", handWindowSize);
    };
  }, []);
  return isMobile ? (
    <MobileMyBooking
      resvData={resvData}
      form={form}
      handleChange={handleChange}
    />
  ) : (
    <PcMyBooking resvData={resvData} form={form} handleChange={handleChange} />
  );
}
