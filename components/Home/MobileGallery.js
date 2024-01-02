import React from "react";
import styles from "./MobileMain.module.scss";

export default function MobileGallery() {
  return (
    <div className={`${styles.galleryWrap}`}>
      <div className={`${styles.galleryTitleWrap}`}>
        <span className={`${styles.galleryTitle}`}>
          이번주 추천!
          <br />
          원화작품을 만나보세요
        </span>
        {/* <span className='text-16'>전체보기</span> */}
      </div>

      <div className={`${styles.galleryImgWrap}`}>
        <img
          className={`${styles.galleryImg}`}
          src="/images/mobile/main/gogh/galleryImg.png"
          alt="피카소의 집"
        />
        <span className={`${styles.galleryTitle}`}>피카소의 집</span>
        <span className={`${styles.galleryName}`}>이해성</span>
        <span className={`${styles.galleryScript}`}>
          인간 내면에 잠재된 생명의 에너지를 초현실주의적 형상과 색채로 표출하다
        </span>
      </div>
    </div>
  );
}
