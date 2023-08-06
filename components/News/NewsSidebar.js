/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NewsSearchBar from "./NewsSearchBar";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { bbs } from "../../utils/cmmCode";

const NewsSidebar = ({ content }) => {
  const [category, setCategory] = useState("");
  const [contents, setContents] = useState([]);

  useEffect(() => {
    if (content.category) {
      setCategory(content.category);
      axios
        .post(`${baseUrl}/bbs/recommend`, { category: content.category })
        .then((res) => {
          console.log("res", res.data);
          setContents(res.data);
        });
    }
  }, [content]);

  return (
    <>
      <div className="widget-area" id="secondary">
        <NewsSearchBar content={content} />
        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">다른 {bbs[category]} 보기</h3>

          <div className="post-wrap">
            {contents.length > 0 &&
              contents.map((item, i) => (
                <article key={i} className="item">
                  <Link href={`/bbs/detail/${item.bbs_no}`} className="thumb">
                    <span className="fullimage cover bg2" role="img">
                      <img src={item.thumb_img} alt="뉴스 썸네일" />
                    </span>
                  </Link>

                  <div className="info">
                    <time>{item.reg_date.substring(0, 10)}</time>
                    <h4 className="title usmall">
                      <Link href={`/bbs/detail/${item.bbs_no}`}>
                        {item.title}
                      </Link>
                    </h4>
                  </div>
                  <div className="clear"></div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSidebar;
