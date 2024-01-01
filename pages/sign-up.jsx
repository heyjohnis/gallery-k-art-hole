import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Signup/SignupFooter";
import styles from "./sign-up.module.scss";
import { POST } from "../hooks/restApi";
import "react-step-progress/dist/index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import SignupStep1 from "../components/Signup/SignupStep1";
import SignupStep2 from "../components/Signup/SignupStep2";
import SignupStep3 from "../components/Signup/SignupStep3";
import SignupStep4 from "../components/Signup/SignupStep4";

export default function SignUp() {
  const [form, setForm] = useState({});
  const swiperRef = useRef(null);
  const handleSubmit = () => {
    if (typeof form.prefer_service === "object")
      form.prefer_service = form.prefer_service.join(",");
    form.user_name = form.last_name + form.first_name;
    POST("/signup", form).then((res) => {
      console.log(res);
      alert(res?.response?.data?.message);
    });
  };

  useEffect(() => {
    console.log("useEffect form: ", form);
  }, [form]);

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current.swiper;
    console.log("swiperInstance.activeIndex: ", swiperInstance.activeIndex);
  };
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
              loopPreventsSlide={false}
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
                <button className={styles.signUpBtn} onClick={handleSubmit}>
                  Submit
                </button>
              </SwiperSlide>
              <div className="swiper-button-prev">Back</div>
              <div className="swiper-button-next">Next</div>
            </Swiper>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
