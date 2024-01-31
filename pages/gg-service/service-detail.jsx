import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { ServiceDetail } from "../../components/Service/ServiceDetail";

export default function servicedetail() {
  return (
    <div>
      <PageBanner />
      <section className="shopping_detail">
        <ServiceDetail />
      </section>
      <Footer />
    </div>
  );
}
