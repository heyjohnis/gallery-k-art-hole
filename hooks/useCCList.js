import React, { useEffect, useState } from "react";
import POST from "../hooks/restApi";

export default function useCCList() {
  const [ccList, setCcList] = useState([]);
  try {
    POST("/reservation/cc-info", {}).then((res) => {
      console.log("res: ", res);
      setCcList(res.data);
    });
  } catch (error) {
    console.log(error);
  }
}
