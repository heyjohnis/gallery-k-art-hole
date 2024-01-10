import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import styles from "../Home/home.module.scss";

const DatePicker = ({ label, pickDate, dateKind, selectedDate }) => {
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
    <div className={styles.rdpWrap}>
      <div className="col-lg-12 col-sm-12">
        <label>{label}</label>
        <input
          type="text"
          className="form-control select_date"
          value={selectedDay && format(selectedDay, "yyyy-MM-dd")}
          readOnly
          onClick={handleOnClick}
          onChange={hideDayicker}
          placeholder="날짜를 선택하세요"
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
};

export default DatePicker;
