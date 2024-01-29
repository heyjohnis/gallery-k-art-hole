import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function GgShoppingComplete() {
  return (
    <Accordion defaultActiveKey="" className="gg_complete_container">
      <ul>
        <li>
          <Accordion.Item eventKey="0">
            <div className="complete_item">
              <div className="complete_data">
                <span>주문번호 : 1000 </span>
                <span className="bar">ㅣ</span>
                <span>주문일자 : 2023. 08 .10</span>
              </div>
              <section>
                <div className="product_info">
                  <img src="/images/ggshopping/product01.png" />
                  <article>
                    <div>
                      <h3>여성 캐주얼 캐디백</h3>
                      <p>배송비 1,000P 차감</p>
                      <span className="amount">수량 : 1</span>
                    </div>
                    <span className="price">358,200 P</span>
                  </article>
                </div>
                <div className="product_result">
                  <span className="status">신청완료</span>
                  <Accordion.Header className="btn_detail">
                    상세정보
                  </Accordion.Header>
                </div>
              </section>
            </div>
            <Accordion.Body>
              <ul className="purchase_info">
                <li>
                  <span className="item">주문자명</span>
                  <span className="info">홍길동</span>
                </li>
                <li>
                  <span className="item">주문자 연락처</span>
                  <span className="info">010 -1234 - 5678</span>
                </li>
                <li>
                  <span className="item">주문자 이메일</span>
                  <span className="info">greengallery1234@galleryk.co.kr</span>
                </li>
                <li>
                  <span className="item">배송지명</span>
                  <span className="info">홍길동</span>
                </li>
                <li>
                  <span className="item">배송지 연락처</span>
                  <span className="info">010 -1234 - 5678</span>
                </li>
                <li>
                  <span className="item">배송지 주소</span>
                  <span className="info">
                    서울특별시 동대문구 왕산로 16(동진빌딩)
                  </span>
                </li>
              </ul>
              <ul className="price_info">
                <li>
                  <span className="item">상품가</span>
                  <span className="info">1,000,000 P</span>
                </li>
                <li>
                  <span className="item">배송비</span>
                  <span className="info">5,000 P</span>
                </li>
                <li>
                  <span className="item">할인가</span>
                  <span className="strong">500,000 P</span>
                </li>
                <li>
                  <span className="item">총 결제포인트</span>
                  <span className="strong">550,000 P</span>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </li>
        <li>
          <Accordion.Item eventKey="1">
            <div className="complete_item">
              <div className="complete_data">
                <span>주문번호 : 1000 </span>
                <span className="bar">ㅣ</span>
                <span>주문일자 : 2023. 08 .10</span>
              </div>
              <section>
                <div className="product_info">
                  <img src="/images/ggshopping/product02.png" />
                  <article>
                    <div>
                      <h3>여성 캐주얼 캐디백</h3>
                      <p>배송비 1,000P 차감</p>
                      <span className="amount">수량 : 1</span>
                    </div>
                    <span className="price">358,200 P</span>
                  </article>
                </div>
                <div className="product_result">
                  <span className="status">신청완료</span>
                  <Accordion.Header className="btn_detail">
                    상세정보
                  </Accordion.Header>
                </div>
              </section>
            </div>
            <Accordion.Body>
              <ul className="purchase_info">
                <li>
                  <span className="item">주문자명</span>
                  <span className="info">홍길동</span>
                </li>
                <li>
                  <span className="item">주문자 연락처</span>
                  <span className="info">010 -1234 - 5678</span>
                </li>
                <li>
                  <span className="item">주문자 이메일</span>
                  <span className="info">greengallery1234@galleryk.co.kr</span>
                </li>
                <li>
                  <span className="item">배송지명</span>
                  <span className="info">홍길동</span>
                </li>
                <li>
                  <span className="item">배송지 연락처</span>
                  <span className="info">010 -1234 - 5678</span>
                </li>
                <li>
                  <span className="item">배송지 주소</span>
                  <span className="info">
                    서울특별시 동대문구 왕산로 16(동진빌딩)
                  </span>
                </li>
              </ul>
              <ul className="price_info">
                <li>
                  <span className="item">상품가</span>
                  <span className="info">1,000,000 P</span>
                </li>
                <li>
                  <span className="item">배송비</span>
                  <span className="info">5,000 P</span>
                </li>
                <li>
                  <span className="item">할인가</span>
                  <span className="strong">500,000 P</span>
                </li>
                <li>
                  <span className="item">총 결제포인트</span>
                  <span className="strong">550,000 P</span>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </li>
      </ul>
      <button className="purchase_status">주문현황</button>
    </Accordion>
  );
}
