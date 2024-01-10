import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Signup/SignupFooter";
import styles from "./sign-up.module.scss";
import { POST } from "../hooks/restApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import SignupStep1 from "../components/Signup/SignupStep1";
import SignupStep2 from "../components/Signup/SignupStep2";
import SignupStep3 from "../components/Signup/SignupStep3";
import SignupStep4 from "../components/Signup/SignupStep4";
import SignupStep5 from "../components/Signup/SignupStep5";
import { isValid, set } from "date-fns";
import { is } from "date-fns/locale";

export default function SignUp() {
  const [form, setForm] = useState({});
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const [allowNext, setAllowNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSubmit = () => {
    if (typeof form.prefer_service === "object")
      form.prefer_service = form.prefer_service.join(",");
    form.user_name = form.last_name + form.first_name;
    POST("/signup", form).then((res) => {
      console.log(res);
      alert(res?.response?.data?.message);
    });
  };

  const validation = (idx) => {
    const {
      first_name,
      last_name,
      mobile,
      email,
      password,
      password2,
      login_id,
    } = form;
    let isValidate = false;
    if (idx === 0) {
      isValidate = first_name && last_name && mobile && email ? true : false;
    } else if (idx === 1) {
      isValidate = login_id && password ? true : false;
    } else if (idx === 2) {
      isValidate = true;
    } else if (idx === 3) {
      isValidate = true;
    } else if (idx === 4) {
      isValidate = true;
    } else {
      isValidate = true;
    }
    setAllowNext(isValidate);
  };

  useEffect(() => {
    validation(activeIndex);
    console.log(activeIndex, form);
  }, [form, activeIndex]);

  const handleSlideChange = () => {
    const activeIndex = swiper.activeIndex;
    setActiveIndex(activeIndex);
  };

  const handleClickNext = () => {
    alert("aaa");
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    setSwiper(swiperInstance);
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
              ref={swiperRef}
              spaceBetween={0}
              modules={[Navigation, Controller]}
              className={`hero-swiper1 ${styles.rightSlide}`}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              allowSlideNext={allowNext}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => console.log(swiper)}
              onReachEnd={() => {
                console.log("end");
              }}
            >
              <SwiperSlide>
                <SignupStep1 form={form} setForm={setForm} />
              </SwiperSlide>
              <SwiperSlide>
                <SignupStep2 form={form} setForm={setForm} />
              </SwiperSlide>
              <SwiperSlide>
                <SignupStep3 form={form} setForm={setForm} />
              </SwiperSlide>
              <SwiperSlide>
                <SignupStep4 form={form} setForm={setForm} />
              </SwiperSlide>
              <SwiperSlide>
                <SignupStep5 form={form} setForm={setForm} />
                <button className={styles.signUpBtn} onClick={handleSubmit}>
                  Submit
                </button>
              </SwiperSlide>
              <div className={`swiper-button-prev ${styles.backBtn}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="10"
                  viewBox="0 0 22 10"
                  fill="none"
                >
                  <path
                    d="M4.80952 1L1 5M1 5L4.80952 9M1 5H21"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &ensp;Back
              </div>
              <div className={`swiper-button-next ${styles.nextBtn}`}>
                Next&ensp;
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
              </div>
            </Swiper>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
