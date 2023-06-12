import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper";
import { Modal } from "react-bootstrap";
import YouTube from "react-youtube";
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

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <section className="slider-area">
        <Swiper
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
          modules={[Pagination, A11y, Autoplay]}
          className={`hero-swiper ${styles.swiper}`}
        >
          <SwiperSlide>
            <div className={`jumpx-slider-item ${styles.slide1}`}>
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
                        최고의 품격과 프리미엄 멤버십 서비스로 당신만을 위한
                        품격 있는 환경을 제공합니다.
                      </p>
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
                        <div
                          onClick={showReservationModal}
                          className="default-btn black"
                        >
                          예약하기
                        </div>
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

          <SwiperSlide>
            <div className={`jumpx-slider-item ${styles.slide2}`}>
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
                          PGA / LPGA 등 경기가 개최되는 전 세계 유명 골프장과
                          제휴를 통해 <br />
                          회원 이상의 가치로 자유롭게 이용할 수 있는 특권을
                          제공합니다.
                        </p>
                      </div>
                      <div className={styles.mapImage}></div>
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
                        <div
                          onClick={showReservationModal}
                          className="default-btn black"
                        >
                          예약하기
                        </div>
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

          <SwiperSlide>
            <div className={`jumpx-slider-item ${styles.slide3}`}>
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <h1>
                        당신의 <b>품격을 높여주는</b> <br />
                        <b>고품격 원화 미술품</b> 증정
                      </h1>
                      <p>
                        국내 미술 산업의 1위 기업인 (주)갤러리케이가&nbsp;
                        <br className="mobile" />
                        회원권 납입 금액의 30~50% 상당 최정상 작가의 원화 작품을
                        제공합니다.
                        <br />
                        ((사)한국미술협회 발행 호당가격확인서 기준)
                      </p>
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
                        <div
                          onClick={showReservationModal}
                          className="default-btn black"
                        >
                          예약하기
                        </div>
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

          <SwiperSlide>
            <div className={`jumpx-slider-item ${styles.slide4}`}>
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <h1>
                        <b>멤버십 포인트</b>로 즐기는 <br />
                        차별화된 <b>프리미엄 혜택</b>
                      </h1>
                      <p>
                        럭셔리 라이프스타일 전반에 걸쳐 품격을 높여주는&nbsp;
                        <br className="mobile" />
                        다양한 프리미엄 멤버십 서비스를 제공합니다.
                      </p>
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
                        <div
                          onClick={showReservationModal}
                          className="default-btn black"
                        >
                          예약하기
                        </div>
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
          <SwiperSlide>
            <div className={`jumpx-slider-item ${styles.slide5}`}>
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <div className={styles.mainCopy}>
                        <h1>
                          Unforgettable Experiences and
                          <br />
                          Memories inspired by differentiated
                          <br />
                          <b>VIP CONCIERGE SERVICE</b>
                        </h1>
                        <p>
                          “그린갤러리 컨시어지 서비스”는&nbsp;
                          <br className="mobile" />
                          럭셔리 라이프를 위해 필요한 정보와 서비스를 제공하여
                          <br /> 최상의 만족감과 특별한 추억을 통해 회원의
                          가치있는 삶을 한층 더 높은 품격으로 모십니다.
                        </p>
                      </div>
                      <div className={styles.slide5Icons}>
                        <img src="/images/main/main_05_service.png" alt="" />
                      </div>
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
                        <div
                          onClick={showReservationModal}
                          className="default-btn black"
                        >
                          예약하기
                        </div>
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
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        className={styles.mainModal}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <div className={styles.youtube_wrap}>
          <div className={styles.youtube}>
            <YouTube
              videoId="ZQw7meQJWTk"
              className={styles.scaleVideo}
              opts={opts}
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
