/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { commaFormat } from "../../utils/number";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styles from "./Ggmall.module.scss";
import { format } from "date-fns";

const GgmallItems = ({ content, options, productKind }) => {
  const router = useRouter();

  const [optionComp, setOptionComp] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState({});
  const [option, setOption] = useState({});
  const [dateOptionName, setDateOptionName] = useState("");
  const [useDateOption, setUseDateOption] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date());

  const selectOption = (optionNo, option) => {
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

  const renderOptions = () => {
    const comp = [];
    for (let i = 0; i < options.length; i++) {
      // option_type 01: 선택, 02: 날짜
      if (options[i].option_type !== "01") {
        setDateOptionName(options[i].option_name);
        setUseDateOption(true);
        continue;
      }
      const optionArr = [];
      optionArr.push(<option key={0}>선택</option>);

      const jsonArr = JSON.parse(options[i].option_value);
      for (let j = 0; j < jsonArr.length; j++) {
        optionArr.push(
          <option key={j + 1} value={jsonArr[j].price}>
            {jsonArr[j].op_name}{" "}
            {parseInt(jsonArr[j].price)
              ? `(+${commaFormat(jsonArr[j].price)}P)`
              : ""}
          </option>
        );
      }

      comp.push(
        <div key={i} className="row">
          <div className="col-md-12">
            <label className={styles.tit}>{options[i].option_name}</label>
            <select
              key={i}
              onChange={(e) => {
                let data = jsonArr[e.target.selectedIndex - 1];
                if (e.target.selectedIndex === 0) {
                  data = { op_name: "", price: 0 };
                }
                console.log("data: ", e.target.selectedIndex - 1);
                selectOption(options[i].option_no, data);
              }}
            >
              {optionArr}
            </select>
          </div>
        </div>
      );
    }
    setOptionComp(comp);
  };

  const buyProduct = () => {
    console.log("price: ", price);
    console.log("option: ", option);
    router.push({
      pathname: "/ggmall/payment",
      query: {
        pd_no: content.pd_no,
        options: JSON.stringify(option),
        total: totalPrice,
        product_kind: productKind,
        hope_date: format(selectedDay, "yyyy-MM-dd"),
      },
    });
  };

  useEffect(() => {
    renderOptions();
    setPrice((prev) => ({ ...prev, price: parseInt(content.price) }));
  }, [options]);

  useEffect(() => {
    if (price) {
      const total = Object.values(price).reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
      setTotalPrice(total);
    }
  }, [price]);

  return (
    <>
      <section className="news-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.items_image}>
                <img src={content.thumb_img} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.product_details_desc}>
                <h2>{content.pd_name}</h2>
                {optionComp}

                {useDateOption && (
                  <div key={`10`} className="hope_date">
                    <label className={styles.tit}>{dateOptionName}</label>
                    <input
                      type="text"
                      className="form-control"
                      value={format(selectedDay, "yyyy-MM-dd")}
                      readOnly
                    />
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
                  </div>
                )}
                {totalPrice > 0 && (
                  <>
                    <h2 className={styles.price}>
                      {commaFormat(totalPrice)}
                      <span>P</span>
                    </h2>
                    <div className={styles.btn_warp}>
                      <div
                        className={`default-btn ${styles.btn}`}
                        onClick={buyProduct}
                      >
                        구매하기
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GgmallItems;
