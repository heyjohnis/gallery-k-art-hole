import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="logo-wrap">
                  <Link href="/" className="logo">
                    <img src="/images/footer-logo.png" alt="Image" />
                  </Link>
                </div>

                <div className="selectbox-wrap">
                  <select name="selectSite" id="">
                    <option value="">FAMILY SITE</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>

                <div className="copy-right-wrap">
                  <span>ⓒ 2023 GREEN GALLERY</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div
                className="single-widget tel_service"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="contact-wrap">
                  <Link className="sns-link" href="/">
                    INSTAGRAM
                  </Link>
                  <br />
                  <Link className="sns-link" href="/">
                    YOUTUBE
                  </Link>
                  <br />
                  <br />
                  <p className="time">
                    상담문의 1588-1778
                    <br />
                    상담시간 10:00 ~ 19:00
                  </p>
                </div>

                <div className="privacy-policy-wrap">
                  <Link className="sns-link" href="/">
                    개인정보처리방침
                  </Link>
                  <br />
                  <Link className="sns-link" href="/">
                    이용약관
                  </Link>
                  <br />
                  <span>개인정보관리책임자</span> <span>:</span>{" "}
                  <span>cs@galleryk.co.kr</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <p className="address">
                  주식회사 갤러리케이 <br />
                  대표자 <span>|</span> 김정필 <br />
                  사업자 등록번호 <span>|</span> 359 - 86 - 00885 <br />
                  통신판매업 신고 <span>|</span> 2023 - 서울동대문 - 0364호
                  <br />
                  전화 <span>|</span> 1644 - 8826 <br />
                  팩스 <span>|</span> 02 - 557 - 5466 <br />
                  주소 <span>|</span> 서울특별시 동대문구 왕산로 16
                  &#40;신설동&#41;
                  <br />
                </p>
              </div>
            </div>
          </div>
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
