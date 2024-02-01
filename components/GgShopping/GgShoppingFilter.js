import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import MultiRangeSlider from "../Common/MultiRangeSilder";
import { useDebouncedCallback } from "use-debounce";

import { GgShopFilter } from "./GgShopFilter";
import { GgTourFilter } from "./GgTourFilter";
import { GgServiceFilter } from "./GgServiceFilter";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const shopKeywords = ["골프채", "골프백", "보스턴백", "골프웨어", "스윙연습기"];
const tourKeywords = ["메이저투어", "해외투어", "국내투어"];
const serviceKeywords = ["라운딩", "레슨", "연습장", "호텔", "여가", "의전"];

export default function GgShoppingFilter({ form, setForm, pdKind }) {
  const [keywords, setKeywords] = useState([]);
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

  const handleCheckBrand = (value) => {
    setForm((prev) => ({ ...prev, brands: value }));
  };

  const handleCheckKeyword = (value) => {
    setForm((prev) => ({ ...prev, keywords: value }));
  };

  useEffect(() => {
    const keys =
      pdKind === "shop"
        ? shopKeywords
        : pdKind === "tour"
        ? tourKeywords
        : serviceKeywords;
    setKeywords(keys);
  }, [pdKind]);
  return (
    <>
      <div className="shopping_filter">
        <h2 className="total">
          <button onClick={restForm}>전체</button>
        </h2>
        {pdKind === "shop" && (
          <GgShopFilter form={form} setForm={setForm} keywords={shopKeywords} />
        )}
        {pdKind === "tour" && (
          <GgTourFilter form={form} setForm={setForm} keywords={tourKeywords} />
        )}
        {pdKind === "service" && (
          <GgServiceFilter
            form={form}
            setForm={setForm}
            keywords={serviceKeywords}
          />
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
            {pdKind === "shop" && (
              <ToggleButtonGroup type="radio" name="term" defaultValue="">
                <ToggleButton
                  id="product-radio-1"
                  value=""
                  className="btn_filter"
                  onClick={() => handleCheckBrand("")}
                >
                  전체
                </ToggleButton>
                <ToggleButton
                  id="product-radio-2"
                  value="아이젠하임"
                  className="btn_filter"
                  onClick={() => handleCheckBrand("아이젠하임")}
                >
                  EISEN HEIM
                </ToggleButton>
                <ToggleButton
                  id="product-radio-3"
                  value="보그너"
                  className="btn_filter"
                  onClick={() => handleCheckBrand("보그너")}
                >
                  BOGNER
                </ToggleButton>
                <ToggleButton
                  id="product-radio-4"
                  value="핑골프"
                  className="btn_filter"
                  onClick={() => handleCheckBrand("핑골프")}
                >
                  PING
                </ToggleButton>
                <ToggleButton
                  id="product-radio-5"
                  value="야마하"
                  className="btn_filter"
                  onClick={() => handleCheckBrand("야마하")}
                >
                  YAMAHA
                </ToggleButton>
                <ToggleButton
                  id="product-radio-6"
                  value="파이골프"
                  className="btn_filter"
                  onClick={() => handleCheckBrand("파이골프")}
                >
                  Phi Golf
                </ToggleButton>
              </ToggleButtonGroup>
            )}

            <ToggleButtonGroup type="radio" name="types" defaultValue="">
              <ToggleButton
                id={`producttypes-radio`}
                value={""}
                className="btn_filter"
                onClick={() => handleCheckKeyword("")}
              >
                전체
              </ToggleButton>
              {keywords.map((keyword, index) => (
                <ToggleButton
                  key={index + 1}
                  id={`producttypes-radio-${index + 1}`}
                  value={keyword}
                  className="btn_filter"
                  onClick={() => handleCheckKeyword(keyword)}
                >
                  {keyword}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            {/* <MultiRangeSlider/> */}
          </section>
        </div>
      </div>
    </>
  );
}
