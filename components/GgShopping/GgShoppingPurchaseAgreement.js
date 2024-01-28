import React from "react";
import Form from "react-bootstrap/Form";

export const GgShoppingPurchaseAgreement = () => {
  return (
    <div className="agree_content screen">
      <div className="price_content">
        <div className="price_items">
          <span className="item">상품가</span>
          <span className="price">1,000,000 P</span>
        </div>
        <div className="price_items">
          <span className="item">배송비</span>
          <span className="price">+ 5,000 P</span>
        </div>
        <div className="price_items">
          <span className="item">할인가</span>
          <span className="price">- 500,000 P</span>
        </div>
      </div>
      <div className="total_payment">
        <span>총 결제포인트</span>
        <strong>
          <span>550,000</span> P
        </strong>
      </div>
      <Form>
        <div className="form_item">
          <Form.Label>포인트 결제</Form.Label>
          <div className="item_name">
            <Form.Control
              type="number"
              placeholder="100,000"
              name="use_point"
              value=""
            />
          </div>
          <p className="point_status">
            사용 가능 포인트 <span>1,000,000,000 P</span>
          </p>
        </div>

        <div className="form_item">
          <Form.Check
            inline
            label="결제정보를 확인하였으며, 서비스 신청에 동의합니다."
            name="agree_payment"
            type="checkbox"
            required
            id="agree_payment"
          />
        </div>
        <div className="btn_purchase">
          <button type="submit" className="black">
            주문하기
          </button>
          <button type="submit" className="white">
            주문취소
          </button>
        </div>
      </Form>
    </div>
  );
};
