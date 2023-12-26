import React from 'react'

export const GolfCompleteContent = () => {

	return (
    <>
    <div className='complete_application_container'>
      <span>신청번호 : <span>1000</span></span>
      <span className='bar'>|</span>
      <span>신청일자 : <span>2023. 08 .10</span></span>
    </div>
    <div class="complete_tbl_container">
      <div className='complete_content_tit'>
        <h3>골프장 예약</h3>
        <div class = "complete_status">
          <div className='tit_point'>
            <span>홍길동</span>
            <span className='bar'>|</span>
            <span>010 - 1234 - 5678</span>
          </div>
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
          <span className='items_item'>희망 시간</span>
          <span className='items_detail'>1부</span>
        </div>
        <div className='complete_content_items'> 
          <span className='items_item'>희망 권역</span>
          <span className='items_detail'>1순위 <span>경기남부</span>, 2순위 <span>강원영서</span></span>
        </div>
        <div className='complete_content_items'> 
          <span className='items_item'>기타사항</span>
          <span className='items_detail'>한성CC 선호합니다. 1부 7시 초반 원합니다.</span>
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