import React from "react";
import Link from "next/link";

const GreenGolf = () => {
  return (
    <>
      <section className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 mt-100">
              <div className="row mb-60">
                <div className="col-lg-8 col-sm-8">
                  <div className="business-content">
                    <span>GREEN GALLERY GOLF</span>
                    <h2>그린갤러리 골프</h2>
                  </div>

                  <div className="single-business">
                    <p>
                      골프와 예술, 그린갤러리 골프멤버십은 국내 미술품 시장 1위 갤러리케이가 새롭게 선보이는 프리미엄 골프멤버십으로서 기존에 없던 독보적인 혜택을 선사합니다. 
                      그린갤러리 골프멤버쉽을 구매하시면 회원권의 50% 금액에 해당하는 미술품 혜택부터 전국 명문 골프장 라운딩, 제휴 호텔, 요트, 굿즈 등  부가적인 혜택까지 프리미엄 서비스를 제공해 고객님의 라이프스타일을 한층 더 높이실 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <img src="/images/main/golf_1.png" alt="골프장 전경" />
            </div>

            <div className="col-lg-6">
              <div className="row golf_main">
                <div 
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <img src="/images/main/golf_2.png" alt="골프장 전경" />
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
