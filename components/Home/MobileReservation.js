import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper";
import styles from "./MobileMain.module.scss";

const IMAGE_LIST = [
  {
    id: 1,
    group: "president K",
    keyword: "명예",
    img: "/images/mobile/main/president_mo_1.jpg",
  },
  {
    id: 2,
    group: "president K",
    keyword: "명예",
    img: "/images/mobile/main/president_mo_2.jpg",
  },
  {
    id: 3,
    group: "president K",
    keyword: "명예",
    img: "/images/mobile/main/president_mo_3.jpg",
  },
];

export default function MobileReservation({ user }) {
  return (
    <>
      <div className={styles.topSlide}>
        <Swiper
          slidesPerView={"auto"}
          navigation={true}
          loop={false}
          spaceBetween={0}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          //  modules={[Pagination, A11y, Autoplay, Navigation]}
          modules={[A11y, Autoplay]}
          className={`hero-swiper ${styles.swiperTop}`}
        >
          {IMAGE_LIST?.map((item, i) => (
            <>
              <SwiperSlide className={`${styles.swiperSlide}`} key={item.id}>
                <img src={item.img} alt={item.group} />

                {/* <div className={styles.textWrap}>
                  <p>
                    나의 명예를
                    <br />
                    <span>그린</span>
                    <span>다</span>
                    <span>.</span>
                  </p>
                </div> */}
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
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
