import React, { useState, useEffect } from "react";
import { POST } from "../../hooks/restApi";
import Pagination from "../Pagination";

export default function MyPoint({ user }) {
  const [form, setForm] = useState({});
  const [points, setPoints] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 });

  const getPointData = (currentPage = 1) => {
    POST("/points/paging", {
      ...form,
      currentPage,
      pageSize: 10,
    }).then(({ data }) => {
      console.log(data);
      setPage(data?.pagination || {});
      setPoints(data?.list || []);
    });
  };

  useEffect(() => {
    getPointData();
  }, [form]);

  const statuslabelColor = (item) => {
    return ["03", "07"].includes(item.resv_stts) ||
      ["10", "02"].includes(item.order_status)
      ? "cancel"
      : "pointDeposit";
  };

  return (
    <div className="mypoint_container">
      <h1>포인트 이용내역</h1>
      <article className="complete_title mypoint_tit">
        <img src="/images/mypage/ico_mypoint.png" />
        <h2 className="mypoint_headline">사용 가능 포인트</h2>
        <p className="mypoint_point">
          {(
            (user?.yearly_point || 0) - (user?.use_point || 0)
          ).toLocaleString()}{" "}
          P
        </p>
      </article>
      <section className="mypoint_content">
        <section className="mypoint_info">
          <h3>회원님의 이용현황</h3>
          <ul className="mypoint_info_list">
            <li>
              <span className="tit">총 연간 포인트</span>
              <span className="item">
                {parseInt(user?.yearly_point || 0).toLocaleString()} P
              </span>
            </li>
            {user.monthly_count > 0 && (
              <li>
                <span className="tit">월별 혜택 횟수</span>
                <span className="item">월 {user.monthly_count}회</span>
              </li>
            )}
            {user.quarterly_count > 0 && (
              <li>
                <span className="tit">분기별 혜택 횟수</span>
                <span className="item">월 {user.quarterly_count}회</span>
              </li>
            )}
            {user.half_yearly_count > 0 && (
              <li>
                <span className="tit">반기 혜택 횟수</span>
                <span className="item">월 {user.half_yearly_count}회</span>
              </li>
            )}
            {user.yearly_count && (
              <li>
                <span className="tit">연간 혜택 횟수</span>
                <span className="item">연 {user.yearly_count}회</span>
              </li>
            )}
            <li>
              <span className="tit">시작일</span>
              <span className="item">{user.start_date}</span>
            </li>
            <li>
              <span className="tit">종료일</span>
              <span className="item">{user.end_date}</span>
            </li>
          </ul>
        </section>
        <section className="mypoint_history">
          <h3>포인트 이용내역</h3>
          <ul className="mypoint_history_list">
            {points.map((item, i) => (
              <li key={i}>
                <article className="mypoint_history_items">
                  <span className={`label ${statuslabelColor(item)}`}>
                    {item.resv_status_name || item.order_status_name}
                  </span>
                  <div className="item">
                    <h4>
                      [{item.point_type_name}] {item.pd_name || item.resv_place}
                    </h4>
                    <p>사용일시 : {item.point_date}</p>
                  </div>
                </article>
                <div className="mypoint_history_amount">
                  {((item.point || 0) * -1).toLocaleString()} P
                </div>
              </li>
            ))}
          </ul>
        </section>
        <Pagination pageInfo={page} gotoPage={getPointData} displayPage={10} />
      </section>
    </div>
  );
}
