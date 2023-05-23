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

const ReservationModal = ({ user, updateReservation }, ref) => {
  const [reservation, setReservation] = useState(INITIAL_STATE);
  const [show, setShow] = useState(false);

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
    const memo = `희망일자/시간대: ${reservation.resv_time}
지역: ${reservation.resv_place} 
기타사항: ${reservation.etc}`;
    setReservation((prevState) => ({ ...prevState, [name]: value, memo }));
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
