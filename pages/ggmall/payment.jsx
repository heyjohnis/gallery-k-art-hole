import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import OrderInfo from "../../components/Ggmall/OrderInfo";
import PayInfo from "../../components/Ggmall/PayInfo";
import Footer from "../../components/Layouts/Footer";

const payment = () => {
  return (
    <>
      <PageBanner
        pageTitle="결제하기"
        homePageUrl="/"
        homePageText="Home"
        activePageText="결제하기"
      />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <OrderInfo />
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
