import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { MyPurchase } from "../../components/NewMypage/MyPurchase";

export default function mypagepurchase() {
  return (
    <div>
      <PageBanner />
      <MyPurchase />
      <Footer />
    </div>
  );
}
