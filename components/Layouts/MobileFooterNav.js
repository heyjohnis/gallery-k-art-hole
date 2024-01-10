import React from "react";
import Link from "next/link";
import styles from "./navbar.mobile.module.scss";

const MobileFooterNav = ({ service }) => {
  const currentYear = new Date().getFullYear();

  const preparingAlert = (e) => {
    e.preventDefault();
    alert("현재 서비스를 준비중입니다.");
  };

  return (
    <>
      <div
        className={`footer-top-area pt-100 pb-70 footer ${styles.mobileFooterNav}`}
      >
        <ul>
          <li>
            <Link href="/mypage?service=home">
              <img
                src={`/images/mobile/home_${
                  service === "home" ? "black" : "gray"
                }.png`}
                alt="home"
              />
              <span>HOME</span>
            </Link>
          </li>
          <li>
            <Link href="/mypage?service=reservation">
              <img
                src={`/images/mobile/nav_reserve_${
                  service === "reservation" ? "black" : "gray"
                }.png`}
                alt="reserve"
              />
              <span>예약조회</span>
            </Link>
          </li>
          <li>
            <Link href="/mypage?service=order">
              <img
                src={`/images/mobile/nav_order_${
                  service === "order" ? "black" : "gray"
                }.png`}
                alt="order"
              />
              <span>주문배송</span>
            </Link>
          </li>
          <li>
            <Link href={"#"} onClick={() => alert("준비중입니다.")}>
              <img
                src={`/images/mobile/nav_customer_${
                  service === "consult" ? "black" : "gray"
                }.png`}
                alt="customer"
              />
              <span>1:1 상담</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileFooterNav;
