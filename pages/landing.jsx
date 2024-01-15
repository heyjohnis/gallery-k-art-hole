import React, { useState, useEffect } from "react";
import styles from "./landing.module.scss";
import Booking from "../components/Mypage/data/booking.json";
import Lottie from "react-lottie";
import Link from "next/link";
import YouTube from "react-youtube";
import LandingContactForm from "../components/LandingContactForm";

const lottieOptions = {
  animationData: Booking,
  loop: true,
  autoplay: true,
};

const landing = () => {
  const [openContact, setOpenContact] = useState(false);
  const [changeImg, setChangeImg] = useState("/images/landing_240109.jpg");

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  
useEffect(() => {
  const handWindowSize = () => {
    const { innerWidth } = window;
    if (innerWidth < 768) {
      setChangeImg("/images/landing_240115_m.jpg");
    } else {
      setChangeImg("/images/landing_240115.jpg");
    }
  };
  
  handWindowSize();
  
  window.addEventListener("resize", handWindowSize);
  return () => {
    window.removeEventListener("resize", handWindowSize);
  };
  
}, []);



  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.imageWrap}>
        {/* <img src="/images/landing.jpg" alt="landing" /> */}

        <img src={ changeImg } className="landing_img" alt="그린갤러리 상품 설명 이미지" />
        
      </div>
      {/* <div className={styles.youtube_wrap} style={{backgroundColor: "#171717"}}>
        <div className={styles.youtube} style={{margin: "0 auto"}}>
          <YouTube
            videoId="ZQw7meQJWTk"
            className={styles.scaleVideo}
            opts={opts}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </div>
      </div> */}
      {/* <div className={styles.youtube_wrap}>
        <h3>
          최고의 품격과 서비스로 당신의 자부심이 될<br />
          그린갤러리 멤버십을 지금 시작하세요.
        </h3>
        <div className={styles.youtube}>
          <YouTube
            videoId="ZQw7meQJWTk"
            className={styles.scaleVideo}
            opts={opts}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </div>
      </div> */}
      <div style={{ position: "absolute" }}>
        <Link href="#contact" onClick={() => setOpenContact(!openContact)}>
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
      <LandingContactForm openContact={openContact} />
    </div>
  );
};

export default landing;
