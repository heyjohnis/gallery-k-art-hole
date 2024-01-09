import React from "react";
import Link from "next/link";
import styles from "./navbar.mobile.module.scss";

const MobileFooterNav = () => {
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
            <Link href="/m">
              <img src="/images/mobile/home_black.png" alt="home" />
              <span>HOME</span>
            </Link>
          </li>
          <li>
            <Link href="/mypage">
              <img src="/images/mobile/nav_reserve_gray.png" alt="reserve" />
              <span>예약조회</span>
            </Link>
          </li>
          <li>
            <Link href="/mypage">
              <img src="/images/mobile/nav_order_gray.png" alt="order" />
              <span>주문배송</span>
            </Link>
          </li>
          <li>
            <Link href="/" onClick={preparingAlert}>
              <img src="/images/mobile/nav_customer_gray.png" alt="customer" />
              <span>1:1 상담</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileFooterNav;
