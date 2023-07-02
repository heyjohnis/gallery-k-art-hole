/* eslint-disable react/prop-types */
import React from "react";
import NewsSidebar from "./NewsSidebar";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import baseUrl from "../../utils/baseUrl";

const BbsDetailContent = ({ content }) => {
  const router = useRouter();

  const gotoDetailContent = async (direction) => {
    axios
      .post(`${baseUrl}/bbs/prev-next-content`, {
        category: content.category,
        direction,
        bbs_no: content.bbs_no,
      })
      .then((res) => {
        if (!res.data.bbs_no) {
          const dirctNm = direction === "prev" ? "이전" : "다음";
          alert(`${dirctNm} 게시글이 없습니다.`);
          return;
        } else {
          router.push(`/bbs/detail/${res.data.bbs_no}`);
        }
      });
  };

  return (
    <>
      <section className="news-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={content.thumb_img} alt="Image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>{content.reg_date}</li>
                      <li>
                        {content.writer ? content.writer : content.reg_name}
                      </li>
                    </ul>
                  </div>

                  <h3>{content.title}</h3>

                  <div
                    dangerouslySetInnerHTML={{ __html: content.content }}
                  ></div>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div
                      className="nav-previous nav-button"
                      onClick={() => gotoDetailContent("prev")}
                    >
                      <i className="bx bx-left-arrow-alt"></i> 이전기사
                    </div>
                    <div className="nav-goto-list">
                      <Link href={`/bbs/${content.category}`}>목록으로</Link>
                    </div>
                    <div
                      className="nav-next nav-button"
                      onClick={() => gotoDetailContent("next")}
                    >
                      다음기사 <i className="bx bx-right-arrow-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <NewsSidebar content={content} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BbsDetailContent;
