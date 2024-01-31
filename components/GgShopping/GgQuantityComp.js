import React from "react";
import { Form } from "react-bootstrap";

export function GgQuantityComp({ setForm, maxQuantity, unitOption }) {
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
  return (
    <div className="form_item">
      {maxQuantity > 1 && (
        <>
          <label>{unitOption.label}</label>
          <div className="item_group">{setQuantityOption(maxQuantity)}</div>
        </>
      )}
    </div>
  );
}
