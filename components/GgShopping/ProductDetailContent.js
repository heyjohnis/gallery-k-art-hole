import Link from "next/link";
import React from "react";
import RecommendService from "../RecommendService";

export const ProductDetailContent = ({ user, content }) => {
  return (
    <div>
      <ul className="detail_menu">
        <li>
          <Link href="#product">상품소개</Link>
        </li>
        <li>
          <Link href="#delivery">배송문의</Link>
        </li>
      </ul>
      <div className="products_detail">
        <div
          id="product"
          className="detail_item"
          dangerouslySetInnerHTML={{
            __html: content?.info_contents,
          }}
        ></div>
        <div
          id="delivery"
          className="detail_item"
          dangerouslySetInnerHTML={{
            __html: content?.info_use,
          }}
        ></div>
        <RecommendService user={user} pdKind="shop" />
      </div>
    </div>
  );
};
