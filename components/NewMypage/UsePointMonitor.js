import React from "react";

export default function UsePointMonitor({ user }) {
  const now = new Date();
  const isFirstHalf = now.getMonth() < 6;
  return (
    <>
      {user?.monthly_count > 0 && (
        <>
          <li>
            <span className="list_tit">
              {new Date().getMonth() + 1}월 혜택 횟수
            </span>
            <span className="list_item">
              {" "}
              {(user.monthly_count || 0) - (user.use_monthly_count || 0)}회 /{" "}
              {user.monthly_count}회
            </span>
          </li>

          <li>
            <span className="list_tit">
              {new Date(
                new Date().setMonth(new Date().getMonth() + 1)
              ).getMonth() + 1}
              월 혜택 횟수
            </span>
            <span className="list_item">
              {(user.monthly_count || 0) - (user.use_next_monthly_count || 0)}회
              / {user.monthly_count}회
            </span>
          </li>
        </>
      )}
      {user?.quarterly_count > 0 && (
        <>
          <li>
            <span className="list_tit">
              {Math.ceil(new Date().getMonth() + 1 / 3)}분기 혜택 횟수
            </span>
            <span className="list_item">
              {user.quarterly_count - (user.use_qaurterly_count || 0)}회 /{" "}
              {user.quarterly_count}회
            </span>
          </li>
          <li>
            <span className="list_tit">
              {Math.ceil(new Date().getMonth() + 4 / 3)}분기 혜택 횟수
            </span>
            <span className="list_item">
              {user.quarterly_count - (user.use_next_qaurterly_count || 0)} 회 /{" "}
              {user.quarterly_count}회
            </span>
          </li>
        </>
      )}
      {user?.half_yearly_count > 0 && (
        <>
          <li>
            <span className="list_tit">
              {isFirstHalf ? "상" : "하"}반기 혜택 횟수
            </span>
            <span className="list_item">
              {user.half_yearly_count - (user.use_qaurterly_count || 0)} 회 /{" "}
              {user.half_yearly_count}회
            </span>
          </li>
          <li>
            <span className="list_tit">
              {!isFirstHalf ? "상" : "하"}반기 혜택 횟수
            </span>
            <span className="list_item">
              {user.half_yearly_count - (user.use_next_qaurterly_count || 0)} 회
              / {user.half_yearly_count}회
            </span>
          </li>
        </>
      )}
      <li>
        <span className="list_tit">연간 혜택 횟수</span>
        <span className="list_item">
          연{" "}
          {(user.yearly_count || user.monthly_count * 12) -
            user.use_yearly_count}
          회 /{user.yearly_count || user.monthly_count * 12}회
        </span>
      </li>
    </>
  );
}
