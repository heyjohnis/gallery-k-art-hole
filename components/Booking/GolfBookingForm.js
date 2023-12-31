import React, { useEffect, useState } from "react";
import DatePicker from "../Common/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Form from "react-bootstrap/Form";
import FormSelect from "react-bootstrap/FormSelect";
import { setDate } from "date-fns";
import { REGION_LIST } from "../../data/CommonCode";
import { useRouter } from "next/router";

const GolfBookingForm = ({ setBookingInfo, user }) => {
  const router = useRouter();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name } = e.target;
    let value = e.target.value;
    if (e.target.type === "checkbox") value = e.target.checked;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const selectedPickDate = (date) => {
    console.log("date: ", date);
    setForm((prevState) => ({ ...prevState, ...date }));
  };

  const renderRegionOptions = () => {
    return REGION_LIST.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.data}
        </option>
      );
    });
  };

  useEffect(() => {
    setBookingInfo(form);

    console.log("useEffect form: ", form);
  }, [form]);

  useEffect(() => {
    router.query && setBookingData(router.query);
    setForm((prevState) => ({ ...prevState, ...router.query }));
  }, [router.query]);

  useEffect(() => {
    if (!user) return;
    setForm((prevState) => ({ ...prevState, ...user }));
  }, [user]);

  return (
    <div className="booking_content">
      <h1>골프장 예약 서비스</h1>
      <h2>골프장 정보</h2>

      <Form>
        <div className="form_item">
          <DatePicker
            label="날짜 선택"
            pickDate={(date) => selectedPickDate(date)}
            dateKind="resv_datetime"
            selectedDate={form.resv_datetime}
          />
        </div>
        <div className="form_item">
          <label>시간 선택</label>
          <div className="item_group">
            <Form.Check
              label="1부"
              name="time1"
              type="checkbox"
              id="check_1"
              className="item"
              onChange={handleChange}
            />
            <Form.Check
              label="2부"
              name="time2"
              type="checkbox"
              id="check_2"
              className="item"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form_item">
          <label>권역 선택</label>
          <div className="item_group item_select">
            <Form.Select
              aria-label="Default select example"
              name="region1"
              onChange={handleChange}
              value={form.region1}
            >
              <option value="">1차 권역을 선택해 주세요</option>
              {renderRegionOptions()}
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              name="region2"
              onChange={handleChange}
            >
              <option value="">2차 권역을 선택해 주세요</option>
              {renderRegionOptions()}
            </Form.Select>
          </div>
          <p className="info">
            1차 권역 예약이 어려울 시 원하시는 2차 권역을 선택해주시기 바랍니다.
          </p>
        </div>

        <div className="form_item">
          <Form.Label>요청사항</Form.Label>
          <Form.Control
            as="textarea"
            name="etc"
            onChange={handleChange}
            rows={3}
            placeholder={`선호하시는 골프장을 작성해주세요.
          예) 한성CC 선호합니다.
          예) 1부 7시 초반 원합니다.`}
          />
        </div>
      </Form>

      <h2>이용자 정보</h2>
      <Form>
        <div className="form_item">
          <Form.Label>이용자명</Form.Label>
          <div className="item_name">
            <Form.Control
              type="text"
              name="user_name"
              value={form.user_name}
              placeholder="이름을 입력해주세요."
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faCircleCheck} className="icon_complete" />
          </div>
          <p className="info">무기명 회원인 경우 예약자명을 기입해주세요.</p>
        </div>

        <div className="form_item">
          <Form.Label>이용자 연락처</Form.Label>
          <div className="item_group row">
            <div className="col row tel_group">
              <div className="col-lg-2 col-3">
                <Form.Control
                  type="text"
                  name="mobile"
                  maxlength="15"
                  value={form?.mobile}
                  placeholder="010-1234-5678"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default GolfBookingForm;
