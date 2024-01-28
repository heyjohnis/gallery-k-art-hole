import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { POST } from "../../utils/restApi";

export const ProductSaleInfo = ({ content, options }) => {
  const router = useRouter();
  const productSale = "sale";
  const [keywords, setKeywords] = useState([]);
  const [form, setForm] = useState({ content });
  const parseKeyword = (keyword) => {
    setKeywords(keyword.split(",").map((item) => item?.trim()));
  };

  const addCart = () => {
    POST("/mall/add/cart", form).then((res) => {
      if (res?.data?.insertId > 0) {
        alert("장바구니에 추가되었습니다.");
        router.push("/ggshopping/list");
      }
    });
  };

  const gotoOrder = () => {
    POST("/mall/add/cart", form).then((res) => {
      if (res?.data?.insertId > 0) {
        router.push("/ggshopping/order/");
      }
    });
  };

  useEffect(() => {
    console.log("content: ", content);
    setForm((prev) => ({ ...prev, ...content }));
    if (content?.pd_keyword) parseKeyword(content?.pd_keyword);
  }, [content]);

  const setDiscountRate = (origin_price, price) => {
    const discount_rate = Math.round(
      100 - ((origin_price - price) / origin_price) * 100
    );
    return discount_rate;
  };

  const setQuantityOption = (maxQuantity) => {
    const quantity = maxQuantity > 4 ? 4 : maxQuantity;
    return Array.from({ length: quantity }, (_, i) => (
      <Form.Check
        key={i}
        label={`${i + 1}개`}
        name="time1"
        type="radio"
        id={`product-${i + 1}`}
        className="item btn_radio"
        defaultChecked={i === 0}
        value={i + 1}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, quantity: e.target.value }))
        }
      />
    ));
  };

  return (
    <section className="product_sale_info">
      <span className="product_brand">{content?.brand}</span>
      <h1 className="product_name">{content?.pd_name}</h1>
      <div className="product_keyword">
        <span className="keyword_label">키워드</span>
        <ul className="keyword_hashtag">
          {keywords?.length > 0 &&
            keywords?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <div className={`price_info ${productSale}`}>
        {/* TODO: 세일 0%일때  ${productSale} 추가 */}
        <span className="discount_rate">
          {setDiscountRate(content?.origin_price, content?.price)}%
        </span>
        <span className="price_original">
          {content?.price?.toLocaleString()} P
        </span>
        <span className="discount_price">
          {content?.origin_price?.toLocaleString()} P
        </span>
      </div>
      <Table className="delivery_notice">
        <tbody>
          <tr>
            <th>배송비</th>
            <td>제주도를 포함한 도서/산간지역은 추가배송비 1,000포인트 차감</td>
          </tr>
          <tr>
            <th>배송예정</th>
            <td>
              5일 이내 출고(주말, 공휴일 제외) / 본 상품은 자체배송상품이
              아닙니다.
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="form_item">
        {content?.max_quantity > 1 && (
          <>
            <label>수량</label>
            <div className="item_group">
              {setQuantityOption(content?.max_quantity)}
            </div>
          </>
        )}
      </div>
      <div className="shopping_btn row">
        <button className="btn_cart col-5" onClick={addCart}>
          장바구니
        </button>
        <button className="btn_order col-5" onClick={gotoOrder}>
          주문하기
        </button>
      </div>
    </section>
  );
};
