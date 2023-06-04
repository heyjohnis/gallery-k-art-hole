/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Ggmall.module.scss";
import { commaFormat } from "../../utils/number";

const INITIAL_FORM = {
  use_point: 0,
  pay_card: 0,
  delivery_fee: 0,
  product_price: 0,
  total_price: 0,
};

const PayInfo = ({ user, product, total, buyProduct }) => {
  const [point, setPoint] = useState(0);
  const [payInfo, setPayInfo] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const buyNow = () => {
    buyProduct(payInfo);
  };

  useEffect(() => {
    const totalPrice = total + product.delivery_fee;
    setPayInfo((prevState) => ({
      ...prevState,
      delivery_fee: product.delivery_fee,
      total_price: totalPrice,
      use_point: totalPrice,
    }));
  }, [product]);

  return (
    <>
      <section className="mb-5">
        <div className={styles.pay_warp}>
          <div className={styles.pay_group}>
            <h2>결제정보</h2>
            <div className={styles.info_wrap}>
              <span className={styles.tit}>총 결제금액: </span>
              <span className={styles.tit}>
                {commaFormat(payInfo.total_price)}
                <span>P</span>
              </span>
            </div>
          </div>
          <div className={styles.pay_group}>
            <h2>결제수단</h2>
            <div className="radio">
              <label className="custom">
                <span>포인트결제</span>
                <input
                  type="radio"
                  name="user_kind"
                  value="01"
                  defaultChecked="checked"
                />
                <span className="checkmark"></span>
              </label>
              <input
                type="text"
                name="use_point"
                className="form-control"
                value={payInfo.use_point}
                onChange={handleChange}
              />
              <span>사용 가능한 포인트: {point}</span>
              {/* <label className="custom ml-30">
                <span>카드결제</span>
                <input type="radio" name="user_kind" value="02" />
                <span className="checkmark"></span>
              </label> */}
            </div>
          </div>

          <div className={styles.pay_group}>
            <h2>이용약관안내</h2>
            <ul>
              <li>세금계산서 필요시 별도 문의 부탁드립니다.</li>
              <li>온라인 작품 구매계약 시 간편전자계약서를 발송합니다.</li>
              <li>(별도의 회원가입이 필요하지 않습니다)</li>
              <li>자세한 내용은 약관참조</li>
            </ul>
          </div>

          <div className={styles.agree_form}>
            <input type="checkbox" id="agree1" className="form-check-input" />
            <label htmlFor="agree1" className={styles.agree}>
              결제정보를 확인하였으며, 구매 및 계약진행에 동의합니다.
            </label>
          </div>

          <div className={styles.btn_warp}>
            <Link href="#" className={`default-btn ${styles.btn_round}`}>
              취소하기
            </Link>
            <div onClick={buyNow} className={`default-btn ${styles.btn_buy}`}>
              구매하기
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayInfo;
