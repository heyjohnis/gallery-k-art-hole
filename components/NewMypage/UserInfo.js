import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far, faClock } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect } from "react";
import { commaFormat } from "../../utils/number";
import UsePointMonitor from "./UsePointMonitor";

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
  const identity = {
    president: "president",
    nobless: "nobless",
    elite: "elite",
  };
  useEffect(() => {
    console.log("UserInfo: ", user);
  }, [user]);

  return (
    <div className={userLevel[user?.membership || "green"]}>
      <div className={`mypage_identity ${identity.president}`}>
        {/* TODO: 사용자 계정에 따라 class 추가 */}
        <span>
          {user.service_group === "01"
            ? "President K"
            : user.service_group === "02"
            ? "Noblesse K"
            : "Elite K"}
        </span>
      </div>
      <section className="user_info">
        <div className="info_items">
          <div>
            <h2>
              <span>{user?.user_name}</span>님
            </h2>
            <h3></h3>
          </div>
          <button onClick={() => gotoMypageService("userInfo")}>
            회원정보수정
          </button>
        </div>
        <div className={`user_icon ${userLevel[user?.gender || "male"]}`}></div>
        {/* TODO: 성별 프로필 이미지 변경 */}
      </section>
      <section className="user_point">
        <h4>나의 포인트</h4>
        <div className="point">
          <span>{commaFormat(user?.yearly_point - user?.use_point)}</span> P
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
        <ul className="status_list">
          <UsePointMonitor user={user} />
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
      {/* <div className="point_notice red">
        <div className="icon"></div>현재 제한 횟수를 넘어서 신청중입니다!
      </div> */}
    </div>
  );
};
