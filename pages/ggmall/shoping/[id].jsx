import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import baseUrl from "./../../../utils/baseUrl";
import Footer from "./../../../components/Layouts/Footer";
import PageBanner from "./../../../components/Common/PageBanner";
import GgmallItems from "./../../../components/Ggmall/GgmallItems";
import GgmallText from "./../../../components/Ggmall/GgmallText";

const MallDetail = () => {
  const router = useRouter();
  const [, setLoading] = useState({});
  const [content, setContent] = useState("");
  const [options, setOptions] = useState("");

  useEffect(() => {
    setLoading(true);

    const pdNo = router.query.id;
    const url = `${baseUrl}/mall/${pdNo}`;
    axios({ method: "get", url })
      .then(({ data }) => {
        console.log("data: ", data);
        setContent(data.product);
        setOptions(data.options);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router.query.id]);

  return (
    <>
      <PageBanner
        pageTitle="GG 쇼핑"
        homePageUrl="/ggmall/shoping/#"
        homePageText="GG MALL"
        activePageText="GG 쇼핑"
        activePageUrl="/ggmall/shoping/"
      />

      <GgmallItems content={content} options={options} productKind="shoping" />
      <GgmallText content={content} />

      <Footer />
    </>
  );
};

export default MallDetail;
