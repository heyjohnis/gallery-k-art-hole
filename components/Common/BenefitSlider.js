import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination} from "swiper";

const benefitData = [
  {
    image: "/images/main/slide_benefit01.png",
    url: "#",
  },
  {
    image: "/images/main/slide_benefit01.png",
    url: "#",
  },
  {
    image: "/images/main/slide_benefit01.png",
    url: "#",
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
            <span>membership benefits</span>
            <h2>
              그린갤러리의 놀라운 혜택
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
                  <a href={value.url} target="_blank">
                    <img src={value.image} alt="Image" />
                  </a>
                  <span>{value.text}</span>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BenefitSlider;
