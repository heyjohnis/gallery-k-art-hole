import React, { useState, useEffect } from "react";
import { GgQuantityComp } from "./GgQuantityComp";
import { DatePicker } from "../Common/DatePicker";
import { SelectBoxComp } from "../Common/SelectBoxComp";
import { it } from "date-fns/locale";

export function GgOptionsComp({ content, setForm, options }) {
  const [price, setPrice] = useState({});
  const [option, setOption] = useState({});

  const selectedPickDate = (date) => {
    console.log("selectedPickDate: ", date);
  };

  const selectedOption = (optionNo, option) => {
    console.log("selected option: ", option);
    setPrice((prev) => ({
      ...prev,
      [optionNo]: parseInt(option.price),
    }));
    setOption((prev) => ({
      ...prev,
      [optionNo]: { op_name: option.op_name, price: parseInt(option.price) },
    }));
    console.log("total", price);
  };

  useEffect(() => {
    setPrice((prev) => ({ ...prev, price: parseInt(content?.price) }));
  }, [options]);

  return (
    <>
      {options?.length > 0 &&
        options.map((item, index) =>
          item.option_type === "01" ? (
            <SelectBoxComp
              key={index}
              opData={item}
              selectedOption={selectedOption}
            />
          ) : item.option_type === "02" ? (
            <DatePicker
              key={index}
              label={item.option_name}
              pickDate={(date) => selectedPickDate(date)}
              dateKind="start_date"
            />
          ) : (
            <>
              <DatePicker
                key={index}
                pickDate={(date) => selectedPickDate(date)}
                placeholder="출발일"
                dateKind="start_date"
              />
              <DatePicker
                key={index}
                pickDate={(date) => selectedPickDate(date)}
                placeholder="도착일"
                dateKind="end_date"
              />
            </>
          )
        )}

      {content?.max_quantity > 0 && (
        <GgQuantityComp setForm={setForm} maxQuantity={content?.max_quantity} />
      )}
    </>
  );
}
