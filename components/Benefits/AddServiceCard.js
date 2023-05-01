import React from "react";
import Link from "next/link";

const AddServiceCard = () => {
  return (
    <>
      <section className="news-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="business-content text-center">
                <span>Green Gallery Benefits</span>
                <h2>그린갤러리 부가혜택</h2>
                <p>골프여행, 호텔, 리조트, 프라이빗 파티 등 다양한 부가 서비스를 제공합니다. </p>
              </div>
              <div className="business-content text-center mt-100">
                <h2>자사 보유 컨텐츠</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div>
                  <img src="/images/benefits/card1.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>갤러리카페 & 큐레이팅</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div>
                  <img src="/images/benefits/card2.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>여수, 제주, 부산 등 호텔</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div>
                  <img src="/images/benefits/card3.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>프리미엄 골프여행 (여수)</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div>
                  <img src="/images/benefits/card4.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>전국 주요 리조트, 부대시설</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div>
                  <img src="/images/benefits/card5.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>마리나 요트, 제트보트</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div>
                  <img src="/images/benefits/card6.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>승마, 로드FC 등</h3>
                </div>
              </div>
            </div>

          </div>


          <div className="row align-items-center mt-100">
            <div className="col-lg-12">
              <div className="business-content text-center">
                <h2>제휴 컨텐츠</h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div>
                  <img src="/images/benefits/card7.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>골프연습장 (예정)</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div>
                  <img src="/images/benefits/card8.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>굿즈 (예정)</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div>
                  <img src="/images/benefits/card9.png" alt="Image" />
                </div>

                <div className="news-content-wrap service-content-warp">
                  <h3>국내외 일반/골프 여행패키지 (예정)</h3>
                </div>
              </div>
            </div>

          </div>


        </div>
      </section>
    </>
  );
};

export default AddServiceCard;
