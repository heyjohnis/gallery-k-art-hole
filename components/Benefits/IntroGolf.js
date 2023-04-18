import React from "react";
import Link from "next/link";

const IntroGolf = () => {
  return (
    <>
      <section className="business-area pt-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="business-content text-center">
                <span>Green Gallery Golf</span>
                <h2>골프 서비스</h2>
                <p>프리미엄 골프장 27개소 포함해 전국 300여 곳의 골프장에서 활용할 수 있습니다.<br/>
                    300억원 상당의 회원권 소지한 것 이상의 혜택을 받으실 수 있습니다.</p>
              </div>
            </div>

        
          </div>
        </div>
      </section>

      <div className="white-shape mt-30">
        <img src="/images/benefits/shape_top.png" alt="Image" />
      </div>
      <div className="golf_map">
        <img src="/images/benefits/golf1.png" alt="골프장 지도"/>
      </div>
    </>
  );
};

export default IntroGolf;
