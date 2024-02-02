import React, { useEffect, useState } from "react";
import { ServiceAgreement } from "./ServiceAgreement";
import { POST } from "../../utils/restApi";
import { useRouter } from "next/router";
import Image from "next/image";
import { GgOptionsComp } from "../GgShopping/GgOptionsComp";
import { GgOrderFormComp } from "../GgShopping/GgOrderFormComp";

export function ServiceBooking({ user }) {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [bookingData, setBookingData] = useState({});
  const [options, setOptions] = useState([]);
  const [optionValues, setOptionValues] = useState([]);

  const getBookingData = (req) => {
    POST("/mall/booking/cart", req).then((res) => {
      console.log("getBookingData: ", res.data);
      setBookingData(res.data.booking);
      setOptions(res.data.options);
      setForm((prev) => ({ ...prev, ...res.data.booking }));
    });
  };

  useEffect(() => {
    if (!router.query) return;
    const { item_no, pd_no, pd_kind } = router.query;
    setForm((prev) => ({ ...prev, item_no, pd_no, pd_kind }));
    getBookingData({ item_no, pd_no, pd_kind });
  }, [router.query]);

  const mergeOptionDefaultValue = () => {
    const values = JSON.parse(bookingData?.option_values || "");
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
  }, [options, bookingData]);

  useEffect(() => {
    console.log("form: ", form);
  }, [form]);

  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <div className="booking_content">
            <h1>제휴서비스 신청</h1>
            <h2>서비스 정보</h2>
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
          </div>
        </div>
        <div className="col-lg-5 p-0">
          <ServiceAgreement user={user} form={form} setForm={setForm} />
        </div>
      </div>
    </section>
  );
}
