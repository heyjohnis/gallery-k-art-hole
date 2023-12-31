/* eslint-disable react/prop-types */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { handleLogout } from "../../utils/auth";
import cookie from "js-cookie";
import axios from "axios";

import styles from "./navbar.mobile.module.scss";
import Script from "next/script";
import ReservationModal from "../Mypage/ReservationModal";
import baseUrl from "../../utils/baseUrl";

const MobileNavbar = ({ user }) => {
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
      <div id="navbar" className={`navbar-area fixed-top`}>
        <nav className={`navbar navbar-dark ${styles.mo_navbar}`}>
          <div className={`container`}>
            <Link href="/" className={`navbar-brand light_logo`}>
              <img
                src="/images/dark-logo.svg"
                width={180}
                height={36}
                alt="logo"
              />
            </Link>
            <Link href="/" className={`navbar-brand dark_logo`}>
              <img
                src="/images/dark-logo.svg"
                width={180}
                height={36}
                alt="logo"
              />
            </Link>

            <div className={`${styles.button_wrap}`}>
              <button class={`${styles.login_btn}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="#f4f4f4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 9C12.2091 9 14 7.20914 14 5C14 2.79086 12.2091 1 10 1C7.79086 1 6 2.79086 6 5C6 7.20914 7.79086 9 10 9Z"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 21C1 16.2136 5.02943 12.3334 10 12.3334C14.9706 12.3334 19 16.2136 19 21"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

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
            <ul
              className={`navbar-nav dropright flex-column ${styles.navbarUl}`}
            >
              <li className={`nav-item ${styles.firstLi}`}>
                <Link
                  href="/booking"
                  className={`nav-link pr-3`}
                  onClick={() => {
                    toggleNavbar();
                  }}
                >
                  Golf Booking
                  <i className="bx bx-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li className={`nav-item ${styles.ulLiBackground}`}>
                    <Link href="/ggmall/list/service" onClick={toggleNavbar}>
                      골프장 예약 서비스
                    </Link>
                  </li>
                  <li className={`nav-item ${styles.ulLiBackground}`}>
                    <Link href="/ggmall/list/shop" onClick={toggleNavbar}>
                      스크린골프 포인트 서비스
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`nav-item`}>
                <Link
                  href="/booking"
                  className={`nav-link pr-3`}
                  onClick={() => {
                    toggleNavbar();
                  }}
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
                  GG Mall
                  <i className="bx bx-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li className={`nav-item ${styles.ulLiBackground}`}>
                    <Link href="/ggmall/list/service" onClick={toggleNavbar}>
                      제휴서비스
                    </Link>
                  </li>
                  <li className={`nav-item ${styles.ulLiBackground}`}>
                    <Link href="/ggmall/list/shop" onClick={toggleNavbar}>
                      GG 쇼핑
                    </Link>
                  </li>
                  <li className={`nav-item ${styles.ulLiBackground}`}>
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
                  Support <i className="bx bx-chevron-down"></i>
                </Link>
                <ul className={`dropdown-menu`}>
                  <li className={`nav-item ${styles.ulLiBackground}`}>
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
                    <li className={`nav-item ${styles.ulLiBackground}`}>
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
                  <li className={`nav-item ${styles.ulLiBackground}`}>
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
    </>
  );
};

export default MobileNavbar;
