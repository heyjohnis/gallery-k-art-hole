import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "./../../../utils/baseUrl";
import Footer from "./../../../components/Layouts/Footer";
import PageBanner from "./../../../components/Common/PageBanner";
import GgmallList from "../../../components/Ggmall/GgmallList";
import SearchKeyword from "../../../components/Ggmall/SearchKeyword";
import { ggmallKind } from "../../../utils/cmmCode";
import { POST } from "../../../utils/restApi";

const INITIAL_SEARCH = {
  keyword: "",
  search_word: "",
};

const ggList = ({ user }) => {
  const router = useRouter();
  const [contents, setContents] = useState([]);
  const [pdKindName, setPdKindName] = useState("");
  const [pdKind, setPdKind] = useState(router.query.slug);
  const [searchData, setSearchData] = useState(INITIAL_SEARCH);

  const getContents = ({ search_word, keyword }) => {
    const req = {
      pd_kind: pdKind,
      keyword,
      search_word: search_word,
      membership: user?.membership,
      service_group: user?.service_group,
    };
    console.log("getContents req: ", req);
    POST("/mall", req).then((res) => {
      console.log("mall res: ", res);

      setContents(res?.data);
    });
  };
  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      Router.push("/login");
    }
  }, [user]);

  useEffect(() => {
    if (!router.query.slug) return;
    const pd_kind = router.query.slug;
    console.log("pd_kind: ", pd_kind);
    setPdKind(pd_kind);
    setPdKindName(ggmallKind[pdKind]);
  }, [router.query.slug, searchData]);

  useEffect(() => {
    if (pdKind) getContents({ ...searchData });
  }, [pdKind]);

  return (
    <>
      <PageBanner
        pageTitle={pdKindName}
        homePageUrl={`/ggmall/list/${pdKind}`}
        homePageText={pdKind === "gift" ? "MEMBER PRIVILEGES" : "GG MALL"}
        activePageText={pdKindName}
      />
      {pdKind === "gift" && (
        <section className="team-area mt-5">
          <div className="container">
            <img src="/images/gift_guide.jpg" alt="gift_guide" className="pc" />
            <img
              src="/images/gift_guide_mobile.jpg"
              alt="gift_guide"
              className="mobile"
            />
          </div>
        </section>
      )}
      <SearchKeyword setSearchData={setSearchData} serviceKind={pdKind} />

      <GgmallList contents={contents} productKind={pdKind} />

      <Footer />
    </>
  );
};

export default ggList;
