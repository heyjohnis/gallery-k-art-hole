import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, Navigation, EffectFade } from "swiper";
import styles from "./MobileMain.module.scss";

const LIST_ITEM_GALLERY = [
  {
    id: 1,
    img: "/images/mobile/main/galleryImg_1.jpg",
    title: "피카소의 집",
    artist: "이해성",
    discript:
      "인간 내면에 잠재된 생명의 에너지를 초현실주의적 형상과 색채로 표출하다.",
    link: "/",
  },
  {
    id: 2,
    img: "/images/mobile/main/galleryImg_2.jpg",
    title: "달의 노래 23GB03",
    artist: "김가빈",
    discript: "상생과 공존을 통한 평안과 행복의 랩소디를 구현하다.",
    link: "/",
  },
  {
    id: 3,
    img: "/images/mobile/main/galleryImg_3.jpg",
    title: "Artist",
    artist: "이두환",
    discript:
      "‘현대인의 초상’이라는 주제로 충돌하는 인간의 내면세계 그려내는 작가.",
    link: "/",
  },
];

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
        <Swiper
          slidesPerView={1}
          effect="fade"
          navigation={true}
          spaceBetween={0}
          loop={true}
          loopedSlides={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, A11y, Autoplay, Navigation, EffectFade]}
          className={`hero-swiper ${styles.swiper}`}
        >
          {LIST_ITEM_GALLERY?.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={`row ${styles.sildeSize}`}
                style={{ background: "#f9f9f9" }}
              >
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className={`container`}>
                      <div className={`jumpx-slider-text overflow-hidden one`}>
                        <div className={styles.slideWrap}>
                          <img src={`${item.img}`} alt={`${item.title}`} />
                        </div>
                        <span className={`${styles.galleryTitle}`}>
                          {item.title}
                        </span>
                        <span className={`${styles.galleryName}`}>
                          {item.artist}
                        </span>
                        <span
                          className={`${styles.galleryScript}`}
                          style={{ minHeight: "42px" }}
                        >
                          {item.discript}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
