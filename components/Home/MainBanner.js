import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const MainBanner = () => {
  return (
    <>
      <section className="slider-area">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/main/main_01.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden one">
                      <h1>
                        <b>격이 높은 당신에게 바치는</b>
                        <br />
                        가장 명예로운 <b>골프멤버십</b>
                      </h1>
                      <div className="slider-btn">
                        <Link
                          href="/mypage/reservation/"
                          className="default-btn black"
                        >
                          예약하기
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/main/main_02.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden two">
                      <h1>
                        <b>300억원</b> 상당의
                        <br />
                        <b>전국 300여 지역 골프장</b> 이용
                      </h1>
                      <div className="slider-btn">
                        <Link
                          href="/mypage/reservation/"
                          className="default-btn black"
                        >
                          예약하기
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/main/main_03.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <h1>
                        <b>당신</b>의 <b>품격</b>을 높여주는
                        <br />
                        <b>고품격 원화 미술품</b> 증정
                      </h1>

                      <div className="slider-btn">
                        <Link
                          href="/mypage/reservation/"
                          className="default-btn black"
                        >
                          예약하기
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/main/main_04.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <h1>
                        <b>멤버십 포인트몰</b>로 즐기는
                        <br />
                        차별화된 <b>프리미엄 혜택</b>
                      </h1>

                      <div className="slider-btn">
                        <Link
                          href="/mypage/reservation/"
                          className="default-btn black"
                        >
                          예약하기
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default MainBanner;
