import React from "react";
import { hyphenForCorpNum } from "../../utils/number";

export default function MyContract({ user }) {
  return (
    <div className="mypage_content_item">
      <h2>나의 계약</h2>
      <div className="contract_content">
        <div className="contract_info">
          <div className="membership_tit">멤버쉽</div>
          <div className="membership_name">
            <span>Vincent Van Gogh</span>
            <span className="bigger">Green</span>
          </div>
          <button>멤버십 혜택 안내</button>
        </div>
        <ul className="contract_list">
          <li>
            <span className="list_tit">계약기간</span>
            <span className="list_item">{user.service_year_term}년</span>
          </li>

          <li>
            <span className="list_tit">고객유형</span>
            <span className="list_item">
              {user.user_kind === "01" ? "개인" : "사업자"}
            </span>
          </li>
          {user.user_kind === "02" && (
            <>
              <li>
                <span className="list_tit">사업자명</span>
                <span className="list_item">{user.corp_name}</span>
              </li>
              <li>
                <span className="list_tit">사업자번호</span>
                <span className="list_item">
                  {hyphenForCorpNum(user.corp_ssn)}
                </span>
              </li>
            </>
          )}
          {user.dlr_cd && (
            <li>
              <span className="list_tit">담당딜러</span>
              <span className="list_item">
                {user.dlr_nm}({user.dlr_cd})
              </span>
            </li>
          )}
          <li>
            <span className="list_tit">계약일</span>
            <span className="list_item">{user.contract_date}</span>
          </li>
          <li>
            <span className="list_tit">이용기간</span>
            <span className="list_item">
              {user.start_date} ~ {user.end_date}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
