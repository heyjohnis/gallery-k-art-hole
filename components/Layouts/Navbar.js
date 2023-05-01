import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { handleLogout } from "../../utils/auth";

const Navbar = ({ user }) => {
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
        <nav className="navbar navbar-expand-xl navbar-light">
          <div className="container">
            <ul className="top-menu">
              {user ? (
                <>
                  <li>
                    <Link href="/mypage/membership" className="menu-items">
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
                    <Link href="/sign-up-1" className="menu-items">
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
          </div>
          <div className="container">
            <Link href="/" className="navbar-brand light_logo">
              <img src="/images/white-logo.svg" width={180} height={36} alt="logo" />
            </Link>
            <Link href="/" className="navbar-brand dark_logo">
              <img src="/images/dark-logo.svg" width={180} height={36} alt="logo" />
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
                  <Link href="/" className={`nav-link ${currentPath == "/" && "active"}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/company"
                    className={`nav-link ${currentPath == "/company/" && "active"}`}
                  >
                    그린갤러리
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/benefits"
                    className={`nav-link ${currentPath == "/benefits/" && "active"}`}
                  >
                    멤버십 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/benefits"
                        className={`nav-link ${currentPath == "/benefits/" && "active"}`}
                      >
                        회원혜택
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/addservice"
                        className={`nav-link ${
                          currentPath == "/addservice/" && "active"
                        }`}
                      >
                        프리미엄 서비스
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/membershipterm"
                        className={`nav-link ${currentPath == "/membershipterm/" && "active"}`}
                      >
                        약관 및 규정
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/golf"
                    className={`nav-link ${currentPath == "/golf/" && "active"}`}
                  >
                    골프 <i className="bx bx-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/golf"
                        className={`nav-link ${currentPath == "/golf/" && "active"}`}
                      >
                        골프서비스
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/art"
                    className={`nav-link ${currentPath == "/art/" && "active"}`}
                  >
                    미술품 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/art"
                        className={`nav-link ${currentPath == "/art/" && "active"}`}
                      >
                        미술품 소개
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={() => alert("준비중입니다")}
                        className={`nav-link ${currentPath == "/services/" && "active"}`}
                      >
                        미술품 보기
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="associate/">
                    제휴서비스 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="associate/"
                        className={`nav-link ${currentPath == "/associate/" && "active"}`}
                      >
                        제휴서비스 소개
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={() => alert("준비중입니다")}
                        className={`nav-link ${currentPath == "/gg/" && "active"}`}
                      >
                        GG몰
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#" onClick={() => alert("준비중입니다")}>
                    뉴스 & 이벤트 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={() => alert("준비중입니다")}
                        className={`nav-link ${
                          currentPath == "/exhibition/" && "active"
                        }`}
                      >
                        뉴스
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={() => alert("준비중입니다")}
                        className={`nav-link ${currentPath == "/event/" && "active"}`}
                      >
                        이벤트
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={() => alert("준비중입니다")}
                        className={`nav-link ${currentPath == "/media/" && "active"}`}
                      >
                        미디어
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/contact"
                    className={`nav-link ${currentPath == "/contact/" && "active"}`}
                  >
                    고객지원 <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/contact"
                        className={`nav-link ${currentPath == "/contact/" && "active"}`}
                      >
                        상담/문의
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={() => alert("준비중입니다")}
                        className={`nav-link ${currentPath == "/contact-2/" && "active"}`}
                      >
                        공지사항
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq"
                        className={`nav-link ${currentPath == "/faq/" && "active"}`}
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="others-options">
                <Link
                  href="#"
                  onClick={() => alert("준비중입니다")}
                  className="default-btn"
                >
                  BOOK NOW
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
