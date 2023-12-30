import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, Navigation } from "swiper";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Signup/SignupFooter";
import { handleLogin } from "../utils/auth";
import baseUrl from "../utils/baseUrl";
import styles from "./sign-up.module.scss";
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

export default function SignUp() {
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
    });
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
      window.localStorage.setItem("userId", user.login_id);
      window.localStorage.setItem("password", user.password);
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
              navigation={true}
              spaceBetween={0}
              className={`hero-swiper1 ${styles.rightSlide}`}
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
                      {SERVICE_LIST.map((itemList) => (
                        <>
                          <input
                            type="checkbox"
                            id={itemList.id}
                            name="service"
                          />
                          <label htmlFor={itemList.id} key={itemList.id}>
                            {itemList.item}
                          </label>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
