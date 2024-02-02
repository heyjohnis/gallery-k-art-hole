import React, { useEffect, useState } from "react";
import { ServiceAgreement } from "./ServiceAgreement";
import { POST } from "../../utils/restApi";
import { useRouter } from "next/router";
import Image from "next/image";
import { GgOptionsComp } from "../GgShopping/GgOptionsComp";
import { GgOrderFormComp } from "../GgShopping/GgOrderFormComp";
import { calcSumCartPoint } from "../../service/calcPoint";

export function ServiceBooking({ user }) {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [items, setItems] = useState([]);
  const [options, setOptions] = useState([]);
  const [optionValues, setOptionValues] = useState([]);

  const getBookingData = (req) => {
    POST("/mall/booking/cart", req).then((res) => {
      console.log("getBookingData: ", res.data);
      setItems(res.data.booking);
      calcSumCartPoint({ items: res.data.booking, setForm });
      setOptions(res.data.options);
      setForm((prev) => ({ ...prev, ...res.data.booking }));
    });
  };

  const handleSubmit = () => {
    console.log("handleSubmit: ", form);
    // POST("/reservation/ggmall/order", form).then((res) => {
    //   console.log("handleSubmit: ", res.data);
    //   if (res.data.result === "success") {
    //     alert("서비스 신청이 완료되었습니다.");
    //     router.push("/service");
    //   } else {
    //     alert("서비스 신청에 실패했습니다.");
    //   }
    // });
  };

  useEffect(() => {
    if (!router.query) return;
    const { item_no, pd_no, pd_kind } = router.query;
    setForm((prev) => ({ ...prev, item_no, pd_no, pd_kind }));
    getBookingData({ item_no, pd_no, pd_kind });
  }, [router.query]);

  const mergeOptionDefaultValue = () => {
    const values = JSON.parse(items[0]?.option_values || "");
    const optionVals = options.map((option) => ({
      ...option,
      ...values[option.option_no],
    }));
    console.log("optionValues: ", optionValues, values);
    setOptionValues(optionVals);
  };
  useEffect(() => {
    if (options.length === 0) return;
    mergeOptionDefaultValue();
  }, [options, items]);

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
            <h1>제휴서비스 신청</h1>
            <h2>서비스 정보</h2>
            {items.length > 0 &&
              items.map((bookingData) => (
                <>
                  <ul className="product_info">
                    <li className="pb-0" key="23">
                      <div className="product_info_items">
                        <Image
                          src={bookingData.thumb_img}
                          width="150"
                          height="150"
                          alt={bookingData.pd_name}
                        />
                        <div className="product_info_item">
                          <div>
                            <h3>{bookingData.pd_name}</h3>
                            <p>{bookingData.brand}</p>
                          </div>
                          <div>
                            <span className="product_price">
                              {bookingData.price?.toLocaleString()} 원
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <GgOptionsComp options={optionValues} setForm={setForm} />
                  <GgOrderFormComp user={user} form={form} setForm={setForm} />
                </>
              ))}
          </div>
        </div>
        <div className="col-lg-5 p-0">
          <ServiceAgreement
            form={form}
            setForm={setForm}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}
