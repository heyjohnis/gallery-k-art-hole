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
      <Table className='tbl_complete_content'>
        <tbody className='complete_content_tit'>
          <tr>
            <td colSpan={2}><h3>스크린골프 포인트 서비스</h3></td>
          </tr>
          <tr>
            <td className='tit_point'>300,000 P</td>
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
            <td className='items_detail'><span>2023. 08. 04</span></td>
          </tr>
          <tr>
            <td>인원수</td>
            <td className='items_detail'><span>3명</span></td>
          </tr>
          <tr>
            <td>주문자명</td>
            <td className='items_detail'><span>홍길동</span></td>
          </tr>
          <tr>
            <td>연락처</td>
            <td className='items_detail'><span>010 - 1234 - 5678</span></td>
          </tr>
          <tr>
            <td>이메일</td>
            <td className='items_detail'><span>greengallery1234@galleryk.co.kr</span></td>
          </tr>
          <tr>
            <td>기타사항</td>
            <td className='items_detail'>기타 스크린골프 포인트 서비스 문의사항을 작성해 주시기 바랍니다.</td>
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