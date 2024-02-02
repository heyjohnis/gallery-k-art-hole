import React, { useState, useEffect } from "react";
import { GgQuantityComp } from "./GgQuantityComp";
import { DatePicker } from "../Common/DatePicker";
import { SelectBoxComp } from "../Common/SelectBoxComp";
import { CheckBoxComp } from "../Common/CheckBoxComp";
import { DatePickerTermComp } from "../Common/DatePickerTermComp";
import { convertArrayToObject } from "../../utils/array";

export function GgOptionsComp({ content, setForm, options }) {
  const [optionValues, setOptionValues] = useState({});

  const setDefaultValues = () => {
    console.log("options: ", options);
    const settedValues = convertArrayToObject(options, "option_no");
    setOptionValues(settedValues);
  };

  useEffect(() => {
    console.log("GgOptionsComp optionValues: ", optionValues);
    const values = Object.values(optionValues);
    console.log("GgOptionsComp values: ", values);
    const total = values.reduce((acc, cur) => acc + (cur?.price || 0), 0);
    setForm((prev) => ({
      ...prev,
      values: JSON.stringify(optionValues),
      option_price: total,
    }));
  }, [optionValues]);

  useEffect(() => {
    if (options?.length > 0) setDefaultValues();
  }, [options]);

  return (
    <>
      {options?.length > 0 &&
        options.map(
          (
            {
              option_name,
              option_type,
              option_value,
              option_no,
              price,
              op_name,
              start_date,
              end_date,
            },
            index
          ) =>
            option_type === "01" ? (
              <SelectBoxComp
                key={index}
                optionNo={option_no}
                optionValue={option_value}
                label={option_name}
                defaultValue={`${op_name}#${price}`}
                setOptionValues={setOptionValues}
              />
            ) : option_type === "02" ? (
              <DatePicker
                key={index}
                label={option_name}
                selectedDate={start_date || ""}
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
                defaultStartDate={start_date || ""}
                defaultEndDate={end_date || ""}
                setOptionValues={setOptionValues}
              />
            ) : option_type === "05" ? (
              <CheckBoxComp
                key={index}
                optionNo={option_no}
                label={option_name}
                optionValue={option_value}
                defaultValue={`${op_name}#${price}`}
                setOptionValues={setOptionValues}
              />
            ) : option_type === "06" ? (
              <></>
            ) : (
              <></>
            )
        )}

      {content?.max_quantity > 0 && content?.pd_kind === "shop" && (
        <GgQuantityComp setForm={setForm} maxQuantity={content?.max_quantity} />
      )}
    </>
  );
}
