import React from "react";
import Footer from "../../../components/Layouts/Footer";
import PageBanner from "../../../components/Common/PageBanner";
import { ServiceBooking } from "../../../components/Service/ServiceBooking";
export default function GgmallBookingPage({ user }) {
  return (
    <div>
      <PageBanner />
      <ServiceBooking user={user} />
      <Footer />
    </div>
  );
}
