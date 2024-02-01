import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import { GgOptionsComp } from "../GgShopping/GgOptionsComp";

export function ServiceForm({ options, bookingData }) {
  const [form, setForm] = useState({});
  const [optionValues, setOptionValues] = useState({});
  const {
    item_no,
    pd_name,
    thumb_img,
    brand,
    quantity,
    price,
    origin_price,
    delivery_fee,
    option_price,
    option_values,
  } = bookingData;

  useEffect(() => {
    if (options.length === 0) return;
    console.log("options: ", options);
    console.log("bookingData: ", bookingData);
    const values = JSON.parse(bookingData?.option_values || "");
    const optionVals = options.map((option) => ({
      ...option,
      ...values[option.option_no],
    }));
    console.log("optionValues: ", optionValues, values);
    setOptionValues(optionVals);
  }, [options, bookingData]);
  return (
    <div className="booking_content">
      <h1>제휴서비스 신청</h1>
      <h2>서비스 정보</h2>
      <ul className="product_info">
        <li className="pb-0" key="23">
          <div className="product_info_items">
            <Image src={thumb_img} width="150" height="150" alt={pd_name} />
            <div className="product_info_item">
              <div>
                <h3>{pd_name}</h3>
                <p>{brand}</p>
              </div>
              <div>
                <span className="product_price">
                  {price?.toLocaleString()} 원
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <GgOptionsComp options={optionValues} setForm={setForm} />
      <Form>
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
}
