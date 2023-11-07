/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, Navigation } from "swiper";
import { Modal } from "react-bootstrap";
import YouTube from "react-youtube";
import { SectionsContainer, Section } from "react-fullpage";
import styles from "./MainBanner.module.scss";
import "swiper/scss/pagination";

const MainBanner = ({ showReservationModal }) => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  let options = {
    anchors: ["sectionOne", "GolfBooking", "sectionThree", "sectionFour"],
  };

  const submitBooking = (e) => {
    e.preventDefault();
    console.log("test");
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <SectionsContainer {...options}>
        <Section className="slider-area">
          <div className={styles.youtube_wrap}>
            <div
              className={styles.youtube}
              style={{ backgroundColor: "black" }}
            >
              <YouTube
                videoId="ZQw7meQJWTk"
                className={styles.scaleVideo}
                opts={opts}
                onReady={(e) => {
                  // e.target.stopVideo(0);
                  e.target.mute(1);
                  e.target.setVolume(0);
                  e.target.hideVideoInfo(1);
                  console.log(
                    e.target.videoTitle,
                    e.target.hideVideoInfo,
                    e.target.mute,
                    "ready1"
                  );
                }}
                onPlay={(e) => {
                  e.target.mute(1);
                  console.log(e.target, "play");
                }}
                onEnd={(e) => {
                  // e.target.stopVideo(1);
                  e.target.mute(1);
                  console.log(e.target);
                }}
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className={`row ${styles.onePage}`}>
            <div
              className={`col-lg-6 col-md-12 ${styles.bookingPageLeftSection}`}
            >
              <div className={`col-lg-12 col-md-12 ${styles.titleBox}`}>
                <h1>
                  GOLF
                  <br />
                  BOOKING
                  <span>.</span>
                </h1>
              </div>
              <div className={`col-lg-12 col-md-12 ${styles.formWrap}`}>
                <form>
                  <div
                    className={`row col-lg-12 col-md-12 ${styles.inputWrap}`}
                  >
                    <div className={`col`}>
                      <div>
                        <label htmlFor="schedule">SCHEDULE</label>
                      </div>
                      <input
                        type="date"
                        id="schedule"
                        name="schedule"
                        data-placeholder="날짜 선택"
                        required
                      />
                    </div>
                    <div className={`col`}>
                      <div>
                        <label htmlFor="location">LOCATION</label>
                      </div>
                      <input
                        type="date"
                        id="location"
                        name="location"
                        data-placeholder="지역 선택"
                        required
                      />
                    </div>
                  </div>
                  <div className={`${styles.discriptionWrap}`}>
                    <p>
                      그린갤러리는 <span>SHOW GOLF</span>와 제휴를 통하여 골프장
                      서비스를 제공합니다.
                    </p>
                  </div>
                  <div className={`${styles.buttonWrap}`}>
                    <button
                      type="submit"
                      className={`${styles.submitButton}`}
                      onClick={submitBooking}
                    >
                      BOOK MORE
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-12 ${styles.bookingPageRightSection}`}
            >
              <Swiper
                navigation={false}
                spaceBetween={0}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                pagination={{
                  clickable: false,
                  type: "bullets",
                }}
                modules={[A11y, Autoplay, Navigation]}
                className={`hero-swiper1 ${styles.onePage}`}
              >
                <SwiperSlide>
                  <div className={`row ${styles.slide1}`}>
                    <div className={`${styles.backgroundImage}`}></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`row ${styles.slide2}`}>
                    <div className={`${styles.backgroundImage}`}></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`row ${styles.slide3}`}>
                    <div className={`${styles.backgroundImage}`}></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Section>
        <Section>
          <div
            className={`left-section col-lg-6 col-md-12 ${styles.onePage} ${styles.sliderPageSection}}`}
          >
            <h1>
              ART GALLERY<span>.</span>{" "}
              <span>
                갤러리케이에서 최정상 제휴 작가의 노력으로 완성된 원화 작품을
                제공합니다.
              </span>
            </h1>
            <div>
              <Swiper
                navigation={true}
                spaceBetween={0}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                modules={[Pagination, A11y, Autoplay, Navigation]}
                className={`hero-swiper ${styles.swiper}`}
              >
                <SwiperSlide>
                  <div className={`row ${styles.slide1}`}>
                    <div className="d-table">
                      <div className="d-table-cell">
                        <div className="container">
                          <div className="jumpx-slider-text overflow-hidden one">
                            <h1>
                              <b>시대의 가치</b>를 창조해 온 당신
                              <br />
                              결이 다른 행보로 <br className="mobile" />
                              <b>격이 높은 인생</b>을 살아 온 당신
                              <br />
                              당신에게 바치는 가장 <b>명예로운 멤버십</b>
                            </h1>
                            <p>
                              골프의 세계에서 최고의 명성을 자랑하는
                              그린갤러리는&nbsp;
                              <br className="mobile" />
                              당신의 위대한 업적을 상징하는 멤버십으로, <br />
                              최고의 품격과 프리미엄 멤버십 서비스로 당신만을
                              위한 품격 있는 환경을 제공합니다.
                            </p>
                            <div className="slider-btn">
                              <Link
                                href="#"
                                className="default-btn black"
                                onClick={showModal}
                              >
                                소개영상
                              </Link>
                            </div>
                            <div className="slider-btn">
                              <div
                                onClick={showReservationModal}
                                className="default-btn black"
                              >
                                Golf Booking
                              </div>
                            </div>
                            <div className="slider-btn">
                              <Link
                                href="ggmall/list/shop/"
                                className="default-btn black"
                              >
                                GG Mall
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="d-table">
                      <div className="d-table-cell">
                        <div className="container">
                          <div className="jumpx-slider-text overflow-hidden two">
                            <div className={styles.mainCopy}>
                              <h1>
                                국내 프리미엄 골프장 300여 곳 포함
                                <br /> 전 세계 유명 골프장을
                                <br />
                                <b>회원 이상의 가치</b>로 <b>이용</b>
                              </h1>
                              <p>
                                한국 내 프리미엄 골프장 뿐만 아니라,&nbsp;
                                <br className="mobile" />
                                PGA / LPGA 등 경기가 개최되는 전 세계 유명
                                골프장과 제휴를 통해 <br />
                                회원 이상의 가치로 자유롭게 이용할 수 있는
                                특권을 제공합니다.
                              </p>
                            </div>
                            {/* <div className={styles.mapImage}></div> */}

                            <div className="slider-btn">
                              <Link
                                href="#"
                                className="default-btn black"
                                onClick={showModal}
                              >
                                소개영상
                              </Link>
                            </div>
                            <div className="slider-btn">
                              <div
                                onClick={showReservationModal}
                                className="default-btn black"
                              >
                                Golf Booking
                              </div>
                            </div>
                            <div className="slider-btn">
                              <Link
                                href="ggmall/list/shop/"
                                className="default-btn black"
                              >
                                GG Mall
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Section>
        <Section>
          <div>
            <div>
              <h1>
                BEST
                <br />
                GG ITEMS<span>.</span>
              </h1>
              <p>
                GG는 Green Gallery의 약자로 GG Mall만의 프리미엄 서비스를
                제공합니다.
              </p>
              <h3>제휴서비스</h3>
              <p>
                GG 쇼핑
                <br />
                <br />
                GG 투어
              </p>
              {/* <Link
                href="/"
              >
                VIEW MORE</Link> */}
            </div>
          </div>
        </Section>
      </SectionsContainer>
    </>
  );
};

export default MainBanner;
