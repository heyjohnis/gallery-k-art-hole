import Link from 'next/link';
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export const MobileMyBooking = () => {

  const reservationLabel = {
    golf : "golf",
    screen : "screen",
    service : "service",
    tour: "tour",
  }
  const complete = "complete";

  return (
    <div className='mb_reser_content'>
      <h2>예약조회</h2>
      <section className='mb_reser_filter'>
        <ToggleButtonGroup type="radio" name="period" defaultValue={1}>
          <ToggleButton id="period-radio-1" value={1} className="btn_filter">
            전체
          </ToggleButton>
          <ToggleButton id="period-radio-2" value={2} className="btn_filter">
            1달
          </ToggleButton>
          <ToggleButton id="period-radio-3" value={3} className="btn_filter">
            3달
          </ToggleButton>
          <ToggleButton id="period-radio-4" value={4} className="btn_filter">
            1년
          </ToggleButton>
          <ToggleButton id="period-radio-5" value={5} className="btn_filter">
            3년
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup type="radio" name="types" defaultValue={1}>
          <ToggleButton id="types-radio-1" value={1} className="btn_filter">
            전체
          </ToggleButton>
          <ToggleButton id="types-radio-2" value={2} className="btn_filter">
            골프장 예약 서비스
          </ToggleButton>
          <ToggleButton id="types-radio-3" value={3} className="btn_filter">
            스크린골프 포인트 서비스
          </ToggleButton>
          <ToggleButton id="types-radio-4" value={4} className="btn_filter">
            제휴서비스
          </ToggleButton>
          <ToggleButton id="types-radio-5" value={5} className="btn_filter">
            GG투어
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup type="radio" name="status" defaultValue={1}>
          <ToggleButton id="status-radio-1" value={1} className="btn_filter">
            전체
          </ToggleButton>
          <ToggleButton id="status-radio-2" value={2} className="btn_filter">
            예약접수
          </ToggleButton>
          <ToggleButton id="status-radio-3" value={3} className="btn_filter">
            예약중
          </ToggleButton>
          <ToggleButton id="status-radio-4" value={4} className="btn_filter">
            예약완료
          </ToggleButton>
          <ToggleButton id="status-radio-5" value={5} className="btn_filter">
            예약취소
          </ToggleButton>
        </ToggleButtonGroup>
      </section>
      <section className='reser_content_list'>
        <ul className='reser_list'>
          <li>
            <Link href="#">
            <h3>골프장 예약 서비스</h3>
            <span>예약확정일 : <span>2023. 11. 19</span></span>
            <div className='reser_type_info'>
              <span className={`label ${reservationLabel.golf}`}></span>
              {/* TODO: 예약 타입에 따라 className 변경 */}
              <button className={`status ${complete}`}>예약완료</button>
              {/* TODO: 예약완료일때만 complete 추가 */}
            </div>
            </Link>
          </li>
          <li>
            <Link href="#">
            <h3>골프장 예약 서비스</h3>
            <span>담당자 확인중</span>
            <div className='reser_type_info'>
              <span className={`label ${reservationLabel.screen}`}></span>
              {/* TODO: 예약 타입에 따라 className 변경 */}
              <button className={`status`}>예약접수</button>
              {/* TODO: 예약완료일때만 complete 추가 */}
            </div>
            </Link>
          </li>
          <li>
            <Link href="#">
            <h3>개인 제트기 서비스</h3>
            <span>예약 진행중</span>
            <div className='reser_type_info'>
              <span className={`label ${reservationLabel.service}`}></span>
              {/* TODO: 예약 타입에 따라 className 변경 */}
              <button className={`status`}>예약중</button>
              {/* TODO: 예약완료일때만 complete 추가 */}
            </div>
            </Link>
          </li>
          <li>
            <Link href="#">
            <h3>일본 북해도 골프&온천</h3>
            <span>예약취소일 : <span>2023. 11. 19</span></span>
            <div className='reser_type_info'>
              <span className={`label ${reservationLabel.tour}`}></span>
              {/* TODO: 예약 타입에 따라 className 변경 */}
              <button className={`status`}>예약취소</button>
              {/* TODO: 예약완료일때만 complete 추가 */}
            </div>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
