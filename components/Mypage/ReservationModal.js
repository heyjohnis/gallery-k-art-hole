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
  resv_place: "",
  subject: "",
  memo: "",
  etc: "",
  user_no: "",
  login_id: "",
  login_user_name: "",
  start_time: "",
  end_time: "",
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
    }));
  };

  const showModal = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
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
${checkItems.map((item) => REGION_LIST[item].data)}
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
    <Modal className="modal-lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>예약신청</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
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

          <div className="col-lg-6 col-sm-12">
            <label>지역선택</label>
            <div className="checkbox-group">
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
            <label>이용자명</label>
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
