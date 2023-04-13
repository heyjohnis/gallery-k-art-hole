import React from "react";
import Link from "next/link";

const News = () => {
  return (
    <>
      <section className="news-area pt-100 pb-140">
        <div className="container">
          <div className="section-title">
            <span>CUSTOMER SERVICE</span>
            <h2>고객 지원</h2>
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
                  <Link href="/news-details">
                    <img src="/images/blog/blog1.png" alt="Image" />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <Link href="/news-details">
                    <span>NEWS</span>
                    <h3>그린갤러리 소식</h3>
                  </Link>

                  <p>
                    골프와 예술, 그린갤러리 골프멤버십은 국내 미술품 시장 1위 갤러리케이가 새롭게 선보이는 프리미…
                  </p>

                  <Link href="/news-details" className="read-more">
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
                  <Link href="/news-details">
                    <img src="/images/blog/blog2.png" alt="Image" />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <Link href="/news-details">
                    <span>EVENT</span>
                    <h3>그린갤러리 이벤트</h3>
                  </Link>

                  <p>
                    골프와 예술, 그린갤러리 골프멤버십은 국내 미술품 시장 1위 갤러리케이가 새롭게 선보이는 프리미…
                  </p>

                  <Link href="/news-details" className="read-more">
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
                  <Link href="/news-details">
                    <img src="/images/blog/blog3.png" alt="Image" />
                  </Link>
                </div>

                <div className="news-content-wrap">

                  <Link href="/news-details">
                    <span>EVENT</span>
                    <h3>그린갤러리 이벤트</h3>
                  </Link>

                  <p>
                    골프와 예술, 그린갤러리 골프멤버십은 국내 미술품 시장 1위 갤러리케이가 새롭게 선보이는 프리미…
                  </p>

                  <Link href="/news-details" className="read-more">
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
                  <Link href="/news-details">
                    <img src="/images/blog/blog3_1.png" alt="Image" />
                  </Link>

                </div>

                <div className="news-content-wrap">

                  <Link href="/news-details">
                    <span>NEWS</span>
                    <h3>그린갤러리 소식</h3>
                  </Link>

                  <p>
                    골프와 예술, 그린갤러리 골프멤버십은 국내 미술품 시장 1위 갤러리케이가 새롭게 선보이는 프리미…
                  </p>

                  <Link href="/news-details" className="read-more">
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
