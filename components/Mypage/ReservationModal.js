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

const INITIAL_STATE = {
  user_name: "",
  user_phone: "",
  resv_time: "",
  resv_place: "",
  subject: "",
  memo: "",
  etc: "",
  user_no: "",
  login_id: "",
  login_user_name: "",
};

const REGION_LIST = [
  { id: 0, data: "경기서부" },
  { id: 1, data: "경기동부" },
  { id: 2, data: "강원" },
  { id: 3, data: "충북" },
  { id: 4, data: "충남" },
  { id: 5, data: "경부" },
  { id: 6, data: "경남" },
  { id: 7, data: "전북" },
  { id: 8, data: "전남" },
  { id: 9, data: "제주" },
];

const ReservationModal = ({ user, updateReservation }, ref) => {
  const [reservation, setReservation] = useState(INITIAL_STATE);
  const [show, setShow] = useState(false);
  const [hopeRegion, setHopeRegion] = useState({});
  const [pickDates, setPickDates] = useState({
    hope_date1: "",
    hope_date2: "",
    hope_date3: "",
  });

  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      REGION_LIST.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
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
    }));
  };

  const showModal = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "resv_place") {
      setHopeRegion({ ...hopeRegion, value });
    }

    const memo = `희망일자/시간대: ${reservation.resv_time}
희망지역: ${{ ...hopeRegion, value }.toString()}} 
기타사항: ${reservation.etc}`;
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
          name="resv_place"
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

  useEffect(() => {
    if (user && user.user_no) {
      userInfoSetting();
    }
  }, [user]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>예약신청</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-12 col-sm-12">
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
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <label>지역선택</label>
            <input type="text" className="form-control" readOnly />
              
            {renderCheckbox()}
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="이용자명"
              className="form-control"
              value={reservation.user_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="form-group">
            <input
              type="text"
              name="user_phone"
              placeholder="이용자 연락처"
              className="form-control"
              value={reservation.user_phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="form-group">
            <input
              type="text"
              name="resv_time"
              placeholder="희망일자/시간대"
              className="form-control"
              value={reservation.resv_time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="form-group">
            <input
              type="text"
              name="resv_place"
              placeholder="지역: 예)가평"
              className="form-control"
              value={reservation.resv_place}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          신청
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default forwardRef(ReservationModal);
