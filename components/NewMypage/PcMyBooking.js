import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { POST } from "../../hooks/restApi";
import { hyphenForPhone } from "../../utils/number";

export default function PcMyBooking() {
  const [form, setForm] = useState({});
  const [reservations, setReservations] = useState([]);

  const getReservationData = () => {
    POST("/mypage/reservation", form).then(({ data }) => {
      console.log("data: ", data);
      setReservations(data || []);
    });
  };

  useEffect(() => {
    getReservationData();
  }, [form]);

  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <button
        type="button"
        className={isCurrentEventKey ? "active" : "none"}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const reservationType = {
    "01": "thumb_golf.png",
    "02": "thumb_screen.png",
    "03": "thumb_service.png",
    "04": "thumb_tour.png",
  };

  return (
    <div className="pc_reser_content">
      <div className="reservation_select_form">
        <Form.Select aria-label="Default select example" name="" value="">
          <option value="">기간</option>
          <option value="">1</option>
          <option value="">2</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" name="" value="">
          <option value="">서비스구분</option>
          <option value="">골프</option>
          <option value="">스크린</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" name="" value="">
          <option value="">예약상태</option>
          <option value="">예약완료</option>
          <option value="">예약중</option>
        </Form.Select>
      </div>
      <section>
        <Accordion>
          {reservations.map((resv, i) => (
            <Card>
              <Card.Header>
                <div className="reser_num">
                  <div>
                    <span>
                      예약번호 : <span>{resv.resv_no}</span>
                    </span>
                    <span className="bar">|</span>
                    <span>
                      예약일자 : <span>{resv.reg_date}</span>
                    </span>
                  </div>
                  <div>
                    <button>예약취소</button>
                  </div>
                </div>
                <section className="reser_info">
                  <div className="reser_info_items">
                    <div className="thumb_img">
                      <img
                        src={`/images/mypage/${
                          reservationType[resv?.resv_kind]
                        }`}
                      />
                      {/* TODO: 타입에 따른 썸네일 변경 */}
                    </div>
                    <article>
                      <h3>골프장 예약 서비스</h3>
                      <span>
                        예약자명 : <span>{resv.user_name}</span>
                      </span>
                      <span>
                        확정골프장 : <span>{resv.resv_place}</span>
                      </span>
                      <span>
                        예약확정일 : <span>{resv.resv_date}</span>
                      </span>
                      <span>
                        사용포인트 : <span>{resv.point}</span>
                      </span>
                    </article>
                  </div>
                  <div className="reser_staus">
                    <span className={`status statusComplete`}>
                      {resv.resv_stts_nm}
                    </span>
                    <ContextAwareToggle eventKey="0">
                      <span>상세보기</span>
                      <span className="arr"></span>
                    </ContextAwareToggle>
                  </div>
                </section>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul className="reser_detail_list">
                    <li className="reser_detail_items">
                      <h4>예약자 정보</h4>
                      <ul className="reser_detail_info">
                        <li>
                          <span className="tit">예약자명</span>
                          <span>{resv.resv_user_name}</span>
                        </li>
                        <li>
                          <span className="tit">연락처</span>
                          <span>{hyphenForPhone(resv.moblie)}</span>
                        </li>
                        <li>
                          <span className="tit">이메일</span>
                          <span>{resv.email}</span>
                        </li>
                      </ul>
                    </li>
                    {resv.option_name && (
                      <li className="reser_detail_items">
                        <h4>이용자1 정보</h4>
                        <ul className="reser_detail_info">
                          <li>
                            <span className="tit">이용자명</span>
                            <span>{resv.option_name}</span>
                          </li>
                          <li>
                            <span className="tit">이용자 연락처</span>
                            <span>{hyphenForPhone(resv.option_phone)}</span>
                          </li>
                        </ul>
                      </li>
                    )}
                    {resv.option_name2 && (
                      <li className="reser_detail_items">
                        <h4>이용자2 정보</h4>
                        <ul className="reser_detail_info">
                          <li>
                            <span className="tit">이용자명</span>
                            <span>{resv.option_name2}</span>
                          </li>
                          <li>
                            <span className="tit">이용자 연락처</span>
                            <span>{hyphenForPhone(resv.option_phone2)}</span>
                          </li>
                        </ul>
                      </li>
                    )}
                    <li className="reser_detail_items">
                      <h4>골프장 정보</h4>
                      <ul className="reser_detail_info">
                        <li>
                          <span className="tit">희망 날짜</span>
                          <span>{resv.hope_date}</span>
                        </li>
                        <li>
                          <span className="tit">희망 시간</span>
                          <span>{resv.hope_time}</span>
                        </li>
                        <li>
                          <span className="tit">희망 권역</span>
                          <span>
                            1차 {resv.hope_local1}, 2차 {resv.hope_local2}
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="reser_detail_items">
                      <h4>고객 요청사항</h4>
                      <ul className="reser_detail_info">
                        <li className="request">
                          <span className="tit">내용</span>
                          <span>
                            <pre>{resv.memo}</pre>
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="reser_detail_items">
                      <h4>답변 내용</h4>
                      <ul className="reser_detail_info">
                        <li className="request">
                          <span className="tit">답변</span>
                          <span>
                            이명섭님으로 예약자 변경하였습니다. 1인 그린피
                            210,000원, 카트피 100,000원입니다. 이명섭님은 수원
                            2023.11.21 08:20 신in코스 예약 위 내용으로 예약
                            완료입니다.
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
