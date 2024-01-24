import React from 'react';
import { Form } from 'react-bootstrap';

export default function GgShoppingFilter() {

  return (
    <div className='shopping_filter'>
      <h2 className='total'>전체</h2>
      <section>
        <h2>브랜드</h2>
        <div className='filter_group'>
            <Form.Check
              label="EISEN HEIM"
              name="brand1"
              type="checkbox"
              id="check_1"
              className="item"
            />
            <Form.Check
              label="BOGNER"
              name="brand2"
              type="checkbox"
              id="check_2"
              className="item"
            />
            <Form.Check
              label="PING"
              name="brand3"
              type="checkbox"
              id="check_3"
              className="item"
            />
            <Form.Check
              label="YAMAHA"
              name="brand4"
              type="checkbox"
              id="check_4"
              className="item"
            />
            <Form.Check
              label="Phi Golf"
              name="brand5"
              type="checkbox"
              id="check_5"
              className="item"
            />
        </div>
      </section>
      <section>
        <h2>제품</h2>
        <div className='filter_group'>
            <Form.Check
              label="골프채"
              name="product1"
              type="checkbox"
              id="pro_1"
              className="item"
            />
            <Form.Check
              label="캐디백"
              name="product2"
              type="checkbox"
              id="pro_2"
              className="item"
            />
            <Form.Check
              label="보스턴백"
              name="product3"
              type="checkbox"
              id="pro_3"
              className="item"
            />
            <Form.Check
              label="골프웨어"
              name="product4"
              type="checkbox"
              id="pro_4"
              className="item"
            />
            <Form.Check
              label="스윙연습기"
              name="product5"
              type="checkbox"
              id="pro_5"
              className="item"
            />
        </div>
      </section>     
      <section>
        <h2>가격</h2>
        <div className='filter_group'>
          <Form.Check
            label="10,000,000 ~"
            name="price1"
            type="checkbox"
            id="pri_1"
            className="item"
          />
          <Form.Check
            label="100,000,000 ~"
            name="price2"
            type="checkbox"
            id="pri_2"
            className="item"
          />
          <Form.Check
            label="1,000,000,000 ~"
            name="price3"
            type="checkbox"
            id="pri_3"
            className="item"
          />
        </div>
      </section>    
    </div>
  )
}

