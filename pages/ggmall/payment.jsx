/* eslint-disable no-unused-vars */
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import OrderForm from "../../components/Ggmall/OrderForm";
import OrderInfo from "../../components/Ggmall/OrderInfo";
import PayInfo from "../../components/Ggmall/PayInfo";
import Footer from "../../components/Layouts/Footer";
import axios from "axios";
import baseUrl from "./../../utils/baseUrl";
import { commaFormat } from "../../utils/number";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const payment = ({ user }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // [1
  const [pdNo, setPdNo] = useState();
  const [product, setProduct] = useState("");
  const [total, setTotal] = useState(0); // [2
  const [selectedOptions, setSelectedOptions] = useState({});
  const [optionsResult, setOptionsResult] = useState(""); // [3
  const [orderInfo, setOrderInfo] = useState({});
  const [productKind, setProductKind] = useState("");

  const alertContent = () => {
    MySwal.fire({
      title: "성공",
      text: "결제가 완료되었습니다.",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: true,
    }).then((result) => {
      console.log("router: ", router);
      router.push(`/ggmall/list/${productKind}`);
    });
  };

  const selectedOptionsResult = (options, hopeDate) => {
    let result = "";
    result += hopeDate ? `/ 희망일: ${hopeDate} ` : "";
    Object.keys(options).forEach((key) => {
      const optionName = options[key].op_name;
      const optionPrice = options[key].price
        ? commaFormat(options[key].price) + "P"
        : "";
      if (optionName)
        result += `/ ${optionName} <b className="option_price">(+${optionPrice})</b> `;
    });
    console.log("result: ", result);
    setOptionsResult(result);
  };

  const buyProduct = (payInfo) => {
    console.log("payInfo: ", payInfo);
    const payload = {
      ...orderInfo,
      ...payInfo,
      pd_name: product.pd_name,
      point_type: productKind === "service" ? "01" : "03",
    };

    const url = `${baseUrl}/mall/buy`;
    axios({ method: "post", url, data: payload })
      .then(({ data }) => {
        console.log("data: ", data);
        alertContent();
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  useEffect(() => {
    if (!pdNo) return;

    setOrderInfo((prev) => ({
      ...prev,
      pd_no: pdNo,
      total_price: total,
      option_values: optionsResult,
      user_no: user.user_no,
      quntity: 1,
      pay_amount: total + parseInt(product.delivery_fee || 0),
      order_status: product.pd_type === "01" ? "01" : "09",
    }));

    const url = `${baseUrl}/mall/${pdNo}`;
    axios({ method: "get", url })
      .then(({ data }) => {
        console.log("product data: ", data);
        setProduct(data.product);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pdNo]);

  useEffect(() => {
    setPdNo(router.query.pd_no);
    setTotal(parseInt(router.query.total || 0));
    const productKind = router.query.product_kind;
    setProductKind(router.query.product_kind);
    const options = JSON.parse(router.query.options);
    setSelectedOptions(options);
    selectedOptionsResult(options, router.query.hope_date);
  }, [router.query]);

  return (
    <>
      <PageBanner
        pageTitle="결제하기"
        homePageUrl="/"
        homePageText="Home"
        activePageText="GG MALL"
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
            <OrderForm
              user={user}
              product={product}
              setOrderInfo={(orderInfo) => {
                setOrderInfo(orderInfo);
              }}
            />
          </div>
          <div className="col-12 col-lg-4 mt-100">
            <PayInfo
              user={user}
              total={total}
              product={product}
              buyProduct={buyProduct}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default payment;
