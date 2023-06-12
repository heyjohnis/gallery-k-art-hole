import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import { handleLogin } from "../utils/auth";
import baseUrl from "../utils/baseUrl";

const INITIAL_USER = {
  login_id: "",
  password: "",
};

export default function Login() {
  const router = useRouter();

  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { goto } = router.query;

  useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data.token, goto);
    } catch (error) {
      if (error.response) alert(error.response.data.message);
      else alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageBanner
        pageTitle="로그인"
        homePageUrl="/"
        homePageText="Home"
        activePageText="로그인"
      />

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">로그인</h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="login_id"
                          value={user.login_id}
                          onChange={handleChange}
                          placeholder="아이디"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-2">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          value={user.password}
                          onChange={handleChange}
                          placeholder="비밀번호"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 form-condition"></div>

                    <div className="col-lg-6 col-sm-6 mb-30">
                      <Link href="#" className="forget">
                        아이디/비밀번호 찾기
                      </Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        로그인
                      </button>
                    </div>
                    <hr className="mt-30" />
                    <div className="col-12">
                      <p className="account-desc">
                        그린갤러리 멤버십 소유자신가요?
                      </p>
                      <p className="account-notice">
                        <span>그린갤러리 멤버십 소유자만</span> 가입과 로그인이
                        가능합니다. <br />
                        그린갤러리 가입을 원하시면 1588-1778 로 문의주세요.
                      </p>
                    </div>

                    <div className="col-12 mt-30">
                      <Link href="sign-up-1" className="forget">
                        <button
                          className="default-btn btn-two btn-border"
                          type="submit"
                        >
                          멤버십 가입하기
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
