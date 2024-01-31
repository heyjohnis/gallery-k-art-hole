import React, { use, useState } from "react";
import GgShoppingPurchaseAgreement from "./GgShoppingPurchaseAgreement";
import GgShoppingPurchaseForm from "./GgShoppingPurchaseForm";
import { useRouter } from "next/router";

export default function GgShoppingPurchasePage({ user }) {
  const router = useRouter();
  const [orderProducts, setOrderProducts] = useState([]);
  const [orderInfo, setOrderInfo] = useState({ order_user_name: "" });
  const [pdKind, setPdKind] = useState("");

  useState(() => {
    setPdKind(router.query.slug);
  }, [router.query]);
  return (
    <section className="container">
      <div className="booking_container row">
        <div className="col-lg-6 p-0">
          <GgShoppingPurchaseForm
            user={user}
            setOrderProducts={setOrderProducts}
            setOrderInfo={setOrderInfo}
            pdKind={pdKind}
          />
        </div>
        <div className="col-lg-5 p-0">
          <GgShoppingPurchaseAgreement
            user={user}
            orderProducts={orderProducts}
            orderInfo={orderInfo}
          />
        </div>
      </div>
    </section>
  );
}
