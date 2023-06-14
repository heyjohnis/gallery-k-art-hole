/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styles from "./Ggmall.module.scss";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const INITIAL_WORDS = {
  keyword: "",
  search_word: "",
};

const SearchKeyword = ({ searchWords, serviceKind }) => {
  const [words, setWords] = useState(INITIAL_WORDS);
  const [keywordBtns, setKeywordBtns] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [checkedKeywords, setCheckedKeywords] = useState([]); // [{id: 1, key: "키워드"}, {id: 2, key: "키워드"}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckedKeywords((prev) => [...prev, id]);
    } else {
      setCheckedKeywords((prev) => prev.filter((item) => item !== id));
    }
  };

  const searchInputWord = () => {
    searchWords(words);
    console.log("words: ", words);
  };

  useEffect(() => {
    const keyword = [];
    checkedKeywords.forEach((id) => {
      keyword.push(keywords[id].key);
    });
    searchWords({ ...words, keyword: keyword.join("|") });
    setWords((prev) => ({ ...prev, keyword: keyword.join("|") }));
  }, [checkedKeywords]);

  // Keyword 추출
  useEffect(() => {
    const url = `${baseUrl}/mall/keyword`;
    axios({ method: "post", url, data: { pd_kind: serviceKind } }).then(
      ({ data }) => {
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
      }
    );
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
    <section className={`container ${styles.searchArea}`}>
      <ul className={styles.keywordBtns}>{keywordBtns}</ul>
      <div className={styles.inputKeyword}>
        <div className="input-group">
          <div className="form-outline">
            <input
              id="search-focus"
              type="search"
              name="search_word"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="default-btn"
            onClick={searchInputWord}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchKeyword;
