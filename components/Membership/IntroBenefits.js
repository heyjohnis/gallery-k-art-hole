import React from "react";
import Link from "next/link";

const IntroBenefits = () => {
  return (
    <>
      <section className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="business-content text-center">
                <span>회원혜택</span>
                <h2>멤버십 입회 혜택</h2>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div 
                  className="col-lg-5 col-sm-5 counter-nth position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <img src="/images/benefits/benefits1.png" alt="골프이미지"/>
                  <div className="single-counter benefits-text">
                    <h2>골프혜택</h2>
                    <p>전국 300여개 프리미엄 골프장 이용</p>
                  </div>
                </div>

                <div 
                  className="col-lg-5 col-sm-5 counter-nth position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <img src="/images/benefits/benefits2.png" alt="미술이미지"/>
                  <div className="single-counter benefits-text">
                    <h2>미술품 혜택</h2>
                    <p>국내 최정상 작가의 원화 작품 제공</p>
                  </div>
                </div>

                <div 
                  className="col-lg-5 col-sm-5 counter-nth position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <img src="/images/benefits/benefits3.png" alt="요트 이미지"/>
                  <div className="single-counter benefits-text">
                    <h2>프리미엄 레저</h2>
                    <p>요트, 제트보트 등 프리미엄 레저 제공</p>
                  </div>
                </div>

                <div 
                  className="col-lg-5 col-sm-5 counter-nth position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <img src="/images/benefits/benefits4.png" alt="여행 이미지"/>
                  <div className="single-counter benefits-text">
                    <h2>리조트</h2>
                    <p>국내 제휴 리조트 제공</p>
                  </div>
                </div>


                <div 
                  className="col-lg-5 col-sm-5 counter-nth position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <img src="/images/benefits/benefits5.png" alt="골프 이미지"/>
                  <div className="single-counter benefits-text">
                    <h2>포인트몰</h2>
                    <p>패션, 쇼핑, 여행, 레저, 미식, 인테리어 등 포인트몰 제공</p>
                  </div>
                </div>


                <div 
                  className="col-lg-5 col-sm-5 counter-nth position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <img src="/images/benefits/benefits6.png" alt="승마 이미지"/>
                  <div className="single-counter benefits-text">
                    <h2>부가서비스</h2>
                    <p>골프 여행, 골프 연습장, 승마, 로드 FC 등 다양한 부가서비스 혜택</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroBenefits;
