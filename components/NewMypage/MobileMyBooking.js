import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { RESV_KIND, RESV_STTS } from "../../utils/cmmCode";
import ModalReservation from "./ModalReservation";

export default function MobileMyBooking({
  resvData,
  setSearchData,
  cancelReservation,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [resv, setResv] = useState({});
  const [form, setForm] = useState({});
  const reservationLabel = {
    "01": "golf",
    "02": "screen",
    "03": "service",
    "04": "tour",
  };

  const handleChangeTerm = (val) => {
    setForm({ ...form, resv_search_term: val });
    setSearchData({ ...form, resv_search_term: val });
  };

  const handleChangeService = (val) => {
    setForm({ ...form, resv_kind: val });
    setSearchData({ ...form, resv_kind: val });
  };

  const handleChangeStatus = (val) => {
    setForm({ ...form, resv_stts: val });
    setSearchData({ ...form, resv_stts: val });
  };

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
            name="term"
            defaultValue=""
            onChange={handleChangeTerm}
          >
            <ToggleButton id="period-radio-1" value="" className="btn_filter">
              전체
            </ToggleButton>
            <ToggleButton id="period-radio-2" value="30" className="btn_filter">
              1달
            </ToggleButton>
            <ToggleButton id="period-radio-3" value="90" className="btn_filter">
              3달
            </ToggleButton>
            <ToggleButton
              id="period-radio-4"
              value="365"
              className="btn_filter"
            >
              1년
            </ToggleButton>
            <ToggleButton
              id="period-radio-5"
              value="1095"
              className="btn_filter"
            >
              3년
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            type="radio"
            name="types"
            defaultValue=""
            onChange={handleChangeService}
          >
            <ToggleButton id="types-radio-1" value="" className="btn_filter">
              전체
            </ToggleButton>

            <ToggleButton id="types-radio-2" value="01" className="btn_filter">
              골프장 예약 서비스
            </ToggleButton>
            <ToggleButton id="types-radio-3" value="02" className="btn_filter">
              스크린골프 포인트 서비스
            </ToggleButton>
            <ToggleButton id="types-radio-4" value="03" className="btn_filter">
              제휴서비스
            </ToggleButton>
            <ToggleButton id="types-radio-5" value="04" className="btn_filter">
              GG투어
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            type="radio"
            name="status"
            defaultValue={1}
            onChange={handleChangeStatus}
          >
            <ToggleButton id="status-radio-1" value="" className="btn_filter">
              전체
            </ToggleButton>

            {Object.keys(RESV_STTS).map((key, i) => (
              <ToggleButton
                key={i}
                id="status-radio-2"
                value={key}
                className="btn_filter"
              >
                {RESV_STTS[key]}
              </ToggleButton>
            ))}
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
