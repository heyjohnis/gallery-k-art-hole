import React, { useEffect, useState } from "react";
import { DatePicker } from "../Common/DatePicker";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";
import useRenderRegionOptions from "../../hooks/useRenderRegionOptions";

const GolfBookingForm = ({ setBookingInfo, user }) => {
  const router = useRouter();
  const regegionOptions = useRenderRegionOptions();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name } = e.target;
    let value = e.target.value;
    if (e.target.type === "radio") {
      value = e.target.value;
      console.log("e.target.checked: ", e.target.value);
    }
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const selectedPickDate = (date) => {
    console.log("date: ", date);
    setForm((prevState) => ({ ...prevState, ...date }));
  };

  useEffect(() => {
    setBookingInfo(form);
    console.log("useEffect form: ", form);
  }, [form]);

  useEffect(() => {
    router?.query && setBookingInfo(router.query);
    setForm((prevState) => ({ ...prevState, ...router.query }));
  }, [router.query]);

  useEffect(() => {
    if (!user) return;
    console.log("user: ", user);
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
          <div key="inline-radio" className="item_group">
            <Form.Check
              label="1부"
              name="time1"
              type="radio"
              id="inline-radio-1"
              className="item btn_radio"
              value="1부"
              onChange={handleChange}
              defaultChecked
            />
            <Form.Check
              label="2부"
              name="time1"
              type="radio"
              id="inline-radio-2"
              className="item btn_radio"
              value="2부"
              onChange={handleChange}
            />
            <Form.Check
              label="무관"
              name="time1"
              type="radio"
              id="inline-radio-3"
              className="item btn_radio"
              value="무관"
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
              {regegionOptions}
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              name="region2"
              onChange={handleChange}
            >
              <option value="">2차 권역을 선택해 주세요</option>
              {regegionOptions}
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
            name="memo"
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
          <div className="booking_form_gruop">
            <div className="item_group">
              <div className="form_label_input_column">
                <Form.Label>이름</Form.Label>
                <Form.Control
                  type="text"
                  name="option_name1"
                  value={form.option_name1 || ""}
                  placeholder="이름을 입력해주세요."
                  onChange={handleChange}
                />
                <p className="info mb_info">
                  무기명 회원인 경우 예약자명을 기입해주세요.
                </p>
              </div>
              <div className="form_label_input_column">
                <Form.Label>연락처</Form.Label>
                <Form.Control
                  type="text"
                  name="option_phone1"
                  maxLength="15"
                  value={form?.option_phone1 || ""}
                  placeholder="010-1234-5678"
                  onChange={handleChange}
                />
              </div>
            </div>
            <p className="info pc_info margin_b_80">
              무기명 회원인 경우 예약자명을 기입해주세요.
            </p>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default GolfBookingForm;
