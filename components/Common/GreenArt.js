import React from "react";
import Link from "next/link";

const GreenArt = () => {
  return (
    <>
      <section className="main-art-area mt-140">
        <div className="container pb-140">
          <div className="row align-items-start justify-content-between">
            <div className="col-lg-8">
            </div>

            <div className="col-md-4 main-art-text">
              <div 
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="900"
              >
                <span>GREEN GALLERY ART</span>
                <h2>
                  그린갤러리 미술품
                </h2>
                <p>
                  골프와 예술, 그린갤러리 골프멤버십은 국내 미술품 시장 1위 갤러리케이가 새롭게 선보이는 프리미엄 골프멤버십으로서 기존에 없던 독보적인 혜택을 선사합니다. 
                  그린갤러리 골프멤버쉽을 구매하시면 회원권의 50% 금액에 해당하는 미술품 혜택부터 전국 명문 골프장 라운딩, 제휴 호텔, 요트, 굿즈 등  부가적인 혜택까지 프리미엄 서비스를 제공해 고객님의 라이프스타일을 한층 더 높이실 수 있습니다.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreenArt;
