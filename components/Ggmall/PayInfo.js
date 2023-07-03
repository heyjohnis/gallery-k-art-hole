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
  delivery_fee: 0,
  product_price: 0,
  use_point: 0,
  total_price: 0,
  pay_money: 0,
  my_point: 0,
};

const PayInfo = ({ user, product, total, buyProduct }) => {
  const [point, setPoint] = useState(0);
  const [payInfo, setPayInfo] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  const changeUsePoint = (e) => {
    const { name, value } = e.target;
    console.log("name: ", name, "value: ", value);
    if (
      payInfo.my_point >= value &&
      payInfo.total_price >= value &&
      value >= 0
    ) {
      setPayInfo((prevState) => ({
        ...prevState,
        [name]: value,
        pay_money: payInfo.total_price - value,
      }));
    }
  };

  const changeAgree = () => {
    setIsAgree(!isAgree);
  };

  const buyNow = () => {
    if (!isAgree) {
      alert("구매 동의에 체크해주세요.");
      return;
    }
    if (payInfo.pay_money !== 0) {
      const { IMP } = window;
      IMP.init("imp47778223");
      const data = {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: `mid_${new Date().getTime()}`,
        amount: payInfo.pay_money,
        name: product.pd_name,
        buyer_name: user.user_name,
        buyer_tel: user.mobile,
        buyer_email: user.email,
        order_status: product.pd_type === "01" ? "01" : "09",
      };
      IMP.request_pay(data, callback);
    } else {
      buyProduct(payInfo);
    }
  };

  const callback = (response) => {
    const { success, error_msg } = response;
    console.log("response: ", response);
    if (success) {
      buyProduct({ ...payInfo, ...response });
    } else {
      alert(`결제에 실패하였습니다.\n${error_msg}`);
    }
  };

  const setPayPoint = (point) => {
    const totalPrice = total + (product.delivery_fee || 0);
    const payPoint = totalPrice > point ? point : totalPrice;
    setPayInfo((prevState) => ({
      ...prevState,
      total_price: totalPrice,
      my_point: point,
      use_point: payPoint,
      pay_money: totalPrice - payPoint,
    }));
  };

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
        setPayPoint(ablePoint);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [total]);

  // [1] 결제 모듈을 사용하기 위해 jquery와 iamport.payment를 불러온다.
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  return (
    <>
      <section className="mb-5">
        <div className={styles.pay_warp}>
          <div className={styles.pay_group}>
            <h2>결제정보</h2>
            <div className={styles.info_wrap}>
              <span className={styles.tit}>총 결제포인트: </span>
              <span className={styles.tit}>
                {commaFormat(payInfo.total_price)}
                <span>P</span>
              </span>
            </div>
          </div>
          <div className={styles.pay_group}>
            <h2>포인트결제</h2>
            <input
              type="text"
              name="use_point"
              className="form-control"
              value={payInfo.use_point}
              onChange={changeUsePoint}
            />
            <span>사용 가능한 포인트: {commaFormat(payInfo.my_point)}P</span>
          </div>
          {payInfo.pay_money > 0 && (
            <div className={styles.pay_group}>
              <h2>카드결제</h2>
              <span>{payInfo.pay_money.toLocaleString()}원</span>
            </div>
          )}

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
            <input
              type="checkbox"
              id="agree1"
              className="form-check-input"
              checked={isAgree}
              onChange={changeAgree}
            />
            <label htmlFor="agree1" className={styles.agree}>
              결제정보를 확인하였으며, 구매 및 계약진행에 동의합니다.
            </label>
          </div>

          <div className={styles.btn_warp}>
            <Link href="#" className={`default-btn ${styles.btn_round}`}>
              취소하기
            </Link>
            <div onClick={buyNow} className={`default-btn ${styles.btn_buy}`}>
              {product.pd_type === "01" ? "구매하기" : "신청하기"}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayInfo;
