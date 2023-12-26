import React from 'react'
import Table from "react-bootstrap/Table";

export const ScreenCompleteContent = () => {

	return (
    <>
    <div className='complete_application_container'>
      <span>신청번호 : <span>1000</span></span>
      <span className='bar'>|</span>
      <span>신청일자 : <span>2023. 08 .10</span></span>
    </div>
    <div class="complete_tbl_container">
      <div className='complete_content_tit'>
        <h3>스크린골프 포인트 서비스</h3>
        <div class = "complete_status">
          <div className='tit_point'>300,000 P</div>
          <div className='tit_status'>신청완료</div>
        </div>
        <div className="content_hr_bottom"></div>
      </div>

      <div className='tbl_complete_content'>
        <div className='complete_content_items'> 
          <span className='items_item'>희망날짜</span>
          <span className='items_detail'>2023. 08. 30</span>
        </div>
        <div className='complete_content_items'> 
          <span className='items_item'>인원수</span>
          <span className='items_detail'>3명</span>
        </div>
        <div className='complete_content_items'> 
          <span className='items_item'>주문자명</span>
          <span className='items_detail'>홍길동</span>
        </div>
        <div className='complete_content_items'> 
          <span className='items_item'>연락처</span>
          <span className='items_detail'>010 - 1234 - 5678</span>
        </div>
        <div className='complete_content_items'> 
          <span className='items_item'>이메일</span>
          <span className='items_detail'>greengallery1234@galleryk.co.kr</span>
        </div>
        <div className='complete_content_items'> 
          <span className='items_item'>3차 골프장</span>
          <span className='items_detail'>홍천 세이지우드 홍천</span>
        </div>
        <div className='complete_content_items'> 
          <span className='items_item'>기타사항</span>
          <span className='items_detail'>기타 스크린골프 포인트 서비스 문의사항을 작성해 주시기 바랍니다.</span>
        </div>
      </div>

    </div>
    <button
      type="submit"
      className="complete_btn"
    >
      예약현황
    </button>
  </>
	);
}