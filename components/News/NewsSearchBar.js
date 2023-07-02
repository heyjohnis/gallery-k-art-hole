/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function NewsSearchBar({ content }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const searchContent = (e) => {
    e.preventDefault();
    router.push(`/bbs/${content.category}/${search}`);
  };

  return (
    <div className="widget widget_search">
      <h3 className="widget-title">검색하기</h3>

      <div className="post-wrap">
        <form className="search-form">
          <label>
            <input
              type="search"
              className="search-field"
              placeholder="검색어를 입력하세요"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          <button type="submit" onClick={searchContent}>
            <i className="bx bx-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
