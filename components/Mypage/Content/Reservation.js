/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import cookie from "js-cookie";
import styles from "../Mypage.module.scss";
import baseUrl from "../../../utils/baseUrl";
import ReservationModal from "../ReservationModal";

const Reservation = ({ user }) => {
  const [, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    search_start_date: "",
    search_end_date: "",
    search_word: "",
  });

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

  const showDetailInfo = (id) => {
    const targetObj = document.querySelector("#info" + id);
    const displayVal = targetObj.style.display;
    if (displayVal === "none") targetObj.style.display = "block";
    else targetObj.style.display = "none";
  };

  const showReservationModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getReservationData();
  }, [user]);

  return (
    <>
      <section>
        <div className={styles.btn_wrap}>
          <div
            className={`btn btn-primary`}
            onClick={() => showReservationModal()}
          >
            예약신청
          </div>
        </div>
        <div className={`container ${styles.benefit_info}`}>
          <h3>예약 내역</h3>
          <form>
            <input
              type="date"
              name="search_start_date"
              value={form.search_start_date}
              onChange={handleChange}
            />
            <input
              type="date"
              name="search_end_date"
              value={form.search_end_date}
              onChange={handleChange}
            />
            <input
              className={styles.input_txt}
              type="text"
              name="search_word"
              value={form.search_word}
              onChange={handleChange}
            />
            <div className={styles.btn_wrap}>
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
          </form>

          {reservations.length > 0 ? (
            <div>
              {reservations.map((resv, i) => (
                <div key={i}>
                  <Table className={styles.info_booking}>
                    <thead>
                      <tr>
                        <th>상품정보</th>
                        <th>상태</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          예약일자: {resv.reg_date} 예약번호: {resv.resv_no}{" "}
                          <br />
                          {resv.resv_date} {resv.resv_week} {resv.resv_time}{" "}
                          <br />
                          {resv.resv_name}
                        </td>
                        <td>
                          <div className="btn">{resv.resv_stts_nm}</div>
                        </td>
                        <td>
                          <div
                            className="btn"
                            onClick={() => showDetailInfo(i)}
                          >
                            예약상세&gt;
                          </div>
                          <br />
                          <div className="btn btn-secondary">1:1문의</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div id={`info${i}`} style={{ display: "none" }}>
                    <Table>
                      <tbody>
                        <tr>
                          <th>예약자정보</th>
                          <td colSpan={2}>
                            {resv.resv_user_name} / {resv.moblie} / {resv.phone}{" "}
                            / {resv.email}
                          </td>
                        </tr>
                        <tr>
                          <th>이용자정보</th>
                          <td colSpan={2}>
                            {resv.user_name} / {resv.user_phone}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.content}>예약 내역이 없습니다.</div>
          )}
        </div>
      </section>
      <ReservationModal show={showModal} />
    </>
  );
};

export default Reservation;
