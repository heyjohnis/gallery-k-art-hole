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
                      납입금액의 30~50% 상당 원화작품 제공 
                    </li>
                    <li>
                      <img src="/images/ico_list.png" alt="리스트 아이콘" />
                      작품 활동 기간 평균 20년 이상 중견 작가 대상 
                    </li>
                    <li>
                      <img src="/images/ico_list.png" alt="리스트 아이콘" />
                      한국미술협회에서 발행한 호당가격 정찰제 작품
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
