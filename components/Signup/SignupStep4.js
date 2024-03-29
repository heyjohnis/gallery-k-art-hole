import React, { useState, useEffect } from "react";
import styles from "../../pages/sign-up.module.scss";
import { POST } from "../../utils/restApi";
import { HOPE_SERVICE } from "../../utils/cmmCode";

export default function SignupStep4({ form, setForm }) {
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
      if (arr.length > 5) {
        alert("최대 5개까지 선택 가능합니다.");
        const index = arr.indexOf(value);
        arr.splice(index, 1);
        e.target.checked = false;
        return;
      }
      value = arr;
    }
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
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
          {HOPE_SERVICE?.map((keyword, index) => (
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
      </div>
    </div>
  );
}
