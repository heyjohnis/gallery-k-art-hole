/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../../utils/baseUrl";
import styles from "../Mypage.module.scss";
import { commaFormat } from "../../../utils/number";
import Table from "react-bootstrap/Table";
import ReservationModal from "../ReservationModal";
import Lottie from "react-lottie";
import Booking from "../data/booking.json";
import ReservationComp from "./ReservationComp";
import { Swiper, SwiperSlide } from "swiper/react";

const lottieOptions = {
  animationData: Booking,
  loop: true,
  autoplay: true,
};

const Home = ({ user }) => {
  const [, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);
  const modalRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [products, setProducts] = useState([]);

  const getPointData = () => {
    const url = `${baseUrl}/points`;
    const medq_token = cookie.get("medq_token");
    axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${medq_token}` },
      data: {},
    })
      .then(({ data }) => {
        setPoints(data.length > 3 ? data.splice(0, 3) : data);
      })
      .finally(() => {});
  };

  const getReservationData = () => {
    setLoading(true);
    if (user.user_no) {
      const url = `${baseUrl}/mypage/reservation`;
      const medq_token = cookie.get("medq_token");
      axios({
        method: "post",
        url: url,
        headers: { Authorization: `Bearer ${medq_token}` },
        data: {},
      })
        .then(({ data }) => {
          console.log("data: ", data);
          setReservations(data.length > 3 ? data.splice(0, 3) : data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const getRandProduct = () => {
    const url = `${baseUrl}/mall/rand`;
    const medq_token = cookie.get("medq_token");
    axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${medq_token}` },
      data: {},
    })
      .then(({ data }) => {
        console.log("product: ", data);
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showReservationModal = () => {
    modalRef.current.showModal();
  };

  useEffect(() => {
    getReservationData();
    getPointData();
    getRandProduct();
  }, [user]);

  const priceComp = (content) => {
    const price = content.price || 0;
    if (price === 0) {
      return (
        <>
          <p className={styles.originPriceNone}>
            {commaFormat(content.origin_price)}
          </p>
          <p className={styles.priceNone}>별도문의</p>
        </>
      );
    }

    const saleAmt = price - content.origin_price;

    if (saleAmt !== 0) {
      return (
        <>
          <p className={styles.price}>
            <b>{commaFormat(content.price || 0)}</b>
            <span className={styles.unit}>P</span>
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className={styles.price}>
            <b>{commaFormat(content.price || 0)}</b>
            <span className={styles.unit}>P</span>
          </p>
        </>
      );
    }
  };

  return (
    <>
      <div className={styles.btn_wrap}>
        <div
          className={`btn ${styles.btn_booking}`}
          onClick={() => showReservationModal()}
        >
          <div className={styles.ani_booking}>
            <Lottie
              options={lottieOptions} // svg의 부모 div에 적용
            />
          </div>
          <span>예약신청</span>
        </div>
      </div>
      <h3>예약정보</h3>
      {reservations.length > 0 ? (
        reservations.map((reservation, i) => (
          <ReservationComp reservation={reservation} key={i} />
        ))
      ) : (
        <div className={styles.content}>예약 내역이 없습니다.</div>
      )}
      <h3 className="mt-5 mb-4">포인트 사용내역</h3>
      {points.length > 0 ? (
        <Table bordered className={styles.table_membership}>
          <thead>
            <tr>
              <th>일시</th>
              <th colSpan={2}>포인트 내역</th>
              <th>포인트</th>
            </tr>
          </thead>
          <tbody>
            {points.map((point, i) => (
              <tr key={i}>
                <td className="text-center">{point.point_date}</td>
                <td>{point.point_type}</td>
                <td>
                  {point.resv_name}
                  {point.pd_name}
                </td>
                <td className="text-right">
                  {commaFormat(point.point || 0)} P
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className={styles.content}> 포인트 사용 내역이 없습니다.</div>
      )}
      <section className={styles.recomandProduct}>
        <h3 className="mt-5 mb-4">
          그린갤러리에서 엄선한 <br />
          <b>프리미엄 상품</b>을 만나보세요
        </h3>
        <Link href="/ggmall/list/shop/" className={styles.moreButton}>
          MORE &gt;
        </Link>
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product, i) => (
            <SwiperSlide key={i} style={{ width: "280px", paddingTop: "20px" }}>
              <Link
                key={i}
                href={`/ggmall/detail/${product.pd_kind}/${product.pd_no}`}
              >
                <div
                  className={`single-team active ${styles.product}`}
                  style={{ height: "auto" }}
                >
                  <div className="team-single-img">
                    <img src={product.thumb_img} alt="Image" />
                  </div>
                  <div className="team-content">
                    <h3 className={styles.pdName}>{product.pd_name}</h3>
                    {priceComp(product)}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div style={{ marginTop: "10rem" }}> </div>
      <ReservationModal
        user={user}
        updateReservation={getReservationData}
        ref={modalRef}
      />
    </>
  );
};

export default Home;
