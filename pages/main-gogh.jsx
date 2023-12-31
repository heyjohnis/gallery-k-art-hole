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
import styles from "./main-gogh.module.scss";
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
            <div className={`${styles.slide}`}>
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
              <div className={`${styles.slideLi}`}>
                <img
                  className={`${styles.slideImg}`}
                  src="/images/mobile/main/gogh/tai.png"
                  alt="3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피"
                />
                <h3 className={`${styles.slideTitle}`}>
                  3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피
                </h3>
                <span className={`${styles.slideText}`}>태국 방콕</span>
                <span className={`${styles.slidePoint}`}>880,000 P ~</span>
              </div>
              {/* <div className={``}>
                <div className={``} />
                <h3 className={``}>
                  3박5일 골프 18홀 라운딩, 3회 그린피
                </h3>
                <span className={``}>베트남 달랏</span>
                <span className={``}>990,000 P ~</span>
              </div>
              <div className={``}>
                <div className={``}/>
                <h3 className={``}>
                  알마티 2색 4박6일 골프 18홀 라운딩, 3회 그린피
                </h3>
                <span className={``}>카자흐스탄 알마티</span>
                <span className={``}>1,650,000 P ~</span>
              </div> */}
            </div>
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

          <div className={`${styles.galleryImgWrap}`}>
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

        <div className={`${styles.footer}`}>
          <div className={`${styles.leftWrap}`}>
            <div className={`${styles.csWrap}`}>
              <span className={`${styles.csNumber}`}>상담문의 1588 - 1778</span>
              <span className={`${styles.csTime}`}>상담시간 10am - 7pm</span>
            </div>

            <div className={`${styles.privacyWrap}`}>
              <span className={`${styles.privacy}`}>개인정보처리방침</span>
              <span className={`${styles.tos}`}>이용약관</span>
              <span className={`${styles.cpo}`}>
                개인정보관리책임자 : cs@galleryk.co.kr
              </span>
            </div>

            <div className={`${styles.infoWrap}`}>
              <span className={`${styles.company}`}>주식회사 갤러리케이</span>
              <span className={`${styles.infoWrap}`}>대표자 | 김정필</span>
              <span className={`${styles.infoWrap}`}>
                사업자등록번호 | 359 - 86 - 00885
              </span>
              <span className={`${styles.infoWrap}`}>
                통신판매업신고 | 2023 - 서울동대문 - 3064호
              </span>
              <span className={`${styles.infoWrap}`}>TEL | 1644 - 8826</span>
              <span className={`${styles.infoWrap}`}>
                FAX | 02 - 557 - 5466
              </span>
              <span className={`${styles.infoWrap}`}>
                주소 | 서울특별시 동대문구 왕산로 16(신설동)
              </span>
            </div>
          </div>

          <div className={`${styles.rightWrap}`}>
            <div className={`${styles.snsWrap}`}>
              <Link className={`${styles.link}`} href="/" target="_blank">
                INSTAGRAM
              </Link>
              <Link
                className={`${styles.link}`}
                href="https://www.youtube.com/@GREENGALLERY072"
                target="_blank"
              >
                YOUTUBE
              </Link>
            </div>

            <span className={`${styles.copyright}`}>ⓒ 2023 GREEN GALLERY</span>
          </div>
        </div>

        {/* <div className='wrapper-7'>
          <div className='section-3'>
            <div className='group-8'>
              <div className='pic-8' />
              <span className='text-2f'>HOME</span>
            </div>
            <div className='group-9'>
              <div className='pic-9' />
              <span className='text-30'>예약조회</span>
            </div>
            <div className='box-6'>
              <div className='img-6' />
              <span className='text-31'>주문배송</span>
            </div>
            <div className='group-a'>
              <div className='pic-a' />
              <span className='text-32'>1:1 상담</span>
            </div>
          </div>
          <div className='section-4' />
        </div> */}
      </div>

      <div className={`footer ${styles.navMobile}`}>
        <div>
          <ul>
            <li>
              <Link href="/mainmobile">
                <img src="/images/mobile/home_black.png" alt="home" />
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link href="/mainmobile">
                <img src="/images/mobile/nav_reserve_gray.png" alt="reserve" />
                <span>예약조회</span>
              </Link>
            </li>
            <li>
              <Link href="/mainmobile">
                <img src="/images/mobile/nav_order_gray.png" alt="order" />
                <span>주문배송</span>
              </Link>
            </li>
            <li>
              <Link href="/mainmobile">
                <img
                  src="/images/mobile/nav_customer_gray.png"
                  alt="customer"
                />
                <span>1:1 상담</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainGogh;
