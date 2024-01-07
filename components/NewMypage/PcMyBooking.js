import React from 'react'
import Form from "react-bootstrap/Form";
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

export const PcMyBooking = () => {

  const active = 'active';
  const none = 'none';

  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
    const isCurrentEventKey = activeEventKey === eventKey;  
    return (
      <button
        type="button"
        className={isCurrentEventKey ? active : none }
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const reservationType = {
    golf : "thumb_golf.png",
    screen : "thumb_screen.png",
    service : "thumb_service.png",
    tour: "thumb_tour.png",
  }
  const statusComplete = "complete"; 

  return (
    <>
      <div className='reservation_select_form'>
        <Form.Select
          aria-label="Default select example"
          name=""
          value=""
        >
          <option value="">선택하세요</option>
          <option value="">선택하세요</option>
          <option value="">선택하세요</option>
        </Form.Select>
      </div>
      <section>
        <Accordion>
          <Card>
            <Card.Header>
              <div className='reser_info'>
                <div>
                  <span>예약번호 : <span>1000</span></span>
                  <span className='bar'>|</span>
                  <span>예약일자 : <span>2023. 08 .10</span></span>
                </div>
                <div>
                  <button>예약취소</button>
                </div>
              </div>
              <section className='reser_detail'>
                <div className='reser_info_items'>
                  <div className='thumb_img'>
                    <img src={`/images/mypage/${reservationType.golf}`}/> 
                    {/* TODO: 타입에 따른 썸네일 변경 */}
                  </div>
                  <article>
                    <h3>골프장 예약 서비스</h3>
                    <span>예약자명 : <span>홍길동</span></span> 
                    <span>확정골프장 : <span>라비에벨 듄스코스</span></span>
                    <span>예약확정일 : <span>2023. 11. 19</span></span>
                    <span>사용포인트 : <span>1,000,000 P</span></span>
                  </article>
                </div>
                <div className='reser_staus'>
                  <span className={`status ${statusComplete}`}>예약완료</span>
                  {/* TODO: 예약완료일때만 ${statusComplete} 추가 */}
                  <ContextAwareToggle eventKey="0">
                    <span>상세보기</span>
                    <span className='arr'></span>
                  </ContextAwareToggle>
                </div>
              </section>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I am the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I am another body</Card.Body>
            </Accordion.Collapse>
          </Card>
      </Accordion>
      </section>
    </>
  )
}
