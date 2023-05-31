import Link from "next/link";
import React from "react";
import styles from "./Ggmall.module.scss";

const PayInfo = () => {
  return (
    <>
      <section>
        <div className={styles.pay_warp}>
          <div className={styles.pay_group}>
            <h2>결제정보</h2>
            <div className={styles.info_wrap}>
              <span className={styles.tit}>총 결제금액:</span>
              <span className={styles.tit}>
                10000<span>P</span>
              </span>
            </div>
          </div>
          <div className={styles.pay_group}>
            <h2>결제수단</h2>
            <div className="radio">
              <label className="custom">
                <span>포인트결제</span>
                <input type="radio" name="user_kind" value="01" />
                <span className="checkmark"></span>
              </label>

              <label className="custom ml-30">
                <span>카드결제</span>
                <input type="radio" name="user_kind" value="02" />
                <span className="checkmark"></span>
              </label>
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
            <Link href="#" className={`default-btn ${styles.btn_buy}`}>
              구매하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayInfo;
