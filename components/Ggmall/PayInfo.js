/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Ggmall.module.scss";
import { commaFormat } from "../../utils/number";
import baseUrl from "../../utils/baseUrl";
import cookie from "js-cookie";
const INITIAL_FORM = {
  use_point: 0,
  pay_card: 0,
  delivery_fee: 0,
  product_price: 0,
  total_price: 0,
  my_point: 0,
};

const PayInfo = ({ user, product, total, buyProduct }) => {
  const [point, setPoint] = useState(0);
  const [payInfo, setPayInfo] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [myPoint, setMyPoint] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const buyNow = () => {
    console.log("payInfo: ", payInfo);
    if (payInfo.total_price === parseInt(payInfo.use_point)) {
      buyProduct(payInfo);
    } else {
      alert("결제금액이 맞지 않습니다. \n포인트를 확인해주세요");
    }
  };

  const paymentInfo = () => {
    const totalPrice = total + product.delivery_fee;
    setPayInfo((prevState) => ({
      ...prevState,
      delivery_fee: product.delivery_fee,
      total_price: totalPrice,
      use_point: totalPrice,
      my_point: myPoint,
    }));
  };

  useEffect(() => {
    paymentInfo();
  }, [product, total, myPoint]);

  useEffect(() => {
    const url = `${baseUrl}/point/use`;
    const medq_token = cookie.get("medq_token");
    axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${medq_token}` },
      data: {},
    })
      .then(({ data }) => {
        console.log("point ", user, data.use_point);
        let ablePoint = (user.yearly_point || 0) - (data.use_point || 0);
        ablePoint = ablePoint < 0 ? 0 : ablePoint;
        setMyPoint(ablePoint);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [total]);

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
              <span>사용 가능한 포인트: {commaFormat(myPoint)}P</span>
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
