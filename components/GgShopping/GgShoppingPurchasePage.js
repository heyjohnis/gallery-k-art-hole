import React, { useEffect, useState } from "react";
import GgShoppingPurchaseAgreement from "./GgShoppingPurchaseAgreement";
import { useRouter } from "next/router";

import { GET, DELETE } from "../../utils/restApi";
import { GgOrderFormComp } from "./GgOrderFormComp";
import { GgOrderItemComp } from "./GgOrderItemComp";

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

export default function GgShoppingPurchasePage({ user }) {
  const router = useRouter();
  const [orderProducts, setOrderProducts] = useState([]);
  const [orderInfo, setOrderInfo] = useState({ order_user_name: "" });
  const [pdKind, setPdKind] = useState("");
  const [products, setProducts] = useState([]);
  const [countSelected, setCountSelected] = useState(0);
  const [form, setForm] = useState(INIT_FORM);

  const getCartProducts = () => {
    GET(`/mall/cart/list?pd_kind=${pdKind}`).then((res) => {
      console.log("/mall/cart/list", res?.data);
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

  useEffect(() => {
    if (pdKind) getCartProducts();
  }, [pdKind]);

  useEffect(() => {
    form?.order_user_name && setOrderInfo((prev) => ({ ...prev, ...form }));
  }, [form]);

  useState(() => {
    setPdKind(router.query.slug);
  }, [router.query]);
  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <div className="booking_content">
            <h1>{TITLE[pdKind]}</h1>
            <h2>
              {SUB_TITLE[pdKind]}
              <span className="total_items">총 {countSelected}건</span>
            </h2>
            <ul className="product_info">
              {products?.map((item) => (
                <li key={item.item_no}>
                  <GgOrderItemComp
                    item={item}
                    deleteCartItem={deleteCartItem}
                  />
                </li>
              ))}
            </ul>
            <GgOrderFormComp user={user} form={form} setForm={setForm} />
            <h2 className="md_screen_payment_tit">결제 정보</h2>
          </div>
        </div>
        <div className="col-lg-5 p-0">
          <GgShoppingPurchaseAgreement user={user} form={form} setForm={form} />
        </div>
      </div>
    </section>
  );
}
