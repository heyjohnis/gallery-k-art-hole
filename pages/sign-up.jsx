import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
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

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const [allowNext, setAllowNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSubmit = () => {
    if (typeof form.prefer_service === "object")
      form.prefer_service = form.prefer_service.join(",");
    form.user_name = form.last_name + form.first_name;
    if (!form.is_agree_service) {
      alert("전체 약관에 동의해주세요.");
      return;
    }
    POST("/signup", form).then((res) => {
      if (res.status === 200) {
        alert(
          "회원가입이 완료되었습니다. \n관리자 승인 후 로그인이 가능합니다."
        );
        router.push("/sign-up-comp");
      } else {
        alert(res?.data?.message);
      }
    });
  };

  const validation = (idx) => {
    const {
      first_name,
      last_name,
      mobile,
      email,
      password,
      confirm_password,
      login_id,
    } = form;
    let isValidate = false;
    if (idx === 0) {
      isValidate = first_name && last_name && mobile && email ? true : false;
    } else if (idx === 1) {
      isValidate = login_id && password && confirm_password ? true : false;
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

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    setSwiper(swiperInstance);
  }, []);

  useEffect(() => {
    const handWindowSize = () => {
      const { innerWidth } = window;
      if (innerWidth < 768) {
        console.log("mobile");
        router.push("/sign-up-mobile");
      }
    };
    handWindowSize();
    window.addEventListener("resize", handWindowSize);
    return () => {
      window.removeEventListener("resize", handWindowSize);
    };
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
              allowTouchMove={false} // 버튼으로만 슬라이드 조작 가능(false)
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
