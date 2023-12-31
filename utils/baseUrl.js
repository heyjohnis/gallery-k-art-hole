/* eslint-disable no-undef */
const env = process.env.NEXT_PUBLIC_SERVER;
console.log("env: ", env);
let baseUrl = "";
if (env === "production") baseUrl = "https://greengallery.kr:8086";
else if (env === "test") baseUrl = "https://greengallery.kr:8186";
else if (env === "dev") baseUrl = "https://greengallery.kr:8286";
else if (env === "local") baseUrl = "http://localhost:8086";
else baseUrl = "https://greengallery.kr:8286";

export default baseUrl;
