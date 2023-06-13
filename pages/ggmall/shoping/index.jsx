import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import baseUrl from "./../../../utils/baseUrl";
import Footer from "./../../../components/Layouts/Footer";
import PageBanner from "./../../../components/Common/PageBanner";
import GgmallList from "../../../components/Ggmall/GgmallList";
import styles from "./shoping.module.scss";

const ggList = ({ user }) => {
  const [, setLoading] = useState({});
  const [contents, setContents] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [keywordBtns, setKeywordBtns] = useState([]);
  const [checkedKeywords, setCheckedKeywords] = useState([]); // [{id: 1, key: "키워드"}, {id: 2, key: "키워드"}

  const getContents = () => {
    const keyword = [];
    checkedKeywords.forEach((id) => {
      keyword.push(keywords[id].key);
    });

    const url = `${baseUrl}/mall?pd_kind=01&keyword=${keyword.join("|")}`;
    axios({ method: "get", url })
      .then(({ data }) => {
        setContents(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getContents();
  }, [checkedKeywords]);

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      Router.push("/login");
    }
    getContents();
  }, [user]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckedKeywords((prev) => [...prev, id]);
    } else {
      setCheckedKeywords((prev) => prev.filter((item) => item !== id));
    }
    console.log("checkedKeywords", checkedKeywords);
  };
  // Keyword 추출
  useEffect(() => {
    const url = `${baseUrl}/mall/keyword`;
    axios({ method: "post", url, data: { pd_kind: "01" } }).then(({ data }) => {
      console.log("data", data);
      if (data.keyword) {
        let keywordSet = new Set(data.keyword.split(","));
        keywordSet.delete("");
        setKeywords(
          Array.from(keywordSet).reduce(
            (acc, cur, i) => [...acc, { id: i, key: cur }],
            []
          )
        );
      }
    });
  }, []);

  useEffect(() => {
    const btns = keywords.map((keyword) => (
      <div className={styles.checkButton} key={keyword.id}>
        <input
          key={keyword.id}
          id={keyword.id}
          type="checkbox"
          onChange={(e) => handleSingleCheck(e.target.checked, keyword.id)}
          checked={checkedKeywords.includes(keyword.id) ? true : false}
        />
        <label htmlFor={keyword.id}>{keyword.key}</label>
      </div>
    ));
    setKeywordBtns(btns);
  }, [keywords, checkedKeywords]);

  return (
    <>
      <PageBanner
        pageTitle="GG 쇼핑"
        homePageUrl="/ggmall/service/#"
        homePageText="GG MALL"
        activePageText="GG 쇼핑"
      />
      <section className="container">
        <ul className={styles.keywordBtns}>{keywordBtns}</ul>
      </section>
      <GgmallList contents={contents} productKind={"shoping"} />

      <Footer />
    </>
  );
};

export default ggList;
