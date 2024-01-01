import React, { useState, useEffect } from "react";
import styles from "../../pages/sign-up.module.scss";
import useRenderRegionOptions from "../../hooks/useRenderRegionOptions";
import { POST } from "../../hooks/restApi";

export default function SignupStep3({ form, setForm }) {
  const regionOptions = useRenderRegionOptions();
  const [ccList, setCcList] = useState([]);
  const [ccSelect1, setCcSelect1] = useState([]);
  const [ccSelect2, setCcSelect2] = useState([]);

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
                <input
                  type="text"
                  name="cc1"
                  id="cc1"
                  onChange={handleChangeCcInput}
                  placeholder="1차 골프장"
                  value={form?.cc1}
                />
                {ccSelect1.length > 0 && (
                  <div className={styles.cc_selectbox}>
                    {ccSelect1.map((cc) => {
                      return (
                        <div
                          key={cc.cc_no}
                          className={styles.cc_select}
                          onClick={handleClickCcSelect(1, cc.cc_no, cc.cc_name)}
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
                  value={form?.cc2}
                />
                {ccSelect2.length > 0 && (
                  <div className={styles.cc_selectbox}>
                    {ccSelect2.map((cc) => {
                      return (
                        <div
                          key={cc.cc_no}
                          className={styles.cc_select}
                          onClick={handleClickCcSelect(2, cc.cc_no, cc.cc_name)}
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
  );
}
