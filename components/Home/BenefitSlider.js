import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

const benefitData = [
  {
    image: "/images/main/slide_benefit01.png",
    url: "#",
    text: "당신의 행복한 건강",
  },
  {
    image: "/images/main/slide_benefit02.png",
    url: "#",
    text: "명예로운 사회적 지위",
  },
];

const BenefitSlider = () => {
  return (
    <>
      <div className="white-shape mt-100">
        <img src="/images/main/shape_top.png" alt="Image" />
      </div>
      <div className="brand-area-two ptb-100">
        <div className="section-title">
          <span>SERVICE VALUE</span>
          <h2>
            오직 당신만이 소유하고 누릴 수 있는
            <br />
            프리미엄 특권
          </h2>
        </div>
        <div className="container benefit_slide">
          <Swiper
            spaceBetween={0}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 1,
              },
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="brand-slide text-center"
          >
            {benefitData &&
              benefitData.map((value, i) => (
                <SwiperSlide key={i}>
                  <a
                    href={value.url}
                    className="benefits_wrap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={value.image} alt="Image" />
                    <span className="benefit_txt">{value.text}</span>
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BenefitSlider;
