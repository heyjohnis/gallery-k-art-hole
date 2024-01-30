import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Form from "react-bootstrap/Form";

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

        <div className="form_item">
          <Form.Label>주문자명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              name="order_user_name"
              value="이름"
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
                  name="order_user_phone"
                  maxLength="15"
                  placeholder="010-1234-5678"
                  value=""
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

        <h2>배송지 정보</h2>
        <div className="form_item">
          <Form.Check
            inline
            label="주문자 정보와 동일"
            name="copy_order_info"
            type="checkbox"
            id="copy_order_info"
            value=""
          />
        </div>
        <div className="form_item">
          <Form.Label>배송지명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              name="delivery_user_name"
              value=""
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
          <Form.Label>배송지 주소</Form.Label>
          <div className="item_group row">
            <div className="col row tel_group">
              <div className="col">
                <Form.Control
                  type="text"
                  name="delivery_zipcode"
                  id="delivery_zipcode"
                  maxLength="5"
                  placeholder="우편번호"
                  value=""
                />
              </div>
              <div className="col">
                <button>도로명주소</button>
              </div>
            </div>
          </div>
          <Form.Control
            type="text"
            placeholder="주소를 입력하세요"
            name="delivery_addr1"
            className="address_detail"
            id="delivery_addr1"
            value=""
          />
          <Form.Control
            type="text"
            placeholder="상세주소를 입력하세요"
            name="delivery_addr2"
            className="address_detail"
            value=""
          />
        </div>
      </Form>

      <h2>주문자 정보</h2>
      <Form>
        <div className="form_item">
          <Form.Label>주문자명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              name="order_user_name"
              value="이름"
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
                  name="order_user_phone"
                  maxLength="15"
                  placeholder="010-1234-5678"
                  value=""
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

        <h2>배송지 정보</h2>
        <div className="form_item">
          <Form.Check
            inline
            label="주문자 정보와 동일"
            name="copy_order_info"
            type="checkbox"
            id="copy_order_info"
            value=""
          />
        </div>
        <div className="form_item">
          <Form.Label>배송지명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              name="delivery_user_name"
              value=""
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
          <Form.Label>배송지 주소</Form.Label>
          <div className="item_group row">
            <div className="col row tel_group">
              <div className="col">
                <Form.Control
                  type="text"
                  name="delivery_zipcode"
                  id="delivery_zipcode"
                  maxLength="5"
                  placeholder="우편번호"
                  value=""
                />
              </div>
              <div className="col">
                <button>도로명주소</button>
              </div>
            </div>
          </div>
          <Form.Control
            type="text"
            placeholder="주소를 입력하세요"
            name="delivery_addr1"
            className="address_detail"
            id="delivery_addr1"
            value=""
          />
          <Form.Control
            type="text"
            placeholder="상세주소를 입력하세요"
            name="delivery_addr2"
            className="address_detail"
            value=""
          />
        </div>
      </Form>
      <h2 className="md_screen_payment_tit">결제 정보</h2>
    </div>
  );
};
