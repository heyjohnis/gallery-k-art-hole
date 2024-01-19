import React, { useState, useEffect } from "react";
import PcMyBooking from "./PcMyBooking";
import MobileMyBooking from "./MobileMyBooking";
import { POST } from "../../hooks/restApi";

export default function Reservation({ user }) {
  const [isMobile, setIsMobile] = useState(false);
  const [resvData, setResvData] = useState([]);
  const [form, setForm] = useState({});
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 });

  const getReservationData = (currentPage = 1) => {
    POST("/mypage/reservation/paging", {
      ...form,
      currentPage,
      pageSize: 10,
    }).then(({ data }) => {
      console.log("data: ", data);
      setPage(data?.pagination || {});
      setResvData(data?.list || []);
    });
  };

  const cancelReservation = (resv_no) => {
    console.log("cancelReservation: ", resv_no);
    POST("/reservation/cancel", { resv_no })
      .then(({ data }) => {
        console.log("data: ", data);
        alert("예약이 취소되었습니다.");
        getReservationData();
      })
      .catch((error) => {
        console.log("error: ", error);
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
      setSearchData={setForm}
      cancelReservation={cancelReservation}
      getReservationData={getReservationData}
      page={page}
    />
  ) : (
    <PcMyBooking
      resvData={resvData}
      setSearchData={setForm}
      cancelReservation={cancelReservation}
      getReservationData={getReservationData}
      page={page}
    />
  );
}
