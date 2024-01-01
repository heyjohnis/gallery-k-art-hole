import cookie from "js-cookie";
import axios from "axios";
import Router from "next/router";
import baseUrl from "../utils/baseUrl";

export async function POST(uri, data) {
  return await commonApi(uri, data, "post");
}
export async function PUT(uri, data) {
  return await commonApi(uri, data, "put");
}
export async function DELETE(uri, data) {
  return await commonApi(uri, data, "delete");
}

async function commonApi(uri, data, method) {
  const token = cookie.get("medq_token");
  const url = `${baseUrl}${uri}`;
  return await axios({
    method,
    url,
    headers: { Authorization: `Bearer ${token}` },
    data,
  })
    .then((res) => {
      console.log("commonApi response: ", res);
      return res;
    })
    .catch((err) => {
      console.log("commonApi error: ", err.response.status);
      if (err.response.status === 401) {
        Router.push("/login");
      } else {
        return err;
      }
    });
}
