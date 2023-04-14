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
                <p>
                주식회사 갤러리케이
주소 : 서울특별시 동대문구 왕산로 16 (신설동) 동진빌딩 12층 대표자 : 김정필 사업자 등록번호 : 359-86-00885 전화 : 1644-8826 팩스 : 02-557-5466 개인정보관리책임자 : 표영식(cs@galleryk.co.kr) 통신판매업 신고 : 2023-서울동대문-0364호 [사업자정보확인]
                </p>
              </div>
            </div>

            
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <p class="tel_service">
                1588-0526
                </p>
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
