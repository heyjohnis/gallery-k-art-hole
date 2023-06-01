const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://greengallery.kr:8086"
    : "https://greengallery.kr:8186";

export default baseUrl;
