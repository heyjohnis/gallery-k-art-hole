import cookie from "js-cookie";
import axios from "axios";
import Router from "next/router";
import baseUrl from "../utils/baseUrl";

export async function POST(uri, data) {
  return commonApi(uri, data, "post");
}
export async function PUT(uri, data) {
  return commonApi(uri, data, "put");
}
export async function DELETE(uri, data) {
  return commonApi(uri, data, "delete");
}

async function commonApi(uri, data, method) {
  const token = cookie.get("medq_token");
  const url = `${baseUrl}${uri}`;
  return axios({
    method,
    url,
    headers: { Authorization: `Bearer ${token}` },
    data,
  })
    .then((response) => response)
    .catch((error) => {
      if (error.response.status === 401) {
        Router.push("/login");
      }
      if (error.response?.data?.error?.message) {
        alert(error.response.data.error.message);
      }
    });
}
