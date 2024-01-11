import React, { useState, useEffect } from "react";
import styles from "../../pages/sign-up.module.scss";
import { POST } from "../../hooks/restApi";
import PrivacyPolicyText from "../../components/Private/PrivacyPolicyText";
import TermsConditionsText from "../../components/Private/TermsConditionsText";

export default function SignupStep5({ form, setForm }) {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log("name: ", name, "value: ", checked);
    setForm((prevState) => ({ ...prevState, [name]: checked }));
  };
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

        <div class={styles.contentsWrap}>
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
        </div>

        <div className={styles.agreeButtonWrap}>
          <input
            type="checkbox"
            id={`agreeBtn`}
            name="is_agree_service"
            onChange={handleChange}
          />
          <label htmlFor={`agreeBtn`}> 전체 약관에 동의합니다.</label>
        </div>
      </div>
    </div>
  );
}
