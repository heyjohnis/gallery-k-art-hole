import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, EffectFade } from "swiper";
import Link from "next/link";
import styles from "./dealer-page.module.scss";

export default function DealerPage() {
  return (
    <>
      <section>
        <div className={`${styles.contentsWrap}`}>
          <div className={`${styles.groupWrap} ${styles.gogh}`}>
            <div className={`${styles.titleWrap}`}>
              <h1>
                Vincent
                <br />
                Van Gogh
              </h1>
              <div>
                <Link href="/">
                  <span>
                    제휴서비스{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="10"
                      viewBox="0 0 22 10"
                      fill="none"
                    >
                      <path
                        d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <br />
                <Link href="/">
                  <span>
                    GG 쇼핑{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="10"
                      viewBox="0 0 22 10"
                      fill="none"
                    >
                      <path
                        d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className={`${styles.groupWrap} ${styles.renoir}`}>
            <div className={`${styles.titleWrap}`}>
              <h1>
                Auguste
                <br />
                Renoir
              </h1>
              <div>
                <Link href="/">
                  <span>
                    제휴서비스{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="10"
                      viewBox="0 0 22 10"
                      fill="none"
                    >
                      <path
                        d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <br />
                <Link href="/">
                  <span>
                    GG 쇼핑{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="10"
                      viewBox="0 0 22 10"
                      fill="none"
                    >
                      <path
                        d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className={`${styles.groupWrap} ${styles.monet}`}>
            <div className={`${styles.titleWrap}`}>
              <h1>
                Claude
                <br />
                Monet
              </h1>
              <div>
                <Link href="/">
                  <span>
                    제휴서비스{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="10"
                      viewBox="0 0 22 10"
                      fill="none"
                    >
                      <path
                        d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <br />
                <Link href="/">
                  <span>
                    GG 쇼핑{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="10"
                      viewBox="0 0 22 10"
                      fill="none"
                    >
                      <path
                        d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
