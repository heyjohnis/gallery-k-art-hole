import React from "react";
import Link from "next/link";

const News = () => {
  return (
    <>
      <section className="news-area pt-100 pb-140">
        <div className="container">
          <div className="section-title">
            <h2>뉴스</h2>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/">
                    <img src="/images/blog/blog1.png" alt="Image" />
                  </Link>
                </div>

                <div className="news-content-wrap main-news">
                  <Link href="/">
                    <span>NEWS</span>
                    <h3>그린갤러리 소식</h3>
                  </Link>

                  <p>
                  그린갤러리 골프멤버십이 4월 18일 사전 오픈 합니다
                  </p>

                  <Link href="/" className="read-more">
                    자세히 보기<i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/">
                    <img src="/images/blog/blog2.png" alt="Image" />
                  </Link>
                </div>

                <div className="news-content-wrap main-news">
                  <Link href="/">
                    <span>EVENT</span>
                    <h3>그린갤러리 이벤트</h3>
                  </Link>

                  <p>
                  멤버십 가입 시 유명 브랜드 커스터마이징 골프백을 증정해 드립니다.
                  </p>

                  <Link href="/" className="read-more">
                    자세히 보기<i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/">
                    <img src="/images/blog/blog3.png" alt="Image" />
                  </Link>
                </div>

                <div className="news-content-wrap main-news">

                  <Link href="/">
                    <span>EVENT</span>
                    <h3>그린갤러리 이벤트</h3>
                  </Link>

                  <p>
                  프로골퍼와 동반라운드 및 프리미엄 골프 투어를 준비 중 입니다.
                  </p>

                  <Link href="/" className="read-more">
                    자세히 보기<i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            <div 
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/">
                    <img src="/images/blog/blog3_1.png" alt="Image" />
                  </Link>

                </div>

                <div className="news-content-wrap main-news">

                  <Link href="/">
                    <span>NEWS</span>
                    <h3>그린갤러리 소식</h3>
                  </Link>

                  <p>
                  럭셔리 라이프스타일 전반에 걸쳐 품격을 높여주는 멤버십 커뮤니티 서비스 제공 
                  </p>

                  <Link href="/" className="read-more">
                    자세히 보기<i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
