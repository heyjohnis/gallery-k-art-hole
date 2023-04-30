import Link from "next/link";
import React from "react";

const MyPageSidebar = ({ user }) => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">나의 정보</h3>

          <div className="post-wrap">
            <article className="item">
              <div className="thumb">
                <span className="fullimage cover">BLACK</span>
              </div>

              <div className="info">
                <h4 className="title usmall">{user.user_name}</h4>
                <span>{user.login_id}</span>
              </div>
            </article>
            <Link className="default-btn" href="#">
              나의 계약내역
            </Link>
          </div>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">마이페이지 메뉴</h3>

          <div className="post-wrap">
            <ul>
              <li>
                <Link href="#">잔여혜택 및 포인트</Link>
              </li>
              <li>
                <Link href="#">예약 조회</Link>
              </li>
              <li>
                <Link href="#">포인트 사용 내역</Link>
              </li>
              <li>
                <Link href="#">주문/배송조회</Link>
              </li>
              <li>
                <Link href="#">회원정보 수정</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageSidebar;
