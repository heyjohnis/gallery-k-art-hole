import Link from "next/link";
import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function SignUp() {
  return (
    <>
      <PageBanner
        pageTitle="회원가입 3"
        homePageUrl="/"
        homePageText="Home"
        activePageText="회원가입 3"
      />

      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">회원가입이 완료되었습니다.</div>
            <Link className="default-btn btn-next" href="/login">
            로그인 하러 가기
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
