/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, Navigation } from "swiper";
import { Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import YouTube from "react-youtube";
// import { SectionsContainer, Section } from "react-fullpage";
import styles from "./MobileMain.module.scss";
// import MainListItems from "./MainListWrap";
// import Footer from "../Layouts/Footer";
// import styles from "./MainBanner.module.scss";
// import "swiper/scss/pagination";
// import MainListWrap from "./MainListWrap";

const MainGogh = ({ showReservationModal }) => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(false);
  };

  const [tabMenu, setTabMenu] = useState("first");

  const handleTabMenu = (e) => {
    console.log(e.target.dataset.rrUiEventKey);
    if (e.target.dataset.rrUiEventKey === "first") {
      setTabMenu("first");
    } else if (e.target.dataset.rrUiEventKey === "second") {
      setTabMenu("second");
    } else {
      setTabMenu("third");
    }
  };

  // const handleTabMenu = () => {};

  const submitBooking = (e) => {
    e.preventDefault();
    console.log("test");
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className={`${styles.mainContainer}`}>
        {/* <div className='wrapper'>
          <div className='img' />
          <div className='pic' />
          <div className='img-2' />
        </div> */}

        <h1 className={`${styles.titleTop}`}>
          홍길동님
          <br />
          오늘 게임도 홀인원! 😄
        </h1>

        <div className={`${styles.btnWrap}`}>
          <div className={`${styles.leftBox}`}>
            <Link href="/">
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
            <Link href="/">
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

        <div className={`${styles.titleWrapMid}`}>
          <span className={`${styles.titleMid}`}>
            골프투어
            <br />
            어디로 갈까요?
          </span>
          {/* <span className='text-5'>전체보기</span> */}
        </div>

        <div className={`${styles.tabMenuWrap}`}>
          <ul className={`${styles.tabMenuUl}`}>
            <li className={`${styles.tabMenuUlLi}`}>
              <span className={`${styles.titleWrapMid}`}>해외투어</span>
            </li>
            <li className={`${styles.tabMenuUlLi}`}>
              <span className={`${styles.titleWrapMid}`}>국내투어</span>
            </li>
            <li className={`${styles.tabMenuUlLi}`}>
              <span className={`${styles.titleWrapMid}`}>프리미엄투어</span>
            </li>
          </ul>
        </div>

        <div className={`${styles.slideSec}`}>
          <div className={`${styles.slideWrap}`}>
            <Swiper
              slidesPerView={"auto"}
              navigation={false}
              loop={true}
              spaceBetween={0}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                type: "bullets",
              }}
              //  modules={[Pagination, A11y, Autoplay, Navigation]}
              modules={[A11y, Autoplay]}
              className={`hero-swiper ${styles.swiper}`}
            >
              <SwiperSlide className={`${styles.swiperSlide}`}>
                <div className={`${styles.slideLi}`}>
                  <img
                    className={`${styles.slideImg}`}
                    src="/images/mobile/main/gogh/japan.png"
                    alt="3박 4일 타루마에 골프, 노보리베츠 온천투어"
                  />
                  <h3 className={`${styles.slideTitle}`}>
                    3박 4일 타루마에 골프, 노보리베츠 온천투어
                  </h3>
                  <span className={`${styles.slideText}`}>일본 북해도</span>
                  <span className={`${styles.slidePoint}`}>1,600,000 P ~</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${styles.swiperSlide}`}>
                <div className={`${styles.slideLi}`}>
                  <img
                    className={`${styles.slideImg}`}
                    src="/images/mobile/main/gogh/japan.png"
                    alt="3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피"
                  />
                  <h3 className={`${styles.slideTitle}`}>
                    3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피
                  </h3>
                  <span className={`${styles.slideText}`}>태국 방콕</span>
                  <span className={`${styles.slidePoint}`}>880,000 P ~</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${styles.swiperSlide}`}>
                <div className={`${styles.slideLi}`}>
                  <img
                    className={`${styles.slideImg}`}
                    src="/images/mobile/main/gogh/japan.png"
                    alt="3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피"
                  />
                  <h3 className={`${styles.slideTitle}`}>
                    3박5일 골프 18홀 라운딩, 3회 그린피
                  </h3>
                  <span className={`${styles.slideText}`}>베트남 달랏</span>
                  <span className={`${styles.slidePoint}`}>990,000 P ~</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${styles.swiperSlide}`}>
                <div className={`${styles.slideLi}`}>
                  <img
                    className={`${styles.slideImg}`}
                    src="/images/mobile/main/gogh/japan.png"
                    alt="3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피"
                  />
                  <h3 className={`${styles.slideTitle}`}>
                    알마티 2색 4박6일 골프 18홀 라운딩, 3회 그린피
                  </h3>
                  <span className={`${styles.slideText}`}>
                    카자흐스탄 알마티
                  </span>
                  <span className={`${styles.slidePoint}`}>1,650,000 P ~</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className={`${styles.galleryWrap}`}>
          <div className={`${styles.galleryTitleWrap}`}>
            <span className={`${styles.galleryTitle}`}>
              이번주 추천!
              <br />
              원화작품을 만나보세요
            </span>
            {/* <span className='text-16'>전체보기</span> */}
          </div>

          <div class={`${styles.galleryImgWrap}`}>
            <img
              className={`${styles.galleryImg}`}
              src="/images/mobile/main/gogh/galleryImg.png"
              alt="피카소의 집"
            />
            <span className={`${styles.galleryTitle}`}>피카소의 집</span>
            <span className={`${styles.galleryName}`}>이해성</span>
            <span className={`${styles.galleryScript}`}>
              인간 내면에 잠재된 생명의 에너지를 초현실주의적 형상과 색채로
              표출하다
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainGogh;
