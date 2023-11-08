/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./Ggmall.module.scss";
import { useDaumPostcodePopup } from "react-daum-postcode";

const INITIAL_FORM = {
  order_user_name: "",
  order_user_phone: "",
  order_user_email: "",
  delivery_user_name: "",
  delivery_phone: "",
  delivery_zipcode: "",
  delivery_addr1: "",
  delivery_addr2: "",
  memo: "",
};

const OrderForm = ({ user, product, setOrderInfo }) => {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log("=-=-0=0-0-=", data.zonecode);
    setForm((prevState) => ({
      ...prevState,
      delivery_addr1: fullAddress,
      delivery_zipcode: data.zonecode,
    }));
  };

  useEffect(() => {
    if (user) {
      setForm((prevState) => ({
        ...prevState,
        order_user_name: user.user_name,
        order_user_phone: user.mobile,
        order_user_email: user.email,
        delivery_user_name: user.user_name,
        delivery_phone: user.mobile,
        delivery_zipcode: user.zipcode,
        delivery_addr1: user.addr1,
        delivery_addr2: user.addr2,
      }));
    }
  }, [user]);

  useEffect(() => {
    setOrderInfo((prevState) => ({ ...prevState, ...form }));
  }, [form]);

  return (
    <>
      <section>
        <form className={styles.order_form}>
          <h3>주문하시는 분</h3>
          <div className={`row ${styles.form_group}`}>
            <div className="col-md-3 col-sm-3">
              <p>
                이름 <span className={styles.sup}>*</span>
              </p>
            </div>
            <div className="col-md-9 col-sm-9 signup">
              <input
                className="form-control"
                type="text"
                name="order_user_name"
                placeholder="이름을 입력하세요"
                value={form.order_user_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`row ${styles.form_group}`}>
            <div className="col-md-3 col-sm-3">
              <p>
                휴대폰번호 <span className={styles.sup}>*</span>
              </p>
            </div>
            <div className={`col-md-9 col-sm-9 ${styles.tel}`}>
              <input
                className="form-control"
                type="tel"
                name="order_user_phone"
                placeholder="휴대폰번호를 입력하세요"
                value={form.order_user_phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`row ${styles.form_group}`}>
            <div className="col-md-3 col-sm-3">
              <p>
                E-mail <span className={styles.sup}>*</span>
              </p>
            </div>
            <div className="col-md-9 col-sm-9 signup">
              <input
                className="form-control"
                type="text"
                name="order_user_email"
                placeholder="이메일을 입력하세요"
                value={form.order_user_email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={`row ${styles.form_group}`}>
            <div className="col-md-3 col-sm-3">
              <p>메모</p>
            </div>
            <div className="col-md-9 col-sm-9 signup">
              <textarea
                name="memo"
                cols="30"
                rows="3"
                value={form.memo}
                className={`form-control ${styles.form_control}`}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        {product.pd_type === "01" && (
          <form className={styles.order_form}>
            <div>
              <h3>받으시는 분</h3>
            </div>

            <div className={`row ${styles.form_group}`}>
              <div className="col-md-3 col-sm-3">
                <p>
                  이름 <span className={styles.sup}>*</span>
                </p>
              </div>
              <div className="col-md-9 col-sm-9 signup">
                <input
                  className="form-control"
                  type="text"
                  name="delivery_user_name"
                  placeholder="받으시는 분 이름을 입력하세요"
                  value={form.delivery_user_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={`row ${styles.form_group}`}>
              <div className="col-md-3 col-sm-3">
                <p>
                  휴대폰번호 <span className={styles.sup}>*</span>
                </p>
              </div>
              <div className={`col-md-9 col-sm-9 ${styles.tel}`}>
                <input
                  className="form-control"
                  type="tel"
                  name="delivery_phone"
                  placeholder="휴대폰번호를 입력하세요"
                  value={form.delivery_phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`row ${styles.form_group}`}>
              <div className="col-md-3 col-sm-3">
                <p>
                  주소 <span className={styles.sup}>*</span>
                </p>
              </div>
              <div className="col-md-9 col-sm-9">
                <div className="row">
                  <div className="col-md-8 col-sm-8">
                    <input
                      className="form-control"
                      type="text"
                      name="delivery_zipcode"
                      id="delivery_zipcode"
                      placeholder="우편번호"
                      value={form.delivery_zipcode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 col-sm-3 mb-2">
                    <button
                      type="button"
                      className="default-btn"
                      onClick={handleClick}
                    >
                      주소검색
                    </button>
                  </div>
                </div>
                <input
                  className="form-control mb-2"
                  type="text"
                  name="delivery_addr1"
                  id="delivery_addr1"
                  placeholder="기본주소"
                  value={form.delivery_addr1}
                  onChange={handleChange}
                />
                <input
                  className="form-control"
                  type="text"
                  name="delivery_addr2"
                  id="delivery_addr2"
                  placeholder="나머지 주소"
                  value={form.delivery_addr2}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        )}
      </section>
    </>
  );
};

export default OrderForm;
