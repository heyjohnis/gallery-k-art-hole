import React from 'react';

export default function MyContract() {
  return (
    <div className='mypage_content_item'>
      <h2>나의 계약</h2>
      <div className='contract_content'>
        <div className='contract_info'>
          <div className='membership_tit'>멤버쉽</div>
          <div className='membership_name'>
            <span>Vincent Van Gogh</span>
            <span className='bigger'>Green</span>
          </div>
          <button>멤버십 혜택 안내</button>
        </div>
        <ul className='contract_list'>
          <li>
            <span className='list_tit'>계약기간</span>
            <span className='list_item'>5년</span>
          </li>
          <li>
            <span className='list_tit'>고객유형</span>
            <span className='list_item'>법인</span>
          </li>
          <li>
            <span className='list_tit'>사업자명</span>
            <span className='list_item'>주식회사 그린갤러리</span>
          </li>
          <li>
            <span className='list_tit'>사업자번호</span>
            <span className='list_item'>123-11-45678</span>
          </li>
          <li>
            <span className='list_tit'>담당딜러</span>
            <span className='list_item'>홍길동(ad0005)</span>
          </li>
          <li>
            <span className='list_tit'>계약일</span>
            <span className='list_item'>2023년 4월 24일</span>
          </li>
          <li>
            <span className='list_tit'>이용기간</span>
            <span className='list_item'>2023년 5월 1일 ~ 2028년 4월 30일</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
