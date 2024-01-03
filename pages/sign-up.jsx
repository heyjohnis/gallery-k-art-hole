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
import { set } from "date-fns";



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

  const validation1 = () => {
    return true;
  };

  useEffect(() => {
    console.log(form);
    if (form.first_name) setAllowNext(true);
  }, [form, activeIndex]);

  const handleSlideChange = () => {
    setAllowNext(false);
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
              <div className={`swiper-button-prev ${styles.backBtn}`}>Back</div>
              <div className={`swiper-button-next ${styles.nextBtn}`}>Next</div>
            </Swiper>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
