import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Table from "react-bootstrap/Table";
import { commaFormat, hyphenForPhone } from "../../utils/number";

export const ScreenCompleteContent = () => {
  const router = useRouter();
  const [form, setForm] = useState({});
  useEffect(() => {
    setForm({ ...router.query });
  }, [router.query]);
  return (
    <>
      <div className="complete_application_container">
        <span>
          신청번호 : <span>{form.resv_no}</span>
        </span>
        <span className="bar">|</span>
        <span>
          신청일자 : <span>{form.reg_date}</span>
        </span>
      </div>
      <div className="complete_tbl_container">
        <div className="complete_content_tit">
          <h3>스크린골프 포인트 서비스</h3>
          <div class="complete_status">
            <div className="tit_point">
              {commaFormat(form.total_pay_point)}P
            </div>
            <div className="tit_status">신청완료</div>
          </div>
          <div className="content_hr_bottom"></div>
        </div>

        <div className="tbl_complete_content">
          <div className="complete_content_items">
            <span className="items_item">희망날짜</span>
            <span className="items_detail">{form.resv_datetime}</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">인원수</span>
            <span className="items_detail">{form.user_cnt}명</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">주문자명</span>
            <span className="items_detail">{form.user_name}</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">연락처</span>
            <span className="items_detail">{hyphenForPhone(form.mobile)}</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">이메일</span>
            <span className="items_detail">{form.email}</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">기타사항</span>
            <span className="items_detail">
              <pre>{form.etc}</pre>
            </span>
          </div>
        </div>
      </div>
      <button
        className="complete_btn"
        onClick={() => router.push("/mypage/reservation/")}
      >
        예약현황
      </button>
    </>
  );
};
