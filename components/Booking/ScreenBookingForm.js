import React, { useEffect, useState } from "react";
import { DatePicker } from "../Common/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Form from "react-bootstrap/Form";

const ScreenBookingForm = ({ user, setBookingInfo }) => {
  const [form, setForm] = useState({});

  const selectedPickDate = (date) => {
    console.log("date: ", date);
    setForm((prevState) => ({ ...prevState, ...date }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setBookingInfo(form);
    console.log("useEffect form: ", form);
  }, [form]);

  useEffect(() => {
    if (!user) return;
    console.log("user: ", user);
    setForm((prevState) => ({ ...prevState, ...user }));
  }, [user]);

  return (
    <div className="booking_content">
      <h1>
        스크린골프 포인트 <span>예약 서비스</span>
      </h1>

      <ul className="booking_notice">
        <li>라운드 2일 전 18시까지 사용 신청해주시기 바랍니다.</li>
        <li>카카오톡 또는 유선 전화를 통해 승인완료 문자를 수신해드립니다.</li>
        <li>승인 완료 문자 미수신 또는 승인 거절 시 서비스 이용 불가합니다.</li>
        <li>
          콜센터를 통해 사용 신청 당일 내에 확인 받으셔야 서비스 진행이
          이루어집니다.
        </li>
      </ul>

      <h2>예약 정보</h2>

      <Form>
        <div className="form_item">
          <DatePicker
            label="날짜 선택"
            pickDate={(date) => selectedPickDate(date)}
            dateKind="resv_datetime"
            selectedDate={form.resv_datetime}
          />
        </div>

        <div className="form_item">
          <label>인원 선택</label>
          <Form.Select
            aria-label="Default select example"
            name="user_cnt"
            onChange={handleChange}
          >
            <option value="">인원을 선택해 주세요</option>
            <option value="1">1명</option>
            <option value="2">2명 (+25,000P)</option>
            <option value="3">3명 (+50,000P)</option>
            <option value="4">4명 (+75,000P)</option>
          </Form.Select>
        </div>

        <div className="form_item">
          <Form.Label>이용자명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              value={form.user_name}
              name="user_name"
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faCircleCheck} className="icon_complete" />
          </div>
          <p className="info">무기명 회원인 경우 예약자명을 기입해주세요.</p>
        </div>

        <div className="form_item">
          <Form.Label>이용자 연락처</Form.Label>
          <div className="item_group row">
            <div className="col row tel_group">
              <div className="col-lg-2 col-3">
                <Form.Control
                  type="text"
                  name="mobile"
                  maxLength="15"
                  value={form?.mobile}
                  placeholder="010-1234-5678"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form_item">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@galleryk.co.kr"
            value={form.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="form_item">
          <Form.Label>요청사항</Form.Label>
          <Form.Control
            as="textarea"
            name="etc"
            onChange={handleChange}
            rows={3}
            placeholder="문의하실 요청사항을 작성해주세요."
          />
        </div>
      </Form>

      <h2 className="md_screen_payment_tit">결제 정보</h2>
    </div>
  );
};

export default ScreenBookingForm;
