import React from "react";
import styles from "./landing.module.scss";
import Booking from "../components/Mypage/data/booking.json";
import Lottie from "react-lottie";
import Link from "next/link";

const lottieOptions = {
  animationData: Booking,
  loop: true,
  autoplay: true,
};

const landing = () => {
  return (
    <>
      <div>
        <img src="/images/landing.jpg" alt="landing" />
      </div>
      <div className={styles.btn_wrap}>
        <Link href="/contact">
          <div className={`btn ${styles.btn_booking}`}>
            <div className={styles.ani_booking}>
              <Lottie
                options={lottieOptions} // svg의 부모 div에 적용
              />
            </div>
            <span>상담문의</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default landing;
