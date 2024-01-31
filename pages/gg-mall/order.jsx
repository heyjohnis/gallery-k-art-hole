import React from "react";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";
import GgShoppingPurchasePage from "../../components/GgShopping/GgShoppingPurchasePage";

export default function OrderPage({ user }) {
  return (
    <div>
      <PageBanner />
      <GgShoppingPurchasePage user={user} />
      <Footer />
    </div>
  );
}
