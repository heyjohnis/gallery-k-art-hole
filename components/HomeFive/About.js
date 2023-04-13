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
                골프는 자연이라는 캔버스에 그리는 예술이다
                </h2>
                <p>
                골프와 예술, 그린갤러리 골프멤버십은 국내 미술품 시장 1위 갤러리케이가 새롭게 선보이는 프리미엄 골프멤버십으로서 기존에 없던 독보적인 혜택을 선사합니다. 
                </p>

                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <ul>
                      <li>
                        <span className="list_icon"></span>
                        회원권의 50% 금액에 해당하는 미술품 혜택
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        전국 명문 골프장 라운딩, 제휴 호텔, 요트, 굿즈
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        차별화된 다양한 서비스의 멤버십 포인트몰
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
