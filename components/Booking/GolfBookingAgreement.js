import React from "react";
import Form from "react-bootstrap/Form";

export const GolfBookingAgreement = ({ handleSubmit }) => {
  const [isAgree, setIsAgree] = React.useState(false);
  const sendReservation = (e) => {
    e.preventDefault();
    if (!isAgree) {
      alert("필수 항목에 동의해주세요.");
      return;
    }
    handleSubmit(e);
  };
  return (
    <div className="agree_content screen">
      <Form>
        <div className="form_item">
          <div className="item_group">
            <Form.Check
              inline
              label="아래 내용에 모두 동의합니다.(필수)"
              name="agree"
              type="checkbox"
              id="agree_3"
              checked={isAgree}
              onChange={() => setIsAgree(!isAgree)}
              required
            />
          </div>
        </div>
        <p>
          예약 신청 시 골프장 상황에 따라 희망하신 내역으로 예약이 어려울 수
          있으며, 이 경우 별도로 연락드리겠습니다.
        </p>
        <button type="submit" onClick={sendReservation}>
          예약신청
        </button>
      </Form>
    </div>
  );
};
