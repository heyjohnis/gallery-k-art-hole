import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far, faClock } from '@fortawesome/free-regular-svg-icons';
import React from 'react'


const userLevel = {
  green: "level_green",
  blue:"level_blue",
  red:"level_red",
  purple:"level_purple",
  black:"level_black",
  platinum:"level_platinum",
  female:"gender_female",
  male:"gender_male",
}

export const UserInfo = () => {
  return (
    <div className={userLevel.green}> 
      <section className='user_info'>
        <div className='info_items'>
          <div>
            <h2><span>홍길동</span>님</h2>
            <h3></h3>
          </div>
          <button>회원정보수정</button>
        </div>
        <div class={`user_icon ${userLevel.female}`}></div>
      </section>
      <section className='user_point'>
        <h4>나의 포인트</h4>
        <div className='point'><span>1,234,567,890,000 P</span> P</div>
        <div className='total_point'>
          <span>총 연간 포인트</span>
          <span className='bar'>|</span>
          <span>1,234,567,890,000 P</span>
        </div>
        <button>포인트 이용내역</button>
      </section>
      <section className='use_status'>
        <h4>회원님의 이용현황</h4>
        <ul class="status_list">
          <li>
            <span className='list_tit'>10월 혜택 횟수</span>
            <span className='list_item'>4회 / 7회</span>
          </li>
          <li>
            <span className='list_tit'>11월 혜택 횟수</span>
            <span className='list_item'>6회 / 10회</span>
          </li>
          <li>
            <span className='list_tit'>1분기 혜택 횟수</span>
            <span className='list_item'>4회 / 7회</span>
          </li>
          <li>
            <span className='list_tit'>연간 혜택 횟수</span>
            <span className='list_item'>연 60회 /83회</span>
          </li>
          <li>
            <span className='list_tit'>시작일</span>
            <span className='list_item'>2023년 5월 1일</span>
          </li>
          <li>
            <span className='list_tit'>종료일</span>
            <span className='list_item'>2028년 4월 30일</span>
          </li>
        </ul>
      </section>
      <div className='point_update'><FontAwesomeIcon icon={faClock}/> update  :  2023-11-13-21:00</div>
      <div className='point_notice'><div className='icon'></div>부킹의 경우 두달 전에도 신청이 가능합니다.</div>
      <div className='point_notice'><div className='icon red'></div>현재 제한 횟수를 넘어서 신청중입니다!</div>
    </div>
  )
}
