/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, EffectFade } from "swiper";
import styles from "./SignupCompListWrap.module.scss";

const SignupCompListWrap = ({ LIST_ITEM }) => {
  console.log(LIST_ITEM);

  // let imageName = LIST_ITEM[1][1].split(" ");
  // imageName = imageName[0].toLowerCase();
  // console.log(imageName);

  return (
    <>
      {/* <div className={styles.contentsWrapMobile} key={LIST_ITEM[0][1]}>
        <div
          className={
            imageName === "president"
              ? styles.imageWrapVincent
              : imageName === "noblesse"
              ? styles.imageWrapAuguste
              : styles.imageWrapClaude
          } >*/}
      {/* <img src={LIST_ITEM[4][1]} alt={LIST_ITEM[1][1]} /> */}
      {/* <div className={styles.textWrap}>
            <h2>{LIST_ITEM[2][1]}</h2>
            <div className={styles.mainLink}> */}
      {/* <p>{LIST_ITEM[3][1]}</p> */}
      {/* <Link href="/">
                More&ensp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="10"
                  viewBox="0 0 22 10"
                  fill="none"
                >
                  <path
                    d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.contentsWrapMobile}>
        <Swiper
          effect="fade"
          spaceBetween={0}
          loop={true}
          loopAdditionalSlides={1}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            // allowTouchMove: false,
          }}
          modules={[Autoplay, A11y, EffectFade]}
          className={`hero-swiper`}
        >
          {LIST_ITEM.map((item, i) => (
            <SwiperSlide>
              <div
                className={
                  item.serviceGroup === "01"
                    ? styles.imageWrapVincent
                    : item.serviceGroup === "02"
                    ? styles.imageWrapAuguste
                    : styles.imageWrapClaude
                }
                key={item.id}
              >
                <div className={styles.textWrap}>
                  <h2>{item.title}</h2>
                  <div className={styles.mainLink}>
                    <Link href="/">
                      More&ensp;
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
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SignupCompListWrap;
