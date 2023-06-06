import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Modal, Button } from "react-bootstrap";
import YouTube from "react-youtube";
import styles from "./MainBanner.module.scss";

const MainBanner = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <section className="slider-area">
        <Swiper
          navigation={false}
          spaceBetween={0}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          scrollbar={{ draggable: true }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "progressbar", // 페이지네이션을 바 형태로 지정합니다.
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/main/main_01.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden one">
                      <h1>
                        <b>격이 높은 당신에게 바치는</b>
                        <br />
                        가장 명예로운 <b>골프멤버십</b>
                      </h1>
                      <div className="slider-btn">
                        <Link
                          href="#"
                          className="default-btn black"
                          onClick={showModal}
                        >
                          소개
                        </Link>
                      </div>
                      <div className="slider-btn">
                        <Link
                          href="/mypage/reservation/"
                          className="default-btn black"
                        >
                          예약하기
                        </Link>
                      </div>
                      <div className="slider-btn">
                        <Link
                          href="ggmall/service/"
                          className="default-btn black"
                        >
                          포인트몰
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/main/main_02.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden two">
                      <h1>
                        <b>300억원</b> 상당의
                        <br />
                        <b>전국 300여 지역 골프장</b> 이용
                      </h1>
                      <div className="slider-btn">
                        <div className="slider-btn">
                          <Link
                            href="#"
                            className="default-btn black"
                            onClick={showModal}
                          >
                            소개
                          </Link>
                        </div>
                        <div className="slider-btn">
                          <Link
                            href="/mypage/reservation/"
                            className="default-btn black"
                          >
                            예약하기
                          </Link>
                        </div>
                        <div className="slider-btn">
                          <Link
                            href="ggmall/service/"
                            className="default-btn black"
                          >
                            포인트몰
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/main/main_03.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <h1>
                        <b>당신</b>의 <b>품격</b>을 높여주는
                        <br />
                        <b>고품격 원화 미술품</b> 증정
                      </h1>

                      <div className="slider-btn">
                        <Link
                          href="#"
                          className="default-btn black"
                          onClick={showModal}
                        >
                          소개
                        </Link>
                      </div>
                      <div className="slider-btn">
                        <Link
                          href="/mypage/reservation/"
                          className="default-btn black"
                        >
                          예약하기
                        </Link>
                      </div>
                      <div className="slider-btn">
                        <Link
                          href="ggmall/service/"
                          className="default-btn black"
                        >
                          포인트몰
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/main/main_04.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <h1>
                        <b>멤버십 포인트몰</b>로 즐기는
                        <br />
                        차별화된 <b>프리미엄 혜택</b>
                      </h1>
                      <div className="slider-btn">
                        <Link
                          href="#"
                          className="default-btn black"
                          onClick={showModal}
                        >
                          소개
                        </Link>
                      </div>
                      <div className="slider-btn">
                        <Link
                          href="/mypage/reservation/"
                          className="default-btn black"
                        >
                          예약하기
                        </Link>
                      </div>
                      <div className="slider-btn">
                        <Link
                          href="ggmall/shoping/"
                          className="default-btn black"
                        >
                          포인트몰
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Modal show={show} onHide={handleClose}>
        <div className={styles.youtube_wrap}>
          <div className={styles.youtube}>
            <YouTube
              videoId="ZQw7meQJWTk"
              className={styles.scaleVideo}
              opts={opts}
              onReady={onPlayerReady}
              onEnd={(e) => {
                e.target.stopVideo(0);
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MainBanner;
