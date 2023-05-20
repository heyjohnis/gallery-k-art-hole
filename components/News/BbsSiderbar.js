import React from "react";
import Link from "next/link";

const NewsSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <h3 className="widget-title">검색하기</h3>

          <div className="post-wrap">
            <form className="search-form">
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="검색어를 입력하세요"
                />
              </label>

              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">다른 기사 보기</h3>

          <div className="post-wrap">
            <article className="item">
              <Link href="/news-details" className="thumb">
                <span className="fullimage cover bg1" role="img">
                  <img src="/images/news/news1.jpg" alt="뉴스 썸네일" />
                </span>
              </Link>

              <div className="info">
                <time>2023.04.24</time>
                <h4 className="title usmall">
                  <Link href="/news-details">
                    갤러리K, 골프회원권 ‘그린갤러리’ 출시
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news-details" className="thumb">
                <span className="fullimage cover bg2" role="img">
                  <img src="/images/news/news2.jpg" alt="뉴스 썸네일" />
                </span>
              </Link>

              <div className="info">
                <time> 2023.04.26</time>
                <h4 className="title usmall">
                  <Link href="/news-details">
                    갤러리K, 쇼골프와 골프회원권 ‘그린갤러리’ 공동 사업 위한
                    협력 체결
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSidebar;
