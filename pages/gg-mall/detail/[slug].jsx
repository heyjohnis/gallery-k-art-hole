import React, { useState, useEffect } from "react";
import PageBanner from "../../../components/Common/PageBanner";
import GgShoppingDetail from "../../../components/GgShopping/GgShoppingDetail";
import Footer from "../../../components/Layouts/Footer";
import { useRouter } from "next/router";
import { GET } from "../../../utils/restApi";

export default function detail({ user }) {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [options, setOptions] = useState("");

  const getProductData = (id) => {
    GET(`/mall/${id}`).then((res) => {
      console.log("res: ", res);
      setContent(res?.data?.product);
      setOptions(res?.data?.options);
    });
  };

  useEffect(() => {
    console.log("useEffect router.query");
    const pdId = router.query.slug;
    if (pdId) getProductData(pdId);
  }, [router.query]);

  return (
    <div>
      <PageBanner />
      <section className="shopping_detail">
        <GgShoppingDetail user={user} content={content} options={options} />
      </section>
      <Footer />
    </div>
  );
}
