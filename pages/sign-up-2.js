import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import { handleLogin } from "../utils/auth";
import baseUrl from "../utils/baseUrl";
import { useDaumPostcodePopup } from "react-daum-postcode";

export default function SignUp() {

  const [form, setForm] = useState(
    //   # user_kind  01: 개인 / 02: 사업자
    // # crop_type  01: 개인회사 / 02: 법인회사

    {
      login_id: "",
      password: "",
      user_name: "",
      user_kind: "",
      corp_type: "",
      corp_name: "",
      corp_ssn: "",
      zipcode: "",
      addr1: "",
      addr2: "",
      phone: "",
      mobile: "",
      email: "",
      dlr_cd: "",
    }
  );

  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const loginIdRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const checkLoginId = async () => {
    const url = `${baseUrl}/checkLoginId`;
    const payload = { login_id: form.login_id };

    const response = await axios.post(url, payload);
    if(response && response.data.having_id) {
      setForm((prevState) => ({ ...prevState, login_id: ''}));
      alert("이미 가입된 아이디입니다.");
      //loginIdRef.current.focus();
    }
  };

  const checkPassword = () => {
    if ( form.password && form.password_chk && form.password != form.password_chk ) {
      alert("비밀번호가 일치하지 않습니다.");
      setForm( prevState => ({ ...prevState, password: '', password_chk: ''}))
    }
  }

  const validationInputs = () => {
    
    if(!form.login_id) throw new Error('아이디를 입력해주세요.');
    if(!form.password) throw new Error('패스워드를 입력해주세요.');
    if(!form.user_name) throw new Error('이름을 입력해주세요.');
    if(!form.mobile1 || !form.mobile2 || !form.mobile3) throw new Error('휴대전화를 입력해주세요.');
    if(!form.email) throw new Error('이메일을 입력해주세요.');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = `${baseUrl}/signup`;
      const payload = {
        ...form,
        corp_ssn: form.corp_ssn1 + form.corp_ssn2,
        mobile: `${form.mobile1}-${form.mobile2}-${form.mobile3}`,
        phone: `${form.phone1}-${form.phone2}-${form.phone3}`,
      };

      validationInputs();

      const response = await axios.post(url, payload);
      alert("회원가입이 완료되었습니다.");
      handleLogin(response.data.token);
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

  return (
    <>
      <PageBanner
        pageTitle="회원가입"
        homePageUrl="/"
        homePageText="Home"
        activePageText="회원가입"
      />

      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>


                  { form.user_kind === '02' ? 
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
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    : ''
                  }

                  { (form.user_kind === '02' && form.corp_type === '02') ?
                    <>
                      <div className="form-group signup">
                        <div className="col-md-3 col-sm-3">
                          <p>
                            회원번호 <span className="sup">*</span>
                          </p>
                        </div>
                        <div className="col-md-9 col-sm-9">
                          <label htmlFor="form1">법인명</label>
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
                          <label htmlFor="form1">법인번호</label>
                          <div className="d-flex">
                            <input
                              className="form-control"
                              type="text"
                              name="corp_ssn1"
                              id="form1"
                              value={form.corp_ssn1}
                              maxLength={6}
                              onChange={handleChange}
                            />
                            <input
                              className="form-control"
                              type="text"
                              name="corp_ssn2"
                              id="form1"
                              value={form.corp_ssn2}
                              maxLength={7}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                    : ''
                  }
                    <hr/>
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
                          ref={loginIdRef}
                          className="form-control"
                          type="text"
                          name="login_id"
                          placeholder="아이디를 입력하세요"
                          value={form.login_id}
                          onChange={handleChange}
                          onBlur={checkLoginId}
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
                      <div className="col-md-9 col-sm-9">
                        <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <input
                              className="form-control"
                              type="text"
                              name="phone1"
                              id="form1"
                              value={form.phone1}
                              maxLength={4}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-3 col-sm-3">
                            <input
                              className="form-control"
                              type="text"
                              name="phone2"
                              id="form1"
                              value={form.phone2}
                              maxLength={4}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-3 col-sm-3">
                            <input
                              className="form-control"
                              type="text"
                              name="phone3"
                              id="form1"
                              value={form.phone3}
                              maxLength={4}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>
                          휴대전화 <span className="sup">*</span>
                        </p>
                      </div>
                      <div className="col-md-9 col-sm-9">
                        <div className="row">
                          <div className="col-md-3 col-sm-3">
                            <input
                              className="form-control"
                              type="text"
                              name="mobile1"
                              id="form1"
                              value={form.mobile1}
                              maxLength={3}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-3 col-sm-3">
                            <input
                              className="form-control"
                              type="text"
                              name="mobile2"
                              id="form1"
                              value={form.mobile2}
                              maxLength={4}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-3 col-sm-3">
                            <input
                              className="form-control"
                              type="text"
                              name="mobile3"
                              id="form1"
                              value={form.mobile3}
                              maxLength={4}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
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
              </div>
            </div>
            <button className="default-btn btn-next" onClick={handleSubmit}>
            회원가입
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
