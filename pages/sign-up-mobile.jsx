import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./sign-up-mobile.module.scss";
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

export default function SignupMobile() {
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
    POST("/signup", form).then((res) => {
      if (res.status === 200) {
        alert(
          "회원가입이 완료되었습니다. \n관리자 승인 후 로그인이 가능합니다."
        );
        router.push("/");
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
      if (innerWidth >= 768) {
        console.log("PC");
        router.push("/sign-up");
      }
    };
    handWindowSize();
    window.addEventListener("resize", handWindowSize);
    return () => {
      window.removeEventListener("resize", handWindowSize);
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={0}
      modules={[Navigation, Controller]}
      className={`hero-swiper1 ${styles.swiperContainer} `}
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
        <div className={styles.personalInfo}>
          {/* <div className={styles.titleWrap_mo}>
            <h1>
              하이엔드 골프서비스 <br />
              그린갤러리에 오신 것을 환영합니다!
            </h1>
          </div> */}
          <SignupStep1 form={form} setForm={setForm} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.loginInfo}>
          {/* <div className={styles.titleWrap_mo}>
            <h1>
              사용하실 아이디와 <br />
              비밀번호를 입력해 주세요.
            </h1>
          </div> */}
          <SignupStep2 form={form} setForm={setForm} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.locationInfo}>
          {/* <div className={styles.titleWrap_mo}>
            <h1>
              자주 이용하시거나 선호하시는 <br />
              골프장을 선택해 주세요.
            </h1>
          </div> */}
          <SignupStep3 form={form} setForm={setForm} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.checkedService}>
          {/* <div className={styles.titleWrap_mo}>
            <h1>
              가입 후 이용하고 싶은 <br />
              그린갤러리 서비스를 선택해 주세요.
            </h1>
          </div> */}
          <SignupStep4 form={form} setForm={setForm} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.privacyPolicy}>
          {/* <div className={styles.titleWrap_mo}>
            <h1>
              서비스 약관에 동의하시고 <br />
              그린갤러리를 만나보세요.
            </h1>
          </div> */}
          <SignupStep5 form={form} setForm={setForm} />
        </div>
      </SwiperSlide>
      <div className={styles.navigation}>
        <div className={`swiper-button-next ${styles.buttonNext}`}>Next</div>
        <div className={`swiper-button-prev ${styles.buttonPrev}`}>Previous</div>
      </div>
    </Swiper>
  );
}
