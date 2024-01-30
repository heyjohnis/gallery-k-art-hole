import Link from "next/link";
import React from "react";
import RecommendService from "../RecommendService";

export const ServiceDetailContent = () => {
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
        <div id="product" className="detail_item">
          <img src="/images/service/service_detail01.png" />
        </div>
        <div id="delivery" className="detail_item"></div>
        {/* <RecommendService user={user} pdKind="shop" /> */}
      </div>
    </div>
  );
};
