import React from 'react'

export const MobileMyBookingDetail = () => {

  const complete = "complete";

  return (
    <div className='md_reser_detail_content'>
      <section className='md_reser_detail_head'>
        <div>
          <h2>골프장 예약 서비스</h2>
          <span>예약확정일 : <span>2023. 11. 19</span></span>
        </div>
        <span className={`status ${complete}`}>예약완료</span>
        {/* TODO: 예약완료일때만 complete 추가 */}
      </section>
      <section className='md_reser_detail_body'>
        <h3>예약 정보</h3>
        <ul className='md_reser_detail_list'> 
          <li>
            <span className='tit'>예약번호</span>
            <span className='item'>1000</span>
          </li>
          <li>
            <span className='tit'>예약일자</span>
            <span className='item'>2023. 08. 10</span>
          </li>
          <li>
            <span className='tit'>예약자 성함</span>
            <span className='item'>홍길동</span>
          </li>
          <li>
            <span className='tit'>확정골프장</span>
            <span className='item'>라비에벨 듄스코스</span>
          </li>
          <li>
            <span className='tit'>예약확정일</span>
            <span className='item'>2023. 11. 19 07:30</span>
          </li>
          <li>
            <span className='tit'>사용포인트</span>
            <span className='item'>1,000,000 P</span>
          </li>
          <li>
            <span className='tit'>예약자 연락처</span>
            <span className='item'>010-1234-5678</span>
          </li>
          <li>
            <span className='tit'>예약자 이메일</span>
            <span className='item'>greengallery1234@galleryk.co.kr</span>
          </li>
        </ul>
        <h3>이용자 정보</h3>
        <ul className='md_reser_detail_list'> 
          <li>
            <span className='tit'>이용자 성함</span>
            <span className='item'>홍길동</span>
          </li>
          <li>
            <span className='tit'>이용자 연락처</span>
            <span className='item'>010-1234-5678</span>
          </li>
        </ul>
        <h3>골프장 정보</h3>
        <ul className='md_reser_detail_list'> 
          <li>
            <span className='tit'>희망권역</span>
            <span className='item'>1차 경기남부, 2차 강원영서</span>
          </li>
          <li>
            <span className='tit'>희망날짜</span>
            <span className='item'>2023. 11. 09</span>
          </li>
          <li>
            <span className='tit'>희망시간</span>
            <span className='item'>1부</span>
          </li>
        </ul>
        <h3 className='point'>요청사항</h3>
        <ul className='md_reser_detail_list'> 
          <li>
            <span className='tit'>고객 요청사항</span>
            <span className='item'>예약자 변경하고 싶습니다.</span>
          </li>
          <li>
            <span className='tit'>답변 내용</span>
            <span className='item'>이명섭님으로 예약자 변경하였습니다. 1인 그린피 210,000원, 카트피 100,000원입니다. 이명섭님은 수원 2023.11.21 08:20 신in코스 예약 위 내용으로 예약 완료입니다.</span>
          </li>
        </ul>
      </section>
      <button className='btn_white'>예약취소</button>
    </div>

  )
}
