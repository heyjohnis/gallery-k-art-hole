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
          <p className='info'>1차 권역 예약이 어려울 시 원하시는 2차 권역을 선택해주시기 바랍니다.</p>
        </div>
        <div className='form_item'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>
      </Form>
        
      <h2>이용자 정보</h2>
      
    </>
  )
}

export default GolfBookingForm