import React from "react";
import styles from "./Ggmall.module.scss";

const OrderForm = () => {
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
                name="login_id"
                placeholder="아이디를 입력하세요"
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
                name="mobile"
                placeholder="010"
                maxLength={3}
              />
              <span>-</span>
              <input
                className="form-control"
                type="tel"
                name="mobile"
                placeholder="010"
                maxLength={4}
              />
              <span>-</span>
              <input
                className="form-control"
                type="tel"
                name="mobile"
                placeholder="010"
                maxLength={4}
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
                name=""
                placeholder="이메일을 입력하세요"
              />
            </div>
          </div>
        </form>

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
                name="login_id"
                placeholder="아이디를 입력하세요"
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
                name="mobile"
                placeholder="010"
                maxLength={3}
              />
              <span>-</span>
              <input
                className="form-control"
                type="tel"
                name="mobile"
                placeholder="010"
                maxLength={4}
              />
              <span>-</span>
              <input
                className="form-control"
                type="tel"
                name="mobile"
                placeholder="010"
                maxLength={4}
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
                    name="zipcode"
                    id="form1"
                    placeholder="우편번호"
                  />
                </div>
                <div className="col-md-3 col-sm-3">
                  <button type="button" className="default-btn">
                    주소검색
                  </button>
                </div>
              </div>
              <input
                className="form-control"
                type="text"
                name="addr1"
                id="form1"
                placeholder="기본주소"
              />
              <input
                className="form-control"
                type="text"
                name="addr2"
                id="form1"
                placeholder="나머지 주소"
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default OrderForm;
