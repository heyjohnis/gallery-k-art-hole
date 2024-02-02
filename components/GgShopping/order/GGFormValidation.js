import React from "react";

export function GGFormValidation() {
  const isValid = () => {
    if (!form.order_user_name) {
      alert("주문자 이름을 입력해주세요.");
      return false;
    }
    if (!form.order_user_phone) {
      alert("주문자 연락처를 입력해주세요.");
      return false;
    }
    if (!form.order_user_email) {
      alert("주문자 이메일을 입력해주세요.");
      return false;
    }
    if (!form.delivery_user_name) {
      alert("수령인 이름을 입력해주세요.");
      return false;
    }
    if (!form.delivery_phone) {
      alert("수령인 연락처를 입력해주세요.");
      return false;
    }
    if (!form.delivery_zipcode) {
      alert("우편번호를 입력해주세요.");
      return false;
    }
    if (!form.delivery_addr1) {
      alert("주소를 입력해주세요.");
      return false;
    }
    if (!form.delivery_addr2) {
      alert("상세주소를 입력해주세요.");
      return false;
    }
    if (form.pay_amount !== form.total_price) {
      alert("결제하실 포인트를 확인해주세요.");
      return false;
    }
    if (!form.agree_payment) {
      alert("결제정보 확인에 동의해주세요.");
      return false;
    }
    if (!form.agree_service) {
      alert("필수 항목에 동의해주세요.");
      return false;
    }
    return true;
  };
  return isValid;
}
