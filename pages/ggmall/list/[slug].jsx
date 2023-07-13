import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "./../../../utils/baseUrl";
import Footer from "./../../../components/Layouts/Footer";
import PageBanner from "./../../../components/Common/PageBanner";
import GgmallList from "../../../components/Ggmall/GgmallList";
import SearchKeyword from "../../../components/Ggmall/SearchKeyword";
import { ggmallKind } from "../../../utils/cmmCode";

const INITIAL_SEARCH = {
  keyword: "",
  search_word: "",
};

const ggList = ({ user }) => {
  const router = useRouter();
  const [, setLoading] = useState({});
  const [contents, setContents] = useState("");
  const [pdKind, setPdKind] = useState("");
  const [pdKindName, setPdKindName] = useState("");

  const getContents = ({ keyword, search_word }) => {
    console.log("pdKind: ", pdKind);
    const url = `${baseUrl}/mall?pd_kind=${pdKind}&keyword=${keyword}&search_word=${search_word}`;
    axios({ method: "get", url })
      .then(({ data }) => {
        setContents(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      Router.push("/login");
    }
  }, [user]);

  useEffect(() => {
    setPdKind(router.query.slug);
  }, [router.query.slug]);

  useEffect(() => {
    if (pdKind) getContents(INITIAL_SEARCH);
    setPdKindName(ggmallKind[pdKind]);
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
            <img src="/images/gift_guide.jpg" alt="gift_guide" />
          </div>
        </section>
      )}
      <SearchKeyword searchWords={getContents} serviceKind={pdKind} />

      <GgmallList contents={contents} productKind={pdKind} />

      <Footer />
    </>
  );
};

export default ggList;
