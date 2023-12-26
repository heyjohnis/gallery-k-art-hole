import React from 'react';
import Form from 'react-bootstrap/Form';
import Table from "react-bootstrap/Table";

export const ScreenBookingAgreement = () => {
  return (
    <div className='agree_content screen'>
      <div className='total_payment'>
        <span>총 결제포인트</span>
        <strong><span>300,000</span> P</strong>
      </div>
      <Form>
        <div className='form_item'>
          <Form.Label>포인트 결제</Form.Label>
          <div className='item_name'>
            <Form.Control type="number" placeholder="100,000" />
          </div>
          <p className='point_status'>사용 가능 포인트 <span>1,000,000,000 P</span></p>
        </div>

        <div className='form_item'>
          <Form.Check
            inline
            label="결제정보를 확인하였으며, 서비스 신청에 동의합니다."
            name="agree"
            type="checkbox"
            id="agree_1"
            required
          />
          <Form.Check
            inline
            label="아래 내용에 모두 동의합니다."
            name="agree"
            type="checkbox"
            id="agree_2"
            required
          />
        </div>
        
        <div className='notice'>
          <h6>유의사항</h6>
          <ul>
            <li>본 서비스는 그린갤러리를 통해 예약을 대행하지 않으므로, 서비스 이용자가 개별적으로 스크린 골프 예약 후 이용하는 서비스 입니다.</li>
            <li>기존 홈페이지 내 Golf Booking에서 스크린골프 이용일과 참여인원을 기재해주시기 바랍니다.</li>
            <li>승인 완료 문자 미수신 또는 승인 거절 시 서비스 이용 불가합니다.</li>
            <li>인당 1회 지원금 25,000원을 지급합니다. (최대 10만원)</li>
          </ul>

          <h6>이용규정</h6>
          <ul>
            <li>사용일 코나카드 미결제 시 스크린 골프 지원금 회수</li>
            <li>예약한 일시에 예약된 스크린 골프장과 다른 스크린 골프장으로 이용가능</li>
            <li>사용 횟수 : 그린, 블루 레드 월 4회 / 퍼플, 블랙, 플레티넘 월 8회</li>
            <li>타업종(스크린 골프장이 아닌 업종) 결제 시 패널티로 지원금의 2배 포인트 차감</li>
          </ul>

          <h6>취소규정ㆍ패널티</h6>
          <Table className='penalty'>
            <thead>
              <tr>
                <th>취소 시기</th>
                <th>포인트</th>
                <th>패널티</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1일 전</td>
                <td>지원금 회수<br/>포인트 차감 없음</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>당일</td>
                <td>지원금 회수<br/>포인트 차감 없음</td>
                <td>스크린 예약 횟수 차감</td>
              </tr>
              <tr>
                <td>취소 미통지</td>
                <td>지원금 회수<br/>포인트 차감 없음</td>
                <td>스크린 예약 횟수 2회 차감</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <button type='submit'>예약신청</button>
      </Form>
    </div>
  )
}
