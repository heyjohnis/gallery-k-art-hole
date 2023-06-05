import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import baseUrl from "./../../../utils/baseUrl";
import Footer from "./../../../components/Layouts/Footer";
import PageBanner from "./../../../components/Common/PageBanner";
import GgmallList from "../../../components/Ggmall/GgmallList";

const ggList = ({ user }) => {
  const [, setLoading] = useState({});
  const [contents, setContents] = useState("");

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      Router.push("/login");
    }
    setLoading(true);

    const url = `${baseUrl}/mall?pd_kind=01`;
    axios({ method: "get", url })
      .then(({ data }) => {
        setContents(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  {/* harry 0605 pagebanner 정보 변경 */ }
  return (
    <>
      <PageBanner
        pageTitle="GG 쇼핑"
        homePageUrl="/ggmall/service/#"
        homePageText="GG MALL"
        activePageText="GG 쇼핑"
      />

      <GgmallList contents={contents} productKind={"shoping"} />

      <Footer />
    </>
  );
};

export default ggList;
