import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Form from "react-bootstrap/Form";
import ModalDaumPost from "../Common/ModalDaumPost";

const LABEL = {
  service: "이용자",
  shop: "주문자",
  tour: "신청자",
};

export function GgOrderFormComp({ setForm, form, user }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openPostModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const copyOrderInfo = (e) => {
    if (e.target.checked) {
      setForm((prev) => ({
        ...prev,
        delivery_user_name: form.order_user_name,
        delivery_phone: form.order_user_phone,
        delivery_zipcode: user.zipcode,
        delivery_addr1: user.addr1,
        delivery_addr2: user.addr2,
      }));
    }
  };

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      order_user_name: user?.user_name,
      order_user_phone: user?.mobile,
      order_user_email: user?.email,
      memo: "",
      delivery_user_name: "",
      delivery_phone: "",
      delivery_zipcode: "",
      delivery_addr1: "",
      delivery_addr2: "",
    }));
  }, [user]);

  const getAddressData = (data) => {
    setIsOpen(false);
    console.log("getAddressData: ", data);
    setForm((prev) => ({
      ...prev,
      delivery_zipcode: data.zonecode,
      delivery_addr1: data.address,
    }));
  };

  return (
    <>
      <h2>{LABEL[form.pd_kind || "shop"]} 정보</h2>
      <Form>
        <div className="form_item">
          <Form.Label>{LABEL[form.pd_kind || "shop"]}명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              name="order_user_name"
              value={form?.order_user_name}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faCircleCheck} className="icon_complete" />
          </div>
        </div>
        <div className="form_item">
          <Form.Label>{LABEL[form.pd_kind || "shop"]} 연락처</Form.Label>
          <div className="item_group row">
            <div className="col row tel_group">
              <div className="col-lg-2 col-3">
                <Form.Control
                  type="text"
                  name="order_user_phone"
                  maxLength="15"
                  placeholder="010-1234-5678"
                  value={form?.order_user_phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form_item">
          <Form.Label>{LABEL[form.pd_kind || "shop"]} 이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@galleryk.co.kr"
            name="order_user_email"
            value={form?.order_user_email}
            onChange={handleChange}
          />
        </div>

        <div className="form_item margin_b_80">
          <Form.Label>요청사항</Form.Label>
          <Form.Control
            as="textarea"
            name="memo"
            rows={3}
            placeholder="문의하실 요청사항을 작성해주세요."
            value={form?.memo}
            onChange={handleChange}
          />
        </div>
        {form.pd_kind === "shop" && (
          <>
            <h2>배송지 정보</h2>
            <div className="form_item">
              <Form.Check
                inline
                label="주문자 정보와 동일"
                name="copy_order_info"
                type="checkbox"
                id="copy_order_info"
                value={form?.copy_order_info}
                onChange={copyOrderInfo}
              />
            </div>
            <div className="form_item">
              <Form.Label>배송지명</Form.Label>
              <div className="item_name">
                <Form.Control
                  type="text"
                  placeholder="이름을 입력해주세요."
                  name="delivery_user_name"
                  value={form?.delivery_user_name}
                  onChange={handleChange}
                />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="icon_complete"
                />
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
                      value={form?.delivery_phone}
                      onChange={handleChange}
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
                      value={form?.delivery_zipcode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <button onClick={openPostModal}>도로명주소</button>
                  </div>
                </div>
              </div>
              <Form.Control
                type="text"
                placeholder="주소를 입력하세요"
                name="delivery_addr1"
                className="address_detail"
                id="delivery_addr1"
                value={form?.delivery_addr1}
                onChange={handleChange}
              />
              <Form.Control
                type="text"
                placeholder="상세주소를 입력하세요"
                name="delivery_addr2"
                className="address_detail"
                value={form?.delivery_addr2}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </Form>
      <ModalDaumPost getAddressData={getAddressData} isOpen={isOpen} />
    </>
  );
}
