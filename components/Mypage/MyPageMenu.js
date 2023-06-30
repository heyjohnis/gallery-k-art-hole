import React from "react";
import Link from "next/link";
import styles from "./Mypage.module.scss";

// eslint-disable-next-line react/prop-types
const MyPageMenu = ({ menu }) => {
  return (
    <>
      <div className="widget widget_categories">
        <h3 className="widget-title">마이페이지 메뉴</h3>

        <div className="post-wrap">
          <ul className={`sidemenu ${menu} ${styles.menu}`}>
            <li>
              <Link href="/mypage/home" className="home">
                <div className={`icon ${styles.icon}`}>
                  <img src="/images/mobile/nav_home.png" alt="홈" />
                </div>
                홈
              </Link>
            </li>
            <li>
              <Link href="/mypage/contract" className="contract">
                <div className={`icon ${styles.icon}`}>
                  <img src="/images/mobile/nav_contract.png" alt="계약" />
                </div>
                나의 계약
              </Link>
            </li>
            <li>
              <Link href="/mypage/reservation" className="reservation">
                <div className={`icon ${styles.icon}`}>
                  <img src="/images/mobile/nav_reserve.png" alt="예약" />
                </div>
                예약 조회
              </Link>
            </li>
            <li>
              <Link href="/mypage/point" className="point">
                <div className={`icon ${styles.icon}`}>
                  <img src="/images/mobile/nav_point.png" alt="포인트" />
                </div>
                포인트 내역
              </Link>
            </li>
            <li>
              <Link href="/mypage/order" className="order">
                <div className={`icon ${styles.icon}`}>
                  <img src="/images/mobile/nav_order.png" alt="주문/배송" />
                </div>
                주문/배송조회
              </Link>
            </li>
            <li className="myinfo_update">
              <Link href="/mypage/update" className="update">
                회원정보 수정
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyPageMenu;
