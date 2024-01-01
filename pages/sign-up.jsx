import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Footer from "../components/Signup/SignupFooter";
import styles from "./sign-up.module.scss";
import { POST } from "../hooks/restApi";
import "swiper/css";
import "swiper/css/navigation";
import useRenderRegionOptions from "../hooks/useRenderRegionOptions";
import { render } from "react-dom";
import { set } from "date-fns";

export default function SignUp() {
  const regionOptions = useRenderRegionOptions();
  const [form, setForm] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [ccList, setCcList] = useState([]);
  const [ccSelect1, setCcSelect1] = useState([]);
  const [ccSelect2, setCcSelect2] = useState([]);

  const getServiceKeyword = () => {
    POST("/mall/keyword", { pd_kind: "all" }).then((res) => {
      const keys = Array.from(new Set((res?.data?.keyword || "").split(",")));
      setKeywords(keys);
    });
  };

  const handleChange = (e) => {
    const { name } = e.target;
    let value = e.target.value;
    // 희망서비스 선택
    if (e.target.name === "prefer_service") {
      const arr = form.prefer_service || [];
      if (e.target.checked) {
        arr.push(value);
      } else {
        const index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
      }
      value = arr;
    }
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (typeof form.prefer_service === "object")
      form.prefer_service = form.prefer_service.join(",");
    form.user_name = form.last_name + form.first_name;
    POST("/signup", form).then((res) => {
      console.log(res);
      alert(res?.response?.data?.message);
    });
  };

  const getCCList = () => {
    try {
      POST("/reservation/cc-info", {}).then((res) => {
        console.log("res: ", res);
        setCcList(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCcInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setCcSelect1([]);
    setCcSelect2([]);
    if (value.length > 0) {
      const cc = ccList.filter((cc) => cc?.cc_name.includes(value));
      name === "cc1" ? setCcSelect1(cc) : setCcSelect2(cc);
    }
  };

  const handleClickCcSelect = (ccSel, ccNo, ccName) => () => {
    console.log("handleClickCcSelet: ", ccSel, ccNo);
    if (ccSel === 1) {
      setForm({ ...form, cc1: ccName });
    } else {
      setForm({ ...form, cc2: ccName });
    }
    setCcSelect1([]);
    setCcSelect2([]);
  };

  useEffect(() => {
    getServiceKeyword();
    getCCList();
  }, []);

  useEffect(() => {
    console.log(form);
  }, [form]);

  useEffect(() => {
    console.log("ccList: ", ccList);
  }, [ccList]);

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
              modules={[Navigation]}
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
                        <input
                          type="text"
                          name="first_name"
                          onChange={handleChange}
                          placeholder="이름"
                        />
                      </div>
                      <div
                        className={`${styles.inputLname} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          onChange={handleChange}
                          placeholder="성"
                        />
                      </div>
                      <div
                        className={`${styles.inputPhone} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Phone</label>
                        <input
                          type="tel"
                          name="mobile"
                          onChange={handleChange}
                        />
                      </div>
                      <div
                        className={`${styles.inputEmail} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Email</label>
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                        />
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
                        <input
                          type="text"
                          name="login_id"
                          onChange={handleChange}
                        />
                      </div>
                      <div
                        className={`${styles.inputPass} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Password</label>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                        />
                      </div>
                      <div
                        className={`${styles.inputDealer} ${styles.inputItems}`}
                      >
                        <label htmlFor="">Dealer Code</label>
                        <input
                          type="text"
                          name="dlr_cd"
                          onChange={handleChange}
                        />
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
                          <select
                            name="local1"
                            id="local1"
                            onChange={handleChange}
                          >
                            <option disabled selected>
                              1차 희망 지역
                            </option>
                            {regionOptions}
                          </select>
                          <select
                            name="local2"
                            id="local2"
                            onChange={handleChange}
                          >
                            <option disabled selected>
                              2차 희망 지역
                            </option>
                            {regionOptions}
                          </select>
                        </div>
                      </div>
                      <div
                        className={`${styles.selectGolfCourse} ${styles.selectItems}`}
                      >
                        <label htmlFor="">Golf Course</label>
                        <div className={`${styles.selectWrap}`}>
                          <div className={styles.cc_input}>
                            <input
                              type="text"
                              name="cc1"
                              id="cc1"
                              onChange={handleChangeCcInput}
                              placeholder="1차 골프장"
                              value={form.cc1}
                            />
                            {ccSelect1.length > 0 && (
                              <div className={styles.cc_selectbox}>
                                {ccSelect1.map((cc) => {
                                  return (
                                    <div
                                      key={cc.cc_no}
                                      className={styles.cc_select}
                                      onClick={handleClickCcSelect(
                                        1,
                                        cc.cc_no,
                                        cc.cc_name
                                      )}
                                    >
                                      [{cc.region_nm}] {cc.cc_name}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                          <div className={styles.cc_input}>
                            <input
                              type="text"
                              name="cc2"
                              id="cc2"
                              onChange={handleChangeCcInput}
                              placeholder="2차 골프장"
                              value={form.cc2}
                            />
                            {ccSelect2.length > 0 && (
                              <div className={styles.cc_selectbox}>
                                {ccSelect2.map((cc) => {
                                  return (
                                    <div
                                      key={cc.cc_no}
                                      className={styles.cc_select}
                                      onClick={handleClickCcSelect(
                                        2,
                                        cc.cc_no,
                                        cc.cc_name
                                      )}
                                    >
                                      [{cc.region_nm}] {cc.cc_name}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
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
                            id={`prefer_service_${index}`}
                            name="prefer_service"
                            value={keyword}
                            onChange={handleChange}
                          />
                          <label htmlFor={`prefer_service_${index}`}>
                            {keyword}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button className={styles.signUpBtn} onClick={handleSubmit}>
                  Submit
                </button>
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
