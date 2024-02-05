import React, { useEffect, useState } from "react";
import { DatePicker } from "./DatePicker";

export function DatePickerTermComp({
  setOptionValues,
  optionNo,
  label,
  defaultStartDate,
  defaultEndDate,
}) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (!startDate || !endDate) return;

    setOptionValues((prev) => ({
      ...prev,
      [optionNo]: {
        option_name: label,
        start_date: startDate,
        end_date: endDate,
      },
    }));
  }, [startDate, endDate]);

  return (
    <div className="row">
      <div className="col-12">
        <label>{label}</label>
      </div>
      <div className="col-6">
        <DatePicker
          pickDate={(data) => setStartDate(data.start_date)}
          dateKind="start_date"
          selectedDate={defaultStartDate}
        />
      </div>
      <div className="col-6">
        <DatePicker
          pickDate={(data) => setEndDate(data.end_date)}
          dateKind="end_date"
          selectedDate={defaultEndDate}
        />
      </div>
    </div>
  );
}
