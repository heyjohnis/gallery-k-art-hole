import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { validateForm } from "../../utils/validation";
import { POST } from "../../hooks/restApi";
import { REGION_LIST } from "../../data/CommonCode";
import { useRouter } from "next/router";
import { nowDateFormat } from "../../utils/dateUtil";

export const GolfBookingAgreement = ({ bookingInfo }) => {
  const router = useRouter();
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidateForm(bookingInfo)) return;

    bookingInfo.memo = setMemo();
    bookingInfo.resv_kind = "01";
    POST("/reservation/request", bookingInfo)
      .then((res) => {
        if (res.status === 200) {
          alert("예약신청되었습니다. 관리자 확인 후 연락드리겠습니다");
          bookingInfo.resv_no = res.data.insertId;
          bookingInfo.reg_date = nowDateFormat();
          bookingInfo.region1Name = getRegionName(bookingInfo.region1);
          bookingInfo.region2Name = getRegionName(bookingInfo.region2);
          router.push({
            pathname: "/golf/complete",
            query: bookingInfo,
          });
        }
      })
      .catch((err) => console.log("err: ", err));
  };

  const setMemo = () => {
    const memo = `
희망일자 / 시간: ${bookingInfo.resv_datetime} / ${
      bookingInfo.time1 ? "1부" : ""
    } ${bookingInfo.time2 ? "2부" : ""}
권역1: ${getRegionName(bookingInfo.region1)}
권역2: ${getRegionName(bookingInfo.region2)} 
요청사항: 
${bookingInfo.etc || ""}`;
    return memo;
  };

  const getRegionName = (id) => {
    return REGION_LIST.find((item) => item?.id === id)?.data || "";
  };

  const handleChange = (e) => {
    const { name } = e.target;
    let value = e.target.value;
    if (e.target.type === "checkbox") value = e.target.checked;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const isValidateForm = (data) => {
    if (!validateForm(data, "resv_datetime")) return false;
    if (!validateForm(form, "agree_service")) return false;
    return true;
  };

  return (
    <div className="agree_content screen">
      <Form>
        <div className="form_item">
          <div className="item_group">
            <Form.Check
              inline
              label="아래 내용에 모두 동의합니다.(필수)"
              name="agree_service"
              type="checkbox"
              id="agree_service"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <p>
          예약 신청 시 골프장 상황에 따라 희망하신 내역으로 예약이 어려울 수
          있으며, 이 경우 별도로 연락드리겠습니다.
        </p>
        <button type="submit" onClick={handleSubmit}>
          예약신청
        </button>
      </Form>
    </div>
  );
};
