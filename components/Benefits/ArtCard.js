import React from "react";
import Link from "next/link";

const ArtCard = () => {
  return (
    <>
      <section className="news-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="business-content text-center mt-100">
                <h2>대표작품</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <img src="/images/benefits/art1.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>조재만 - 색의 감정 #115</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <img src="/images/benefits/art2.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>최장칠 - Randomicity 222</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <img src="/images/benefits/art3.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>조재만 - 겨울나무 #312</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <img src="/images/benefits/art4.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>조재만 - 빛의감정 #510</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <img src="/images/benefits/art5.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>조재만 - Big Island #100</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <img src="/images/benefits/art6.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>조재만 - Untitled #302</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="business-content text-center mt-100">
              <Link href="https://www.artnomics.co.kr/" target="_blank" className="default-btn">
              작품보러가기
              </Link>     
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ArtCard;
