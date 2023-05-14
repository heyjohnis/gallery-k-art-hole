import React from "react";
import Link from "next/link";

const BenefitStyle = () => {

  return (
    <>
      <section className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title membership">
            <h2>그린갤러리 골프 멤버십만의 특별 혜택</h2>
          </div>

          <div className="tab quote-list-tab">

            <div className="tab_content">
              <div id="tab1" className="tabs_item">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing membership-benefits">
                      <img src="/images/benefits/green_benefit1.png" alt="캐디백 사진"/>
                      <div className="pricing-top-heading">
                        <h3>차별화된 사은품 증정</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                  <div className="single-pricing membership-benefits">
                      <img src="/images/benefits/green_benefit2.png" alt="골프 사진"/>
                      <div className="pricing-top-heading">
                        <h3>프로골퍼와 동반 라운드</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing membership-benefits">
                      <img src="/images/benefits/green_benefit3.png" alt="컨텐츠 제작 사진"/>
                      <div className="pricing-top-heading">
                        <h3>프리미엄 골프 투어</h3>
                      </div>

                    </div>
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

export default BenefitStyle;
