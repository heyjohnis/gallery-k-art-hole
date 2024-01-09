import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { hyphenForPhone } from "../../utils/number";

export default function ModalReservation({ resv, isOpenModal, handleClose }) {
  useEffect(() => {
    console.log("resv: ", resv);
  }, [resv]);
  return (
    <Modal className="modal-xl" show={isOpenModal} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>

      <div className="md_reser_detail_content">
        <section className="md_reser_detail_head">
          <div>
            <h2>골프장 예약 서비스</h2>
            <span>
              예약확정일 : <span>2023. 11. 19</span>
            </span>
          </div>
          <span className={`status complete`}>예약완료</span>
          {/* TODO: 예약완료일때만 complete 추가 */}
        </section>
        <section className="md_reser_detail_body">
          <h3>예약 정보</h3>
          <ul className="md_reser_detail_list">
            <li>
              <span className="tit">예약번호</span>
              <span className="item">{resv.resv_no}</span>
            </li>
            <li>
              <span className="tit">예약일자</span>
              <span className="item">{resv.resv_date}</span>
            </li>
            <li>
              <span className="tit">예약자 성함</span>
              <span className="item">{resv.resv_user_name}</span>
            </li>
            <li>
              <span className="tit">확정골프장</span>
              <span className="item">{resv.resv_place}</span>
            </li>
            <li>
              <span className="tit">예약확정일</span>
              <span className="item">{resv.resv_date}</span>
            </li>
            <li>
              <span className="tit">사용포인트</span>
              <span className="item">{resv.resv_point}</span>
            </li>
            <li>
              <span className="tit">예약자 연락처</span>
              <span className="item">{resv.mobile}</span>
            </li>
            <li>
              <span className="tit">예약자 이메일</span>
              <span className="item">{resv.email}</span>
            </li>
          </ul>
          <h3>이용자1 정보</h3>
          <ul className="md_reser_detail_list">
            <li>
              <span className="tit">이용자 성함</span>
              <span className="item">{resv.option_name}</span>
            </li>
            <li>
              <span className="tit">이용자 연락처</span>
              <span className="item">{hyphenForPhone(resv.option_phone)}</span>
            </li>
          </ul>
          <h3>이용자2 정보</h3>
          <ul className="md_reser_detail_list">
            <li>
              <span className="tit">이용자 성함</span>
              <span className="item">{resv.option_name2}</span>
            </li>
            <li>
              <span className="tit">이용자 연락처</span>
              <span className="item">{hyphenForPhone(resv.option_phone2)}</span>
            </li>
          </ul>
          <h3>골프장 정보</h3>
          <ul className="md_reser_detail_list">
            <li>
              <span className="tit">희망권역</span>
              <span className="item">
                1차 {resv.hope_local1}, 2차 {resv.hope_local2}
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
        <button className="btn_white">예약취소</button>
      </div>
    </Modal>
  );
}
