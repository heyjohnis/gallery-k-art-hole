import React from "react";
import styles from "../../pages/sign-up.module.scss";

export default function SignupStep2({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
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
            <input type="text" name="login_id" onChange={handleChange} />
          </div>
          <div className={`${styles.inputPass} ${styles.inputItems}`}>
            <label htmlFor="">Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div className={`${styles.inputDealer} ${styles.inputItems}`}>
            <label htmlFor="">Dealer Code</label>
            <input type="text" name="dlr_cd" onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
