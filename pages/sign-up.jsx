import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import Footer from "../components/Signup/SignupFooter";
import styles from "./sign-up.module.scss";
import { POST } from "../hooks/restApi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SignUp() {
  const router = useRouter();
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  const [keywords, setKeywords] = useState([]);

  const { goto } = router.query;

  const getServiceKeyword = () => {
    POST("/mall/keyword", { pd_kind: "all" }).then((res) => {
      const keys = Array.from(new Set((res?.data?.keyword || "").split(",")));
      setKeywords(keys);
    });
  };

  useEffect(() => {
    getServiceKeyword();
  }, []);

  return (
    <>
      <div className={`${styles.signUpWrap}`}>
        <div className={`${styles.signUpPageLeftSection}`}>
          <div className={`${styles.titleWrap}`}>
            <h1>
              <span>Welcome to </span>
              <br />
              GREEN GALLERY
            </h1>
          </div>
        </div>

        <div className={`${styles.signUpPageRightSection}`}>
          <div className={`${styles.pageWrap}`}>
            <Swiper
              spaceBetween={0}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              className={`hero-swiper1 ${styles.rightSlide}`}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              loopPreventsSlide={false}
              onReachEnd={() => {
                console.log("end");
              }}
            >
              <SwiperSlide>
                <div className={`${styles.page}`} id="First">
                  <div className={`${styles.firstWrap}`}>
                    <div className={`${styles.titleWrap}`}>
                      <h1>
                        하이엔드 골프 서비스
                        <br />
                        그린갤러리에 오신 것을 환영합니다.
                      </h1>
                    </div>

                    <div className={`${styles.inputWrap}`}>
                      <div
                        className={`${styles.inputFname} ${styles.inputItems}`}
                      >
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                      </div>
                      <div
                        className={`${styles.inputLname} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                      </div>
                      <div
                        className={`${styles.inputPhone} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Phone</label>
                        <div className={`${styles.phoneWrap}`}>
                          <input type="tel" maxlength="3" /> -
                          <input type="tel" maxlength="4" /> -
                          <input type="tel" maxlength="4" />
                        </div>
                      </div>
                      <div
                        className={`${styles.inputEmail} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Email</label>
                        <input type="email" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.page}`} id="Second">
                  <div className={`${styles.secondWrap}`}>
                    <div className={`${styles.titleWrap}`}>
                      <h1>
                        사용하실 아이디와 <br />
                        비밀번호를 입력해 주세요.
                      </h1>
                    </div>
                    <div className={`${styles.inputWrap}`}>
                      <div className={`${styles.inputId} ${styles.inputItems}`}>
                        <label htmlFor="">ID</label>
                        <input type="text" />
                      </div>
                      <div
                        className={`${styles.inputPass} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Password</label>
                        <input type="text" />
                      </div>
                      <div
                        className={`${styles.inputDealer} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Dealer Code</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.page}`} id="Third">
                  <div className={`${styles.thirdWrap}`}>
                    <div className={`${styles.titleWrap}`}>
                      <h1>
                        자주 이용하시거나
                        <br />
                        선호하시는 골프장을 선택해 주세요.
                      </h1>
                    </div>
                    <div className={`${styles.selectWraper}`}>
                      <div
                        className={`${styles.selectLocation} ${styles.selectItems}`}
                      >
                        <label htmlFor="">Location</label>
                        <div className={`${styles.selectWrap}`}>
                          <select name="" id="">
                            <option disabled selected>
                              1차 희망 지역
                            </option>
                          </select>
                          <select name="" id="">
                            <option disabled selected>
                              2차 희망 지역
                            </option>
                          </select>
                        </div>
                      </div>
                      <div
                        className={`${styles.selectGolfCourse} ${styles.selectItems}`}
                      >
                        <label htmlFor="">Golf Course</label>
                        <div className={`${styles.selectWrap}`}>
                          <select name="" id="">
                            <option disabled selected>
                              1차 골프장
                            </option>
                          </select>
                          <select name="" id="">
                            <option disabled selected>
                              2차 골프장
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.page}`} id="Fourth">
                  <div className={`${styles.fourthWrap}`}>
                    <div className={`${styles.titleWrap}`}>
                      <h1>
                        가입 후 이용하고 싶은
                        <br />
                        그린갤러리 서비스를 선택해 주세요.
                      </h1>
                    </div>

                    <div className={`${styles.checkedWrap}`}>
                      {keywords.map((keyword, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={keyword}
                            name="service"
                            value={keyword}
                          />
                          <label htmlFor={keyword}>{keyword}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button className={styles.signUpBtn}>Submit</button>
              </SwiperSlide>
              <div className="swiper-button-prev">Back</div>
              <div className="swiper-button-next">Next</div>
            </Swiper>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
