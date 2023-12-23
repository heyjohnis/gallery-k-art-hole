import React from 'react';
import DatePicker from '../Common/DatePicker';

const GolfBookingForm = () => {
  return (
    <>
      <h1>골프장 예약 서비스</h1>
      <h2>골프장 정보</h2>
      <form>
        <div className='form_item'>
          <label>날짜 선택</label>
          <DatePicker/>
        </div>

        <div className='form_item'>
          <label>시간 선택</label>
          <div className='item_gruop'>
            <input type="checkbox"/><label>1부</label>
            <input type="checkbox"/><label>2부</label>
          </div>
        </div>

        <div className='form_item'>
          <label>권역 선택</label>
          <select name="" id="">
            <option value="">1차 권역을 선택해 주세요</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <select name="" id="">
            <option value="">2차 권역을 선택해 주세요 </option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <p className='info'>1차 권역 예약이 어려울 시 원하시는 2차 권역을 선택해주시기 바랍니다.</p>
        </div>

        <div className='form_item'>
          <label>요청사항</label>
          <textarea
            name=""
            cols="30"
            rows="3"
            value=""  
          />
        </div>
      </form>

        
      <h2>이용자 정보</h2>
      <form>
        <label htmlFor="name">이용자명</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="이름"
        />
        <p>무기명 회원인 경우 예약자명을 기입해주세요.</p>


        <label htmlFor="">이용자 연락처</label>
        <input
          type="tel"
          id=""
          name=""
          placeholder="010"
        />
        <span>-</span>
        <input
          type="tel"
          id=""
          name=""
          placeholder="010"
        />
        <span>-</span>
        <input
          type="tel"
          id=""
          name=""
          placeholder="010"
        />

      </form>
    </>
  )
}

export default GolfBookingForm