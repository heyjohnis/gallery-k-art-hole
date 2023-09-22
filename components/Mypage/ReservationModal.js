/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../utils/baseUrl";
import DatePicker from "../Common/DatePicker";
import styles from "./Mypage.module.scss";
import Link from "next/link";

const INITIAL_STATE = {
  user_name: "",
  user_phone: "",
  resv_place: "",
  subject: "",
  memo: "",
  etc: "",
  user_no: "",
  login_id: "",
  login_user_name: "",
  start_time: "09:00",
  end_time: "15:00",
  selected_cc: "",
};

const REGION_LIST = [
  { id: "02", data: "서울/인천" },
  { id: "031SE", data: "경기남동" },
  { id: "031SW", data: "경기남서" },
  { id: "031NE", data: "경기북동" },
  { id: "031NW", data: "경기북서" },
  { id: "033", data: "강원" },
  { id: "043", data: "충북" },
  { id: "041", data: "충남" },
  { id: "054", data: "경북" },
  { id: "055", data: "경남" },
  { id: "063", data: "전북" },
  { id: "061", data: "전남" },
  { id: "064", data: "제주" },
];

const ReservationModal = ({ user, updateReservation }, ref) => {
  const [reservation, setReservation] = useState(INITIAL_STATE);
  const [show, setShow] = useState(false);
  const [ccList, setCcList] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState();
  const [pickDates, setPickDates] = useState({
    hope_date1: "",
    hope_date2: "",
    hope_date3: "",
  });
  const [checkItems, setCheckItems] = useState([]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      REGION_LIST.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  useImperativeHandle(ref, () => ({
    showModal,
  }));

  const userInfoSetting = () => {
    setReservation((prevState) => ({
      ...prevState,
      user_no: user.user_no,
      login_id: user.login_id,
      login_user_name: user.user_name,
      user_name: user.option_name1,
      user_phone: user.option_phone1,
    }));
  };

  const showModal = () => {
    setShow(true);
  };

  const handleClose = () => {
    setReservation(INITIAL_STATE);
    setShow(false);
    setCheckItems([]);
  };

  const handleChange = (e) => {
    console.log("선택: ", checkItems);
    const { name, value } = e.target;

    const memo = `
희망일자/시간: 
  1차: ${pickDates.hope_date1} 
  2차: ${pickDates.hope_date2} 
  3차: ${pickDates.hope_date3} 
  시간: ${reservation.start_time} ~ ${reservation.end_time}
희망지역: 
${checkItems
  .map((item) => REGION_LIST.find((el) => el.id === item).data)
  .join(", ")}
기타사항: 
${reservation.etc}`;
    setReservation((prevState) => ({ ...prevState, [name]: value, memo }));
    console.log("memo: ", memo);
  };

  const validateForm = () => {
    if (!reservation.user_name) {
      alert("이용자명을 입력해주세요.");
      return false;
    }
    if (!reservation.user_phone) {
      alert("이용자 연락처를 입력해주세요.");
      return false;
    }
    return true;
  };

  const renderCheckbox = () => {
    return REGION_LIST.map((item) => (
      <div className="form-check form-check-inline" key={item.id}>
        <input
          id={`hope_region_${item.id}`}
          className="form-check-input"
          type="checkbox"
          name="checked_region"
          value={item.data}
          onChange={(e) => handleSingleCheck(e.target.checked, item.id)}
          checked={checkItems.includes(item.id) ? true : false}
        />
        <label className="form-check-label" htmlFor={`hope_region_${item.id}`}>
          {item.data}
        </label>
      </div>
    ));
  };

  const sendReservation = async () => {
    try {
      const url = `${baseUrl}/reservation/request`;
      const medq_token = cookie.get("medq_token");
      console.log("url: ", url);
      const response = await axios.post(url, reservation, {
        headers: { Authorization: `Bearer ${medq_token}` },
      });
      setReservation(INITIAL_STATE);
      updateReservation();
      alert("예약접수 되었습니다.");
    } catch (error) {
      console.log(error);
    }
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    sendReservation();
  };

  const pickedDates = (hopeDate) => {
    console.log("hopeDate: ", hopeDate);
    setPickDates((prev) => ({
      ...prev,
      ...hopeDate,
    }));
    console.log("pickDates: ", pickDates);
  };

  const selectedCc = (cc) => {
    console.log("cc: ", cc);
    setReservation((prevState) => ({ ...prevState, resv_place: cc }));
  };

  const getCCList = async () => {
    try {
      const url = `${baseUrl}/reservation/cc-info`;
      const medq_token = cookie.get("medq_token");
      const response = await axios.post(url, reservation, {
        headers: { Authorization: `Bearer ${medq_token}` },
      });
      console.log(response.data);
      setCcList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user && user.user_no) {
      userInfoSetting();
    }
  }, [user]);

  // CC 정보 전체로딩
  useEffect(() => {
    if (show) getCCList();
  }, [show]);

  // 선택한 지역에 따른 CC 정보
  useEffect(() => {
    const list = [];
    ccList.map(
      (item, i) =>
        checkItems.includes(item.region_cd) &&
        list.push(
          <div
            key={i}
            className={styles.ccInfo}
            onClick={() =>
              selectedCc(
                `[${item.region_nm}] ${item.cc_name} / ${item.cc_addr} / ${item.cc_tel}`
              )
            }
          >
            <p>
              [{item.region_nm}] {item.cc_name} <span>{item.cc_addr}</span>
            </p>
          </div>
        )
    );
    setSelectedRegion(list);
  }, [checkItems]);

  return (
    <Modal className="modal-xl" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>예약신청</Modal.Title>
        <img
          src="/images/partner_logo/partner_showgolf.png"
          className={`logo_showgolf ${styles.logo_showgolf}`}
          alt="쇼골프"
        />
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <DatePicker
              label="1차 선택"
              pickDate={pickedDates}
              dateKind="hope_date1"
            />
            <DatePicker
              label="2차 선택"
              pickDate={pickedDates}
              dateKind="hope_date2"
            />
            <DatePicker
              label="3차 선택"
              pickDate={pickedDates}
              dateKind="hope_date3"
            />
            <br />
            <label>희망시간</label>
            <div className="form-group d-flex">
              <input
                type="time"
                name="start_time"
                className="form-control"
                value={reservation.start_time}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="end_time"
                className="form-control"
                value={reservation.end_time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <br className="mobile" />
            <label>지역선택</label>
            <div className="checkbox-group select-region">
              <div
                className="form-check form-check-inline"
                key={REGION_LIST.length + 1}
              >
                <input
                  type="checkbox"
                  id={`hope_region_${REGION_LIST.length + 1}`}
                  className="form-check-input"
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  checked={
                    checkItems.length === REGION_LIST.length ? true : false
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`hope_region_${REGION_LIST.length + 1}`}
                >
                  전체선택
                </label>
              </div>
              {renderCheckbox()}
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                name="resv_place"
                placeholder="골프장 정보"
                className="form-control"
                value={reservation.resv_place}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className={styles.selectCc}>{selectedRegion}</div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <label>이용자명</label>
            <span className="text-danger">*</span>
            {user && (
              <span className="option_user">
                {user.user_option_name}{" "}
                {user.user_option !== "03"
                  ? `: ${user.option_name1} ${user.option_name2}`
                  : ""}
              </span>
            )}
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="이용자명을 입력하세요"
                className="form-control"
                value={reservation.user_name}
                onChange={handleChange}
                required
              />
            </div>
            <label>이용자 연락처</label>
            <span className="text-danger">*</span>
            <div className="form-group">
              <input
                type="text"
                name="user_phone"
                placeholder="이용자 연락처를 입력하세요"
                className="form-control"
                value={reservation.user_phone}
                onChange={handleChange}
                required
              />
            </div>
            <label>기타사항</label>
            <div className="form-group">
              <textarea
                name="etc"
                cols="30"
                rows="6"
                placeholder="기타사항: 예) 시간대는 뒷시간도 가능합니다."
                className="form-control"
                value={reservation.etc}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className={`${styles.screen_golf}`}>
          <Link
            href="/ggmall/detail/service/178/"
            className={`${styles.screen_golf}`}
            onClick={handleClose}
          >
            스크린골프 예약하기
          </Link>
        </div>
        <div style={{ paddingRight: "10px" }}>
          예약 신청시 골프장 상황에 따라 희망하신 내역으로 예약이 안 될 수
          있으며, 이 경우 별도로 연락드리겠습니다.
        </div>
        <div
          className={`btn ${styles.btn} ${styles.btn_outline}`}
          onClick={handleClose}
          style={{ marginRight: "0" }}
        >
          닫기
        </div>
        <div
          className={`default-btn ${styles.btn} `}
          style={{ borderRadius: "6px" }}
          onClick={handleSubmit}
        >
          신청
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default forwardRef(ReservationModal);
