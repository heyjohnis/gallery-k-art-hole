import React from "react";
import Link from "next/link";

const IntroArt = () => {
  return (
    <>
      <section className="business-area pt-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="business-content text-center">
                <span>Green Gallery Art</span>
                <h2>미술품</h2>
                <p>그린갤러리 골프멤버쉽은 국내 최정상 작가의 검증된 원화 작품을 제공합니다.</p>
                <div className="art-service">
                  <ul>
                    <li>
                      <img src="/images/ico_list.png" alt="리스트 아이콘" />
                      회원권의 최대 50% 금액에 해당하는 아름다운 미술품 혜택
                    </li>
                    <li>
                      <img src="/images/ico_list.png" alt="리스트 아이콘" />
                      프리미엄 골프장 27개소 포함 전국 300여 곳 골프 라운드
                    </li>
                    <li>
                      <img src="/images/ico_list.png" alt="리스트 아이콘" />
                      차별화된 다양한 제휴 서비스 및 멤버십 포인트몰
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroArt;
