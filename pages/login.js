import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Navbar />

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

                <form>
                  <div className="row">

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="아이디"
                          placeholder="아이디"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="비밀번호"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
                            보안접속
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <Link href="#" className="forget">
                        비밀번호를 잊으셨나요?
                      </Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        로그인
                      </button>
                    </div>
                    <hr className='mt-30'/>
                    <div className="col-12">
                      <p className="account-desc">
                        그린갤러리 멤버십 소유자신가요?
                        <Link href="#">멤버십 가입하기</Link>
                      </p>
                      <p className="account-notice"><span>그린갤러리 멤버십 소유자만</span> 가입이 가능하며, 로그인이 가능합니다. <br/>
                        그린갤러리 가입을 원하시면 1588-1778 로 문의주세요.
                      </p>
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
