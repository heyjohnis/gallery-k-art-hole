import React from "react";
import styles from "./landing.module.scss";
import Booking from "../components/Mypage/data/booking.json";
import Lottie from "react-lottie";
import Link from "next/link";
import YouTube from "react-youtube";
import ContactForm from "../components/Contact/ContactForm";
import LandingContactForm from "../components/LandingContactForm";

const lottieOptions = {
  animationData: Booking,
  loop: true,
  autoplay: true,
};

const landing = () => {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={`container ${styles.container}`}>
      <div>
        <img src="/images/landing.jpg" alt="landing" />
      </div>
      <div className={styles.youtube_wrap}>
        <h3>
          최고의 품격과 서비스로 당신의 자부심이 될<br />
          그린갤러리 멤버십을 지금 시작하세요.
        </h3>
        <div className={styles.youtube}>
          <YouTube
            videoId="ZQw7meQJWTk"
            className={styles.scaleVideo}
            opts={opts}
            onReady={onPlayerReady}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </div>
      </div>
      <div style={{ position: "absolute" }}>
        <Link href="#contact">
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
      <LandingContactForm />
    </div>
  );
};

export default landing;
