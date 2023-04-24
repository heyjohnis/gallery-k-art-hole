import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Email</h3>
                <p>
                  <a href="mailto:cs@galleryk.co.kr">cs@galleryk.co.kr</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>상담번호</h3>
                <p>
                  Tel. <a href="tel:1588-1778">1588-1778</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>주소</h3>
                <p>서울특별시 동대문구 왕산로 16</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
