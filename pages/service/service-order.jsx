import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { MyServiceOrder } from "../../components/Service/MyServiceOrder";

export default function serviceorder() {
  return (
    <div>
      <PageBanner />
      <MyServiceOrder />
      <Footer />
    </div>
  );
}
