import React, { useState, useEffect } from "react";
import styles from "./sign-up-mobile.module.scss";
import { POST } from "../hooks/restApi";
import PrivacyPolicyText from "../components/Private/PrivacyPolicyText";
import TermsConditionsText from "../components/Private/TermsConditionsText";

const SignupMobile = ({ showReservationModal }) => {
  const [keywords, setKeywords] = useState([]);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(false);
  };

  const [tabMenu, setTabMenu] = useState("first");

  const handleTabMenu = (e) => {
    console.log(e.target.dataset.rrUiEventKey);
    if (e.target.dataset.rrUiEventKey === "first") {
      setTabMenu("first");
    } else if (e.target.dataset.rrUiEventKey === "second") {
      setTabMenu("second");
    } else {
      setTabMenu("third");
    }
  };

  const submitBooking = (e) => {
    e.preventDefault();
    console.log("test");
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    const { name } = e.target;
    let value = e.target.value;
    // 희망서비스 선택
    if (e.target.name === "prefer_service") {
      const arr = form?.prefer_service || [];
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
    <div className={styles.section}>

      <div className={styles.personalInfo}>
        <div className={styles.titleWrap}>
          <h1>
            하이엔드 골프서비스 <br />
            그린갤러리에 오신 것을 환영합니다!
          </h1>
        </div>
        <div className={styles.inputWrap}>
          <div className={styles.firstName}>
            <label htmlFor="firstname">
              First Name
              <input type="text" id="firstname" name="firstname" placeholder="길동" required />
            </label>
          </div>
          <div className={styles.lastName}>
            <label htmlFor="lastname">
              Last Name
              <input type="text" id="lastname" name="lastname" placeholder="홍" required />
            </label>
          </div>
          <div className={styles.phoneNumber}>
            <label htmlFor="phone">
              Phone Number
              <input type="tel" id="phone" name="phone" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}" size="13" placeholder="010-1234-5678" required />
            </label>
          </div>
          <div className={styles.email}>
            <label htmlFor="email">
              E-mail
              <input type="email" id="email" name="email" required />
            </label>
          </div>
      </div>

      <div className={styles.loginInfo}>
        <div className={styles.titleWrap}>
          <h1>
            사용하실 아이디와 <br />
            비밀번호를 입력해 주세요.
          </h1>
        </div>
        <div className={styles.inputWrap}>
          <div className={styles.id}>
            <label htmlFor="id">
              ID<br />
              <input type="text" id="id" name="id" placeholder="greengallery" />
            </label>
          </div>
          <div className={styles.password}>
            <label htmlFor="password">
              Password<br />
              <input type="password" id="password" name="password" /></label>
          </div>
          <div className={styles.dealer}>
            <label htmlFor="dealer">
              Dealer Code<br />
              <input type="text" id="dealer" name="dealer" placeholder="ad1234" />
            </label>
          </div>
        </div>
      </div>

      <div className={styles.locationInfo}>
        <div className={styles.titleWrap}>
          <h1>
            자주 이용하시거나 선호하시는 <br />
            골프장을 선택해 주세요.
          </h1>
        </div>
        <div className={styles.inputWrap}>
          <div className={styles.location}>
            <label htmlFor="location">
              Location
              <input type="text" id="location" name="location" placeholder="1차 희망지역" />
              <input type="text" id="location1" name="location1" placeholder="2차 희망지역" />
            </label>
          </div>
          <div className={styles.course}>
            <label htmlFor="course">
              Golf Course
              <input type="text" id="course" name="course" placeholder="1차 골프장" />
              <input type="text" id="course1" name="course1" placeholder="2차 골프장" />
            </label>
          </div>
        </div>
      </div>

      <div className={styles.locationInfo}>
        <div className={styles.titleWrap}>
          <h1>
            가입 후 이용하고 싶은 <br />
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
              <label htmlFor={`prefer_service_${index}`}>{keyword}</label>
            </div>
          ))}
        </div>
        <div>
          <span>1개 이상 선택해주세요! 	&#40;5개까지 중복 선택 가능&#41;</span>
        </div>
      </div>

      <div className={styles.locationInfo}>
        <div className={styles.titleWrap}>
          <h1>
            서비스 약관에 동의하시고 <br />
            그린갤러리를 만나보세요.
          </h1>
        </div>
        <div className={styles.privacyPolicyWrap}>
          <span>개인정보처리방침</span>
          <div className={styles.boxWrap}>
            <PrivacyPolicyText />
          </div>
        </div>

        <div className={styles.termsOfServiceyWrap}>
          <span>서비스 이용약관</span>
          <div className={styles.boxWrap}>
            <TermsConditionsText />
          </div>
        </div>

        <div className={styles.agreeButtonWrap}>
          <input
            type="checkbox"
            id={`agreeBtn`}
            name="agreeBtn"
            value="agree"
            onChange={handleChange}
          />
          <label htmlFor={`agreeBtn`}> 전체 약관에 동의합니다.</label>
        </div>
      </div> 
      
      <div className={styles.nextBtn}> 
        <button>Next</button>
      </div>

      <div className={styles.previewBtn}>
        <button>로그인 전 둘러보기</button>
      </div>

      {/* <div className={styles.ulWrap}>
        <ul>
          <li>
            <div className={styles.liWrap}>
              <h1>
                Vincent <br />
                Van Gogh
              </h1>
              <span>
                More  
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
                  <path d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </li>
          <li>
            <div className={styles.liWrap}>
              <h1>
                Auguste <br />
                Renoir
              </h1>
              <span>
                More  
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
                  <path d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </li>
          <li>
            <div className={styles.liWrap}>
              <h1>
                Claude <br />
                Monet
              </h1>
              <span>
                More  
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
                  <path d="M17.1905 1L21 5M21 5L17.1905 9M21 5H1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </li>
      </ul>
      </div> */}
      
      </div>
    </div>
    </>
  );
};

export default SignupMobile;
