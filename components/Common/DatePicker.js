import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const DatePicker = ({ label, pickDate, dateKind }) => {
  const [selectedDay, setSelectedDay] = useState("");
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

  return (
    <div>
      <div className="col-lg-12 col-sm-12">
        <label>{label}</label>
        <input
          type="text"
          className="form-control"
          value={selectedDay && format(selectedDay, "yyyy-MM-dd")}
          readOnly
          onClick={handleOnClick}
          onChange={hideDayicker}
          placeholder="날짜를 선택하세요"
        />
      </div>
      {isShow && (
        <DayPicker
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
