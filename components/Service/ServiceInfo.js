import React from "react";
import { Form } from "react-bootstrap";
import { DatePicker } from "../Common/DatePicker";

export const ServiceInfo = () => {
  const productSale = "sale";

  return (
    <section className="product_sale_info">
      <span className="product_brand">호텔 에어시티 제주</span>
      <h1 className="product_name">제주 스위트룸 이용권</h1>
      <div className="product_keyword">
        <span className="keyword_label">키워드</span>
        <ul className="keyword_hashtag">
          <li>제주</li>
          <li>호텔</li>
          <li>스위트룸</li>
          <li>이용권</li>
        </ul>
      </div>
      <div className={`price_info ${productSale}`}>
        {/* TODO: 세일 0%일때  ${productSale} 추가 */}
        <span className="discount_rate">10%</span>
        <span className="price_original">862,200 P</span>
        <span className="discount_price">958,000 P</span>
      </div>

      <div className="service_option">
        <div className="form_item">
          <label className="mb-20">연박수</label>
          <div className="btn_radio">
            <Form.Check
              inline
              label="1박"
              name="days"
              type="radio"
              id="days-1"
            />
            <Form.Check
              inline
              label="2박(150,000 P 추가)"
              name="days"
              type="radio"
              id="days-2"
            />
          </div>
        </div>
        <div className="form_item">
          <label className="mb-20">인원수</label>
          <div className="btn_radio">
            <Form.Check
              inline
              label="1명"
              name="people"
              type="radio"
              id="peoples-1"
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
      </div>
      <div className="form_item">
        <label className="mb-20">수량</label>
        <div className="btn_radio">
          <Form.Check
            inline
            label="1개"
            name="people"
            type="radio"
            id="amount-1"
          />
          <Form.Check
            inline
            label="2개"
            name="people"
            type="radio"
            id="amount-2"
          />
          <Form.Check
            inline
            label="3개"
            name="people"
            type="radio"
            id="amount-3"
          />
          <Form.Check
            inline
            label="4개"
            name="people"
            type="radio"
            id="amount-4"
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
      <div className="shopping_btn row">
        <button className="btn_order col-5">신청하기</button>
      </div>
    </section>
  );
};
