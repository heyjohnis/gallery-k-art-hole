import React from "react";
import Link from "next/link";

const Footer = () => {
  // const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area footer">
        <div className="container">
          <div className="row no-wrap col-sm-12">
            <div className="left-wrap">
              <div className="single-widget">
                <div className="logo-wrap">
                  <Link href="/" className="logo">
                    <img src="/images/white-logo.png" alt="Image" />
                  </Link>
                </div>

                <div className="selectbox-wrap">
                  <div className="selectbox">
                    <select name="selectSite" id="">
                      <option value="">FAMILY SITE</option>
                    </select>
                  </div>
                </div>

                <div className="copy-right-wrap">
                  <span>ⓒ 2024 GREEN GALLERY</span>
                </div>
              </div>
            </div>

            <div className="center-wrap">
              <div className="single-widget tel_service">
                <div className="contact-wrap">
                  <Link className="sns-link" href="/" target="_blank">
                    INSTAGRAM
                  </Link>
                  <br />
                  <Link className="sns-link" href="/" target="_blank">
                    YOUTUBE
                  </Link>
                  <br />
                  <br />
                  <p className="time">
                    상담문의 1588 - 1778
                    <br />
                    상담시간 10am - 7pm
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
                  <span>gg@galleryk.co.kr</span>
                </div>
              </div>
            </div>

            <div className="right-wrap">
              <div className="single-widget">
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
    </>
  );
};

export default Footer;
