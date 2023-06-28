/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import Link from "next/link";
import styles from "../pages/landing.module.scss";

const alertContent = () => {
  MySwal.fire({
    title: "성공",
    text: "상담/문의가 접수되었습니다.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const LandingContactForm = ({ openContact }) => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [isOpen, setIsOpen] = useState(false);
  const [checkAgree, setCheckAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    console.log("e: ", e.target);
    e.preventDefault();

    if (!contact.name) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!contact.number) {
      alert("연락처를 입력해주세요.");
      return;
    }

    if (!checkAgree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    try {
      const url = `https://node.galleryk.co.kr:8081/consult/homepage`;
      const { name, number, text } = contact;
      const content = `제목: 그린갤러리상담신청 <br/> ${text}`;
      const req = {
        cnst_type: 20,
        logn_id: "",
        name,
        phone: number,
        dealer_code: "",
        cnst_cont: content,
        cust_no: null,
      };

      const response = await axios.post(url, req);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsOpen(openContact);
  }, [openContact]);

  return (
    <div className={`contact-form container ${styles.event_form}`}>
      <div className={`row ${styles.contactButton}`}>
        <button
          className={`btn default_btn `}
          onClick={() => setIsOpen(!isOpen)}
        >
          상담문의{" "}
          <span className={`${isOpen ? styles.toggle_off : styles.toggle_on}`}>
            {" "}
          </span>
        </button>
      </div>
      <div
        className={`${styles.contactFormContainer} ${
          isOpen ? styles.open : styles.close
        }`}
      >
        <div className={`row ${styles.contact_items}`}>
          <div className={`col-lg-3 col-md-3 ${styles.items} ${styles.tel}`}>
            <div>1588-1778</div>
          </div>
          <div
            className={`col-lg-6 col-md-6 ${styles.items} ${styles.items_form}`}
          >
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className={styles.form_group}>
                    <label htmlFor="name">이름</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="이름"
                      className={styles.form_control}
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <div className={styles.form_group}>
                    <label htmlFor="number">연락처</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="연락처"
                      className={styles.form_control}
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* <div className="col-lg-12 col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="제목을 적어주세요"
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div> */}
                <div className="col-lg-12 col-md-12">
                  <div className={styles.form_group}>
                    <label htmlFor="text">문의 내용</label>
                    <textarea
                      id="text"
                      name="text"
                      cols="30"
                      rows="3"
                      className={`form-control ${styles.form_control}`}
                      value={contact.text}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12 text-right">
                  <input
                    type="checkbox"
                    id="agree"
                    onChange={() => setCheckAgree(!checkAgree)}
                  />
                  <label htmlFor="agree" className="contact-agree-label ml-1">
                    <Link
                      href="https://sprinkle-justice-3a1.notion.site/11de65f3be1241efb4e542bbb897a52c"
                      target="_blank"
                    >
                      개인정보 동의
                    </Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div
            className={`col-lg-3 col-md-3 ${styles.items}  ${styles.conform}`}
          >
            <div className="col-lg-12 col-sm-12">
              <span>
                계약 NO! <span className={styles.small}>지금은 문의만</span>
              </span>
            </div>
            <div className="col-lg-12 col-sm-12">
              <button
                type="submit"
                className="default-btn btn-two"
                onClick={handleSubmit}
              >
                상담신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContactForm;
