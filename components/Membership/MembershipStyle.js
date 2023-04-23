import React from "react";
import Link from "next/link";

const MembershipStyle = () => {

  return (
    <>
      <section className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title membership">
            <span>그린갤러리 골프멤버십 소개</span>
            <h2>멤버십 하나로 전국 300개의 골프장과 미술품,<br/>부가 혜택까지 즐길 수 있는 기회!</h2>
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
                      <img src="/images/membership/membership1.png" alt="미술관 사진"/>
                      <div className="pricing-top-heading">
                        <h3>맞춤형 상품</h3>
                        <p>미술품</p>
                      </div>

                      <ul>
                        <li>
                          <span class="list_icon"></span>
                          고객의 선호도와 소비성향에 부합하는 맞춤형 상품 구성
                        </li>
                        <li>
                          <span class="list_icon"></span>
                          한국미술협회에서 인증하는 정찰 원화 작품
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
                      <img src="/images/membership/membership2.png" alt="미술관 사진"/>
                      <div className="pricing-top-heading">
                        <h3>다양한 상품</h3>
                        <p>프리미엄 골프 멤버십</p>
                      </div>

                      <ul>
                        <li>
                          <span class="list_icon"></span>
                          프리미엄 골프장 및 전국 300여 곳
                        </li>
                        <li>
                          <span class="list_icon"></span>
                          해당 골프장 회원과 동일한 서비스 제공
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
                      <img src="/images/membership/membership3.png" alt="미술관 사진"/>
                      <div className="pricing-top-heading">
                        <h3>편리한 상품</h3>
                        <p>포인트몰</p>
                      </div>

                      <ul>
                        <li>
                          <span class="list_icon"></span>
                          전반에 걸쳐 품격을 높여주는 멤버십 커뮤니티 서비스
                        </li>
                        <li>
                          <span class="list_icon"></span>
                          패션, 쇼핑, 여행, 레저, 미식, 인테리어 등 럭셔리라이프스타일 
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
