import React, { useState, useEffect } from "react";
import { GgQuantityComp } from "./GgQuantityComp";
import { DatePicker } from "../Common/DatePicker";
import { SelectBoxComp } from "../Common/SelectBoxComp";
import { CheckBoxComp } from "../Common/CheckBoxComp";
import { DatePickerTermComp } from "../Common/DatePickerTermComp";

export function GgOptionsComp({ content, setForm, options }) {
  const [optionValues, setOptionValues] = useState({});

  useEffect(() => {
    const values = Object.values(optionValues);
    const total = values.reduce((acc, cur) => acc + cur.price, 0);
    setForm((prev) => ({
      ...prev,
      values: JSON.stringify(optionValues),
      option_price: total,
    }));
  }, [optionValues]);

  return (
    <>
      {options?.length > 0 &&
        options.map(
          ({ option_name, option_type, option_value, option_no }, index) =>
            option_type === "01" ? (
              <SelectBoxComp
                key={index}
                optionNo={option_no}
                optionValue={option_value}
                label={option_name}
                setOptionValues={setOptionValues}
              />
            ) : option_type === "02" ? (
              <DatePicker
                key={index}
                label={option_name}
                pickDate={(date) =>
                  setOptionValues((prev) => ({
                    ...prev,
                    [option_no]: { start_date: date.start_date },
                  }))
                }
                dateKind="start_date"
              />
            ) : option_type === "03" ? (
              <></>
            ) : option_type === "04" ? (
              <DatePickerTermComp
                key={index}
                optionNo={option_no}
                label={option_name}
                setOptionValues={setOptionValues}
              />
            ) : option_type === "05" ? (
              <CheckBoxComp
                key={index}
                optionNo={option_no}
                label={option_name}
                optionValue={option_value}
                setOptionValues={setOptionValues}
              />
            ) : option_type === "06" ? (
              <></>
            ) : (
              <></>
            )
        )}

      {content?.max_quantity > 0 && (
        <GgQuantityComp setForm={setForm} maxQuantity={content?.max_quantity} />
      )}
    </>
  );
}
