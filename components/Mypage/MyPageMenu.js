import React from "react";
import Link from "next/link";

const MyPageMenu = () => {
  return (
    <>

      <div className="widget widget_categories">
        <h3 className="widget-title">마이페이지 메뉴</h3>

        <div className="post-wrap">
          <ul>
            <li>
              <Link href="#">
                잔여혜택 및 포인트
              </Link>
            </li>
            <li>
              <Link href="#">
                예약 조회
              </Link>
            </li>
            <li>
              <Link href="#">
                포인트 사용 내역
              </Link>
            </li>
            <li>
              <Link href="#">
                주문/배송조회
              </Link>
            </li>
            <li>
              <Link href="#">
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
