import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import baseUrl from "./../../../utils/baseUrl";
import Footer from "./../../../components/Layouts/Footer";
import PageBanner from "./../../../components/Common/PageBanner";
import GgmallList from "../../../components/Ggmall/GgmallList";
import SearchKeyword from "../../../components/Ggmall/SearchKeyword";

const INITIAL_SEARCH = {
  keyword: "",
  search_word: "",
};

const ggList = ({ user }) => {
  const [, setLoading] = useState({});
  const [contents, setContents] = useState("");

  const getContents = ({ keyword, search_word }) => {
    const url = `${baseUrl}/mall?pd_kind=02&keyword=${keyword}&search_word=${search_word}`;
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
    getContents(INITIAL_SEARCH);
  }, [user]);

  return (
    <>
      <PageBanner
        pageTitle="제휴서비스"
        homePageUrl="/ggmall/service/#"
        homePageText="GG MALL"
        activePageText="제휴서비스"
      />
      <SearchKeyword searchWords={getContents} serviceKind="02" />
      <GgmallList contents={contents} productKind={"service"} />

      <Footer />
    </>
  );
};

export default ggList;
