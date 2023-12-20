import React from 'react'
import { CompleteContents } from '../Common/CompleteContents';
import Table from "react-bootstrap/Table";

export const ScreenCompleteContent = () => {
  const complete = {
    title : '제주 스위트룸 이용권',
    date : '2023. 08. 14',
    status: '신청완료',
  }
	
  const person = [
		["희망날짜", "2023. 08. 04"], 
		["인원수", "3명"],
		["주문자명", "홍길동"],
    ["연락처", "010 -1234 - 5678"],
    ["이메일", "greengallery1234@galleryk.co.kr"],
    ["기타사항", "기타 스크린골프 포인트 서비스 문의사항을 작성해 주시기 바랍니다."]
	]

  const tableList = person.map((i) => (<CompleteContents item={i[0]} info={i[1]}/>));

	return (
    <div>
    <Table>
      <tbody>
        <tr>
          <td colSpan={2}>{complete.title}</td>
        </tr>
        <tr>
          <td>{complete.date}</td>
          <td>{complete.status}</td>
        </tr>
      </tbody>
      <tbody> 
        {tableList}
      </tbody>
		</Table>
    <button
      type="submit"
      className="default-btn btn-two"
    >
      예약현황
    </button>
    </div>
	);
}