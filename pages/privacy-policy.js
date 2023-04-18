import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="개인정보 처리방침"
        homePageUrl="/"
        homePageText="Main"
        activePageText="개인정보 처리방침"
      />

      <div className="text-container ptb-100">
        <div className="container">
          <h3>1. 개인정보의 처리 목적</h3>

          <p>
            그린갤러리(‘http://greengallery.kr‘ 이하 ‘그린갤러리 골프멤버십’)은(는) 다음의 목적을 위하여 개인정보를 처리하고 있으며, 
            다음의 목적 이외의 용도로는 이용하지 않습니다. <br/>
            - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급.배송 등
          </p>

          <h3>2. 개인정보의 처리 및 보유 기간</h3>
          <p>
            ① 그린갤러리(‘http://greengallery.kr‘ 이하 ‘그린갤러리 골프멤버십’)은(는) 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.
          </p>

          <p>
            ② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.<br/>
            ☞ 아래 예시를 참고하여 개인정보 처리업무와 개인정보 처리업무에 대한 보유기간 및 관련 법령, 근거 등을 기재합니다.(예시)<br/>
            - 고객 가입 및 관리 : 서비스 이용계약 또는 회원가입 해지시까지, 다만 채권․채무관계 잔존시에는 해당 채권․채무관계 정산시까지<br/>
            - 전자상거래에서의 계약․청약철회, 대금결제, 재화 등 공급기록 : 5년<br/>
          </p>

          <h3>3. 개인정보의 제3자 제공에 관한 사항</h3>
          <p>
            ① 그린갤러리(‘http://greengallery.kr‘ 이하 ‘그린갤러리 골프멤버십’)은(는) 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
          </p>

          <p>
            ② 그린갤러리(‘http://greengallery.kr‘)은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br/>
            . 그린갤러리

- 개인정보를 제공받는 자 : 그린갤러리

- 제공받는 자의 개인정보 이용목적 : 이메일, 휴대전화번호, 자택주소, 비밀번호, 로그인ID, 성별, 생년월일, 이름

- 제공받는 자의 보유.이용기간: 3년<br/>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
