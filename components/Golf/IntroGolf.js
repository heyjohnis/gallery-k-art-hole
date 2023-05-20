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
                <h2>골프서비스</h2>
                <p>프리미엄 골프장 포함 전국 골프장에서 활용할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="white-shape mt-30">
        <img src="/images/benefits/shape_top.png" alt="Image" />
      </div>
      <div className="golf_map">
        <img src="/images/benefits/golf1.png" alt="골프장 지도" />
      </div>
    </>
  );
};

export default IntroGolf;
