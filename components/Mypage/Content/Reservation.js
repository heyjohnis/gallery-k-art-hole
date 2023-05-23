/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "../Mypage.module.scss";
import baseUrl from "../../../utils/baseUrl";
import ReservationModal from "../ReservationModal";
import Lottie from "react-lottie";
import Booking from "../data/booking.json";
import ReservationList from "../ReservationList";

const lottieOptions = {
  animationData: Booking,
  loop: true,
  autoplay: true,
};

const Reservation = ({ user }) => {
  const [, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [form, setForm] = useState({
    search_start_date: "",
    search_end_date: "",
    search_word: "",
  });

  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
    console.log("form: ", form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getReservationData();
  };

  const handleRest = async (e) => {
    e.preventDefault();
    setForm({
      search_start_date: "",
      search_end_date: "",
      search_word: "",
    });
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
        data: form,
      })
        .then(({ data }) => {
          console.log("data: ", data);
          setReservations(data || []);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const showReservationModal = () => {
    modalRef.current.showModal();
  };

  useEffect(() => {
    getReservationData();
  }, [user]);

  return (
    <>
      <section>
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
        <div className={`${styles.benefit_info}`}>
          <h3>예약 내역</h3>
          <form>
            <div className="row">
              <div className="col-12 col-sm-8">
                <div className={`row ${styles.filter_wrap}`}>
                  <input
                    className="col-4"
                    type="date"
                    name="search_start_date"
                    value={form.search_start_date}
                    onChange={handleChange}
                  />
                  <input
                    className="col-4"
                    type="date"
                    name="search_end_date"
                    value={form.search_end_date}
                    onChange={handleChange}
                  />
                  <input
                    className={`col-3 ${styles.input_txt}`}
                    type="text"
                    name="search_word"
                    value={form.search_word}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={`col-12 col-sm-4 ${styles.btn_wrap}`}>
                <div
                  className={`btn ${styles.btn} ${styles.btn_outline}`}
                  onClick={handleRest}
                >
                  초기화
                </div>
                <div
                  className={`btn ${styles.btn} ${styles.btn_conform}`}
                  onClick={handleSubmit}
                >
                  조회
                </div>
              </div>
            </div>
          </form>

          {reservations.length > 0 ? (
            <ReservationList reservations={reservations} />
          ) : (
            <div className={styles.content}>예약 내역이 없습니다.</div>
          )}
        </div>
      </section>
      <ReservationModal
        user={user}
        updateReservation={getReservationData}
        ref={modalRef}
      />
    </>
  );
};

export default Reservation;
