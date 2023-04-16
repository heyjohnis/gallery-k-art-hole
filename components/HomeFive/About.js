import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                  className="about-img"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                <img src="/images/about-img-three.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                  className="about-content"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                <span>GREEN GALLERY</span>
                <h2>
                아름다움으로부터 느끼는 당신의 품격있는 삶에 그린갤러리가 함께 합니다
                </h2>
                <p>
                당신의 건강과 아름다운 미래 그곳에 그린 갤러리가 함께합니다. 행복한 미래를 위한 당신의 건강을 위해 생활의 여유와 내면의 평화를 위해 아름다움으로부터 느끼는 당신의 품격있는 삶에 그린갤러리가 함께 합니다. 갤러리케이의 그린갤러리 프리미엄 골프 멤버쉽은 소수정예의 최고만을 위하여 운영되고 있습니다. 최고의 품격을 갖춘 서비스로 당신의 자랑이 됩니다. 
                </p>

                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <ul>
                      <li>
                        <span className="list_icon"></span>
                        회원권의 최대 50% 금액에 해당하는 아름다운 미술품 혜택
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        프리미엄 골프장 27개소 포함 전국 300여 곳 골프 라운드
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        차별화된 다양한 제휴 서비스 및 멤버십 포인트몰
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/" className="default-btn">
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
