import React from "react";
import DatePicker from "../Common/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Form from "react-bootstrap/Form";

export const GgShoppingPurchaseForm = () => {
  return (
    <div className="booking_content">
      <h1>GG 쇼핑 주문</h1>
      <h2>
        상품 정보<span className="total_items">총 3건</span>
      </h2>
      <div className="product_info">
        <div className="product_info_items">
          <img src="/images/ggshopping/product01.png" />
          <div className="product_info_item">
            <div>
              <h3>여성 캐주얼 캐디백</h3>
              <p>배송비 1,000P 차감</p>
              <span className="product_amount">수량 : 1</span>
            </div>
            <div>
              <span className="product_price">358,200 P</span>
            </div>
          </div>
        </div>
        <button>삭제하기</button>
      </div>

      <h2>주문자 정보</h2>
      <Form>
        <div className="form_item">
          <Form.Label>주문자명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              name="user_name"
            />
            <FontAwesomeIcon icon={faCircleCheck} className="icon_complete" />
          </div>
        </div>

        <div className="form_item">
          <Form.Label>주문자 연락처</Form.Label>
          <div className="item_group row">
            <div className="col row tel_group">
              <div className="col-lg-2 col-3">
                <Form.Control
                  type="text"
                  name="mobile"
                  maxLength="15"
                  placeholder="010-1234-5678"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form_item">
          <Form.Label>주문자 이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@galleryk.co.kr"
            name="email"
          />
        </div>

        <div className="form_item">
          <Form.Label>요청사항</Form.Label>
          <Form.Control
            as="textarea"
            name="etc"
            rows={3}
            placeholder="문의하실 요청사항을 작성해주세요."
          />
        </div>

        <h2>배송지 정보</h2>
        <div className="form_item">
          <Form.Check
            inline
            label="주문자 정보와 동일"
            name="agree_payment"
            type="checkbox"
            required
            id="agree_payment"
          />
        </div>
        <div className="form_item">
          <Form.Label>배송지명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              name="user_name"
            />
            <FontAwesomeIcon icon={faCircleCheck} className="icon_complete" />
          </div>
        </div>

        <div className="form_item">
          <Form.Label>배송지 연락처</Form.Label>
          <div className="item_group row">
            <div className="col row tel_group">
              <div className="col-lg-2 col-3">
                <Form.Control
                  type="text"
                  name="mobile"
                  maxLength="15"
                  placeholder="010-1234-5678"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form_item">
          <Form.Label>배송지 주소</Form.Label>
          <div className="item_group row">
            <div className="col row tel_group">
              <div className="col">
                <Form.Control
                  type="text"
                  name="zipcode"
                  maxLength="5"
                  placeholder="우편번호"
                />
              </div>
              <div className="col">
                <button>도로명주소</button>
              </div>
            </div>
          </div>
          <Form.Control
            type="text"
            placeholder="Type something"
            name="user_name"
            className="address_detail"
          />
          <Form.Control
            type="text"
            placeholder="Type something"
            name="user_name"
            className="address_detail"
          />
        </div>
      </Form>
      <h2 className="md_screen_payment_tit">결제 정보</h2>
    </div>
  );
};
