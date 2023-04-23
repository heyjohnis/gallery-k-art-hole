import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import Link from "next/link";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
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
        <div className="section-title">
          <span>Contact Us</span>
          <h2>상담/문의</h2>
          <p>
          상딤신청을 남겨주시면 빠른 시간 내에<br/>답변 드리도록 하겠습니다
          </p>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 col-md-12">
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
                      /> 
                      <label htmlFor='agree' className='contact-agree-label'>
                        <Link href="https://sprinkle-justice-3a1.notion.site/11de65f3be1241efb4e542bbb897a52c" target="_blank">개인정보 동의</Link>
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
