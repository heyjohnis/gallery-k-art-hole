import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import styles from "./style/selectBoxComp.module.scss";

export function SelectBoxComp({ optionName, optionValue, selectedOption }) {
  const [optionData, setOptionData] = useState([]);
  const optionArr = [];

  optionArr.push(<option key={0}>선택</option>);

  const jsonArr = JSON.parse(optionValue);
  for (let j = 0; j < jsonArr.length; j++) {
    optionArr.push(
      <option key={j + 1} value={jsonArr[j]?.price}>
        {jsonArr[j].op_name}{" "}
        {parseInt(jsonArr[j]?.price)
          ? `(+${(jsonArr[j]?.price || 0).toLocaleString()}P)`
          : ""}
      </option>
    );
  }

  useEffect(() => {
    if (!optionValue) return;
    const parsedOption = JSON.parse(optionValue);
    console.log("parsedOption: ", parsedOption);
    setOptionData(parsedOption);
  }, [optionValue]);

  return (
    <div className="row">
      <div className={`col-md-12 ${styles.select_wrap}`}>
        <label className={styles.tit}>{optionName}</label>
        <Form.Select
          className={styles.select}
          aria-label=""
          name=""
          onChange={(e) => {
            let data = jsonArr[e.target.selectedIndex - 1];
            if (e.target.selectedIndex === 0) {
              data = { op_name: "", price: 0 };
            }
            selectedOption(option_no, data);
          }}
        >
          <option key={0}>선택</option>
          {optionData.map((item, index) => (
            <option key={index} value={item.price}>
              {item.op_name}
              {parseInt(item.price)
                ? `(+${(item?.price || 0).toLocaleString()}P)`
                : ""}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
}
