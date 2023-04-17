import React from "react";
import Link from "next/link";

const AboutArtist = () => {
  return (
    <>
      <section className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div 
                  className="about-img artist-profile"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                <img src="/images/benefits/artist1.png" alt="심온작가 프로필" />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                  className="about-content"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                <span>ARTIST</span>
                <h2>
                심온 작가
                </h2>
                <p>
                심온 작가는 자신의 정체성을 고유의 독특한 패브릭 부조 기법으로 표현하고 있다. 
                밝고 경쾌한 색감들을 조화롭게 구성하여 예술적 감성을 나타내고 있다.
                평면과 입체의 관계에서 설정되어진 공간으로 현실과 이상을 넘나드는 작가 고유의 세계관을 재현하고 있다.
                </p>

                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <ul>
                      <li>
                        <span className="list_icon"></span>
                        1968년 출생
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        가천대 미술대학 회화과 졸업
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        동, 대학원 서양화 미술학 석사 졸업
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        한국미술협회 정회원
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="https://www.artnomics.co.kr/artist/view.php?at_id=10" target="_blank" className="default-btn">
                  심온작가 프로필 보기
                </Link>
              </div>
            </div>
          </div>


          <div className="row align-items-center justify-content-between mt-100">
            <div className="col-lg-6">
              <div 
                  className="about-content"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                <span>ARTIST</span>
                <h2>
                김태형
                </h2>
                <p>
                작가의 작업은 한반도에 존재했던 한국 호랑이에 대한 기억에서부터 시작한다.<br/>
                작가는 “호랑이의 나라로 일컬어질 만큼 한반도에는 호랑이의 개체 수가 많았다. 하지만 한국 호랑이는 이제 기억에서조차 잊혀지는 안타까운 현실에 처했다"고 밝혔다.
                작가는 이를 잊지 않기 위해 한국 호랑이의 기억을 그림으로 떠올린다.
                </p>

                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <ul>
                      <li>
                        <span className="list_icon"></span>
                        1978년 출생
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        한국전업미술가협회 서양화분과 이사
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        한국현대미술작가연합회 대외협력위원장 역임
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="https://www.artnomics.co.kr/artist/view.php?at_id=15" target="_blank" className="default-btn">
                  김태형작가 프로필 보기
                </Link>
              </div>
            </div>
            
            <div className="col-lg-5">
              <div 
                  className="about-img artist-profile"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                <img src="/images/benefits/artist2.png" alt="김태형작가 프로필" />
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-between mtb-100">
            <div className="col-lg-5">
              <div 
                  className="about-img artist-profile"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                <img src="/images/benefits/artist3.png" alt="박삼영작가 프로필" />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                  className="about-content"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                <span>ARTIST</span>
                <h2>
                박삼영
                </h2>
                <p>
                그는 대상을 입체적 공간으로 나눠 여러 가지 색상을 칠하여 재구성하는 방식의 ‘큐비즘’ 형식의 현대화를 모색하는 작가이다.<br/>
                그의 작품 속에서 면과 점, 직선과 곡선, 가벼움과 무거움, 구상과 추상과 같이 서로 상반된 조형요소들이 적절히 혼합되어 화면의 깊이를 더해준다.<br/> 
                또한 정적이지만 동적인 느낌을 동시 전해준다.
                </p>

                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <ul>
                      <li>
                        <span className="list_icon"></span>
                        홍익대학교 미술대학 서양화과 사사: 운보 김기창화백 수제자
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        현) 한국미술협회 정회원
                      </li>
                      <li>
                        <span className="list_icon"></span>
                        전) 남가주 미술가 협회 회원
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="https://www.artnomics.co.kr/artist/view.php?at_id=110" target="_blank" className="default-btn">
                  박삼영작가 프로필 보기
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutArtist;
