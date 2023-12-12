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
import styles from "./mainmobile.module.scss";
// import MainListItems from "./MainListWrap";
// import Footer from "../Layouts/Footer";
// import styles from "./MainBanner.module.scss";
// import "swiper/scss/pagination";
// import MainListWrap from "./MainListWrap";

const MainMobile = ({ showReservationModal }) => {
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
    <div className={`col-sm-6 ${styles.section}`}>
      <div className={`${styles.ulWrap}`}>
        <ul>
          <li>
            <div className={`${styles.liWrap}`}>
              <h1>
                Highend <br />
                Golf Service
              </h1>
              <span>
                그린을 특별한 당신에게 <br />
                바칩니다.
              </span>
            </div>
          </li>
          <li>
            <div className={`${styles.liWrap}`}>
              <h1>
                Vincent <br />
                Van Gogh
              </h1>
              <span>
                More  
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
                  <path d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </li>
          <li>
            <div className={`${styles.liWrap}`}>
              <h1>
                Auguste <br />
                Renoir
              </h1>
              <span>
                More  
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
                  <path d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </li>
          <li>
            <div className={`${styles.liWrap}`}>
              <h1>
                Claude <br />
                Monet
              </h1>
              <span>
                More  
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
                  <path d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </li>
      </ul>
      </div>
    </div>
    <div className={`footer ${styles.navMobile}`}>
      <div>
        <ul>
          <li>
            <Link  href="/mainmobile" >
              <img src="/images/mobile/home_black.png" alt="home" />
              <span>HOME</span>
            </Link>
          </li>
          <li>
            <Link  href="/mainmobile" >
              <img src="/images/mobile/nav_reserve_gray.png" alt="reserve" />
              <span>예약조회</span>
            </Link>
            </li>
          <li>
            <Link  href="/mainmobile" >
              <img src="/images/mobile/nav_order_gray.png" alt="order" />
              <span>주문배송</span>
            </Link>
          </li>
          <li>
            <Link  href="/mainmobile" >
              <img src="/images/mobile/nav_customer_gray.png" alt="customer" />
              <span>1:1 상담</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default MainMobile;
