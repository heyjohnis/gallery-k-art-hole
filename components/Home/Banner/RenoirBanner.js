import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, EffectFade } from "swiper";
import styles from "../home.module.scss";

export default function RenoirBanner() {
  return (
    <Swiper
      effect="fade"
      spaceBetween={0}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      modules={[Autoplay, A11y, EffectFade]}
      className={`hero-swiper ${styles.swiper}`}
    >
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideRenoir1}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    나의 가치를 <span className={``}>그린</span>다
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
                    <img src="/images/main/noblesse.png" alt="noblesse k" />
                  </div>
                </div>

                <div className={styles.artworkTitle}>
                  <span>박해강 - 달과 검은토끼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideRenoir2}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    나의 가치를 <span className={``}>그린</span>다
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
                    <img src="/images/main/noblesse.png" alt="noblesse k" />
                  </div>
                </div>

                <div className={styles.artworkTitle}>
                  <span>박해강 - 달과 검은토끼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideRenoir3}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    나의 가치를 <span className={``}>그린</span>다
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
                    <img src="/images/main/noblesse.png" alt="noblesse k" />
                  </div>
                </div>

                <div className={styles.artworkTitle}>
                  <span>박해강 - 달과 검은토끼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
