import React from "react";
import PageBanner from "../../src/components/Common/PageBanner";
import OrderInfo from "../../src/components/Order/OrderInfo";
import PayInfo from "../../src/components/Order/PayInfo";
import Footer from "../../src/components/_App/Footer";

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
