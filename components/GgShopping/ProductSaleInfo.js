import React from 'react';
import Form from "react-bootstrap/Form";

export const ProductSaleInfo = () => {
  return (
    <section className='product_sale_info'>
      <span className='product_brand'>BOGNER</span>
      <h1 className='product_name'>여성 캐주얼 캐디백</h1>
      <div className='product_keyword'>
        <span className='keyword_label'>키워드</span>
        <ul className='keyword_hashtag'>
          <li>골프채</li>
          <li>여성</li>
          <li>골프가방</li>
          <li>캐디백</li>
        </ul>
      </div>
      <div className='price_info'>
        <span className='discount_rate'>10%</span>
        <span className='price_original'>530,000 P</span>
        <span className='price_discount'>398,000 P</span>
      </div>
      <ul className='delivery_notice'>
        <li>
          <span>배송비</span>
          <p>제주도를 포함한 도서/산간지역은 추가배송비 1,000포인트 차감</p>
        </li>
        <li>
          <span>배송예정</span>
          <p>5일 이내 출고(주말, 공휴일 제외) / 본 상품은 자체배송상품이 아닙니다.</p>
        </li>
      </ul>
      <div className="form_item">
          <label>수량</label>
          <div key="product" className="item_group">
            <Form.Check
              label="1개"
              name="time1"
              type="radio"
              id="product-1"
              className="item btn_radio"
              value="1개"
              defaultChecked
            />
            <Form.Check
              label="2개"
              name="time1"
              type="radio"
              id="product-2"
              className="item btn_radio"
              value="2개"
            />
            <Form.Check
              label="3개"
              name="time1"
              type="radio"
              id="product-3"
              className="item btn_radio"
              value="3개"
            />
            <Form.Check
              label="4개"
              name="time1"
              type="radio"
              id="product-4"
              className="item btn_radio"
              value="4개"
            />
          </div>
        </div>
        <div className='shopping_btn'>
          <button className='btn_cart'>장바구니</button>
          <button className='btn_order'>주문하기</button>
        </div>
    </section>
  )
}
