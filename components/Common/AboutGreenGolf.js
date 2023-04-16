import React from "react";
import Link from "next/link";

const AboutGreenGolf = () => {
  return (
    <>
      <section className="main-art-area mt-140">
        <div className="container">
          <div className="row d-flex align-items-start justify-content-between main-art-card">
            <div className="col-12 greenart_img">
              <img src="/images/company/about_greengolf.png" alt="콜렉터 이미지"/>
            </div>
            <div className="main-art-text">
              <div 
                className="about-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <span>그린갤러리 프리미엄 골프 멤버쉽</span>
                <h2>
                예술과 골프의 만남
                </h2>
                <p>
                당신의 골프 라운드에서 느꼈던 그 흥분감을 그림 속에서 만나보세요. 
                그린갤러리는 골프와 예술이 만나 탄생한 새로운 문화의 시작입니다. 
                골프회원권과 함께 예술작품을 구매할 수 있는 그린갤러리는 골프를 즐기는 분들에게 이색적이면서도 더욱 특별한 경험을 제공 합니다. 
                그린갤러리에서는 다양한 장르의 예술작품을 구경하며 골프를 즐길 수 있습니다. 
                이곳에서 살아있는 예술작품을 감상하며 골프를 즐기면서, 예술의 멋과 골프의 감성을 함께 느낄 수 있습니다. 
                또한, 골프 회원권을 소유하신 분들은 그린갤러리에서 좀 더 특별한 혜택을 누릴 수 있습니다. 
                그린갤러리는 예술을 사랑하 는 분들과 골프를 즐기는 분들에게 다양한 경험과 만족감을 제공 하며, 이를 통해 일상에서 더욱 특별한 순간을 만들어드립니다. 
                골프와 예술의 만남, 그린갤러리에서 느껴보세요
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutGreenGolf;
