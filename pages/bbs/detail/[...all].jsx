import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import Footer from "../../../components/Layouts/Footer";
import PageBanner from "../../../components/Common/PageBanner";
import BbsDetailContent from "../../../components/News/BbsDetailContent";
import { bbs } from "../../../utils/cmmCode";

const BbsDetail = () => {
  const router = useRouter();
  const [, setLoading] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    setLoading(true);

    const bbsNo = router.query.all[0];
    const url = `${baseUrl}/bbs/detail/${bbsNo}`;
    axios({ method: "get", url })
      .then(({ data }) => {
        setContent(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router.query.all[0]]);

  return (
    <>
      <PageBanner
        pageTitle={bbs[content.category]}
        homePageUrl="/contact"
        homePageText="SUPPORT"
        activePageText={bbs[content.category]}
      />

      <BbsDetailContent content={content} />
      <Footer />
    </>
  );
};

export default BbsDetail;
