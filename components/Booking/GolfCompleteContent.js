import React, { useEffect } from "react";
import { useRouter } from "next/router";

export const GolfCompleteContent = () => {
  const router = useRouter();
  const [form, setForm] = React.useState({});
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
          신청일시 :{" "}
          <span>
            {form?.reg_date?.length > 15
              ? form?.reg_date?.substring(0, 16)
              : form?.reg_date}
          </span>
        </span>
      </div>
      <div className="complete_tbl_container">
        <div className="complete_content_tit">
          <h3>골프장 예약 서비스</h3>
          <div className="complete_status">
            <div className="tit_point">
              <span>{form.user_name}</span>
              <span className="bar">|</span>
              <span>{form.mobile}</span>
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
            <span className="items_item">희망 시간</span>
            <span className="items_detail">
              {" "}
              {form.time1 && "1부"} {form.time2 && "2부"}
            </span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">희망 권역</span>
            <span className="items_detail">
              1순위 <span>{form.region1Name || ""}</span>
              <br />
              2순위 <span>{form.region2Name || "없음"}</span>
            </span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">기타사항</span>
            <span className="items_detail">
              <pre>{form.memo ? form.memo : "없음"}</pre>
            </span>
          </div>
        </div>
      </div>
      <button
        className="complete_btn"
        onClick={() => router.push("/mypage/?service=reservation")}
      >
        예약현황
      </button>
    </>
  );
};
