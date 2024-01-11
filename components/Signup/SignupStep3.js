import React, { useState, useEffect } from "react";
import styles from "../../pages/sign-up.module.scss";
import useRenderRegionOptions from "../../hooks/useRenderRegionOptions";
import { POST } from "../../hooks/restApi";

export default function SignupStep3({ form, setForm }) {
  const regionOptions = useRenderRegionOptions();
  const [ccList, setCcList] = useState([]);

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

  useEffect(() => {
    getCCList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClickCcSelect = (ccSel, ccNo, ccName) => () => {
    console.log("handleClickCcSelet: ", ccSel, ccNo);
    if (ccSel === 1) {
      setForm((prevState) => ({ ...prevState, cc1: ccName }));
    } else {
      setForm((prevState) => ({ ...prevState, cc2: ccName }));
    }
    setCcSelect1([]);
    setCcSelect2([]);
  };

  useEffect(() => {
    console.log("ccList: ", ccList);
  }, [ccList]);

  return (
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
          <div className={`${styles.selectLocation} ${styles.selectItems}`}>
            <label htmlFor="">Location</label>
            <div className={`${styles.selectWrap}`}>
              <select name="local1" id="local1" onChange={handleChange}>
                <option disabled selected>
                  1차 희망 지역
                </option>
                {regionOptions}
              </select>
              <select name="local2" id="local2" onChange={handleChange}>
                <option disabled selected>
                  2차 희망 지역
                </option>
                {regionOptions}
              </select>
            </div>
          </div>
          <div className={`${styles.selectGolfCourse} ${styles.selectItems}`}>
            <label htmlFor="">Golf Course</label>
            <div className={`${styles.selectWrap}`}>
              <div className={styles.cc_input}>
                <select name="cc1" id="cc1" onChange={handleChange}>
                  <option value="">권역을 선택하세요</option>
                  {ccList.map((cc) => {
                    return (
                      <option
                        key={cc.cc_no}
                        value={`[${cc.region_nm}] ${cc.cc_name}`}
                      >
                        [{cc.region_nm}] {cc.cc_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={styles.cc_input}>
                <select name="cc1" id="cc1" onChange={handleChange}>
                  <option value="">권역을 선택하세요</option>

                  {ccList.map((cc) => {
                    return (
                      <option
                        key={cc.cc_no}
                        value={`[${cc.region_nm}] ${cc.cc_name}`}
                      >
                        [{cc.region_nm}] {cc.cc_name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
