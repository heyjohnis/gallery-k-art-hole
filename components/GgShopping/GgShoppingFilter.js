import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import MultiRangeSlider from "../Common/MultiRangeSilder";
import { useDebouncedCallback } from "use-debounce";
import { de } from "date-fns/locale";

export default function GgShoppingFilter({ form, setForm }) {
  const handleCheckBrand = (e) => {
    const { checked, value } = e.target;
    const arr = form?.brands ? form?.brands.split(",") : [];
    let brands = "";
    if (checked) {
      arr.push(e.target.value);
      const set = new Set(arr);
      brands = Array.from(set).join(",");
    } else {
      const index = arr.indexOf(value);
      arr.splice(index, 1);
      brands = arr.join(",");
    }
    setForm((prev) => ({ ...prev, brands }));
  };

  const handleCheckKeyword = (e) => {
    const { checked, value } = e.target;
    const arr = form?.keywords ? form?.keywords?.split(",") : [];
    let keywords = "";
    if (checked) {
      arr.push(e.target.value);
      const set = new Set(arr);
      keywords = Array.from(set).join(",");
    } else {
      const index = arr.indexOf(value);
      arr.splice(index, 1);
      keywords = arr.join(",");
    }
    setForm((prev) => ({ ...prev, keywords }));
  };

  const handlePriceRange = (data) => {
    debounced(data);
  };

  const debounced = useDebouncedCallback((data) => {
    setForm((prev) => ({
      ...prev,
      start_price: data.min,
      end_price: data.max,
    }));
  }, 1000);

  return (
    <div className="shopping_filter">
      <h2 className="total">전체</h2>
      <section>
        <h2>브랜드</h2>
        <div className="filter_group">
          <Form.Check
            label="EISEN HEIM"
            name="brand1"
            type="checkbox"
            id="check_1"
            value="아이젠하임"
            className="item"
            onChange={handleCheckBrand}
          />
          <Form.Check
            label="BOGNER"
            name="brand2"
            type="checkbox"
            id="check_2"
            value="보그너"
            className="item"
            onChange={handleCheckBrand}
          />
          <Form.Check
            label="PING"
            name="brand3"
            type="checkbox"
            id="check_3"
            value="핑골프"
            className="item"
            onChange={handleCheckBrand}
          />
          <Form.Check
            label="YAMAHA"
            name="brand4"
            type="checkbox"
            id="check_4"
            className="item"
            value="야마하"
            onChange={handleCheckBrand}
          />
          <Form.Check
            label="Phi Golf"
            name="brand5"
            type="checkbox"
            id="check_5"
            className="item"
            value="파이골프"
            onChange={handleCheckBrand}
          />
        </div>
      </section>
      <section>
        <h2>제품</h2>
        <div className="filter_group">
          <Form.Check
            label="골프채"
            name="product1"
            type="checkbox"
            id="pro_1"
            className="item"
            value="골프채"
            onChange={handleCheckKeyword}
          />
          <Form.Check
            label="골프백"
            name="product2"
            type="checkbox"
            id="pro_2"
            className="item"
            value="골프백"
            onChange={handleCheckKeyword}
          />
          <Form.Check
            label="보스턴백"
            name="product3"
            type="checkbox"
            id="pro_3"
            className="item"
            value="보스턴백"
            onChange={handleCheckKeyword}
          />
          <Form.Check
            label="골프웨어"
            name="product4"
            type="checkbox"
            id="pro_4"
            className="item"
            value="골프웨어"
            onChange={handleCheckKeyword}
          />
          <Form.Check
            label="스윙연습기"
            name="product5"
            type="checkbox"
            id="pro_5"
            className="item"
            value="스윙연습기"
            onChange={handleCheckKeyword}
          />
        </div>
      </section>
      <section>
        <h2>가격</h2>
        <MultiRangeSlider
          min={10000}
          max={2000000}
          step={10000}
          onChange={({ min, max }) => handlePriceRange({ min, max })}
        />
        <div className="filter_group">
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
  );
}
