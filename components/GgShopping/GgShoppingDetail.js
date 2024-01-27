import React from 'react';
import { ProductDetailContent } from './ProductDetailContent';
import { ProductSaleInfo } from './ProductSaleInfo';

export default function GgShoppingDetail() {
  return (
    <>
      <div className="row">
        <div className="col-lg-5 p-0 product_img">
          <img src="/images/ggshopping/product01.png" />
        </div>
        <div className="col-lg-7 p-0">
          <ProductSaleInfo/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-7 p-0">
          <ProductDetailContent/>
        </div>
      </div>
    </>
  );
}

