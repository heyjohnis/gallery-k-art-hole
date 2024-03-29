import React, { useState, useEffect } from "react";
import PcMyBooking from "./PcMyBooking";
import MobileMyBooking from "./MobileMyBooking";
import { POST } from "../../utils/restApi";

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
      console.log("reservation/paging: ", data);
      setPage(data?.pagination || {});
      setResvData(data?.list || []);
    });
  };

  const cancelReservation = (resv_no) => {
    console.log("cancelReservation: ", resv_no);
    if (confirm("예약을 취소하시겠습니까?") === false) return;
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

  const setResvStatusStr = (resv) => {
    if (resv.resv_stts === "01") return "담당자 확인중";
    else if (resv.resv_stts === "05") return "예약 진행중";
    else if (resv.resv_stts === "04")
      return `예약확정일 : ${resv.resv_date || resv.hope_date}`;
    else if (resv.resv_stts === "02") return "이용 완료";
    else if (resv.resv_stts === "03") return "예약 취소";
    else if (resv.resv_stts === "07") return "이용 취소";
    else if (resv.resv_stts === "06") return "지급 완료";
    else return "";
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
      setResvStatusStr={setResvStatusStr}
      setSearchData={setForm}
      cancelReservation={cancelReservation}
      getReservationData={getReservationData}
      page={page}
    />
  );
}
