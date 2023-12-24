import React from 'react';
import DatePicker from '../Common/DatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';

const GolfBookingForm = () => {
  return (
    <>
      <h1>골프장 예약 서비스</h1>
      <h2>골프장 정보</h2>

      <Form>
        <div className='form_item'>
          <label>날짜 선택</label>
          <DatePicker/>
        </div>

        <div className='form_item'>
          <label>시간 선택</label>
          <div className='item_gruop'>
            <Form.Check
              inline
              label="1부"
              name="group1"
              type="radio"
              id="radio_1"
            />
            <Form.Check
              inline
              label="2부"
              name="group1"
              type="radio"
              id="radio_2"
            />
          </div>
        </div>
        
        <div className='form_item'>
          <label>권역 선택</label>
          <div className='item_group'>
            <Form.Select aria-label="Default select example">
              <option>1차 권역을 선택해 주세요</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option>2차 권역을 선택해 주세요</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <p className='info'>1차 권역 예약이 어려울 시 원하시는 2차 권역을 선택해주시기 바랍니다.</p>
        </div>

        <div className='form_item'>
          <Form.Label>요청사항</Form.Label>
          <Form.Control as="textarea" rows={3}/>
        </div>

      </Form>
        
      <h2>이용자 정보</h2>

        <div className='form_item'>
          <Form.Label>이용자명</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요." />
          <p className='info'>무기명 회원인 경우 예약자명을 기입해주세요.</p>
        </div>

        <div className='form_item'>
          <Form.Label>이용자 연락처</Form.Label>
          <div className='item_group'>
            <Form.Control type="tel" placeholder="010" />
            <Form.Control type="tel" placeholder="1234" />
            <Form.Control type="tel" placeholder="5678" />
          </div>
        </div>

    </>
  )
}

export default GolfBookingForm