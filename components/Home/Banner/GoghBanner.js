import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../home.module.scss";

export default function GoghBanner() {
  return (
    <Swiper className={`hero-swiper ${styles.swiper}`}>
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideGogh}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
                  <h1>
                    HIGHEND <br />
                    GOLF MEMBERSHIP
                    <span>.</span>
                  </h1>
                </div>
                <div className={`${styles.discriptionWrap}`}>
                  <p>결이 다른 행보로 격이 높은 인생을 살아 온 당신을 위해</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
