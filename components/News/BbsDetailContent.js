/* eslint-disable react/prop-types */
import React from "react";
import NewsSidebar from "./NewsSidebar";
import Link from "next/link";

const BbsDetailContent = ({ content }) => {
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
                      <li>강석봉 기자</li>
                    </ul>
                  </div>

                  <h3>{content.title}</h3>

                  <div
                    dangerouslySetInnerHTML={{ __html: content.content }}
                  ></div>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="bx bx-left-arrow-alt"></i> 이전기사
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="#">
                        다음기사 <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BbsDetailContent;
