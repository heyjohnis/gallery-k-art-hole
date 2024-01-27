import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { isValidateForm } from "../../utils/validation";
import { commaFormat } from "../../utils/number";
import { POST } from "../../utils/restApi";
import { useRouter } from "next/router";
import { nowDateFormat } from "../../utils/dateUtil";

const SCREENGOLF_PAYPOINT = 25000;

export const ScreenBookingAgreement = ({ bookingInfo }) => {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [usePoint, setUsePoint] = useState(0);
  const [totalPayPoint, setTotalPayPoint] = useState(SCREENGOLF_PAYPOINT);
  const handleChange = (e) => {
    const { name } = e.target;
    let value = e.target.value;
    if (e.target.type === "checkbox") value = e.target.checked;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isisValidateForm(bookingInfo)) return;
    bookingInfo.memo = setMemo();
    bookingInfo.total_pay_point = totalPayPoint;
    bookingInfo.use_point = form.use_point || usePoint;
    bookingInfo.resv_kind = "02";
    bookingInfo.resv_name = "스크린 골프 포인트 서비스";
    POST("/reservation/request", bookingInfo).then((res) => {
      if (res.status === 200) {
        bookingInfo.resv_no = res.data.insertId;
        bookingInfo.reg_date = nowDateFormat();
        router.push({
          pathname: "/screengolf/complete",
          query: bookingInfo,
        });
      }
    });
  };

  const setMemo = () => {
    const memo = `
희망일자 / 시간: ${bookingInfo.resv_datetime} / ${
      bookingInfo.time1 ? "1부" : ""
    } ${bookingInfo.time2 ? "2부" : ""}
요청사항: 
${bookingInfo.etc || ""}`;
    return memo;
  };

  useEffect(() => {
    const totPayPoint = bookingInfo?.user_cnt
      ? parseInt(bookingInfo.user_cnt) * SCREENGOLF_PAYPOINT
      : SCREENGOLF_PAYPOINT;
    setTotalPayPoint(totPayPoint);

    const useP =
      totPayPoint <= bookingInfo?.monthly_point
        ? totPayPoint
        : bookingInfo?.monthly_point;
    setUsePoint(useP);
  }, [form, bookingInfo]);

  const isisValidateForm = (data) => {
    if (!isValidateForm(data, "resv_datetime")) return false;
    if (!isValidateForm(data, "user_cnt")) return false;
    if (!isValidateForm(data, "user_name")) return false;
    if (!isValidateForm(data, "mobile")) return false;
    if (!isValidateForm(data, "email")) return false;
    if (!isValidateForm(form, "agree_payment")) return false;
    if (!isValidateForm(form, "agree_service")) return false;

    return true;
  };

  return (
    <div className="agree_content screen">
      <div className="total_payment">
        <span>총 결제포인트</span>
        <strong>
          <span>{commaFormat(totalPayPoint)}</span> P
        </strong>
      </div>
      <Form>
        <div className="form_item">
          <Form.Label>포인트 결제</Form.Label>
          <div className="item_name">
            <Form.Control
              type="number"
              placeholder="100,000"
              name="use_point"
              value={form.use_point || usePoint}
              onChange={handleChange}
            />
          </div>
          <p className="point_status">
            사용 가능 포인트{" "}
            <span>{commaFormat(bookingInfo?.monthly_point)} P</span>
          </p>
        </div>

        <div className="form_item">
          <Form.Check
            inline
            label="결제정보를 확인하였으며, 서비스 신청에 동의합니다."
            name="agree_payment"
            type="checkbox"
            required
            id="agree_payment"
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="아래 내용에 모두 동의합니다."
            name="agree_service"
            type="checkbox"
            id="agree_service"
            required
            onChange={handleChange}
          />
        </div>

        <div className="notice">
          <h6>유의사항</h6>
          <ul>
            <li>
              본 서비스는 그린갤러리를 통해 예약을 대행하지 않으므로, 서비스
              이용자가 개별적으로 스크린 골프 예약 후 이용하는 서비스 입니다.
            </li>
            <li>
              기존 홈페이지 내 Golf Booking에서 스크린골프 이용일과 참여인원을
              기재해주시기 바랍니다.
            </li>
            <li>
              승인 완료 문자 미수신 또는 승인 거절 시 서비스 이용 불가합니다.
            </li>
            <li>인당 1회 지원금 25,000원을 지급합니다. (최대 10만원)</li>
          </ul>

          <h6>이용규정</h6>
          <ul>
            <li>사용일 코나카드 미결제 시 스크린 골프 지원금 회수</li>
            <li>
              예약한 일시에 예약된 스크린 골프장과 다른 스크린 골프장으로
              이용가능
            </li>
            <li>
              사용 횟수 : 그린, 블루 레드 월 4회 / 퍼플, 블랙, 플레티넘 월 8회
            </li>
            <li>
              타업종(스크린 골프장이 아닌 업종) 결제 시 패널티로 지원금의 2배
              포인트 차감
            </li>
          </ul>

          <h6>취소규정ㆍ패널티</h6>
          <Table className="penalty">
            <thead>
              <tr>
                <th>취소 시기</th>
                <th>포인트</th>
                <th>패널티</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1일 전</td>
                <td>
                  지원금 회수
                  <br />
                  포인트 차감 없음
                </td>
                <td>없음</td>
              </tr>
              <tr>
                <td>당일</td>
                <td>
                  지원금 회수
                  <br />
                  포인트 차감 없음
                </td>
                <td>스크린 예약 횟수 차감</td>
              </tr>
              <tr>
                <td>취소 미통지</td>
                <td>
                  지원금 회수
                  <br />
                  포인트 차감 없음
                </td>
                <td>스크린 예약 횟수 2회 차감</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <button type="submit" onClick={handleSubmit}>
          예약신청
        </button>
      </Form>
    </div>
  );
};
