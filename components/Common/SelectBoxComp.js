import React, { useState, useEffect } from "react";
import styles from "./style/selectBoxComp.module.scss";

export function SelectBoxComp({ opData, selectedOption }) {
  const [optionData, setOptionData] = useState([]);
  const optionArr = [];

  optionArr.push(<option key={0}>선택</option>);

  const jsonArr = JSON.parse(opData.option_value);
  for (let j = 0; j < jsonArr.length; j++) {
    optionArr.push(
      <option key={j + 1} value={jsonArr[j]?.price}>
        {jsonArr[j].op_name}{" "}
        {parseInt(jsonArr[j]?.price)
          ? `(+${(jsonArr[j]?.price || 0).toLocaleString()}P)`
          : ""}
      </option>
    );
  }

  useEffect(() => {
    console.log("opData: ", opData);
    if (!opData.option_value) return;
    const parsedOption = JSON.parse(opData.option_value);
    console.log("parsedOption: ", parsedOption);
    setOptionData(parsedOption);
  }, [opData]);

  return (
    <div className="row">
      <div className="col-md-12">
        <label className={styles.tit}>{opData.option_name}</label>
        <select
          onChange={(e) => {
            let data = jsonArr[e.target.selectedIndex - 1];
            if (e.target.selectedIndex === 0) {
              data = { op_name: "", price: 0 };
            }
            selectedOption(opData.option_no, data);
          }}
        >
          <option key={0}>선택</option>
          {optionData.map((item, index) => (
            <option key={index} value={item.price}>
              {item.op_name}
              {parseInt(item.price)
                ? `(+${(item?.price || 0).toLocaleString()}P)`
                : ""}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
