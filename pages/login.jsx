import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, Navigation } from "swiper";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import { handleLogin } from "../utils/auth";
import baseUrl from "../utils/baseUrl";
import styles from "./login.module.scss";
import "swiper/scss/pagination";

const SERVICE_LIST = [
  {
    id: 1,
    item: "골프장 예약",
    checked: true,
  },
  {
    id: 2,
    item: "스크린 골프",
    checked: true,
  },
  {
    id: 3,
    item: "리무진",
    checked: true,
  },
  {
    id: 4,
    item: "요트",
    checked: true,
  },
  {
    id: 5,
    item: "호텔",
    checked: true,
  },
  {
    id: 6,
    item: "전용기",
    checked: true,
  },
  {
    id: 7,
    item: "골프공",
    checked: true,
  },
  {
    id: 8,
    item: "골프백",
    checked: true,
  },
  {
    id: 9,
    item: "골프웨어",
    checked: true,
  },
  {
    id: 10,
    item: "골프채", 
    checked: true,
  },
  {
    id: 11,
    item: "전자제품",
    checked: true,
  },
  {
    id: 12,
    item: "국내 골프장",
    checked: true,
  },
  {
    id: 13,
    item: "해외 골프장",
    checked: true,
  },
  {
    id: 14,
    item: "프리미엄 골프장",
    checked: true,
  },
  {
    id: 15,
    item: "미술품",
    checked: true,
  },
  {
    id: 16,
    item: "사은품",
    checked: true,
  },
  {
    id: 17,
    item: "커뮤니티",
    checked: true,
  },
  {
    id: 18,
    item: "파티",
    checked: true,
  },
  {
    id: 19,
    item: "모임",
    checked: true,
  },
  {
    id: 20,
    item: "레스토랑",
    checked: true,
  },
  {
    id: 21,
    item: "엔터테인먼트",
    checked: true,
  },
  {
    id: 22,
    item: "스파",
    checked: true,
  },
  {
    id: 23,
    item: "와인",
    checked: true,
  },
];

const INITIAL_USER = {
  login_id: "",
  password: "",
};

export default function Login() {
  const router = useRouter();

  const [user, setUser] = useState(INITIAL_USER);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");

  const { goto } = router.query;

  useEffect(() => {
    console.log("useEffect router.query");
    setUser({
      login_id: window.localStorage.getItem("userId") || "",
      password: window.localStorage.getItem("password") || "",
    })
  }, [router.query]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      window.localStorage.setItem("userId", user.login_id)
      window.localStorage.setItem("password", user.password)
      handleLogin(response.data.token, goto);
    } catch (error) {
      if (error.response) alert(error.response.data.message);
      else alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">

        <div className={`col-lg-6 col-md-6 col-xs-6 ${styles.loginPageLeftSection}`}>
          <Swiper
              navigation={false}
              spaceBetween={0}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              pagination={{
                clickable: false,
                type: "bullets",
              }}
              modules={[A11y, Autoplay, Navigation]}
              className={`hero-swiper1`}
            >
              <SwiperSlide>
                <div className={`row ${styles.slide1}`}>
                  <div className={`${styles.backgroundImage}`}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`row ${styles.slide2}`}>
                  <div className={`${styles.backgroundImage}`}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`row ${styles.slide3}`}>
                  <div className={`${styles.backgroundImage}`}></div>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>

        <div className={`col-lg-6 col-md-6 col-xs-6 ${styles.loginPageRightSection}`}>
          <Swiper
              navigation={false}
              spaceBetween={0}
              autoplay={{
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              pagination={{
                clickable: false,
                type: "bullets",
              }}
              modules={[A11y, Navigation,]}
              className={`hero-swiper1 ${styles.rightSlide}`}
            >
            <SwiperSlide>
              <div className={`row ${styles.firstWrap}`}>
                  <div className={`row ${styles.titleWrap}`}>
                    <h1>
                      하이엔드 골프 서비스<br />
                      그린갤러리에 오신 것을 환영합니다.
                    </h1>
                  </div>
                  <div className={`row ${styles.inputWrap}`}>
                    <div className={`row ${styles.inputFname} ${styles.inputItems}`}>
                      <label htmlFor="">First Name</label>
                      <input type="text" />
                    </div>
                    <div className={`row ${styles.inputLname} ${styles.inputItems}`}>
                      <label htmlFor="">Last Name</label>
                      <input type="text" />
                    </div>
                    <div className={`row ${styles.inputPhone} ${styles.inputItems}`}>
                      <label htmlFor="">Phone</label>
                      <input type="tel" /> - 
                      <input type="tel" /> - 
                      <input type="tel" />
                    </div>
                    <div className={`row ${styles.inputEmail} ${styles.inputItems}`}>
                      <label htmlFor="">Email</label>
                      <input type="email" />
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`row ${styles.secondWrap}`}>
                <div className={`row ${styles.titleWrap}`}>
                  <h1>
                    사용하실 아이디와 <br />
                    비밀번호를 입력해 주세요.
                  </h1>
                </div>
                <div className={`row ${styles.inputWrap}`}>
                  <div className={`row ${styles.inputFname}`}>
                    <label htmlFor="">ID</label>
                    <input type="text" />
                  </div>
                  <div className={`row ${styles.inputLname}`}>
                    <label htmlFor="">Password</label>
                    <input type="text" />
                  </div>
                  <div className={`row ${styles.inputLname}`}>
                    <label htmlFor="">Dealer Code</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`row ${styles.thirdWrap}`}>
                <div className={`row ${styles.titleWrap}`}>
                  <h1>
                    자주 이용하시거나<br />
                    선호하시는 골프장을 선택해 주세요.
                  </h1>
                </div>
                <div className={`row ${styles.selectWrap}`}>
                  <div className={`row ${styles.selectLocation}`}>
                    <label htmlFor="">Location</label>
                    <select name="" id="">
                      <option disabled selected>1차 희망 지역</option>
                    </select>
                    <select name="" id="">
                      <option disabled selected>2차 희망 지역</option>
                    </select>
                  </div>
                  <div className={`row ${styles.selectGolfCourse}`}>
                    <label htmlFor="">Golf Course</label>
                    <select name="" id="">
                      <option disabled selected>1차 골프장</option>
                    </select>
                    <select name="" id="">
                      <option disabled selected>2차 골프장</option>
                    </select>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`row ${styles.fourthWrap}`}>
                <div className={`row ${styles.titleWrap}`}>
                  <h1>
                    가입 후 이용하고 싶은<br />
                    그린갤러리 서비스를 선택해 주세요.
                  </h1>
                </div>
                <div className={`row ${styles.checkedWrap}`}>
                  {SERVICE_LIST.map((itemList) => (
                    <label><input type="checkbox" /> { itemList.item }</label>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            <div>
              <p>
                <span>CONTACT</span> <span>ㅣ</span> cs@galleryk.co.kr ㆍ 1588 - 1778 ㆍ 10am - 7pm
              </p>
            </div>
          </Swiper>
        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}
