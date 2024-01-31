import React, { useState } from "react";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import MyPurchase from "../../components/NewMypage/MyPurchase";

export default function mypagepurchase({ user }) {
  return (
    <div>
      <PageBanner />
      <MyPurchase user={user} />
      <Footer />
    </div>
  );
}
