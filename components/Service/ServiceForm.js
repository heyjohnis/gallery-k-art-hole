import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import { DatePicker } from "../Common/DatePicker";

export const ServiceForm = () => {
  return (
    <div className="booking_content">
      <h1>제휴서비스 신청</h1>
      <h2>서비스 정보</h2>
      <ul className="product_info">
        <li className="pb-0" key="23">
          <div className="product_info_items">
            <Image
              src="/images/service/service02.png"
              width="150"
              height="150"
              alt="서비스이름"
            />
            <div className="product_info_item">
              <div>
                <h3>제주 스위트룸 이용권</h3>
                <p>호텔 에어시티 제주</p>
              </div>
              <div>
                <span className="product_price">300,000 원</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <Form>
        <div className="form_item">
          <label>연박수</label>
          <div className="btn_radio">
            <Form.Check
              inline
              label="1박"
              name="group1"
              type="radio"
              id="inline-radio-1"
              checked
            />
            <Form.Check
              inline
              label="2박(150,000 P 추가)"
              name="group1"
              type="radio"
              id="inline-radio-2"
            />
          </div>
        </div>
        <div className="form_item">
          <label>인원수</label>
          <div className="btn_radio">
            <Form.Check
              inline
              label="1명"
              name="people"
              type="radio"
              id="people-1"
              checked
            />
            <Form.Check
              inline
              label="2명"
              name="people"
              type="radio"
              id="people-2"
            />
            <Form.Check
              inline
              label="3명"
              name="people"
              type="radio"
              id="people-3"
            />
            <Form.Check
              inline
              label="4명"
              name="people"
              type="radio"
              id="people-4"
            />
          </div>
        </div>
        <div className="datePickerWrap mb-80">
          <label>날짜선택</label>
          <div className="calendar_wrap">
            <DatePicker placeholder="출발일" dateKind="hope_date1" />
            <DatePicker placeholder="도착일" dateKind="hope_date2" />
          </div>
        </div>

        <h2>이용자 정보</h2>
        <div className="form_item">
          <Form.Label>이용자명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              placeholder="홍길동"
              name="delivery_user_name"
              value=""
            />
            <FontAwesomeIcon icon={faCircleCheck} className="icon_complete" />
          </div>
        </div>

        <div className="form_item">
          <Form.Label>이용자 연락처</Form.Label>
          <div className="item_group row">
            <div className="col row tel_group">
              <div className="col-lg-2 col-3">
                <Form.Control
                  type="text"
                  name="delivery_phone"
                  maxLength="15"
                  placeholder="010-1234-5678"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form_item">
          <Form.Label>이용자 이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@galleryk.co.kr"
            name="order_user_email"
            value=""
          />
        </div>

        <div className="form_item margin_b_80">
          <Form.Label>요청사항</Form.Label>
          <Form.Control
            as="textarea"
            name="memo"
            rows={3}
            placeholder="문의하실 요청사항을 작성해주세요."
            value=""
          />
        </div>
      </Form>
    </div>
  );
};
