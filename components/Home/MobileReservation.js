import React from "react";
import Link from "next/link";
import styles from "./MobileMain.module.scss";

export default function MobileReservation({ user }) {
  return (
    <>
      <h1 className={`${styles.titleTop}`}>
        {user?.user_name || "고객"}님
        <br />
        오늘 게임도 홀인원! 😄
      </h1>

      <div className={`${styles.btnWrap}`}>
        <div className={`${styles.leftBox}`}>
          <Link href="/golf/booking">
            <img
              className={`${styles.leftImg}`}
              src="/images/mobile/main/golfbag.png"
              alt="golfbag"
            />
            <img
              className={`${styles.leftImg2}`}
              src="/images/mobile/main/ball.png"
              alt="ball"
            />
            <span className={`${styles.leftText}`}>
              내가 원하는
              <br />
              골프장 예약하기
            </span>
          </Link>
        </div>

        <div className={`${styles.rightBox}`}>
          <Link href="/screengolf/booking">
            <img
              className={`${styles.rightImg}`}
              src="/images/mobile/main/coin.png"
              alt="coin"
            />
            <span className={`${styles.rightText}`}>
              스크린골프
              <br />
              포인트 신청하기
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
