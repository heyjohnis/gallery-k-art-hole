import React from "react";
import { REGION_LIST } from "../data/CommonCode";

export default function useRenderRegionOptions() {
  return REGION_LIST.map((item) => (
    <option key={item.id} value={item.id}>
      {item.data}
    </option>
  ));
}
