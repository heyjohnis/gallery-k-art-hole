import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import { GET, DELETE } from "../../utils/restApi";
import ModalDaumPost from "../Common/ModalDaumPost";

const INIT_FORM = {
  order_user_name: "",
  order_user_phone: "",
  order_user_email: "",
  delivery_user_name: "",
  delivery_phone: "",
  delivery_zipcode: "",
  delivery_addr1: "",
  delivery_addr2: "",
  memo: "",
};

const TITLE = {
  service: "서비스 신청",
  shop: "GG 쇼핑 주문",
  tour: "GG 투어 신청",
  gift: "사은품 신청",
};

const SUB_TITLE = {
  service: "서비스 정보",
  shop: "상품 정보",
  tour: "투어 정보",
  gift: "사은품 정보",
};

export default function GgShoppingPurchaseForm({
  user,
  setOrderProducts,
  setOrderInfo,
  pdKind,
}) {
  const [products, setProducts] = useState([]);
  const [countSelected, setCountSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(INIT_FORM);

  const getCartProducts = () => {
    GET(`/mall/cart/list?pd_kind=${pdKind}`).then((res) => {
      console.log("/mall/cart/list", res);
      setProducts(res?.data);
      setCountSelected(res?.data?.length);
      setOrderProducts(res?.data);
    });
  };

  const deleteCartItem = (itemNo) => {
    DELETE("/mall/cart/delete", { item_no: itemNo }).then((res) => {
      console.log("/mall/cart/delete", res);
      getCartProducts();
    });
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

  const getAddressData = (data) => {
    setIsOpen(false);
    console.log("getAddressData: ", data);
    setForm((prev) => ({
      ...prev,
      delivery_zipcode: data.zonecode,
      delivery_addr1: data.address,
    }));
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openPostModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  useEffect(() => {
    if (pdKind) getCartProducts();
  }, [pdKind]);

  useEffect(() => {
    form?.order_user_name && setOrderInfo((prev) => ({ ...prev, ...form }));
  }, [form]);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      order_user_name: user.user_name,
      order_user_phone: user.mobile,
      order_user_email: user.email,
      memo: "",
      delivery_user_name: "",
      delivery_phone: "",
      delivery_zipcode: "",
      delivery_addr1: "",
      delivery_addr2: "",
    }));
  }, [user]);

  return (
    <div className="booking_content">
      <h1>{TITLE[pdKind]}</h1>
      <h2>
        {SUB_TITLE[pdKind]}
        <span className="total_items">총 {countSelected}건</span>
      </h2>
      <ul className="product_info">
        {products?.map((item) => (
          <li key={item.item_no}>
            <div className="product_info_items">
              <Image
                src={item.thumb_img}
                width="150"
                height="150"
                alt={item.pd_name}
              />
              <div className="product_info_item">
                <div>
                  <h3>{item.pd_name}</h3>
                  <p>배송비 {item.delivery_fee.toLocaleString()} P 차감</p>
                  <span className="product_amount">
                    수량 : {item?.quantity || 1}
                  </span>
                </div>
                <div>
                  <span className="product_price">
                    {item.price.toLocaleString()} P
                  </span>
                </div>
              </div>
            </div>
            <button onClick={() => deleteCartItem(item.item_no)}>
              삭제하기
            </button>
          </li>
        ))}
      </ul>

      <h2>주문자 정보</h2>
      <Form>
        <div className="form_item">
          <Form.Label>주문자명</Form.Label>
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
          <Form.Label>주문자 연락처</Form.Label>
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
          <Form.Label>주문자 이메일</Form.Label>
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
      </Form>
      <ModalDaumPost getAddressData={getAddressData} isOpen={isOpen} />
      <h2 className="md_screen_payment_tit">결제 정보</h2>
    </div>
  );
}
