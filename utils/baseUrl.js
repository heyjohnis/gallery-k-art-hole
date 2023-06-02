/* eslint-disable no-undef */
const env = process.env.NEXT_PUBLIC_SERVER;
console.log("env: ", env);
let baseUrl = "https://greengallery.kr:8186";
if (env === "production") baseUrl = "https://greengallery.kr:8086";
if (env === "local") baseUrl = "http://localhost:8086";

export default baseUrl;
