import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import styles from "./style/datePicker.module.scss";

export function DatePicker({
  label,
  pickDate,
  dateKind,
  selectedDate = null,
  placeholder = "날짜 선택",
}) {
  const [selectedDay, setSelectedDay] = useState();
  const [isShow, setIsShow] = useState(false);

  const handleOnClick = () => {
    setIsShow(!isShow);
  };

  const hideDayicker = () => {};

  useEffect(() => {
    if (selectedDay) {
      setIsShow(false);
      pickDate({ [dateKind]: format(selectedDay, "yyyy-MM-dd") });
    }
  }, [selectedDay]);

  useEffect(() => {
    if (selectedDate) {
      setSelectedDay(new Date(selectedDate));
    }
  }, [selectedDate]);

  return (
    <div className={styles.datepickerWrap}>
      <div className="col-lg-12 col-sm-12">
        {label && <label>{label}</label>}
        <input
          type="text"
          className="form-control select_date"
          value={selectedDay && format(selectedDay, "yyyy-MM-dd")}
          readOnly
          onClick={handleOnClick}
          onChange={hideDayicker}
          placeholder={placeholder}
        />
      </div>
      {isShow && (
        <DayPicker
          className={styles.rdp}
          mode="single"
          required
          selected={selectedDay}
          onSelect={setSelectedDay}
          modifiersClassNames={{
            selected: "my-selected",
            today: "my-today",
          }}
        />
      )}
    </div>
  );
}
