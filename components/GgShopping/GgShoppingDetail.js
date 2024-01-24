import React from 'react';
import { ProductDetailContent } from './ProductDetailContent';
import { ProductSaleInfo } from './ProductSaleInfo';

export default function GgShoppingDetail() {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 product_img">
          <img src="/images/ggshopping/product01.png" />
        </div>
        <div className="col-lg-8">
          <ProductSaleInfo/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-8">
          <ProductDetailContent/>
        </div>
      </div>
    </>
  );
}

