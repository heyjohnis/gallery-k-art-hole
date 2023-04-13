import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  <img src="/images/footer-logo.png" alt="Image" />
                </Link>
                
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <ul className="footer_menu">
                  <li>
                    <a>
                      회사소개
                    </a>
                  </li>
                  <li>
                    <a>
                      멤버십소개 
                    </a>
                  </li>
                  <li>
                    <a>
                      미술품
                    </a>
                  </li>
                  <li>
                    <a>
                      포인트몰 
                    </a>
                  </li>
                  <li>
                    <a>
                      전시 및 이벤트 
                    </a>
                  </li>
                  <li>
                    <a>
                      고객지원
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >

                <Link href="/" className="read-more footer_btn">
                  상담 신청 하기
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shape">
          <img src="/images/shape/footer-shape-one.png" alt="Image" />
          <img src="/images/shape/footer-shape-two.png" alt="Image" />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copy-right">
                <p>Copyright &copy; {currentYear} GREEN GALLERY. All Rights Reserved</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="privacy">
                <ul>
                  <li>
                    <Link href="/">개인정보 처리방침</Link>
                  </li>
                  <li>
                    <Link href="/">이용약관</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
