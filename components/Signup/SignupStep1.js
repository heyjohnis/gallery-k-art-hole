import React, { useEffect } from "react";
import styles from "../../pages/sign-up.module.scss";

export default function SignupStep1({ setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={`${styles.page}`} id="First">
      <div className={`${styles.firstWrap}`}>
        <div className={`${styles.titleWrap}`}>
          <h1>
            하이엔드 골프 멤버십
            <br />
            그린갤러리에 오신 것을 환영합니다.
          </h1>
        </div>

        <div className={`${styles.inputWrap}`}>
          <div className={`${styles.inputFname} ${styles.inputItems}`}>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="first_name"
              onChange={handleChange}
              placeholder="이름"
            />
          </div>
          <div className={`${styles.inputLname} ${styles.inputItems}`}>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="last_name"
              onChange={handleChange}
              placeholder="성"
            />
          </div>
          <div className={`${styles.inputPhone} ${styles.inputItems}`}>
            <label htmlFor="">Phone</label>
            <input type="tel" name="mobile" onChange={handleChange} />
          </div>
          <div className={`${styles.inputEmail} ${styles.inputItems}`}>
            <label htmlFor="">Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
