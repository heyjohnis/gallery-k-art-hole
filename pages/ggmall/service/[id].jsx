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
        pageTitle="제휴서비스"
        homePageUrl="/"
        homePageText="Home"
        activePageText="제휴서비스"
        activePageUrl="/ggmall/service/"
      />

      <GgmallItems content={content} options={options} productKind="service" />
      <GgmallText content={content} />

      <Footer />
    </>
  );
};

export default MallDetail;
