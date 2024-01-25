import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { hyphenForPhone } from "../../utils/number";
import { RESV_STTS, REGION_CODE } from "../../utils/cmmCode";

export default function ModalReservation({
  resv,
  isOpenModal,
  handleClose,
  cancelReservation,
}) {
  const [resvStatus, setResvStatus] = useState("");

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
    console.log("resv: ", resv);
    setResvStatus(setResvStatusStr(resv));
  }, [resv]);

  return (
    <Modal className="modal-xl" show={isOpenModal} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>

      <div className="md_reser_detail_content">
        <section className="md_reser_detail_head">
          <div>
            <h2>골프장 예약 서비스</h2>
            <span>{resvStatus}</span>
          </div>
          <span className={`status complete`}>
            {RESV_STTS[resv?.resv_stts]}
          </span>
        </section>
        <section className="md_reser_detail_body">
          <h3>예약 정보</h3>
          <ul className="md_reser_detail_list">
            <li>
              <span className="tit">예약번호</span>
              <span className="item">{resv.resv_no}</span>
            </li>
            {resv.resv_date && (
              <li>
                <span className="tit">예약일자</span>
                <span className="item">{resv.resv_date}</span>
              </li>
            )}
            <li>
              <span className="tit">예약자 성함</span>
              <span className="item">{resv.resv_user_name}</span>
            </li>
            {resv.resv_place && (
              <li>
                <span className="tit">확정골프장</span>
                <span className="item">{resv.resv_place}</span>
              </li>
            )}
            {resv.resv_date && (
              <li>
                <span className="tit">예약확정일</span>
                <span className="item">{resv.resv_date}</span>
              </li>
            )}
            <li>
              <span className="tit">사용포인트</span>
              <span className="item">
                {(resv?.resv_point || 0).toLocaleString()} P{" "}
              </span>
            </li>
            {resv.mobile && (
              <li>
                <span className="tit">예약자 연락처</span>
                <span className="item">{resv.mobile}</span>
              </li>
            )}
            {resv.email && (
              <li>
                <span className="tit">예약자 이메일</span>
                <span className="item">{resv.email}</span>
              </li>
            )}
          </ul>
          {resv.option_name && (
            <>
              <h3>이용자1 정보</h3>
              <ul className="md_reser_detail_list">
                <li>
                  <span className="tit">이용자 성함</span>
                  <span className="item">{resv.option_name}</span>
                </li>
                <li>
                  <span className="tit">이용자 연락처</span>
                  <span className="item">
                    {hyphenForPhone(resv.option_phone)}
                  </span>
                </li>
              </ul>
            </>
          )}
          {resv.option_name2 && (
            <>
              <h3>이용자2 정보</h3>
              <ul className="md_reser_detail_list">
                <li>
                  <span className="tit">이용자 성함</span>
                  <span className="item">{resv.option_name2}</span>
                </li>
                <li>
                  <span className="tit">이용자 연락처</span>
                  <span className="item">
                    {hyphenForPhone(resv.option_phone2)}
                  </span>
                </li>
              </ul>
            </>
          )}
          {resv.resv_kind === "01" && (
            <>
              <h3>골프장 정보</h3>
              <ul className="md_reser_detail_list">
                <li>
                  <span className="tit">희망권역</span>
                  <span className="item">
                    1차 {REGION_CODE[resv?.hope_local1]}, 2차{" "}
                    {REGION_CODE[resv?.hope_local2]}
                  </span>
                </li>
                <li>
                  <span className="tit">희망날짜</span>
                  <span className="item">{resv.hope_date}</span>
                </li>
                <li>
                  <span className="tit">희망시간</span>
                  <span className="item">{resv.hope_time}</span>
                </li>
              </ul>
            </>
          )}
          <h3 className="point">요청사항</h3>
          <ul className="md_reser_detail_list">
            <li>
              <span className="tit">고객 요청사항</span>
              <span className="item">
                <pre>{resv.memo}</pre>
              </span>
            </li>
            <li>
              <span className="tit">답변 내용</span>
              <span className="item">
                <pre>{resv.reply}</pre>
              </span>
            </li>
          </ul>
        </section>
        {["01", "05"].includes(resv.resv_stts) && (
          <button
            className="btn_white"
            onClick={() => cancelReservation(resv.resv_no)}
          >
            예약취소
          </button>
        )}
      </div>
    </Modal>
  );
}
