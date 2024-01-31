import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";

export default function OrderListComp({ orderData, cancelOrder }) {
  console.log("OrderListComp orderData: ", orderData);

  return (
    <Accordion defaultActiveKey="" className="gg_complete_container">
      <ul>
        {orderData.map((product) => (
          <li key={product.item_no}>
            <Accordion.Item eventKey="0">
              <div className="complete_item">
                <div className="complete_data">
                  <span>주문번호 : {product.order_no} </span>
                  <span className="bar">ㅣ</span>
                  <span>주문일자 : {product.order_date}</span>
                </div>
                {["01", "09"].includes(product.order_status) && (
                  <div onClick={() => cancelOrder(product.item_no)}>
                    신청취소
                  </div>
                )}
                <section>
                  <div className="product_info">
                    <Image
                      src={product.thumb_img}
                      width={180}
                      height={180}
                      alt={product.pd_name}
                    />
                    <article>
                      <div>
                        <h3>여성 캐주얼 캐디백</h3>
                        <p>배송비 {product.delivery_fee} P 차감</p>
                        <span className="amount">
                          수량 : {product.quantity}
                        </span>
                      </div>
                      <span className="price">
                        {product?.price?.toLocaleString()} P
                      </span>
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
                    <span className="info">{product.order_user_name}</span>
                  </li>
                  <li>
                    <span className="item">주문자 연락처</span>
                    <span className="info">{product.order_user_phone}</span>
                  </li>
                  <li>
                    <span className="item">주문자 이메일</span>
                    <span className="info">{product.order_user_email}</span>
                  </li>
                  <li>
                    <span className="item">배송지명</span>
                    <span className="info">{product.delivery_user_name}</span>
                  </li>
                  <li>
                    <span className="item">배송지 연락처</span>
                    <span className="info">{product.delivery_phone}</span>
                  </li>
                  <li>
                    <span className="item">배송지 주소</span>
                    <span className="info">
                      {product.delivery_addr1} {product.delivery_addr2}
                    </span>
                  </li>
                </ul>
                <ul className="price_info">
                  <li>
                    <span className="item">상품가</span>
                    <span className="info">
                      {product?.origin_price?.toLocaleString()} P
                    </span>
                  </li>
                  <li>
                    <span className="item">배송비</span>
                    <span className="info">
                      {product?.delivery_fee?.toLocaleString()} P
                    </span>
                  </li>
                  <li>
                    <span className="item">할인가</span>
                    <span className="strong">
                      {(
                        product?.origin_price - product?.price
                      ).toLocaleString()}{" "}
                      P
                    </span>
                  </li>
                  <li>
                    <span className="item">총 결제포인트</span>
                    <span className="strong">
                      {product?.price?.toLocaleString()} P
                    </span>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </li>
        ))}
      </ul>
    </Accordion>
  );
}
