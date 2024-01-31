import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import MultiRangeSlider from "../Common/MultiRangeSilder";
import { useDebouncedCallback } from "use-debounce";

import { GgShopFilter } from "./GgShopFilter";
import { GgTourFilter } from "./GgTourFilter";
import { GgServiceFilter } from "./GgServiceFilter";

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
        <MultiRangeSlider
          min={10000}
          max={2000000}
          step={10000}
          onChange={({ min, max }) => handlePriceRange({ min, max })}
        />
      </section>
    </div>
  );
}
