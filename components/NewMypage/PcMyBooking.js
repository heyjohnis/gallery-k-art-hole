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
    <div className='pc_reser_content'>
      <div className='reservation_select_form'>
        <Form.Select
          aria-label="Default select example"
          name=""
          value=""
        >
          <option value="">기간</option>
          <option value="">1</option>
          <option value="">2</option>
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          name=""
          value=""
        >
          <option value="">서비스구분</option>
          <option value="">골프</option>
          <option value="">스크린</option>
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          name=""
          value=""
        >
          <option value="">예약상태</option>
          <option value="">예약완료</option>
          <option value="">예약중</option>
        </Form.Select>
      </div>
      <section>
        <Accordion>
          <Card>
            <Card.Header>
              <div className='reser_num'>
                <div>
                  <span>예약번호 : <span>1000</span></span>
                  <span className='bar'>|</span>
                  <span>예약일자 : <span>2023. 08 .10</span></span>
                </div>
                <div>
                  <button>예약취소</button>
                </div>
              </div>
              <section className='reser_info'>
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
              {/* TODO: evnetKey 설정해야 함 */}
              <Card.Body>
                <ul className='reser_detail_list'>
                  <li className='reser_detail_items'>
                    <h4>예약자 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>예약자명</span>
                        <span>홍길동</span>
                      </li>
                      <li>
                        <span className='tit'>연락처</span>
                        <span>010 -1234 - 5678</span>
                      </li>
                      <li>
                        <span className='tit'>이메일</span>
                        <span>greengallery1234@galleryk.co.kr</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>이용자 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>이용자명</span>
                        <span>홍길동</span>
                      </li>
                      <li>
                        <span className='tit'>이용자 연락처</span>
                        <span>010 -1234 - 5678</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>골프장 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>희망 날짜</span>
                        <span>2023. 11. 09 </span>
                      </li>
                      <li>
                        <span className='tit'>희망 시간</span>
                        <span>1부</span>
                      </li>
                      <li>
                        <span className='tit'>희망 권역</span>
                        <span>1차 경기남부, 2차 강원영서</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>고객 요청사항</h4>
                    <ul className='reser_detail_info'>
                      <li className='request'>
                        <span className='tit'>내용</span>
                        <span>예약자 변경하고 싶습니다.</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>답변 내용</h4>
                    <ul className='reser_detail_info'>
                      <li className='request'>
                        <span className='tit'>답변</span>
                        <span>이명섭님으로 예약자 변경하였습니다. 1인 그린피 210,000원, 카트피 100,000원입니다. 이명섭님은 수원 2023.11.21 08:20 신in코스 예약 위 내용으로 예약 완료입니다.</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <div className='reser_num'>
                <div>
                  <span>예약번호 : <span>1000</span></span>
                  <span className='bar'>|</span>
                  <span>예약일자 : <span>2023. 08 .10</span></span>
                </div>
                <div>
                  <button>예약취소</button>
                </div>
              </div>
              <section className='reser_info'>
                <div className='reser_info_items'>
                  <div className='thumb_img'>
                    <img src={`/images/mypage/${reservationType.screen}`}/> 
                    {/* TODO: 타입에 따른 썸네일 변경 */}
                  </div>
                  <article>
                    <h3>스크린골프 포인트 사용</h3>
                    <span>담당자 확인중</span> 
                    <span>사용포인트 : <span>1,000,000 P</span></span>
                  </article>
                </div>
                <div className='reser_staus'>
                  <span className={`status`}>예약접수</span>
                  {/* TODO: 예약완료일때만 ${statusComplete} 추가 */}
                  <ContextAwareToggle eventKey="1">
                    <span>상세보기</span>
                    <span className='arr'></span>
                  </ContextAwareToggle>
                </div>
              </section>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className='reser_detail_list'>
                  <li className='reser_detail_items'>
                    <h4>예약자 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>예약자명</span>
                        <span>홍길동</span>
                      </li>
                      <li>
                        <span className='tit'>연락처</span>
                        <span>010 -1234 - 5678</span>
                      </li>
                      <li>
                        <span className='tit'>이메일</span>
                        <span>greengallery1234@galleryk.co.kr</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>이용자 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>이용자명</span>
                        <span>홍길동</span>
                      </li>
                      <li>
                        <span className='tit'>이용자 연락처</span>
                        <span>010 -1234 - 5678</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>골프장 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>희망 날짜</span>
                        <span>2023. 11. 09 </span>
                      </li>
                      <li>
                        <span className='tit'>희망 시간</span>
                        <span>1부</span>
                      </li>
                      <li>
                        <span className='tit'>희망 권역</span>
                        <span>1차 경기남부, 2차 강원영서</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>고객 요청사항</h4>
                    <ul className='reser_detail_info'>
                      <li className='request'>
                        <span className='tit'>내용</span>
                        <span>예약자 변경하고 싶습니다.</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>답변 내용</h4>
                    <ul className='reser_detail_info'>
                      <li className='request'>
                        <span className='tit'>답변</span>
                        <span>이명섭님으로 예약자 변경하였습니다. 1인 그린피 210,000원, 카트피 100,000원입니다. 이명섭님은 수원 2023.11.21 08:20 신in코스 예약 위 내용으로 예약 완료입니다.</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <div className='reser_num'>
                <div>
                  <span>예약번호 : <span>1000</span></span>
                  <span className='bar'>|</span>
                  <span>예약일자 : <span>2023. 08 .10</span></span>
                </div>
                <div>
                  <button>예약취소</button>
                </div>
              </div>
              <section className='reser_info'>
                <div className='reser_info_items'>
                  <div className='thumb_img'>
                    <img src={`/images/mypage/${reservationType.service}`}/> 
                    {/* TODO: 타입에 따른 썸네일 변경 */}
                  </div>
                  <article>
                    <h3>개인 제트기 서비스</h3>
                    <span>예약 진행중</span> 
                    <span>사용포인트 : <span>1,000,000 P</span></span>
                  </article>
                </div>
                <div className='reser_staus'>
                  <span className={`status`}>예약중</span>
                  {/* TODO: 예약완료일때만 ${statusComplete} 추가 */}
                  <ContextAwareToggle eventKey="1">
                    <span>상세보기</span>
                    <span className='arr'></span>
                  </ContextAwareToggle>
                </div>
              </section>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className='reser_detail_list'>
                  <li className='reser_detail_items'>
                    <h4>예약자 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>예약자명</span>
                        <span>홍길동</span>
                      </li>
                      <li>
                        <span className='tit'>연락처</span>
                        <span>010 -1234 - 5678</span>
                      </li>
                      <li>
                        <span className='tit'>이메일</span>
                        <span>greengallery1234@galleryk.co.kr</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>이용자 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>이용자명</span>
                        <span>홍길동</span>
                      </li>
                      <li>
                        <span className='tit'>이용자 연락처</span>
                        <span>010 -1234 - 5678</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>골프장 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>희망 날짜</span>
                        <span>2023. 11. 09 </span>
                      </li>
                      <li>
                        <span className='tit'>희망 시간</span>
                        <span>1부</span>
                      </li>
                      <li>
                        <span className='tit'>희망 권역</span>
                        <span>1차 경기남부, 2차 강원영서</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>고객 요청사항</h4>
                    <ul className='reser_detail_info'>
                      <li className='request'>
                        <span className='tit'>내용</span>
                        <span>예약자 변경하고 싶습니다.</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>답변 내용</h4>
                    <ul className='reser_detail_info'>
                      <li className='request'>
                        <span className='tit'>답변</span>
                        <span>이명섭님으로 예약자 변경하였습니다. 1인 그린피 210,000원, 카트피 100,000원입니다. 이명섭님은 수원 2023.11.21 08:20 신in코스 예약 위 내용으로 예약 완료입니다.</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <div className='reser_num'>
                <div>
                  <span>예약번호 : <span>1000</span></span>
                  <span className='bar'>|</span>
                  <span>예약일자 : <span>2023. 08 .10</span></span>
                </div>
                <div>
                  <button>예약취소</button>
                </div>
              </div>
              <section className='reser_info'>
                <div className='reser_info_items'>
                  <div className='thumb_img'>
                    <img src={`/images/mypage/${reservationType.tour}`}/> 
                    {/* TODO: 타입에 따른 썸네일 변경 */}
                  </div>
                  <article>
                    <h3>일본 북해도 골프&온천</h3>
                    <span>예약취소일 : <span>2023. 11. 19</span></span> 
                    <span>사용포인트 : <span>1,000,000 P</span></span>
                  </article>
                </div>
                <div className='reser_staus'>
                  <span className={`status`}>예약취소</span>
                  {/* TODO: 예약완료일때만 ${statusComplete} 추가 */}
                  <ContextAwareToggle eventKey="1">
                    <span>상세보기</span>
                    <span className='arr'></span>
                  </ContextAwareToggle>
                </div>
              </section>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className='reser_detail_list'>
                  <li className='reser_detail_items'>
                    <h4>예약자 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>예약자명</span>
                        <span>홍길동</span>
                      </li>
                      <li>
                        <span className='tit'>연락처</span>
                        <span>010 -1234 - 5678</span>
                      </li>
                      <li>
                        <span className='tit'>이메일</span>
                        <span>greengallery1234@galleryk.co.kr</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>이용자 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>이용자명</span>
                        <span>홍길동</span>
                      </li>
                      <li>
                        <span className='tit'>이용자 연락처</span>
                        <span>010 -1234 - 5678</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>골프장 정보</h4>
                    <ul className='reser_detail_info'>
                      <li>
                        <span className='tit'>희망 날짜</span>
                        <span>2023. 11. 09 </span>
                      </li>
                      <li>
                        <span className='tit'>희망 시간</span>
                        <span>1부</span>
                      </li>
                      <li>
                        <span className='tit'>희망 권역</span>
                        <span>1차 경기남부, 2차 강원영서</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>고객 요청사항</h4>
                    <ul className='reser_detail_info'>
                      <li className='request'>
                        <span className='tit'>내용</span>
                        <span>예약자 변경하고 싶습니다.</span>
                      </li>
                    </ul>
                  </li>
                  <li className='reser_detail_items'>
                    <h4>답변 내용</h4>
                    <ul className='reser_detail_info'>
                      <li className='request'>
                        <span className='tit'>답변</span>
                        <span>이명섭님으로 예약자 변경하였습니다. 1인 그린피 210,000원, 카트피 100,000원입니다. 이명섭님은 수원 2023.11.21 08:20 신in코스 예약 위 내용으로 예약 완료입니다.</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
      </Accordion>
      </section>
    </div>
  )
}
