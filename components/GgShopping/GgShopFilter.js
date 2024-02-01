import React from "react";
import { Form } from "react-bootstrap";

export function GgShopFilter({ form, setForm, keywords }) {
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

  return (
    <>
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
          {keywords.map((keyword, index) => (
            <Form.Check
              key={index}
              label={keyword}
              name={`product${index}`}
              type="checkbox"
              id={`product${index}`}
              className="item"
              value={keyword}
              onChange={handleCheckKeyword}
            />
          ))}
        </div>
      </section>
    </>
  );
}
