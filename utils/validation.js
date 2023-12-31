const formData = {
  resv_datetime: "날짜를 선택해주세요.",
  user_cnt: "인원을 선택해주세요.",
  user_name: "이름을 입력해주세요.",
  mobile: "휴대폰 번호를 입력해주세요.",
  email: "이메일을 입력해주세요.",
  time1: "시간을 선택해주세요.",
  time2: "시간을 선택해주세요.",
  region1: "권역을 선택해주세요.",
  region2: "권역을 선택해주세요.",
  agree_payment: "결제정보를 확인 및 서비스 신청에 동의해주세요.",
  agree_service: "아래 내용에 모두 동의해주세요.",
};

export function validateForm(form, field) {
  if (!form[field]) {
    alert(formData[field] || "입력 내용을 확인해주세요.");
    return false;
  }
  return true;
}
