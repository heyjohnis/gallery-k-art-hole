/* eslint-disable react/prop-types */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { handleLogout } from "../../utils/auth";
import cookie from "js-cookie";
import axios from "axios";

import styles from "./navbar.module.scss";
import Script from "next/script";
import ReservationModal from "../Mypage/ReservationModal";
import baseUrl from "../../utils/baseUrl";

const Navbar = ({ user }) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [menu, setMenu] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const toggleNavbar = () => {
    setMenu(!menu);
    if (menu === true) {
    }
  };

  const getReservationData = () => {
    if (user.user_no) {
      const url = `${baseUrl}/mypage/reservation`;
      const medq_token = cookie.get("medq_token");
      axios({
        method: "post",
        url: url,
        headers: { Authorization: `Bearer ${medq_token}` },
        data: {},
      })
        .then(({ data }) => {
          console.log("data: ", data);
        })
        .finally(() => {});
    }
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 124) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse flex-column mean-menu"
    : "collapse flex-column show";
  const classTwo = menu
    ? `navbar-toggler navbar-toggler-right collapsed`
    : `navbar-toggler navbar-toggler-right`;

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top">
        <div className={styles.backdrop}></div>
        <nav className="navbar navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand light_logo">
              <img
                src="/images/white-logo.svg"
                width={180}
                height={36}
                alt="logo"
              />
            </Link>
            <Link href="/" className="navbar-brand dark_logo">
              <img
                src="/images/dark-logo.svg"
                width={180}
                height={36}
                alt="logo"
              />
            </Link>

            <div className="others-options">
              <ul className="top-menu">
                {user ? (
                  <>
                    <li>
                      <Link href="/mypage/home" className="menu-items">
                        마이페이지
                      </Link>
                    </li>
                    <li>
                      <span></span>
                    </li>
                    <li>
                      <Link href="#" className="menu-items">
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            handleLogout();
                          }}
                        >
                          로그아웃
                        </div>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/sign-up" className="menu-items">
                        회원가입
                      </Link>
                    </li>
                    <li>
                      <span></span>
                    </li>
                    <li>
                      <Link href="/login" className="menu-items">
                        로그인
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              {/* <Link
                href="/mypage/reservation/"
                className="default-btn"
                onClick={toggleNavbar}
              >
                예약 내역
              </Link> */}

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>
            </div>
          </div>
          <div
            className={`${classOne} ${styles.menu}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav dropright flex-column">
              {/* <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${currentPath == "/" && "active"}`}
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
              </li> */}
              <li className="nav-item">
                {/* <Link
                    href="/"
                    className={`nav-link pr-3`}
                    style={{ paddingRight: "15px" }}
                    onClick={() => {
                      showReservationModal();
                      toggleNavbar();
                    }}
                  >
                    Golf Booking
                  </Link> */}
                <Link
                  href="/golf/booking"
                  className={`nav-link pr-3`}
                  style={{ paddingRight: "15px" }}
                  onClick={() => {
                    toggleNavbar();
                  }}
                >
                  Golf Booking <i className="bx bx-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/golf/booking" onClick={toggleNavbar}>
                      골프장 예약 서비스
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/screengolf/booking" onClick={toggleNavbar}>
                      스크린골프 포인트 서비스
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="/artworks"
                  className={`nav-link ${
                    (currentPath.indexOf("artworks") > -1 ||
                      currentPath.indexOf("gift") > -1) &&
                    "active"
                  }`}
                  onClick={toggleNavbar}
                >
                  Gallery
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/ggmall/list/service"
                  className={`nav-link ${
                    (currentPath.indexOf("/ggmall/list/") > -1 ||
                      currentPath.indexOf("/ggmall/detail/") > -1) &&
                    currentPath.indexOf("/gift") === -1 &&
                    "active"
                  }`}
                  onClick={toggleNavbar}
                >
                  GG Mall <i className="bx bx-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/ggmall/list/service" onClick={toggleNavbar}>
                      제휴서비스
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/ggmall/list/shop" onClick={toggleNavbar}>
                      GG 쇼핑
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/ggmall/list/tour" onClick={toggleNavbar}>
                      GG 투어
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link ${
                    [
                      "/contact/",
                      "/bbs/notice/",
                      "/bbs/news/",
                      "/faq/",
                    ].includes(currentPath) && "active"
                  }`}
                  onClick={toggleNavbar}
                >
                  Support <i className="bx bx-chevron-down"></i>{" "}
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                      onClick={toggleNavbar}
                    >
                      상담/문의
                    </Link>
                  </li>
                  {user && (
                    <li className="nav-item">
                      <Link
                        href="/bbs/notice"
                        className={`nav-link ${
                          currentPath == "/bbs/notice" && "active"
                        }`}
                        onClick={toggleNavbar}
                      >
                        공지사항
                      </Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <Link
                      href="/bbs/news"
                      className={`nav-link ${
                        currentPath == "/bbs/news/" && "active"
                      }`}
                      onClick={toggleNavbar}
                    >
                      NEWS
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Script
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        dangerouslySetInnerHTML={{
          __html: ` (function() {
              var w = window;
              if (w.ChannelIO) {
                return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
              }
              var ch = function() {
                ch.c(arguments);
              };
              ch.q = [];
              ch.c = function(args) {
                ch.q.push(args);
              };
              w.ChannelIO = ch;
              function l() {
                if (w.ChannelIOInitialized) {
                  return;
                }
                w.ChannelIOInitialized = true;
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                s.charset = 'UTF-8';
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
              }
              if (document.readyState === 'complete') {
                l();
              } else if (window.attachEvent) {
                window.attachEvent('onload', l);
              } else {
                window.addEventListener('DOMContentLoaded', l, false);
                window.addEventListener('load', l, false);
              }
            })();
            ChannelIO('boot', {
              "pluginKey": "851db043-3ce1-4d57-b7af-58aa7dcb9c7e", //please fill with your plugin key
              "memberId": "${
                (user && user.login_id) || ""
              }", //fill with user id
              "profile": {
                "name": "${
                  (user && user.user_name) || ""
                }", //fill with user name
                "mobileNumber": "${
                  (user && user.mobile) || ""
                }", //fill with user phone number
              }
            });`,
        }}
      />
      <ReservationModal
        user={user}
        updateReservation={getReservationData}
        ref={modalRef}
      />
    </>
  );
};

export default Navbar;
