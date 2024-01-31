import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import styles from "./style/selectBoxComp.module.scss";

export function SelectBoxComp({
  optionNo,
  label,
  optionValue,
  setOptionValues,
}) {
  const [optionData, setOptionData] = useState([]);

  const selectedOption = (e) => {
    const [op_name, price] = e.target.value.split("#");
    setOptionValues((prev) => ({
      ...prev,
      [optionNo]: { op_name, price: parseInt(price) },
    }));
  };

  useEffect(() => {
    if (!optionValue) return;
    setOptionData(JSON.parse(optionValue));
  }, [optionValue]);

  return (
    <div className="row">
      <div className={`col-md-12 ${styles.select_wrap}`}>
        <label className={styles.tit}>{label}</label>
        <Form.Select
          className={styles.select}
          aria-label=""
          name=""
          onChange={selectedOption}
        >
          <option key={0}>선택</option>
          {optionData.map((item, index) => (
            <option key={index} value={`${item.op_name}#${item.price}`}>
              {item.op_name}
              {parseInt(item.price)
                ? ` (+${parseInt(item?.price).toLocaleString()}P)`
                : ""}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
}
