/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState, useEffect } from "react";
import cookie from "js-cookie";
import { useDaumPostcodePopup } from "react-daum-postcode";

import { handleLogin } from "../../utils/auth";
import baseUrl from "../../utils/baseUrl";
import { hyphenForPhone, hyphenForCorpNum } from "../../utils/number";

export default function SignupComp({ compType, user }) {
  const [readlOnly, setReadlOnly] = useState(false);
  const [form, setForm] = useState(
    //   # user_kind  01: 개인 / 02: 사업자
    // # crop_type  01: 개인회사 / 02: 법인회사

    {
      login_id: "",
      password: "",
      user_name: "",
      user_kind: "01",
      corp_type: "",
      corp_name: "",
      corp_ssn: "",
      zipcode: "",
      addr1: "",
      addr2: "",
      phone: "",
      mobile: "",
      birthday: "1980-01-01",
      gender: "",
      email: "",
      dlr_cd: "",
    }
  );
  const [, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const checkLoginId = async () => {
    if (compType === "mod") return;

    const url = `${baseUrl}/checkLoginId`;
    const payload = { login_id: form.login_id };

    const response = await axios.post(url, payload);
    if (response && response.data.having_id) {
      setForm((prevState) => ({ ...prevState, login_id: "" }));
      alert("이미 가입된 아이디입니다.");
    }
  };

  const checkPassword = () => {
    if (
      form.password &&
      form.password_chk &&
      form.password != form.password_chk
    ) {
      alert("비밀번호가 일치하지 않습니다.");
      setForm((prevState) => ({
        ...prevState,
        password: "",
        password_chk: "",
      }));
    }
  };

  const validationInputs = () => {
    if (!form.login_id) throw new Error("아이디를 입력해주세요.");
    if (!form.password) throw new Error("패스워드를 입력해주세요.");
    if (!form.user_name) throw new Error("이름을 입력해주세요.");
    if (!form.mobile) throw new Error("휴대전화를 입력해주세요.");
    if (!form.email) throw new Error("이메일을 입력해주세요.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = `${baseUrl}/${
        compType === "mod" ? "myinfo/update" : "signup"
      }`;
      const payload = {
        ...form,
        corp_ssn: form.corp_ssn.replace(/[^0-9]/g, ""),
        mobile: form.mobile.replace(/[^0-9]/g, ""),
        phone: form.phone.replace(/[^0-9]/g, ""),
      };

      validationInputs();

      console.log("payload: ", payload);

      const medq_token = cookie.get("medq_token");
      const response = await axios.post(url, payload, {
        headers: { Authorization: `Bearer ${medq_token}` },
      });
      if (compType === "reg") {
        alert("회원가입이 완료되었습니다. 관리자 승인 후 로그인이 가능합니다.");
        handleLogin(response.data.token);
      } else {
        alert("수정되었습니다.");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log("=-=-0=0-0-=", data.zonecode);
    setForm((prevState) => ({
      ...prevState,
      addr1: fullAddress,
      zipcode: data.zonecode,
    }));
  };

  useEffect(() => {
    if (compType == "mod") {
      setForm(() => ({
        ...user,
        mobile: hyphenForPhone(user.mobile),
        phone: hyphenForPhone(user.phone),
        corp_ssn: hyphenForCorpNum(user.corp_ssn),
      }));
      setReadlOnly(true);
    }
  }, [user, compType]);

  return (
    <>
      <div className="contact-form-action">
        <div className="form-heading text-center">
          <h3 className="form-title">회원인증</h3>
        </div>

        <form method="post">
          <div className="row">
            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>
                  회원구분 <span className="sup">*</span>
                </p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <div className="radio">
                  <label className="custom">
                    <span>개인회원</span>
                    <input
                      type="radio"
                      name="user_kind"
                      value="01"
                      onChange={handleChange}
                      checked={form.user_kind === "01"}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="radio ml-30">
                  <label className="custom">
                    <span>사업자회원</span>
                    <input
                      type="radio"
                      name="user_kind"
                      value="02"
                      onChange={handleChange}
                      checked={form.user_kind === "02"}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            {form.user_kind === "02" && (
              <>
                <div className="form-group signup">
                  <div className="col-md-3 col-sm-3">
                    <p>
                      사업자 구분 <span className="sup">*</span>
                    </p>
                  </div>
                  <div className="col-md-9 col-sm-9 signup">
                    <div className="radio">
                      <label className="custom">
                        <span>개인사업자</span>
                        <input
                          type="radio"
                          value="01"
                          name="corp_type"
                          id=""
                          onChange={handleChange}
                          checked={form.corp_type === "01"}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="radio ml-30">
                      <label className="custom">
                        <span>법인사업자</span>
                        <input
                          type="radio"
                          value="02"
                          name="corp_type"
                          onChange={handleChange}
                          checked={form.corp_type === "02"}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group signup">
                  <div className="col-md-3 col-sm-3">
                    <p>
                      사업자정보 <span className="sup">*</span>
                    </p>
                  </div>
                  <div className="col-md-9 col-sm-9">
                    <label htmlFor="form1">사업자명</label>
                    <input
                      className="form-control"
                      type="text"
                      name="corp_name"
                      id="form1"
                      value={form.corp_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group signup">
                  <div className="col-md-3 col-sm-3"></div>
                  <div className="col-md-9 col-sm-9">
                    <label htmlFor="form1">사업자번호</label>
                    <div className="d-flex">
                      <input
                        className="form-control"
                        type="text"
                        name="corp_ssn"
                        id="form1"
                        value={form.corp_ssn}
                        maxLength={12}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <hr />
            <div className="form-heading text-center mt-20">
              <h3 className="form-title">기본정보</h3>
            </div>

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>
                  아이디 <span className="sup">*</span>
                </p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="text"
                  name="login_id"
                  placeholder="아이디를 입력하세요"
                  value={form.login_id}
                  onChange={handleChange}
                  onBlur={checkLoginId}
                  readOnly={readlOnly}
                />
              </div>
            </div>

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>
                  비밀번호 <span className="sup">*</span>
                </p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요."
                  value={form.password}
                  onChange={handleChange}
                  onBlur={checkPassword}
                />
              </div>
            </div>

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>
                  비밀번호 확인 <span className="sup">*</span>
                </p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="password"
                  name="password_chk"
                  placeholder="비밀번호를 한번 더 입력하세요."
                  value={form.password_chk}
                  onChange={handleChange}
                  onBlur={checkPassword}
                />
              </div>
            </div>

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>
                  이름 <span className="sup">*</span>
                </p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="text"
                  name="user_name"
                  placeholder="이름을 입력하세요."
                  value={form.user_name}
                  onChange={handleChange}
                  readOnly={readlOnly}
                />
              </div>
            </div>

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>주소</p>
              </div>
              <div className="col-md-9 col-sm-9">
                <div className="row">
                  <div className="col-md-8 col-sm-8">
                    <input
                      className="form-control"
                      type="text"
                      name="zipcode"
                      id="form1"
                      placeholder="우편번호"
                      value={form.zipcode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <button onClick={handleClick} type="button">
                      주소검색
                    </button>
                  </div>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="addr1"
                  id="form1"
                  placeholder="기본주소"
                  value={form.addr1}
                  onChange={handleChange}
                />
                <input
                  className="form-control"
                  type="text"
                  name="addr2"
                  id="form1"
                  placeholder="나머지 주소"
                  value={form.addr2}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>일반전화</p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  id="form1"
                  value={form.phone}
                  maxLength={15}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>
                  휴대전화 <span className="sup">*</span>
                </p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="text"
                  name="mobile"
                  id="form1"
                  value={form.mobile}
                  maxLength={15}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>
                  이메일 <span className="sup">*</span>
                </p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="이메일을 입력하세요."
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>생년월일</p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="date"
                  name="birthday"
                  placeholder="생년월일을 입력하세요."
                  value={form.birthday}
                  onChange={handleChange}
                />
              </div>
            </div> */}

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>성별</p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <div className="radio">
                  <label className="custom">
                    <span>남</span>
                    <input
                      type="radio"
                      value="m"
                      name="gender"
                      id=""
                      onChange={handleChange}
                      checked={form.gender === "m"}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="radio ml-30">
                  <label className="custom">
                    <span>여</span>
                    <input
                      type="radio"
                      value="f"
                      name="gender"
                      onChange={handleChange}
                      checked={form.gender === "f"}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="radio ml-30">
                  <label className="custom">
                    <span>미선택</span>
                    <input
                      type="radio"
                      value=""
                      name="gender"
                      onChange={handleChange}
                      checked={form.gender === ""}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group signup">
              <div className="col-md-3 col-sm-3">
                <p>딜러코드</p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="text"
                  name="dlr_cd"
                  placeholder="딜러코드를 입력하세요."
                  value={form.dlr_cd}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="text-center mt-4">
          <button
            className="default-btn btn-next align-center"
            onClick={handleSubmit}
          >
            {compType == "reg" ? "회원가입" : "수정"}
          </button>
        </div>
      </div>
    </>
  );
}
