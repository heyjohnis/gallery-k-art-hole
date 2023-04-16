import React from "react";
import Link from "next/link";

const GreenBenefit = () => {
  return (
    <>
      <section className="business-area ptb-70 mt-100">
        <div className="container">
          <div className="row align-items-start justify-content-between">
            <div className="col-lg-4 mt-30">
              <div className="business-content">
                <span>GREEN GALLERY BENEFITS</span>
                <h2>그린갤러리 부가혜택</h2>
              </div>

              <div className="single-business">
                <p>
                그린갤러리 골프멤버십은 패션, 쇼핑, 여행, 레저, 미식, 인테리어 등 다양한 분야에 걸쳐 품격을 높이는 럭셔리 라이프 컨텐츠를 제공합니다. 
                <br/>자율 포인트제를 운영하여 고객님의 선호도와 라이프 타입에 맞게 직접 선택해 사용하실 수 있습니다. 골프 강습부터 럭셔리 여행까지 그린갤러리 골프멤버십 하나로 다양한 혜택을 누리고 품격있는 라이프스타일을 즐겨보세요.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row golf_main">
                <div 
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <img src="/images/main/benefit_1.png" alt="리조트 전경" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreenBenefit;
