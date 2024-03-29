import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, EffectFade } from "swiper";
import styles from "../home.module.scss";

export default function MonetBanner() {
  return (
    <Swiper
      effect="fade"
      spaceBetween={0}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        resistance: false,
      }}
      modules={[Autoplay, A11y, EffectFade]}
      className={`hero-swiper ${styles.swiper}`}
    >
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideMonet1}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    나의 미래를 <span className={``}>그린</span>다
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
                    className={styles.intro_arrow}
                  >
                    <path
                      d="M16 0V50M16 50L1 35.8491M16 50L31 35.8491"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className={styles.imageWrapTop}>
                    <img src="/images/main/elite.png" alt="elite k" />
                  </div>
                </div>

                <div className={styles.artworkTitle}>
                  <span>로사조 - Be a Princess II-2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideMonet2}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    나의 미래를 <span className={``}>그린</span>다
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
                    className={styles.intro_arrow}
                  >
                    <path
                      d="M16 0V50M16 50L1 35.8491M16 50L31 35.8491"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className={styles.imageWrapTop}>
                    <img src="/images/main/elite.png" alt="elite k" />
                  </div>
                </div>

                <div className={styles.artworkTitle}>
                  <span>로사조 - Be a Princess II-2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideMonet3}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    나의 미래를 <span className={``}>그린</span>다
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
                    className={styles.intro_arrow}
                  >
                    <path
                      d="M16 0V50M16 50L1 35.8491M16 50L31 35.8491"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className={styles.imageWrapTop}>
                    <img src="/images/main/elite.png" alt="elite k" />
                  </div>
                </div>

                <div className={styles.artworkTitle}>
                  <span>로사조 - Be a Princess II-2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
