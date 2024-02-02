import React, { useEffect, useState } from "react";
import GgShoppingPurchaseAgreement from "./GgShoppingPurchaseAgreement";
import { useRouter } from "next/router";

import { GET, DELETE } from "../../utils/restApi";
import { GgOrderFormComp } from "./GgOrderFormComp";
import { GgOrderItemComp } from "./GgOrderItemComp";
import { calcSumCartPoint } from "../../service/calcPoint";
import { GGFormValidation } from "./order/GGFormValidation";

import { POST } from "../../utils/restApi";

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
  const [items, setItems] = useState([]);
  const [countSelected, setCountSelected] = useState(0);
  const [form, setForm] = useState(INIT_FORM);

  const getCartProducts = () => {
    GET(`/mall/cart/list?pd_kind=${pdKind}`).then((res) => {
      console.log("/mall/cart/list", res?.data);
      const items = res?.data || [];
      setItems(res?.data);
      setCountSelected(items.length);
      setOrderProducts(items);
      calcSumCartPoint({ items, form, setForm });
    });
  };

  const deleteCartItem = (itemNo) => {
    DELETE("/mall/cart/delete", { item_no: itemNo }).then((res) => {
      console.log("/mall/cart/delete", res);
      getCartProducts();
    });
  };

  const submitOrder = () => {
    if (form?.able_point < form?.pay_amount)
      return alert("사용가능한 포인트를 확인해주세요.");

    const isValid = GGFormValidation(form);
    if (!isValid) return;

    const orderItemNo = orderProducts
      ?.reduce((acc, cur) => [...acc, cur.item_no], [])
      .join(",");
    if (!orderItemNo) return alert("주문할 상품이 없습니다.");

    const pdLength = orderProducts.length;
    const comment = `${orderProducts[0].pd_name} ${
      pdLength > 1 ? `외 ${pdLength - 1}건` : ""
    }`;
    form.comment = comment;

    POST("/mall/cart/order", {
      ...form,
      order_item_no: orderItemNo,
    }).then((res) => {
      if (res?.data?.order_no > 0) {
        alert("주문이 완료되었습니다.");
        router.push({
          pathname: "/gg-mall/complete/",
          query: { order_no: res?.data?.order_no },
        });
      }
    });
  };

  useEffect(() => {
    if (pdKind) getCartProducts();
  }, [pdKind]);

  useEffect(() => {
    form?.order_user_name && setOrderInfo((prev) => ({ ...prev, ...form }));
  }, [form]);

  useEffect(() => {
    setPdKind(router.query.slug);
    setForm((prev) => ({ ...prev, pd_kind: router.query.slug }));
  }, [router.query]);

  const setOrderPoint = () => {
    const yearlyPoint = parseInt(user?.yearly_point) || 0;
    const use_point = user?.use_point || 0;
    const ableP = yearlyPoint - use_point > 0 ? yearlyPoint - use_point : 0;
    setForm((prev) => ({ ...prev, able_point: ableP }));
  };
  useEffect(() => {
    if (!user?.yearly_point) return;
    setOrderPoint();
  }, [user]);

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
              {items?.map((item) => (
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
          <GgShoppingPurchaseAgreement
            user={user}
            form={form}
            setForm={setForm}
            submitOrder={submitOrder}
          />
        </div>
      </div>
    </section>
  );
}
