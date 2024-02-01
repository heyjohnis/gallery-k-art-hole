import React, { useEffect, useState } from "react";
import POST from "../utils/restApi";

export default function useCCList() {
  const [ccList, setCcList] = useState([]);
  try {
    POST("/reservation/cc-info", {}).then((res) => {
      setCcList(res.data);
    });
  } catch (error) {
    console.log(error);
  }
}
