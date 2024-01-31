import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { POST } from "../../utils/restApi";
import { useRouter } from "next/router";

export default function GgShoppingPurchaseAgreement({
  user,
  orderProducts,
  orderInfo,
}) {
  const router = useRouter();
  const [orderPrice, setOrderPrice] = useState({
    total_price: 0,
    sale_price: 0,
    delivery_fee: 0,
  });
  const [ablePoint, setAblePoint] = useState(0);
  const [form, setForm] = useState({
    agree_payment: false,
    agree_service: false,
    pay_amount: 0,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log("handleChange: ", name, value, checked, type);
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const calcOrderPrice = () => {
    const originPrice = orderProducts?.reduce(
      (acc, cur) => acc + cur.origin_price * cur.quantity,
      0
    );
    const salePrice = orderProducts?.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
    const deliveryFee = orderProducts?.reduce(
      (acc, cur) => acc + cur.delivery_fee,
      0
    );
    const totalPrice = salePrice + deliveryFee;
    setOrderPrice({
      origin_price: originPrice,
      total_price: totalPrice,
      sale_price: originPrice - salePrice,
      delivery_fee: deliveryFee,
    });
    const orderPoint = ablePoint > totalPrice ? totalPrice : ablePoint;
    setForm((prev) => ({
      ...prev,
      pay_amount: orderPoint,
      delivery_fee: deliveryFee,
      total_price: totalPrice,
    }));
  };

  const validateForm = () => {
    if (!form.order_user_name) {
      alert("주문자 이름을 입력해주세요.");
      return false;
    }
    if (!form.order_user_phone) {
      alert("주문자 연락처를 입력해주세요.");
      return false;
    }
    if (!form.order_user_email) {
      alert("주문자 이메일을 입력해주세요.");
      return false;
    }
    if (!form.delivery_user_name) {
      alert("수령인 이름을 입력해주세요.");
      return false;
    }
    if (!form.delivery_phone) {
      alert("수령인 연락처를 입력해주세요.");
      return false;
    }
    if (!form.delivery_zipcode) {
      alert("우편번호를 입력해주세요.");
      return false;
    }
    if (!form.delivery_addr1) {
      alert("주소를 입력해주세요.");
      return false;
    }
    if (!form.delivery_addr2) {
      alert("상세주소를 입력해주세요.");
      return false;
    }
    if (form.pay_amount !== form.total_price) {
      alert("결제하실 포인트를 확인해주세요.");
      return false;
    }
    if (!form.agree_payment) {
      alert("결제정보 확인에 동의해주세요.");
      return false;
    }
    if (!form.agree_service) {
      alert("필수 항목에 동의해주세요.");
      return false;
    }
    return true;
  };

  const handleOrder = () => {
    console.log("handleOrder: ", form);

    if (!validateForm()) return;
    const orderItemNo = orderProducts
      ?.reduce((acc, cur) => [...acc, cur.item_no], [])
      .join(",");
    if (!orderItemNo) return alert("주문할 상품이 없습니다.");

    const pdLength = orderProducts.length;
    const comment = `${orderProducts[0].pd_name} ${
      pdLength > 1 ? `외 ${pdLength - 1}건` : ""
    }`;
    form.comment = comment;

    POST("/mall/cart/order", {
      ...form,
      order_item_no: orderItemNo,
    }).then((res) => {
      if (res?.data?.order_no > 0) {
        alert("주문이 완료되었습니다.");
        router.push({
          pathname: "/gg-mall/complete/",
          query: { order_no: res?.data?.order_no },
        });
      }
    });
  };

  useEffect(() => {
    calcOrderPrice();
    const hasPoint =
      user?.yearly_point - user?.use_point > 0
        ? user?.yearly_point - user?.use_point
        : 0;
    setAblePoint(hasPoint);
  }, [orderProducts]);

  useEffect(() => {
    console.log("orderInfo: ", orderInfo);
    setForm((prev) => ({ ...prev, ...orderInfo }));
  }, [orderInfo]);
  return (
    <div className="agree_content screen">
      <div className="price_content">
        <div className="price_items">
          <span className="item">상품가</span>
          <span className="price">
            {orderPrice?.origin_price?.toLocaleString()} P
          </span>
        </div>
        <div className="price_items">
          <span className="item">배송비</span>
          <span className="price">
            + {orderPrice?.delivery_fee?.toLocaleString()} P
          </span>
        </div>
        <div className="price_items">
          <span className="item">할인가</span>
          <span className="price">
            - {orderPrice?.sale_price?.toLocaleString()} P
          </span>
        </div>
      </div>
      <div className="total_payment">
        <span>총 결제포인트</span>
        <strong>
          <span>{orderPrice?.total_price?.toLocaleString()}</span> P
        </strong>
      </div>
      <Form>
        <div className="form_item">
          <Form.Label>포인트 결제</Form.Label>
          <div className="item_name">
            <Form.Control
              type="number"
              placeholder="100,000"
              name="pay_amount"
              value={form?.pay_amount}
              onChange={handleChange}
            />
          </div>
          <p className="point_status">
            사용 가능 포인트 <span>{ablePoint.toLocaleString()} P</span>
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
            value={form?.agree_payment}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="아래 내용에 모두 동의합니다.(필수)"
            name="agree_service"
            type="checkbox"
            id="agree_service"
            required
            value={form?.agree_service}
            onChange={handleChange}
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
          <button type="button" className="black" onClick={handleOrder}>
            주문하기
          </button>
          <button type="button" className="white" onClick={handleOrder}>
            주문취소
          </button>
        </div>
      </Form>
    </div>
  );
}
