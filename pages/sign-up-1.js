import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";
import PrivacyPolicyText from '../components/Private/PrivacyPolicyText';
import TermsConditionsText from '../components/Private/TermsConditionsText';


export default function SignUp() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="회원가입 1"
        homePageUrl="/"
        homePageText="Home"
        activePageText="회원가입 1"
      />

      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className='row'>
            <div className="col-lg-12 col-sm-12">
              <h3>개인정보처리방침</h3>
              <div className='signup-agree-box'>
                <PrivacyPolicyText/>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <input
                type="checkbox"
                id="agree"
              /> 
              <label htmlFor='agree' className='contact-agree-label'>동의합니다.</label>
            </div>

            <div className="col-lg-12 col-sm-12 mt-100">
              <h3>서비스 이용약관</h3>
              <div className='signup-agree-box'>
                <TermsConditionsText/>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <input
                type="checkbox"
                id="agree"
              /> 
              <label htmlFor='agree' className='contact-agree-label'>동의합니다.</label>
            </div>
          </div>
          <Link className="default-btn" href="/sign-up-2">
            다음
          </Link>
        </div>
        
      </div>
      
      <Footer />
    </>
  );
}
