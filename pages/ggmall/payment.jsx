/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import OrderForm from "../../components/Ggmall/OrderForm";
import OrderInfo from "../../components/Ggmall/OrderInfo";
import PayInfo from "../../components/Ggmall/PayInfo";
import Footer from "../../components/Layouts/Footer";
import axios from "axios";
import baseUrl from "./../../utils/baseUrl";
import { commaFormat } from "../../utils/number";

const payment = ({ user }) => {
  const [loading, setLoading] = useState(true); // [1
  const router = useRouter();
  const [pdNo, setPdNo] = useState();
  const [product, setProduct] = useState("");
  const [total, setTotal] = useState(0); // [2
  const [selectedOptions, setSelectedOptions] = useState({});
  const [optionsResult, setOptionsResult] = useState(""); // [3
  const [orderInfo, setOrderInfo] = useState({});

  const selectedOptionsResult = (options) => {
    let result = "";
    Object.keys(options).forEach((key) => {
      const optionName = options[key].op_name;
      const optionPrice = options[key].price
        ? commaFormat(options[key].price) + "P"
        : "";
      if (optionName) result += `/ ${optionName} `;
    });
    console.log("result: ", result);
    setOptionsResult(result);
  };

  useEffect(() => {
    if (!pdNo) return;

    setOrderInfo((prev) => ({
      ...prev,
      pd_no: pdNo,
      total_price: total,
      option_values: optionsResult,
      user_no: user.user_no,
      delivery_fee: product.delivery_fee,
    }));

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
    const total = router.query.total;
    setTotal(total);
    const options = JSON.parse(router.query.options);
    setSelectedOptions(options);
    selectedOptionsResult(options);
  }, [router.query]);

  const getOrderInfo = (orderInfo) => {
    console.log("orderInfo: ", orderInfo);
    setOrderInfo(orderInfo);
  };

  const buyProduct = () => {
    const url = `${baseUrl}/mall/buy`;
    axios({ method: "post", url, data: orderInfo })
      .then(({ data }) => {
        console.log("data: ", data);
        //router.push(`/ggmall/order/${data.order_id}`);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

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
            <OrderInfo
              product={product}
              total={total}
              selectedOptions={selectedOptions}
              optionsResult={optionsResult}
            />
          </div>
          <div className="col-12 col-lg-8 mt-100">
            <OrderForm user={user} setOrderInfo={getOrderInfo} />
          </div>
          <div className="col-12 col-lg-4 mt-100">
            <PayInfo user={user} total={total} buyProduct={buyProduct} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default payment;
