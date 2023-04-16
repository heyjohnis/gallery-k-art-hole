import React from "react";
import Link from "next/link";

const GreenGolf = () => {
  return (
    <>
      <section className="business-area mtb-70">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 mt-50">
              <div className="row mb-60 text-center about-greengolf">

                <img src="/images/company/campany_logo.png" alt="그린갤러리 로고" />
                <h2>그린갤러리 골프</h2>
                <div className="single-business">
                  <p>
                  그린갤러리 골프멤버십은 프리미엄 골프장 27개소를 포함한 경기권, 강원권, 충북권, 경북권, 전라권, 충남권, 제주권 등 전국 300여 곳의 골프장을 동일한 권리로 이용하실 수 있습니다.
                  <br/>또한 회당 50%~75%, 최대 40~60만원의 그린피 지원금을 제공해 차별화된 지원 서비스를 제공합니다. 그린갤러리 골프멤버십을 통해 전국 프리미엄 골프장을 원하는 시간에 이용해 보세요.  
                  </p>
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="row golf_main">
                <div 
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <img src="/images/company/about_greengolf.png" alt="골프장 전경" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreenGolf;
