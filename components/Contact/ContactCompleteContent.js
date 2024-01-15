import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { hyphenForPhone } from "../../utils/number";
import styles from "./Contact.module.scss";

const ContactCompleteContent = () => {
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
          <div className="complete_status">
            <div className="title_info-wrap">
              <div className="tit_name">{form.user_name} 님</div>
              <div className="tit_mobile_number">
                {hyphenForPhone(form.mobile)}
              </div>
            </div>
            <div className="tit_status">신청완료</div>
          </div>
          <div className="content_hr_bottom"></div>
        </div>

        <div className="tbl_complete_content">
          <div className="complete_content_items">
            <span className="items_item">작성일</span>
            <span className="items_detail">{form.resv_datetime}</span>
          </div>
        </div>
      </div>

      <div className={styles.completeBtnWrap}>
        <button
          className={`complete_btn ${styles.listBtn}`}
          // onClick={() => router.push("/mypage?service=)}
        >
          목록으로
        </button>
        <button
          className={`complete_btn ${styles.completeBtn}`}
          onClick={() => router.push("/mypage?service=contact")}
        >
          문의현황
        </button>
      </div>
    </>
  );
};

export default ContactCompleteContent;
