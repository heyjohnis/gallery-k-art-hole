import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";

import baseUrl from "../../utils/baseUrl";
import BbsList from "../../components/News/BbsList";

const Bbs = () => {
  const router = useRouter();
  const [, setLoading] = useState({});
  const [contents, setContents] = useState([]);
  const [category, setCategory] = useState("");

  const bbs = {
    news: "뉴스",
    event: "이벤트",
    media: "미디어",
    notice: "공지사항",
  };

  useEffect(() => {
    setLoading(true);

    const cate = router.query.all[0];
    setCategory(cate);
    const url = `${baseUrl}/bbs/${cate}`;
    axios({ method: "get", url })
      .then(({ data }) => {
        setContents(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router.query.all[0]]);

  return (
    <>
      <PageBanner
        pageTitle={bbs[category]}
        homePageUrl="/"
        homePageText="Home"
        activePageText={bbs[category]}
      />

      <BbsList contents={contents} />

      <Footer />
    </>
  );
};

export default Bbs;
