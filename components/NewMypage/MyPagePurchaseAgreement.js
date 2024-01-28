import React from "react";
import Form from "react-bootstrap/Form";

export const MyPagePurchaseAgreement = () => {
  return (
    <div className="agree_content screen">
      <div className="price_content">
        <div className="price_items">
          <span className="item">상품가</span>
          <span className="price">1,000,000 P</span>
        </div>
        <div className="price_items">
          <span className="item">배송비</span>
          <span className="price">+ 3,000 P</span>
        </div>
        <div className="price_items">
          <span className="item">할인가</span>
          <span className="price">- 50,000 P</span>
        </div>
      </div>
      <div className="total_payment">
        <span>총 결제포인트</span>
        <strong>
          <span>953,000</span> P
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
          <Form.Check
            inline
            label="아래 내용에 모두 동의합니다.(필수)"
            name="agree_service"
            type="checkbox"
            id="agree_service"
            required
          />
        </div>

        <div className="notice">
          <h6>개인정보제공 안내</h6>
          <ul>
            <li>
              <p>
                그린갤러리 고객 계정으로 포인트를 이용하여 그린갤러리에서
                제공하는 서비스를 이용하고자 할 경우, 그린갤러리는 거래 당사자간
                원활한 의사소통 및 배송, 상담 등 거래이행을 위하여 필요한
                최소한의 개인정보를 아래와 같이 제공하고 있습니다.
              </p>
            </li>
            <li>
              <p>1. 개인정보를 제공받는 자</p>
              상품 및 서비스 판매자
            </li>
            <li>
              <p>2. 제공하는 개인정보 항목</p>
              이름, 이용자명, 이용자 (휴대)전화번호, 아이디, (휴대)전화번호,
              이메일, 상품구매정보, 결제수단, 상품 수령인 정보(수령인명, 주소,
              (휴대)전화번호, 이메일)
            </li>
            <li>
              <p>3. 개인정보를 제공받는 자의 이용목적</p>
              판매자와 구매자의 원활한 거래 진행, 본인의사의 확인, 고객상담 및
              불만처리/부정이용 방지 등의 고객관리, 물품배송, 새로운 상품/서비스
              정보와 고지사항의 안내, 상품/서비스 구매에 따른 혜택 제공, 서비스
              개선·통계·분석
            </li>
            <li>
              <p>4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간</p>
              개인정보 이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에
              의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후
              삭제합니다.
            </li>
            <li>
              위 개인정보 제공 동의를 거부할 권리가 있으나, 거부 시 그린갤러리를
              이용한 상품 및 서비스 구매가 불가능합니다. 그 밖의 내용은
              그린갤러리 이용약관 및 개인정보처리방침에 따릅니다.
            </li>
          </ul>
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
