import React from "react";
import Link from "next/link";

const MembershipStyle = () => {
  return (
    <>
      <section className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title membership">
            <span>그린갤러리 골프멤버십 소개</span>
            <h2>
              멤버십 하나로 전국 300개의 골프장과 미술품,
              <br />
              부가 혜택까지 즐길 수 있는 기회!
            </h2>
          </div>

          <div className="tab quote-list-tab">
            <div className="tab_content">
              <div id="tab1" className="tabs_item">
                <div className="row justify-content-center">
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <div className="single-pricing membership-benefits">
                      <img
                        src="/images/membership/membership1.png"
                        alt="미술관 사진"
                      />
                      <div className="pricing-top-heading">
                        <h3>프리미엄 골프 멤버</h3>
                      </div>

                      <ul>
                        <li>
                          56
                          <span className="list_icon"></span>
                          프리미엄 골프장 및 전국 300여 곳
                        </li>
                        <li>
                          <span className="list_icon"></span>
                          해당 골프장 회원과 동일한 서비스 제공
                        </li>
                      </ul>

                      <Link href="/art" className="default-btn">
                        자세히 보기
                      </Link>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <div className="single-pricing membership-benefits">
                      <img
                        src="/images/membership/membership2.png"
                        alt="미술관 사진"
                      />
                      <div className="pricing-top-heading">
                        <h3>미술품</h3>
                      </div>

                      <ul>
                        <li>
                          <span className="list_icon"></span>
                          한국미술협회에서 인증하는 정찰 원화 작품
                        </li>
                      </ul>

                      <Link href="/golf" className="default-btn">
                        자세히 보기
                      </Link>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="500"
                  >
                    <div className="single-pricing membership-benefits">
                      <img
                        src="/images/membership/membership3.png"
                        alt="미술관 사진"
                      />
                      <div className="pricing-top-heading">
                        <h3>포인트몰</h3>
                      </div>

                      <ul>
                        <li>
                          <span className="list_icon"></span>
                          패션, 쇼핑, 여행, 레저, 미식, 인테리어 등
                          럭셔리라이프스타일
                        </li>
                      </ul>

                      <Link href="/addservice" className="default-btn">
                        자세히 보기
                      </Link>
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

export default MembershipStyle;
