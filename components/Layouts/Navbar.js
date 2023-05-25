/* eslint-disable react/prop-types */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { handleLogout } from "../../utils/auth";
import styles from "./navbar.module.scss";
import Script from "next/script";

const Navbar = ({ user }) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const toggleNavbar = () => {
    setMenu(!menu);
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
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top">
        <div className={styles.backdrop}></div>
        <nav className="navbar navbar-expand-xl navbar-light">
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

            {/* Toggle navigation */}
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

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${currentPath == "/" && "active"}`}
                    onClick={toggleNavbar}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/benefits"
                    className={`nav-link ${
                      currentPath == "/benefits/" && "active"
                    }`}
                    onClick={toggleNavbar}
                  >
                    멤버십 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/benefits"
                        className={`nav-link ${
                          currentPath == "/benefits/" && "active"
                        }`}
                        onClick={toggleNavbar}
                      >
                        회원혜택
                      </Link>
                    </li>

                    {user && (
                      <>
                        <li className="nav-item">
                          <Link
                            href="/addservice"
                            className={`nav-link ${
                              currentPath == "/addservice/" && "active"
                            }`}
                            onClick={toggleNavbar}
                          >
                            프리미엄 서비스
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/membershipterm"
                            className={`nav-link ${
                              currentPath == "/membershipterm/" && "active"
                            }`}
                            onClick={toggleNavbar}
                          >
                            약관 및 규정
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/golf"
                    className={`nav-link ${
                      currentPath == "/golf/" && "active"
                    }`}
                    onClick={toggleNavbar}
                  >
                    골프 <i className="bx bx-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/golf"
                        className={`nav-link ${
                          currentPath == "/golf/" && "active"
                        }`}
                        onClick={toggleNavbar}
                      >
                        골프서비스
                      </Link>
                    </li>
                  </ul>
                </li>
                {user && (
                  <>
                    <li className="nav-item">
                      <Link
                        href="/art"
                        className={`nav-link ${
                          currentPath == "/art/" && "active"
                        }`}
                        onClick={toggleNavbar}
                      >
                        미술품 <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="https://www.artnomics.co.kr/artworks/artnomics_list.php?is_KK=1"
                            target="_blank"
                            onClick={toggleNavbar}
                          >
                            미술품 보기
                          </Link>
                          <Link href="/artworks/" onClick={toggleNavbar}>
                            미술품 보기
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/ggmall/list" onClick={toggleNavbar}>
                        포인트몰
                      </Link>
                    </li>
                  </>
                )}

                <li className="nav-item">
                  <Link
                    href="/contact"
                    className={`nav-link ${
                      currentPath == "/contact/" && "active"
                    }`}
                    onClick={toggleNavbar}
                  >
                    고객지원 <i className="bx bx-chevron-down"></i>
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
                    <li className="nav-item">
                      <Link
                        href="/bbs/news"
                        className={`nav-link ${
                          currentPath == "/bbs/news/" && "active"
                        }`}
                        onClick={toggleNavbar}
                      >
                        뉴스
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/faq"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                        onClick={toggleNavbar}
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="others-options">
                <ul className="top-menu">
                  {user ? (
                    <>
                      <li>
                        <Link
                          href="/mypage/home"
                          className="menu-items"
                          onClick={toggleNavbar}
                        >
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
                              toggleNavbar();
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
                        <Link
                          href="/sign-up-1"
                          className="menu-items"
                          onClick={toggleNavbar}
                        >
                          회원가입
                        </Link>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <Link
                          href="/login"
                          className="menu-items"
                          onClick={toggleNavbar}
                        >
                          로그인
                        </Link>
                      </li>
                    </>
                  )}
                </ul>

                <Link
                  href="/mypage/reservation/"
                  className="default-btn"
                  onClick={toggleNavbar}
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
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

export default Navbar;
