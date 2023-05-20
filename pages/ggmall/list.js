import React, { useEffect, useState } from "react";

import axios from "axios";
import baseUrl from "./../../utils/baseUrl";
import Footer from "./../../components/Layouts/Footer";
import PageBanner from "./../../components/Common/PageBanner";
import GgmallList from "../../components/Ggmall/GgmallList";

const BbsDetail = () => {
  const [, setLoading] = useState({});
  const [contents, setContents] = useState("");

  useEffect(() => {
    setLoading(true);

    const url = `${baseUrl}/mall`;
    axios({ method: "get", url })
      .then(({ data }) => {
        setContents(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageBanner
        pageTitle="포인트몰"
        homePageUrl="/"
        homePageText="Home"
        activePageText="포인트몰"
      />

      <GgmallList contents={contents} />

      <Footer />
    </>
  );
};

export default BbsDetail;
