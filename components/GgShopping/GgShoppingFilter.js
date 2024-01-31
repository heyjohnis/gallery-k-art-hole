import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import MultiRangeSlider from "../Common/MultiRangeSilder";
import { useDebouncedCallback } from "use-debounce";

import { GgShopFilter } from "./GgShopFilter";
import { GgTourFilter } from "./GgTourFilter";
import { GgServiceFilter } from "./GgServiceFilter";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export default function GgShoppingFilter({ form, setForm, pdKind }) {
  const restForm = (e) => {
    e.preventDefault();
    setForm((prev) => ({
      ...prev,
      brands: "",
      keywords: "",
      start_price: "",
      end_price: "",
      search_word: "",
    }));
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
    document
      .querySelectorAll("input[type=text]")
      .forEach((el) => (el.value = ""));
  };

  const handlePriceRange = (data) => {
    debounced(data);
  };

  const debounced = useDebouncedCallback((data) => {
    setForm((prev) => ({
      ...prev,
      start_price: data.min,
      end_price: data.max,
    }));
  }, 1000);

  return (
    <>
      <div className="shopping_filter">
        <h2 className="total">
          <button onClick={restForm}>전체</button>
        </h2>
        {pdKind === "shop" && <GgShopFilter form={form} setForm={setForm} />}
        {pdKind === "tour" && <GgTourFilter form={form} setForm={setForm} />}
        {pdKind === "service" && (
          <GgServiceFilter form={form} setForm={setForm} />
        )}
        <section>
          <h2>가격</h2>
          <div className="multi_range_warp">
            <MultiRangeSlider
              min={10000}
              max={2000000}
              step={10000}
              onChange={({ min, max }) => handlePriceRange({ min, max })}
            />
          </div>
        </section>
      </div>
      {/* 모바일 필터 구조 */}
      <div className="shopping_filter_mb">
        <div className="search_mb">
          <Form.Control
            type="text"
            name="search_word"
            placeholder="Search"
            className="shopping_search"
          />
        </div>
        <div className="mb_reser_content">
          <section className="mb_reser_filter">
            <ToggleButtonGroup type="radio" name="term" defaultValue="">
              <ToggleButton
                id="product-radio-1"
                value=""
                className="btn_filter"
              >
                전체
              </ToggleButton>
              <ToggleButton
                id="product-radio-2"
                value=""
                className="btn_filter"
              >
                EISEN HEIM
              </ToggleButton>
              <ToggleButton
                id="product-radio-3"
                value=""
                className="btn_filter"
              >
                BOGNER
              </ToggleButton>
              <ToggleButton
                id="product-radio-4"
                value=""
                className="btn_filter"
              >
                PING
              </ToggleButton>
              <ToggleButton
                id="product-radio-5"
                value=""
                className="btn_filter"
              >
                YAMAHA
              </ToggleButton>
              <ToggleButton
                id="product-radio-6"
                value=""
                className="btn_filter"
              >
                Phi Golf
              </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup type="radio" name="types" defaultValue="">
              <ToggleButton
                id="producttypes-radio-1"
                value=""
                className="btn_filter"
              >
                전체
              </ToggleButton>
              <ToggleButton
                id="producttypes-radio-2"
                value=""
                className="btn_filter"
              >
                골프채
              </ToggleButton>
              <ToggleButton
                id="producttypes-radio-3"
                value=""
                className="btn_filter"
              >
                캐디백
              </ToggleButton>
              <ToggleButton
                id="producttypes-radio-4"
                value=""
                className="btn_filter"
              >
                보스턴백
              </ToggleButton>
              <ToggleButton
                id="producttypes-radio-5"
                value=""
                className="btn_filter"
              >
                골프웨어
              </ToggleButton>
              <ToggleButton
                id="producttypes-radio-6"
                value=""
                className="btn_filter"
              >
                스윙연습기
              </ToggleButton>
            </ToggleButtonGroup>
            {/* <MultiRangeSlider/> */}
          </section>
        </div>
      </div>
    </>
  );
}
