import React from 'react'
import Table from "react-bootstrap/Table";

export const GolfCompleteContent = () => {

	return (
    <>
    <div className='complete_application_container'>
      <span>신청번호 : <span>1000</span></span>
      <span className='bar'>|</span>
      <span>신청일자 : <span>2023. 08 .10</span></span>
    </div>
    <div class="complete_tbl_container">
      <Table className='tbl_complete_content'>
        <tbody className='complete_content_tit'>
          <tr>
            <td colSpan={2}><h3>골프장 예약</h3></td>
          </tr>
          <tr>
            <td className='tit_point'>
              <span>홍길동</span>
              <span className='bar'>|</span>
              <span>010 - 1234 - 5678</span>
            </td>
            <td className='tit_status'><span>신청완료</span></td>
          </tr>
          <tr>
            <td colSpan={2} className="content_hr_bottom"></td>
          </tr>
        </tbody>
        <tbody className='complete_content_items'> 
          <tr>
            <td colSpan={2} className='content_padding'></td>
          </tr>
          <tr>
            <td>희망날짜</td>
            <td className='items_detail'><span>2023. 08. 30</span></td>
          </tr>
          <tr>
            <td>희망 시간</td>
            <td className='items_detail'><span>13:00 ~ 15:00</span></td>
          </tr>
          <tr>
            <td>희망 지역</td>
            <td className='items_detail'><span>강원특별자치도</span></td>
          </tr>
          <tr>
            <td>1차 골프장</td>
            <td className='items_detail'><span>강원 더플레이스</span></td>
          </tr>
          <tr>
            <td>2차 골프장</td>
            <td className='items_detail'><span>춘천 제이드팰리스</span></td>
          </tr>
          <tr>
            <td>3차 골프장</td>
            <td className='items_detail'><span>홍천 세이지우드 홍천</span></td>
          </tr>
          <tr>
            <td>기타사항</td>
            <td className='items_detail'>기타 골프장 문의사항을 작성해 주시기 바랍니다.</td>
          </tr>
        </tbody>
      </Table>

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