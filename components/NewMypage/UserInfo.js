import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far, faClock } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect } from "react";
import { commaFormat } from "../../utils/number";

const userLevel = {
  green: "level_green",
  blue: "level_blue",
  red: "level_red",
  purple: "level_purple",
  black: "level_black",
  platinum: "level_platinum",
  female: "gender_female",
  male: "gender_male",
};

export const UserInfo = ({ user, gotoMypageService }) => {
  useEffect(() => {
    console.log("UserInfo: ", user);
  }, [user]);
  return (
    <div className={userLevel[user.membership || "green"]}>
      <section className="user_info">
        <div className="info_items">
          <div>
            <h2>
              <span>{user.user_name}</span>님
            </h2>
            <h3></h3>
          </div>
          <button onClick={() => gotoMypageService("userInfo")}>
            회원정보수정
          </button>
        </div>
        <div class={`user_icon ${userLevel[user?.gender || "male"]}`}></div>
        {/* TODO: 성별 프로필 이미지 변경 */}
      </section>
      <section className="user_point">
        <h4>나의 포인트</h4>
        <div className="point">
          <span></span> P
        </div>
        <div className="total_point">
          <span>총 연간 포인트</span>
          <span className="bar">|</span>
          <span>{commaFormat(user?.yearly_point)} P</span>
        </div>
        <button onClick={() => gotoMypageService("point")}>
          포인트 이용내역
        </button>
      </section>
      <section className="use_status">
        <h4>회원님의 이용현황</h4>
        <ul class="status_list">
          {!user.quartly_count && (
            <>
              <li>
                <span className="list_tit">
                  {new Date().getMonth() + 1}월 혜택 횟수
                </span>
                <span className="list_item">
                  {" "}
                  {user.monthly_count || 0 - user.use_monthly_count || 0}회 /{" "}
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
                  {user.monthly_count || 0 - user.use_next_monthly_count || 0}회
                  / {user.monthly_count}회
                </span>
              </li>
            </>
          )}
          <li>
            <span className="list_tit">
              {Math.ceil(new Date().getMonth() + 1 / 3)}분기 혜택 횟수
            </span>
            <span className="list_item">
              {(user.quartly_count || user.monthly_count * 3) -
                user.use_qaurterly_count}{" "}
              회 / {user.quartly_count || user.monthly_count * 3}회
            </span>
          </li>
          <li>
            <span className="list_tit">연간 혜택 횟수</span>
            <span className="list_item">
              연{" "}
              {(user.yearly_count || user.monthly_count * 12) -
                user.use_yearly_count}
              회 /{user.yearly_count || user.monthly_count * 12}회
            </span>
          </li>
          <li>
            <span className="list_tit">시작일</span>
            <span className="list_item">{user.start_date}</span>
          </li>
          <li>
            <span className="list_tit">종료일</span>
            <span className="list_item">{user.end_date}</span>
          </li>
        </ul>
      </section>
      <div className="point_update">
        <FontAwesomeIcon icon={faClock} /> update : {user.update_date}
      </div>
      <div className="point_notice">
        <div className="icon"></div>부킹의 경우 두달 전에도 신청이 가능합니다.
      </div>
      <div className="point_notice red">
        <div className="icon"></div>현재 제한 횟수를 넘어서 신청중입니다!
      </div>
    </div>
  );
};
