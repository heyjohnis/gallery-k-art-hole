import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
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
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <img src="/images/white-logo.png" alt="logo" />
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
                  >
                    회사소개
                  </Link>

                  {/* <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${currentPath == "/" && "active"}`}
                      >
                        그린갤러리 소개
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/index-2/" && "active"
                        }`}
                      >
                        갤러리케이 소개
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-3/"
                        className={`nav-link ${
                          currentPath == "/index-3/" && "active"
                        }`}
                      >
                        Home Three
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-4/"
                        className={`nav-link ${
                          currentPath == "/index-4/" && "active"
                        }`}
                      >
                        Home Four
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-5/"
                        className={`nav-link ${
                          currentPath == "/index-5/" && "active"
                        }`}
                      >
                        Home Five
                      </Link>
                    </li>
                  </ul> */}
                </li>

                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${
                      currentPath == "/about-1/" && "active"
                    }`}
                  >
                    멤버십소개 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/about-1/" && "active"
                        }`}
                      >
                        멤버십 소개
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/about-2/" && "active"
                        }`}
                      >
                        혜택 소개
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${
                      currentPath == "/services/" && "active"
                    }`}
                  >
                    미술품 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        미술품 선택
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link
                        href="/services-2/"
                        className={`nav-link ${
                          currentPath == "/services-2/" && "active"
                        }`}
                      >
                        Services Style Two
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-3/"
                        className={`nav-link ${
                          currentPath == "/services-3/" && "active"
                        }`}
                      >
                        Services Style Three
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-4/"
                        className={`nav-link ${
                          currentPath == "/services-4/" && "active"
                        }`}
                      >
                        Services Style Four
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/service-details/"
                        className={`nav-link ${
                          currentPath == "/service-details/" && "active"
                        }`}
                      >
                        Service Details
                      </Link>
                    </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    포인트몰 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        포인트몰
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link
                        href="/team/"
                        className={`nav-link ${
                          currentPath == "/team/" && "active"
                        }`}
                      >
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/testimonials/"
                        className={`nav-link ${
                          currentPath == "/testimonials/" && "active"
                        }`}
                      >
                        Testimonials
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                      >
                        Faq
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        User <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/login/"
                            className={`nav-link ${
                              currentPath == "/login/" && "active"
                            }`}
                          >
                            Login
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/sign-up/"
                            className={`nav-link ${
                              currentPath == "/sign-up/" && "active"
                            }`}
                          >
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/terms-conditions/"
                        className={`nav-link ${
                          currentPath == "/terms-conditions/" && "active"
                        }`}
                      >
                        Terms & Conditions
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/privacy-policy/"
                        className={`nav-link ${
                          currentPath == "/privacy-policy/" && "active"
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/coming-soon/"
                        className={`nav-link ${
                          currentPath == "/coming-soon/" && "active"
                        }`}
                      >
                        Coming Soon
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/login/"
                        className={`nav-link ${
                          currentPath == "/login/" && "active"
                        }`}
                      >
                        Log In
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/sign-up/"
                        className={`nav-link ${
                          currentPath == "/sign-up/" && "active"
                        }`}
                      >
                        Sign Up
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/404/"
                        className={`nav-link ${
                          currentPath == "/404/" && "active"
                        }`}
                      >
                        404 error
                      </Link>
                    </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    행사 및 이벤트 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/news-grid/" && "active"
                        }`}
                      >
                        행사
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/news-right-sidebar/" && "active"
                        }`}
                      >
                        이벤트
                      </Link>
                    </li>
{/* 
                    <li className="nav-item">
                      <Link
                        href="/news-details/"
                        className={`nav-link ${
                          currentPath == "/news-details/" && "active"
                        }`}
                      >
                        News Details
                      </Link>
                    </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/contact/"
                    className={`nav-link ${
                      currentPath == "/contact/" && "active"
                    }`}
                  >
                    고객지원 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/contact/" && "active"
                        }`}
                      >
                        FAQ
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/contact-2/" && "active"
                        }`}
                      >
                        공지사항
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/contact-2/" && "active"
                        }`}
                      >
                        상담/문의
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/contact-2/" && "active"
                        }`}
                      >
                        이용후기
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${
                          currentPath == "/contact-2/" && "active"
                        }`}
                      >
                        약관 및 규정
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="others-options">
                <Link href="/" className="default-btn">
                  BOOK NOW <i className="bx bx-log-in-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
