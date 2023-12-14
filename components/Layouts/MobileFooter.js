import React from "react";
import Link from "next/link";
import styles from "./navbar.mobile.module.scss";

const MobileFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pb-70 footer">
        <div className={`${styles.footer}`}>
          <div className={`${styles.leftWrap}`}>
            <div className={`${styles.csWrap}`}>
              <span className={`${styles.csNumber}`}>상담문의 1588 - 1778</span>
              <span className={`${styles.csTime}`}>상담시간 10am - 7pm</span>
            </div>

            <div className={`${styles.privacyWrap}`}>
              <span className={`${styles.privacy}`}>
                <Link
                  href="https://sprinkle-justice-3a1.notion.site/11de65f3be1241efb4e542bbb897a52c"
                  target="_blank"
                >
                  개인정보 처리방침
                </Link>
              </span>
              <span className={`${styles.tos}`}>
                <Link
                  href="https://sprinkle-justice-3a1.notion.site/979ee37ad2914a3db3b4d66b16066979"
                  target="_blank"
                >
                  이용약관
                </Link>
              </span>
              <span className={`${styles.cpo}`}>
                개인정보관리책임자 : cs@galleryk.co.kr
              </span>
            </div>

            <div className={`${styles.infoWrap}`}>
              <span className={`${styles.company}`}>주식회사 갤러리케이</span>
              <span className={`${styles.infoWrap}`}>대표자 | 김정필</span>
              <span className={`${styles.infoWrap}`}>
                사업자등록번호 | 359 - 86 - 00885
              </span>
              <span className={`${styles.infoWrap}`}>
                통신판매업신고 | 2023 - 서울동대문 - 3064호
              </span>
              <span className={`${styles.infoWrap}`}>TEL | 1644 - 8826</span>
              <span className={`${styles.infoWrap}`}>
                FAX | 02 - 557 - 5466
              </span>
              <span className={`${styles.infoWrap}`}>
                주소 | 서울특별시 동대문구 왕산로 16(신설동)
              </span>
            </div>
          </div>

          <div className={`${styles.rightWrap}`}>
            <div className={`${styles.snsWrap}`}>
              <Link className={`${styles.link}`} href="/" target="_blank">
                INSTAGRAM
              </Link>
              <Link
                className={`${styles.link}`}
                href="https://www.youtube.com/@GREENGALLERY072"
                target="_blank"
              >
                YOUTUBE
              </Link>
            </div>

            <span className={`${styles.copyright}`}>ⓒ 2023 GREEN GALLERY</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
