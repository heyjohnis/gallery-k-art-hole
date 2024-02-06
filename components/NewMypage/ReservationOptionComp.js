import React, { useEffect, useState } from "react";
import styles from "./style/ReservationOptionComp.module.scss";

export function ReservationOptionComp({ optionValues }) {
  const [values, setValues] = useState([]);
  const setOptionValues = () => {
    const json = JSON.parse(optionValues);
    const arr = Object.values(json);
    if (arr.length === 0) return <></>;
    arr.sort((a, b) => a.order_idx - b.order_idx);
    console.log("ReservationOptionComp: ", arr);
    setValues(arr);
  };

  useEffect(() => {
    setOptionValues();
  }, [optionValues]);

  return (
    <ul className={styles.optionList}>
      {values.map(
        ({ option_name, price, op_name, start_date, end_date }, index) => (
          <li key={index}>
            <label>{option_name}</label>
            <div>
              {start_date && !end_date && <span>{start_date}</span>}
              {end_date && start_date && (
                <span>
                  {" "}
                  {start_date} ~ {end_date}
                </span>
              )}
              {op_name && <span>{op_name}</span>}
              {price > 0 && <span> +({price.toLocaleString()})</span>}
            </div>
          </li>
        )
      )}
    </ul>
  );
}
