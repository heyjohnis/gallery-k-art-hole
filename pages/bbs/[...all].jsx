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
    review: "이벤트 및 이용후기",
  };

  useEffect(() => {
    setLoading(true);
    console.log("router.query: ", router.query);
    const query = router.query.all;
    const cate = query[0];
    let searchWord = "";
    if (query.length > 1) {
      searchWord = query[1];
    }
    setCategory(cate);
    const url = `${baseUrl}/bbs/${cate}?searchWord=${searchWord}`;
    axios({ method: "get", url })
      .then(({ data }) => {
        setContents(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router.query]);

  {
    /* harry 0605 pagebanner 정보 변경 */
  }
  return (
    <>
      <PageBanner
        pageTitle={bbs[category]}
        homePageUrl="/contact"
        homePageText="SUPPORT"
        activePageText={bbs[category]}
      />

      <BbsList contents={contents} />

      <Footer />
    </>
  );
};

export default Bbs;
