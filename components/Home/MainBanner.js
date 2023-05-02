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
                delay: 13000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Navigation, Autoplay]}
              className="hero-swiper"
            >
          <SwiperSlide>
            <div className="jumpx-slider-item" >
              <video className="bn_video" autoPlay loop muted>
                <source src="/video/bg_mov01.mp4" type="video/mp4"/>
              </video>
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden one">
                      <h1>골프는 자연이라는 캔버스에<br/>그리는 예술이다.</h1>
                      <div className="slider-btn">
                        <Link href="/membership" className="default-btn white">
                          자세히 보기
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/home/slider2.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden two">
                      <h1>골프는 예술이고<br/>코스는 캔버스다.</h1>
                      <div className="slider-btn">

                        <Link href="/membership" className="default-btn white">
                          자세히 보기
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
              style={{ backgroundImage: `url(/images/home/slider3.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <h1>예술가처럼 스윙하고 프로처럼 플레이하다.</h1>

                      <div className="slider-btn">
                        <Link href="/membership" className="default-btn white">
                          자세히 보기
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
};

export default MainBanner;
