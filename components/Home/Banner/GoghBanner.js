import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, EffectFade } from "swiper";
import styles from "../home.module.scss";

export default function GoghBanner() {
  return (
    <Swiper
      effect="fade"
      spaceBetween={0}
      autoplay={{
        delay: 1000000000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      modules={[Autoplay, A11y, EffectFade]}
      className={`hero-swiper ${styles.swiper}`}
    >
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideGogh1}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    나의 명예를 <span className={``}>그린</span>다
                    <span className={``}>.</span>
                  </h1>
                </div>
                <div className={`${styles.discriptionWrap}`}>
                  GOLF BOOKING
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="52"
                    viewBox="0 0 32 52"
                    fill="none"
                  >
                    <path
                      d="M16 0V50M16 50L1 35.8491M16 50L31 35.8491"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                  <div className={styles.imageWrap}>
                    <img src="/images/main/president.png" alt="presudent k" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideGogh2}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    나의 명예를 <span className={``}>그린</span>다
                    <span className={``}>.</span>
                  </h1>
                </div>
                <div className={`${styles.discriptionWrap}`}>
                  GOLF BOOKING
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="52"
                    viewBox="0 0 32 52"
                    fill="none"
                  >
                    <path
                      d="M16 0V50M16 50L1 35.8491M16 50L31 35.8491"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                  <div className={styles.imageWrap}>
                    <img src="/images/main/president.png" alt="presudent k" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideGogh3}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    나의 명예를 <span className={``}>그린</span>다
                    <span className={``}>.</span>
                  </h1>
                </div>
                <div className={`${styles.discriptionWrap}`}>
                  GOLF BOOKING
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="52"
                    viewBox="0 0 32 52"
                    fill="none"
                  >
                    <path
                      d="M16 0V50M16 50L1 35.8491M16 50L31 35.8491"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                  <div className={styles.imageWrap}>
                    <img src="/images/main/president.png" alt="presudent k" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
