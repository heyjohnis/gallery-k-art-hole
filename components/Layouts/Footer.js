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
                {/* harry 0605 김정필에서 허국현 변경 */}
                <p>
                  주식회사 갤러리케이 <br />
                  주소 : 서울특별시 동대문구 왕산로 16 (신설동) 동진빌딩 12층{" "}
                  <br />
                  대표자 : 김정필 | 사업자 등록번호 : 359-86-00885 <br />
                  전화 : 1644-8826 | 팩스 : 02-557-5466
                  <br />
                  개인정보관리책임자 : 표영식(cs@galleryk.co.kr)
                  <br />
                  통신판매업 신고 : 2023-서울동대문-0364호
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget tel_service"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <span>상담문의</span>
                <p>1588-1778</p>
                <span className="time">상담시간 10:00 ~ 19:00</span>
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
                <p>
                  Copyright &copy; {currentYear} GREEN GALLERY. All Rights
                  Reserved
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="privacy">
                <ul>
                  <li>
                    <Link
                      href="https://sprinkle-justice-3a1.notion.site/11de65f3be1241efb4e542bbb897a52c"
                      target="_blank"
                    >
                      개인정보 처리방침
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://sprinkle-justice-3a1.notion.site/979ee37ad2914a3db3b4d66b16066979"
                      target="_blank"
                    >
                      이용약관
                    </Link>
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
