import React from "react";
import { Form } from "react-bootstrap";

export const ServiceFilter = () => {
  return (
    <div className="shopping_filter">
      <h2 className="total">
        <button>전체</button>
      </h2>
      <section>
        <h2>카테고리</h2>
        <div className="filter_group">
          <Form.Check
            label="라운딩"
            name="brand1"
            type="checkbox"
            id="check_1"
            value="라운딩"
            className="item"
          />
          <Form.Check
            label="레슨"
            name="brand2"
            type="checkbox"
            id="check_2"
            value="레슨"
            className="item"
          />
          <Form.Check
            label="연습장"
            name="brand3"
            type="checkbox"
            id="check_3"
            value="연습장"
            className="item"
          />
          <Form.Check
            label="호텔"
            name="brand4"
            type="checkbox"
            id="check_4"
            className="item"
            value="호텔"
          />
          <Form.Check
            label="여가"
            name="brand5"
            type="checkbox"
            id="check_5"
            className="item"
            value="여가"
          />
          <Form.Check
            label="의전"
            name="brand5"
            type="checkbox"
            id="check_5"
            className="item"
            value="의전"
          />
        </div>
      </section>
    </div>
  );
};
