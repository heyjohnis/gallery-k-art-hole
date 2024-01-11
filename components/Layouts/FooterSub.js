import React from "react";
import Link from "next/link";

const Footer = () => {
  // const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo-wrap">
                <Link href="/" className="logo">
                  <img src="/images/white-logo.png" alt="Image" />
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="privacy">
                <ul>
                  <li>
                    <Link href="tel:15881778">
                      상담문의 <span>1588 - 1778</span>
                    </Link>
                  </li>
                  <li>
                    상담시간 <span>10am - 7pm</span>
                  </li>
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

            <div className="col-lg-5">
              <div className="copy-right">
                <p>Copyright &copy; 2024 GREEN GALLERY. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
