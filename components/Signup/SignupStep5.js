import React, { useState, useEffect } from "react";
import styles from "../../pages/sign-up.module.scss";
import { POST } from "../../hooks/restApi";
import PrivacyPolicyText from "../../components/Private/PrivacyPolicyText";
import TermsConditionsText from "../../components/Private/TermsConditionsText";

export default function SignupStep5({ form, setForm }) {
  const [keywords, setKeywords] = useState([]);

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
    <div className={styles.page} id="Fifth">
      <div className={styles.fifthWrap}>
        <div className={styles.titleWrap}>
          <h1>
            서비스 약관에 동의하시고
            <br />
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
    </div>
  );
}
