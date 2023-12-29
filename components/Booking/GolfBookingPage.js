import React, { useEffect, useState } from "react";
import { GolfBookingAgreement } from "./GolfBookingAgreement";
import GolfBookingForm from "./GolfBookingForm";
import { POST } from "../../hooks/restApi";
import { REGION_LIST } from "../../data/CommonCode";
import { useRouter } from "next/router";
import { nowDateFormat } from "../../utils/dateUtil";

export const GolfBookingPage = ({ user }) => {
  const router = useRouter();
  const [bookingData, setBookingData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    bookingData.memo = setMemo();
    console.log("bookingData: ", bookingData);
    POST("/reservation/request", bookingData)
      .then((res) => {
        console.log("reservation/request: ", res);
        if (res.status === 200) {
          alert("예약이 완료되었습니다.");
          bookingData.resv_no = res.data.insertId;
          bookingData.reg_date = nowDateFormat();
          bookingData.region1Name = getRegionName(bookingData.region1);
          bookingData.region2Name = getRegionName(bookingData.region2);
          router.push({
            pathname: "/golf/complete",
            query: bookingData,
          });
        }
      })
      .catch((err) => console.log("err: ", err));
  };

  const setMemo = () => {
    const memo = `
희망일자 / 시간: ${bookingData.resv_datetime} / ${
      bookingData.time1 ? "1부" : ""
    } ${bookingData.time2 ? "2부" : ""}
권역1: ${getRegionName(bookingData.region1)}
권역2: ${getRegionName(bookingData.region2)} 
요청사항: 
${bookingData.etc}`;
    return memo;
  };

  const getRegionName = (id) => {
    return REGION_LIST.find((item) => item?.id === id)?.data;
  };

  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6">
          <GolfBookingForm setBookingData={setBookingData} user={user} />
        </div>
        <div className="col-lg-5">
          <GolfBookingAgreement handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};
