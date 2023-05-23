import React from "react";
import Link from "next/link";

// eslint-disable-next-line react/prop-types
const MyPageMenu = ({ menu }) => {
  return (
    <>
      <div className="widget widget_categories">
        <h3 className="widget-title">마이페이지 메뉴</h3>

        <div className="post-wrap">
          <ul className={`sidemenu ${menu}`}>
            {/* <li>
              <Link 
                href="/mypage/membership" 
                className="membership"
              >
                잔여혜택 및 포인트
              </Link>
            </li> */}
            <li>
              <Link href="/mypage/home" className="home">
                홈
              </Link>
            </li>
            <li>
              <Link href="/mypage/contract" className="contract">
                나의 계약
              </Link>
            </li>
            <li>
              <Link href="/mypage/reservation" className="reservation">
                예약 조회
              </Link>
            </li>
            <li>
              <Link href="/mypage/point" className="point">
                포인트 사용 내역
              </Link>
            </li>
            <li>
              <Link href="/mypage/order" className="order">
                주문/배송조회
              </Link>
            </li>
            <li>
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
