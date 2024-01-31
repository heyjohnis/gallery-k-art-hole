import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import ServiceListPc from "../../components/Service/ServiceListPc";
export default function servicelist({ user }) {
  return (
    <div>
      <PageBanner />
      <section className="shopping_content">
        <ServiceListPc user={user} />
      </section>
      <Footer />
    </div>
  );
}
