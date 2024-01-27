import React from "react";
import styles from "../../pages/sign-up.module.scss";
import { POST } from "../../utils/restApi";

export default function SignupStep2({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      form.confirm_password &&
      name === "confirm_password" &&
      value !== form.password
    ) {
      alert("비밀번호가 일치하지 않습니다.");
      e.target.value = "";
      return;
    } else if (name === "password" && value.length < 8) {
      alert("비밀번호는 8자리 이상이어야 합니다.");
      e.target.value = "";
      return;
    }
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const checkRegistedLoginId = (e) => {
    const value = e.target.value;
    POST("/checkLoginId", { login_id: value }).then((res) => {
      if (res?.data?.having_id) {
        alert("이미 등록된 아이디입니다.");
        e.target.value = "";
        e.target.focus();
      }
      setForm((prevState) => ({ ...prevState, login_id: value }));
    });
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
            <input type="text" name="login_id" onBlur={checkRegistedLoginId} />
          </div>
          <div className={`${styles.inputDealer} ${styles.inputItems}`}>
            <label htmlFor="">Dealer Code</label>
            <input type="text" name="dlr_cd" onChange={handleChange} />
          </div>
          <div className={`${styles.inputPass} ${styles.inputItems} password`}>
            <label htmlFor="">Password</label>
            <input type="password" name="password" onBlur={handleChange} />
          </div>
          <div className={`${styles.inputPass} ${styles.inputItems} password`}>
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              onBlur={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
