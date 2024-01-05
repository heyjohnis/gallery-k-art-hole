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

      <div className={styles.checkedService}>
        <div className={styles.titleWrap}>
          <h1>
            가입 후 이용하고 싶은 <br />
            그린갤러리 서비스를 선택해 주세요.
          </h1>
        </div>
        <div className={styles.checkboxWrap}>
          {keywords.map((keyword, index) => (
            <div key={index} className={styles.checkebox}>
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
        <div className={styles.guide}>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <g clip-path="url(#clip0_2850_2461)">
            <path d="M6.98702 4.34257C7.32112 4.34257 7.59196 4.07173 7.59196 3.73763C7.59196 3.40353 7.32112 3.13269 6.98702 3.13269C6.65292 3.13269 6.38208 3.40353 6.38208 3.73763C6.38208 4.07173 6.65292 4.34257 6.98702 4.34257Z" fill="#999999"/>
            <path d="M8.2963 10.0247H7.4321V5.31482H6.1358C6.0212 5.31482 5.9113 5.36034 5.83026 5.44138C5.74923 5.52241 5.70371 5.63232 5.70371 5.74692C5.70371 5.86152 5.74923 5.97142 5.83026 6.05246C5.9113 6.13349 6.0212 6.17902 6.1358 6.17902H6.5679V10.0247H5.70371C5.58911 10.0247 5.4792 10.0702 5.39817 10.1513C5.31713 10.2323 5.27161 10.3422 5.27161 10.4568C5.27161 10.5714 5.31713 10.6813 5.39817 10.7623C5.4792 10.8434 5.58911 10.8889 5.70371 10.8889H8.2963C8.4109 10.8889 8.5208 10.8434 8.60184 10.7623C8.68287 10.6813 8.7284 10.5714 8.7284 10.4568C8.7284 10.3422 8.68287 10.2323 8.60184 10.1513C8.5208 10.0702 8.4109 10.0247 8.2963 10.0247Z" fill="#999999"/>
            <path d="M7.00001 13.9136C5.63263 13.9136 4.29596 13.5081 3.15903 12.7484C2.0221 11.9888 1.13597 10.909 0.612694 9.64572C0.0894213 8.38243 -0.0474906 6.99234 0.219271 5.65124C0.486033 4.31013 1.14449 3.07825 2.11137 2.11137C3.07825 1.14449 4.31013 0.486033 5.65124 0.219271C6.99234 -0.0474906 8.38243 0.0894213 9.64572 0.612694C10.909 1.13597 11.9888 2.0221 12.7484 3.15903C13.5081 4.29596 13.9136 5.63263 13.9136 7.00001C13.9136 8.8336 13.1852 10.5921 11.8886 11.8886C10.5921 13.1852 8.8336 13.9136 7.00001 13.9136ZM7.00001 0.950626C5.80355 0.950626 4.63397 1.30542 3.63915 1.97013C2.64434 2.63485 1.86897 3.57963 1.41111 4.68501C0.953245 5.79039 0.833447 7.00672 1.06686 8.18019C1.30028 9.35365 1.87643 10.4315 2.72245 11.2776C3.56847 12.1236 4.64637 12.6997 5.81983 12.9332C6.9933 13.1666 8.20963 13.0468 9.31501 12.5889C10.4204 12.131 11.3652 11.3557 12.0299 10.3609C12.6946 9.36605 13.0494 8.19646 13.0494 7.00001C13.0494 5.39561 12.412 3.85693 11.2776 2.72245C10.1431 1.58797 8.60441 0.950626 7.00001 0.950626Z" fill="#999999"/>
            </g>
            <defs>
              <clipPath id="clip0_2850_2461">
                <rect width="14" height="14" fill="white"/>
              </clipPath> 
            </defs>
          </svg>
            &nbsp;
            1개 이상 선택해주세요! 	&#40;5개까지 중복 선택 가능&#41;</span>
        </div>
      </div>

      <div className={styles.privacyPolicy}>
        <div className={styles.titleWrap}>
          <h1>
            서비스 약관에 동의하시고 <br />
            그린갤러리를 만나보세요.
          </h1>
        </div>
        <div className={styles.contentsWrap}>
          <div className={styles.privacyPolicyWrap}>
            <h4>개인정보처리방침</h4>
            <div className={styles.boxWrap}>
              <PrivacyPolicyText />
            </div>
          </div>

          <div className={styles.termsOfServiceWrap}>
            <h4>서비스 이용약관</h4>
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
      </div>
    </div>
      
    <div className={styles.nextBtn}> 
      <button>Next</button>
      <button>Submit</button>
    </div>

    <div className={styles.previewBtn}>
      <a href="">로그인 전 둘러보기</a>
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
    </>
  );
};

export default SignupMobile;
