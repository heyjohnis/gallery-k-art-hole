/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import OrderInfo from "../../components/Ggmall/OrderInfo";
import PayInfo from "../../components/Ggmall/PayInfo";
import Footer from "../../components/Layouts/Footer";
import axios from "axios";
import baseUrl from "./../../utils/baseUrl";

const payment = () => {
  const [loading, setLoading] = useState(true); // [1
  const router = useRouter();
  const [pdNo, setPdNo] = useState("");
  const [product, setProduct] = useState("");
  const [option, setOption] = useState("");

  useEffect(() => {
    const url = `${baseUrl}/mall/${pdNo}`;
    axios({ method: "get", url })
      .then(({ data }) => {
        console.log("data: ", data);
        setProduct(data.product);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pdNo]);

  useEffect(() => {
    const pdNo = router.query.pd_no;
    setPdNo(pdNo);
    const option = router.query.option;
    setOption(option);
  }, [router.query]);

  return (
    <>
      <PageBanner
        pageTitle="결제하기"
        homePageUrl="/"
        homePageText="Home"
        activePageText="포인트몰"
      />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <OrderInfo product={product} option={option} />
          </div>
          <div className="col-12 col-lg-8 mt-100">{/* <OrderForm/> */}</div>
          <div className="col-12 col-lg-4 mt-100">
            <PayInfo />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default payment;
