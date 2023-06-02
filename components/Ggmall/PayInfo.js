/* eslint-disable no-undef */
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./Ggmall.module.scss";
import baseUrl from "../../utils/baseUrl";
import { commaFormat } from "../../utils/number";

const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "성공",
    text: "결제가 완료되었습니다.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const PayInfo = ({ user, total, buyProduct }) => {
  const [point, setPoint] = useState(0);
  // const payNow = () => {
  //   console.log("payNow: ", total);
  //   url = `${baseUrl}/mall/buy`;
  //   axios({ method: "post", url })
  //     .then(({ data }) => {
  //       console.log("data: ", data);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  const onClickHandler = () => {
    buyProduct();
  };

  return (
    <>
      <section>
        <div className={styles.pay_warp}>
          <div className={styles.pay_group}>
            <h2>결제정보</h2>
            <div className={styles.info_wrap}>
              <span className={styles.tit}>총 결제금액: </span>
              <span className={styles.tit}>
                {commaFormat(total)}
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
              <input type="number" name="point" className="form-control" />
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
            <div
              onClick={onClickHandler}
              className={`default-btn ${styles.btn_buy}`}
            >
              구매하기
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayInfo;
