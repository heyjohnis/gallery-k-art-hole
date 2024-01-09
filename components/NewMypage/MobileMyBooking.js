import Link from "next/link";
import React, { useState, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { RESV_KIND, RESV_STTS } from "../../utils/cmmCode";
import ModalReservation from "./ModalReservation";

export default function MobileMyBooking({ resvData, handleChange, form }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [resv, setResv] = useState({});
  const reservationLabel = {
    "01": "golf",
    "02": "screen",
    "03": "service",
    "04": "tour",
  };
  const complete = "complete";

  const openModal = (resv) => {
    setIsOpenModal(true);
    setResv(resv);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="mb_reser_content">
        <h2>예약조회</h2>
        <section className="mb_reser_filter">
          <ToggleButtonGroup
            type="radio"
            name="period"
            defaultValue={1}
            onChange={handleChange}
          >
            <ToggleButton id="period-radio-1" value={1} className="btn_filter">
              전체
            </ToggleButton>
            <ToggleButton id="period-radio-2" value={2} className="btn_filter">
              1달
            </ToggleButton>
            <ToggleButton id="period-radio-3" value={3} className="btn_filter">
              3달
            </ToggleButton>
            <ToggleButton id="period-radio-4" value={4} className="btn_filter">
              1년
            </ToggleButton>
            <ToggleButton id="period-radio-5" value={5} className="btn_filter">
              3년
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            type="radio"
            name="types"
            defaultValue={1}
            onChange={handleChange}
          >
            <ToggleButton id="types-radio-1" value={1} className="btn_filter">
              전체
            </ToggleButton>
            <ToggleButton id="types-radio-2" value={2} className="btn_filter">
              골프장 예약 서비스
            </ToggleButton>
            <ToggleButton id="types-radio-3" value={3} className="btn_filter">
              스크린골프 포인트 서비스
            </ToggleButton>
            <ToggleButton id="types-radio-4" value={4} className="btn_filter">
              제휴서비스
            </ToggleButton>
            <ToggleButton id="types-radio-5" value={5} className="btn_filter">
              GG투어
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            type="radio"
            name="status"
            defaultValue={1}
            onChange={handleChange}
          >
            <ToggleButton id="status-radio-1" value={1} className="btn_filter">
              전체
            </ToggleButton>
            <ToggleButton id="status-radio-2" value={2} className="btn_filter">
              예약접수
            </ToggleButton>
            <ToggleButton id="status-radio-3" value={3} className="btn_filter">
              예약중
            </ToggleButton>
            <ToggleButton id="status-radio-4" value={4} className="btn_filter">
              예약완료
            </ToggleButton>
            <ToggleButton id="status-radio-5" value={5} className="btn_filter">
              예약취소
            </ToggleButton>
          </ToggleButtonGroup>
        </section>
        <section className="reser_content_list">
          <ul className="reser_list">
            {resvData.map((resv, i) => (
              <li key={i}>
                <div onClick={() => openModal(resv)}>
                  <h3>{RESV_KIND[resv.resv_kind || "01"]}</h3>
                  <span></span>
                  <div className="reser_type_info">
                    <span
                      className={`label ${
                        reservationLabel[resv.resv_kind || "01"]
                      }`}
                    ></span>
                    <button
                      className={
                        ["04", "02"].includes(resv.resv_stts)
                          ? "complete"
                          : "status"
                      }
                    >
                      {RESV_STTS[resv.resv_stts || "01"]}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <ModalReservation
        resv={resv}
        isOpenModal={isOpenModal}
        handleClose={closeModal}
      />
    </>
  );
}
