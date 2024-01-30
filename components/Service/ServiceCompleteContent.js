import React from "react";

export const ServiceCompleteContent = () => {
  return (
    <>
      <div className="complete_application_container">
        <span>
          신청번호 : <span>1000</span>
        </span>
        <span className="bar">|</span>
        <span>
          신청일자 : <span>2023. 08 .10</span>
        </span>
      </div>
      <div className="complete_tbl_container">
        <div className="complete_content_tit">
          <h3>제주 스위트룸 이용권</h3>
          <div className="complete_status">
            <div className="tit_point">2023. 08. 14</div>
            <div className="tit_status">신청완료</div>
          </div>
          <div className="content_hr_bottom"></div>
        </div>

        <div className="tbl_complete_content">
          <div className="complete_content_items">
            <span className="items_item">연박수</span>
            <span className="items_detail">2박</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">인원수</span>
            <span className="items_detail">3명</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">시설 주소</span>
            <span className="items_detail">
              제주특별자치도 제주시 삼무로 50(연동) 제주 에어시티 호텔
            </span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">희망 출발일</span>
            <span className="items_detail">2023. 10. 19</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">희망 도착일</span>
            <span className="items_detail">2023. 10 23</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">이용자명</span>
            <span className="items_detail">홍길동</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">이용자 연락처</span>
            <span className="items_detail">010 -1234 - 5678</span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">이용자 이메일</span>
            <span className="items_detail">
              greengallery1234@galleryk.co.kr
            </span>
          </div>
          <div className="complete_content_items">
            <span className="items_item">요청사항</span>
            <span className="items_detail">
              <pre>
                기타 스크린골프 포인트 서비스 문의사항을 작성해 주시기 바랍니다.
              </pre>
            </span>
          </div>

          <div className="total_points">
            <div className="complete_content_items">
              <span className="items_item">상품가</span>
              <span className="items_detail">150,000 P</span>
            </div>
            <div className="complete_content_items">
              <span className="items_item">추가포인트</span>
              <span className="items_detail">150,000 P</span>
            </div>
            <div className="complete_content_items">
              <span className="items_item">총 결제포인트</span>
              <span className="items_detail strong">300,000 P</span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="complete_btn"
        onClick={() => router.push("/mypage?service=reservation")}
      >
        예약현황
      </button>
    </>
  );
};
