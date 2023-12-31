/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import DatePicker from "../Common/DatePicker";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, Navigation } from "swiper";
import { Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import YouTube from "react-youtube";
import { SectionsContainer, Section } from "react-fullpage";
import MainListItems from "./MainListWrap";
import Footer from "../Layouts/Footer";
import styles from "./MainBanner.module.scss";
import "swiper/scss/pagination";
import MainListWrap from "./MainListWrap";

const LIST_ITEM = [
  {
    id: 1,
    img: "https://erp.galleryk.co.kr/download?filename=420b43d8-01bb-4c5f-a8bb-12a4e3d9b359.jpg&dir=green-prod-thumb&ofilename=thumnail_05.jpg",
    title: "리무진 서비스",
    discript: "벤츠 스플린터",
    discount: 0,
    point: 862200,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 2,
    img: "https://erp.galleryk.co.kr/download?filename=fedd585e-95db-42f0-9a5d-80cd105fdd9f.jpg&dir=green-prod-thumb&ofilename=thumnail_01.jpg",
    title: "개인 제트기 서비스",
    discript: "ZETCAP",
    discount: 0,
    point: 0,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 3,
    img: "https://erp.galleryk.co.kr/download?filename=203f3f91-c9c3-4db7-ae2f-00206641ec1a.jpg&dir=green-prod-thumb&ofilename=thumnail_07.jpg",
    title: "제주 스위트룸 이용권",
    discript: "비성수기",
    discount: 10,
    point: 800000,
    discountPoint: 720000,
    link: "/login/",
  },
];

const LIST_ITEM_SHOPING = [
  {
    id: 1,
    img: "https://erp.galleryk.co.kr/download?filename=a55f9941-c6c0-4751-902a-384ab633745b.jpg&dir=green-prod-thumb&ofilename=thumbnail_34.jpg",
    title: "말본 골프 클래식 하프백 그린",
    discript: "Malbon",
    discount: 10,
    point: 500000,
    discountPoint: 417000,
    link: "/login/",
  },
  {
    id: 2,
    img: "https://erp.galleryk.co.kr/download?filename=2d1f5523-1291-4645-aedb-64766dfae3f2.jpg&dir=green-prod-thumb&ofilename=thumbnail_25.jpg",
    title: "야마하 페미나 여성 풀세트",
    discript: "YAMAHA",
    discount: 0,
    point: 2250000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 3,
    img: "https://erp.galleryk.co.kr/download?filename=949720e1-2290-4268-ab76-024032f4c1c8.jpg&dir=green-prod-thumb&ofilename=12.jpg",
    title: "보그너 여성 캐주얼 캐디백",
    discript: "BOGNER",
    discount: 0,
    point: 862200,
    discountPoint: 0,
    link: "/login/",
  },
];

const LIST_ITEM_TOUR = [
  {
    id: 1,
    img: "https://erp.galleryk.co.kr/download?filename=83c1abe6-b74c-4aff-9007-0453e59ae3bc.jpg&dir=green-prod-thumb&ofilename=thumnail_09.jpg",
    title: "태국 방콕 프리미엄",
    discript: "3박5일 ㅣ 골프 18홀 라운딩, 3회 그린피",
    discount: 0,
    point: 880000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 2,
    img: "https://erp.galleryk.co.kr/download?filename=a827dba9-f02d-47fe-94ba-3d9c7bba3d91.jpg&dir=green-prod-thumb&ofilename=thumnail_39.jpg",
    title: "일본 북해도 골프&온천",
    discript: "3박4일 ㅣ 노보리베츠 온천투어",
    discount: 0,
    point: 880000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 3,
    img: "https://erp.galleryk.co.kr/download?filename=f5d12522-0778-4946-b969-cb0b1da7e31a.jpg&dir=green-prod-thumb&ofilename=thumnail_08.jpg",
    title: "태국 방콕 VVIP",
    discript: "3박5일 ㅣ 골프 18홀 라운딩, 3회 그린피",
    discount: 0,
    point: 1150000,
    discountPoint: 0,
    link: "/login/",
  },
];

const LIST_ITEM_GALLERY = [
  {
    id: 1,
    img: "https://erp.galleryk.co.kr/download?filename=83c1abe6-b74c-4aff-9007-0453e59ae3bc.jpg&dir=green-prod-thumb&ofilename=thumnail_09.jpg",
    title: "월.매화-21-32",
    name: "이군우",
    discript:
      "매화가 진채를 만나 새롭게 태어나다! 자개와 칠보 재료를 통해 사대부들의 고결한 정신과 인간세계를 표현하였다.",
    link: "https://naver.com/",
  },
  {
    id: 2,
    img: "https://erp.galleryk.co.kr/download?filename=a827dba9-f02d-47fe-94ba-3d9c7bba3d91.jpg&dir=green-prod-thumb&ofilename=thumnail_39.jpg",
    title: "영월의 가을",
    name: "김복동",
    discript:
      "풍경, 초상, 기독 성화 등을 주요 소재로 자연의 미감을 노래하는 작가",
    link: "# ",
  },
  {
    id: 3,
    img: "https://erp.galleryk.co.kr/download?filename=f5d12522-0778-4946-b969-cb0b1da7e31a.jpg&dir=green-prod-thumb&ofilename=thumnail_08.jpg",
    title: "Dreaming2350130",
    name: "안말환",
    discript:
      "나의 나무는 일상의 짐을 내려놓고 편히 쉴 수 있는 신선한 숲, 가장 깨끗한 당신의 호흡이 되기를...",
    link: "#",
  },
];

const MainBanner = ({ showReservationModal }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1, // 자동재생
      rel: 0, // 관련 동영상 표시 여부
      modestbranding: 0, // 컨트롤 바에 youtube 로고를 표시 여부
      loop: 1, //반복 재생 여부
      controls: 0, // 컨트롤러 표시 여부
      disablekb: 1, // 키보드 제어 여부
      fs: 0, // 풀스크린 제어 여부
      showinfo: 0, // 정보 표시 여부
      iv_load_policy: 3, // 특수효과
    },
  };

  let options = {
    anchors: ["Intro", "GolfBooking", "Gallery", "GGmall", "Footer"],
    verticalCentered: true,
  };

  const [tabMenu, setTabMenu] = useState("first");

  const handleTabMenu = (e) => {
    console.log(e.target.dataset.rrUiEventKey);
    if (e.target.dataset.rrUiEventKey === "first") {
      setTabMenu("first");
    } else if (e.target.dataset.rrUiEventKey === "second") {
      setTabMenu("second");
    } else {
      setTabMenu("third");
    }
  };

  // const handleTabMenu = () => {};

  const submitBooking = (e) => {
    e.preventDefault();
    router.replace("/booking");
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <SectionsContainer {...options}>
        <Section className={`slider-area ${styles.landing}`}>
          <Swiper
            navigation={false}
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
            //  modules={[Pagination, A11y, Autoplay, Navigation]}
            modules={[A11y, Autoplay]}
            className={`hero-swiper ${styles.swiper}`}
          >
            <SwiperSlide>
              <div className={`jumpx-slider-item ${styles.landingSlide1}`}>
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div
                        className={`col-lg-12 col-md-12 ${styles.titleWrap}`}
                      >
                        <h1>
                          PREMIUM <br />
                          GOLF MEMBERSHIP
                          <span>.</span>
                        </h1>
                      </div>
                      <div className={`${styles.discriptionWrap}`}>
                        <p>
                          시대의 가치를 창조해 온 당신, <br />
                          결이 다른 행보로 격이 높은 인생을 살아 온 당신
                          <br />
                          당신에게 바치는 가장 명예로운 멤버십
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`jumpx-slider-item ${styles.landingSlide2}`}>
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div
                        className={`col-lg-12 col-md-12 ${styles.titleWrap}`}
                      >
                        <h1>
                          PREMIUM <br />
                          GOLF MEMBERSHIP
                          <span>.</span>
                        </h1>
                      </div>
                      <div className={`${styles.discriptionWrap}`}>
                        <p>
                          시대의 가치를 창조해 온 당신, <br />
                          결이 다른 행보로 격이 높은 인생을 살아 온 당신
                          <br />
                          당신에게 바치는 가장 명예로운 멤버십
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`jumpx-slider-item ${styles.landingSlide3}`}>
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div
                        className={`col-lg-12 col-md-12 ${styles.titleWrap}`}
                      >
                        <h1>
                          PREMIUM <br />
                          GOLF MEMBERSHIP
                          <span>.</span>
                        </h1>
                      </div>
                      <div className={`${styles.discriptionWrap}`}>
                        <p>
                          시대의 가치를 창조해 온 당신, <br />
                          결이 다른 행보로 격이 높은 인생을 살아 온 당신
                          <br />
                          당신에게 바치는 가장 명예로운 멤버십
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Section>
        <Section>
          <div className={`row ${styles.onePage}`}>
            <div
              className={`col-lg-6 col-md-6 ${styles.bookingPageLeftSection}`}
            >
              <div className={`col-lg-12 col-md-6 ${styles.titleWrap}`}>
                <h1>
                  GOLF
                  <br />
                  BOOKING
                  <span>.</span>
                </h1>
              </div>
              <div className={`col-lg-12 col-md-6 ${styles.formWrap}`}>
                <form>
                  <div className={`row col-lg-12 col-md-6 ${styles.inputWrap}`}>
                    <div className={`col`}>
                      <DatePicker label={`SCHEDULE`} />
                    </div>
                    <div className={`col`}>
                      <div>
                        <label htmlFor="location">LOCATION</label>
                      </div>
                      {/* <input
                        type="list"
                        id="location"
                        name="location"
                        data-placeholder="지역 선택"
                        required
                      /> */}
                      <select name="" id="location">
                        <option value="" selected disabled>
                          권역 선택
                        </option>
                        <option value="권역">권역</option>
                        <option value="권역">권역</option>
                      </select>
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
              className={`col-lg-6 col-md-6 ${styles.bookingPageRightSection}`}
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

        <Section className={`${styles.backgroundDark}`}>
          <div
            className={`row col-lg-12 col-md-12 ${styles.onePage} ${styles.itemListPageSection}`}
          >
            <Tab.Container id="left-tabs" defaultActiveKey="first">
              <div className={`col col-lg-3 col-md-12`}>
                <div className={`col col-lg-12 col-md-6 ${styles.titleWrap}`}>
                  <h1>
                    BEST
                    <br />
                    GG ITEMS<span>.</span>
                  </h1>
                  <p>
                    GG는 Green Gallery의 약자로 <br />
                    GG Mall만의 프리미엄 서비스를 제공합니다.
                  </p>
                </div>
                <div
                  className={`row col-lg-12 col-md-6 ${styles.itemIntoroduceWrap}`}
                >
                  <Nav className={`${styles.menuTab}`}>
                    <Nav.Item className={`${styles.itemTab}`}>
                      <Nav.Link
                        eventKey="first"
                        onClick={handleTabMenu}
                        className={`col-lg-12 col-md-6 ${styles.navLink}`}
                      >
                        제휴서비스
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={`${styles.itemTab}`}>
                      <Nav.Link
                        eventKey="second"
                        onClick={handleTabMenu}
                        className={`col-lg-12 col-md-6 ${styles.navLink}`}
                      >
                        GG쇼핑
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={`${styles.itemTab}`}>
                      <Nav.Link
                        eventKey="third"
                        onClick={handleTabMenu}
                        className={`col-lg-12 col-md-6 ${styles.navLink}`}
                      >
                        GG투어
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className={`row col-lg-9 col-md-6 ${styles.itemListWrap}`}>
                <Tab.Content>
                  {/* <Tab.Pane eventKey="first">
                    1
                    <MainListWrap LIST_ITEM={LIST_ITEM} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    2
                    <MainListWrap LIST_ITEM_SHOPING={LIST_ITEM} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    3
                    <MainListWrap LIST_ITEM_TOUR={LIST_ITEM} />
                  </Tab.Pane> */}
                  <Tab.Pane eventKey={`${tabMenu}`}>
                    <MainListWrap
                      LIST_ITEM={
                        tabMenu === "first"
                          ? LIST_ITEM
                          : tabMenu === "second"
                          ? LIST_ITEM_SHOPING
                          : LIST_ITEM_TOUR
                      }
                    />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </Section>

        <Section>
          <div
            className={`col-lg-6 col-md-6 ${styles.onePage} ${styles.sliderPageSection}`}
          >
            <div className={`${styles.titleWrap}`}>
              <h1>
                ART GALLERY<span>.</span>
              </h1>
              <p>
                갤러리케이에서 최정상 제휴 작가의 노력으로 완성된 원화 작품을
                제공합니다.
              </p>
            </div>
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
                {LIST_ITEM_GALLERY.map((itemList) => (
                  <SwiperSlide key={itemList.id}>
                    <div className={`row ${styles.sildeSize}`}>
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div className={`container`}>
                            <div
                              className={`jumpx-slider-text overflow-hidden one`}
                            >
                              <div className={`${styles.slideWrap}`}>
                                <div className={`${styles.sectionLeft}`}>
                                  <h1>{itemList.title}</h1>
                                  <span>{itemList.name}</span>
                                  <p>{itemList.discript}</p>
                                  <div className={`${styles.buttonWrap}`}>
                                    <Link
                                      href={`${itemList.link}`}
                                      className={`${styles.defaultBtnBlack}`}
                                    >
                                      VIEW MORE
                                    </Link>
                                  </div>
                                </div>
                                <div className={`${styles.sectionRight}`}>
                                  <img
                                    src={`${itemList.img}`}
                                    alt={`${itemList.title}`}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Section>

        <Section>
          <Footer />
        </Section>
      </SectionsContainer>
    </>
  );
};

export default MainBanner;
