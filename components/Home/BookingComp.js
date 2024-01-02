import React from "react";
import styles from "./home.module.scss";
import { Section } from "react-fullpage";
import DatePicker from "../Common/DatePicker";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper";
import { REGION_LIST } from "../../data/CommonCode";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";

export default function BookingComp() {
  const router = useRouter();

  const [pickDate, setPickDate] = React.useState("");
  const [form, setForm] = React.useState({});

  const submitBooking = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/golf/booking",
      query: form,
    });
  };

  const selectedRegion = (val) => {
    setForm((prevState) => ({ ...prevState, region1: val }));
  };

  const selectedPickDate = (date) => {
    console.log("date: ", date);
    setForm((prevState) => ({ ...prevState, ...date }));
  };

  const renderRegionOptions = () => {
    return REGION_LIST.map((item) => {
      return (
        <option value={item.id} key={item.id}>
          {item.data}
        </option>
      );
    });
  };

  return (
    <Section>
      <div className={`row ${styles.onePage}`}>
        <div className={`col-lg-6 col-md-6 ${styles.bookingPageLeftSection}`}>
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
                  <DatePicker
                    label="날짜 선택"
                    pickDate={(date) => selectedPickDate(date)}
                    dateKind="resv_datetime"
                  />{" "}
                </div>
                <div className={`col`}>
                  <div>
                    <label htmlFor="location">LOCATION</label>
                  </div>
                  <Form.Select
                    className={`${styles.formSelect}`}
                    aria-label="Default select example"
                    onChange={(e) => selectedRegion(e.target.value)}
                  >
                    <option value="">1차 권역을 선택해 주세요</option>
                    {renderRegionOptions()}
                  </Form.Select>
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

        <div className={`col-lg-6 col-md-6 ${styles.bookingPageRightSection}`}>
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
  );
}
