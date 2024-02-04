import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { commaFormat } from "../../utils/number";

export function CheckBoxComp({
  optionValue,
  label,
  optionNo,
  setOptionValues,
  defaultValue,
}) {
  const options = JSON.parse(optionValue);
  const checkedOption = (item) => {
    setOptionValues((prev) => ({
      ...prev,
      [optionNo]: { op_name: item.op_name, price: parseInt(item.price) },
    }));
  };
  return (
    <div className="form_item">
      <label>{label}</label>
      <div className="item_group">
        {options.map((item, index) => (
          <Form.Check
            key={index}
            label={`${item.op_name}${
              item.price > 0 ? ` (+${commaFormat(item.price)})` : ""
            }`}
            name={`product${optionNo}`}
            type="radio"
            id={`product${optionNo}-${index + 1}`}
            className="item btn_radio"
            defaultChecked={defaultValue === `${item.op_name}#${item.price}`}
            value={`${item.op_name}#${item.price}`}
            onChange={() => checkedOption(item)}
          />
        ))}
      </div>
    </div>
  );
}
