import React from "react";
import Link from "next/link";

const GreenArt = () => {
  return (
    <>
      <section className="main-art-area mt-70">
        <div className="container pb-70">
          <div className="row d-flex align-items-start justify-content-between main-art-card">
            <div className="col-12 greenart_img">
              <img src="/images/main/bg_art.png" alt="콜렉터 이미지"/>
            </div>
            <div className="main-art-text">
              <div 
                className="about-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <span>GREEN GALLERY ART</span>
                <h2>
                  그린갤러리 미술품
                </h2>
                <p>
                검증된 제휴작가와 격조 있는 원화작품을 제공 드립니다. 그린갤러리 골프멤버십은 원화작품 납입금액의 30%~50% 상당의 원화작품을 제공합니다. 갤러리케이의 제휴작가는 작품 활동 기간 평균 20년 이상 중견 작가로서 한국미술협회에서 인증하는 정찰 원화 작품을 보유하고 있습니다. 190여명의 제휴작가와 11,000여점의 원화 작품을 만나보세요. 고객님의 선호도와 취향에 맞게 작품을 추천해드립니다. 
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
