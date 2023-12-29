import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../home.module.scss";

export default function MonetBanner() {
  return (
    <Swiper className={`hero-swiper ${styles.swiper}`}>
      <SwiperSlide>
        <div className={`jumpx-slider-item ${styles.slideMonet}`}>
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
                  <p>알바트로스를 꿈꾸며 비상하는 독수리처럼</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
