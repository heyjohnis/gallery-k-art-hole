/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, Navigation } from "swiper";
import { Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import YouTube from "react-youtube";
import MobileTourListWrap from "./MobileTourListWrap";
// import { SectionsContainer, Section } from "react-fullpage";
import styles from "./MobileMain.module.scss";
// import MainListItems from "./MainListWrap";
// import Footer from "../Layouts/Footer";
// import styles from "./MainBanner.module.scss";
// import "swiper/scss/pagination";

const LIST_ITEM_ABROAD = [
  {
    id: 1,
    img: "/images/mobile/main/gogh/japan.png",
    title: "3박 4일 타루마에 골프, 노보리베츠 온천투어",
    discript: "일본 북해도",
    discount: 0,
    point: 1600000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 2,
    img: "/images/mobile/main/gogh/japan.png",
    title: "태국 3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피",
    discript: "태국 방콕",
    discount: 0,
    point: 880000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 3,
    img: "/images/mobile/main/gogh/japan.png",
    title: "베트남 3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피",
    discript: "베트남 달랏",
    discount: 10,
    point: 990000,
    discountPoint: 99000,
    link: "/login/",
  },
  {
    id: 4,
    img: "/images/mobile/main/gogh/japan.png",
    title: "알마티 2색 4박6일 골프 18홀 라운딩, 3회 그린피",
    discript: "카자흐스탄 알마티",
    discount: 10,
    point: 1650000,
    discountPoint: 165000,
    link: "/login/",
  },
];

const LIST_ITEM = [
  {
    id: 1,
    img: "/images/mobile/main/gogh/japan.png",
    title: "제주",
    discript: "제주 서귀포",
    discount: 0,
    point: 1600000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 2,
    img: "/images/mobile/main/gogh/japan.png",
    title: "제주1",
    discript: "제주",
    discount: 0,
    point: 880000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 3,
    img: "/images/mobile/main/gogh/japan.png",
    title: "제주2",
    discript: "제주",
    discount: 10,
    point: 990000,
    discountPoint: 99000,
    link: "/login/",
  },
  {
    id: 4,
    img: "/images/mobile/main/gogh/japan.png",
    title: "제주3",
    discript: "제주",
    discount: 10,
    point: 1650000,
    discountPoint: 165000,
    link: "/login/",
  },
];

const LIST_ITEM_PREMIUM = [
  {
    id: 1,
    img: "/images/mobile/main/gogh/japan.png",
    title: "프리미엄 3박 4일 타루마에 골프, 노보리베츠 온천투어",
    discript: "일본 북해도",
    discount: 0,
    point: 1600000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 2,
    img: "/images/mobile/main/gogh/japan.png",
    title: "프리미엄 태국 3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피",
    discript: "태국 방콕",
    discount: 0,
    point: 880000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 3,
    img: "/images/mobile/main/gogh/japan.png",
    title: "프리미엄 베트남 3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피",
    discript: "베트남 달랏",
    discount: 10,
    point: 990000,
    discountPoint: 99000,
    link: "/login/",
  },
  {
    id: 4,
    img: "/images/mobile/main/gogh/japan.png",
    title: "프리미엄 알마티 2색 4박6일 골프 18홀 라운딩, 3회 그린피",
    discript: "카자흐스탄 알마티",
    discount: 10,
    point: 1650000,
    discountPoint: 165000,
    link: "/login/",
  },
];

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
          <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Nav className={`${styles.tabMenuUl}`}>
              <Nav.Item className={`${styles.tabMenuUlLi}`}>
                <Nav.Link eventKey="first" onClick={handleTabMenu}>
                  해외투어
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={`${styles.tabMenuUlLi}`}>
                <Nav.Link eventKey="second" onClick={handleTabMenu}>
                  국내투어
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={`${styles.tabMenuUlLi}`}>
                <Nav.Link eventKey="third" onClick={handleTabMenu}>
                  프리미엄투어
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <div className={`${styles.slideSec}`}>
              <div className={`${styles.slideWrap}`}>
                <Tab.Content>
                  <Tab.Pane eventKey={`${tabMenu}`}>
                    <MobileTourListWrap
                      LIST_ITEM={
                        tabMenu === "first"
                          ? LIST_ITEM_ABROAD
                          : tabMenu === "second"
                          ? LIST_ITEM
                          : LIST_ITEM_PREMIUM
                      }
                    />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
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
