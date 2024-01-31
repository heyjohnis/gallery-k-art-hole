import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export function CheckBoxComp({ setForm, optionValue }) {
  const setQuantityOption = (maxCnt) => {
    const quantity = maxCnt > 4 ? 4 : maxCnt;
    return Array.from({ length: quantity }, (_, i) => (
      <Form.Check
        key={i}
        label={`${i + 1}${unitOption.unit}`}
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

  const [optionData, setOptionData] = useState([]);
  const optionArr = [];

  optionArr.push(<option key={0}>선택</option>);

  const options = JSON.parse(optionValue);

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
    <>
      {maxQuantity > 1 && (
        <div className="form_item">
          <label>{unitOption.label}</label>
          <div className="item_group">
            {options.map((item, index) => (
              <Form.Check
                key={i}
                label={`${i + 1}${unitOption.unit}`}
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
            ))}
          </div>
        </div>
      )}
    </>
  );
}
