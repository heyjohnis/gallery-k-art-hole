import React from "react";
import Link from "next/link";

const AboutCompany = () => {
  return (
    <>
      <section className="industries-serve-area company-area pt-100">
        <div className="container">
          <div 
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <span>골프와 예술의 만남</span>
            <h2>그린갤러리는 골프와 예술이 만나 탄생한
              <br/>새로운 문화의 시작입니다.</h2>
            <div className="row justify-content-center">
              <div className="col-lg-5 col-sm-6 justify-content-center">
                <img src="/images/logo.svg" alt="로고 이미지"/>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutCompany;
