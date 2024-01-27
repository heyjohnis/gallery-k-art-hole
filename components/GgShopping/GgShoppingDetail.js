import React from "react";
import Image from "next/image";
import { ProductDetailContent } from "./ProductDetailContent";
import { ProductSaleInfo } from "./ProductSaleInfo";

export default function GgShoppingDetail({ content, options }) {
  return (
    <>
      <div className="row">
        <div className="col-lg-5 p-0 product_img">
          <Image
            src={content?.thumb_img}
            width="350"
            height="350"
            alt={content?.pd_name}
          />
        </div>
        <div className="col-lg-7 p-0">
          <ProductSaleInfo content={content} options={options} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-7 p-0">
          <ProductDetailContent content={content} />
        </div>
      </div>
    </>
  );
}
