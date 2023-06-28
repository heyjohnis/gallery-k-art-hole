import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import baseUrl from "../utils/baseUrl";

const INITIAL_USER = {
  login_id: "",
  password: "",
};

export default function FindPassword() {
  const router = useRouter();

  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmailForTempPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/findPassword`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      alert(response.data.message);
    } catch (error) {
      if (error.response) alert(error.response.data.message);
      else alert(error.message);
    } finally {
      setLoading(false);
      setUser(INITIAL_USER);
    }
  };

  useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <PageBanner
        pageTitle="비밀번호 찾기"
        homePageUrl="/"
        homePageText="Home"
        activePageText="비밀번호 찾기"
      />

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">임시 비밀번호 발송</h3>
                </div>

                <form>
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

                    <div className="col-lg-6 col-sm-6 form-condition"></div>

                    <div className="col-12">
                      <button
                        className="default-btn btn-two"
                        type="submit"
                        onClick={sendEmailForTempPassword}
                      >
                        이메일 발송
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

                    <div className="col-12 mt-30 text-center">
                      <Link href="login">
                        <button
                          className="default-btn btn-two btn-border "
                          type="submit"
                          style={{ marginRight: "10px" }}
                        >
                          로그인 하기
                        </button>
                      </Link>
                      <Link href="sign-up-1" className="mr-3">
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
