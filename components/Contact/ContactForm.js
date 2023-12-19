import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import Link from "next/link";
import PageBreadCrumb from '../Common/PageBreadCrumb';

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

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
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

  return (
    <div className="main-contact-area pb-100">
      <div className="container">
        <div className="section-title mt-5">
          <PageBreadCrumb
            pageTitle="상담문의"
            homePageUrl="/contact"
            homePageText="Support"
            activePageText="상담문의"
          />
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="성함"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="연락처"
                          className="form-control"
                          value={contact.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
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
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="6"
                          placeholder="문의 내용"
                          className="form-control"
                          value={contact.text}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <input
                        type="checkbox"
                        id="agree"
                        onChange={() => setCheckAgree(!checkAgree)}
                      />
                      <label htmlFor="agree" className="contact-agree-label">
                        <Link
                          href="https://sprinkle-justice-3a1.notion.site/11de65f3be1241efb4e542bbb897a52c"
                          target="_blank"
                        >
                          개인정보 동의
                        </Link>
                      </label>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="default-btn btn-two">
                        상담신청
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
