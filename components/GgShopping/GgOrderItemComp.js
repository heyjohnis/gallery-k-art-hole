import React from "react";
import Image from "next/image";

export function GgOrderItemComp({ item, deleteCartItem }) {
  return (
    <>
      <div className="product_info_items">
        <Image
          src={item.thumb_img}
          width="150"
          height="150"
          alt={item.pd_name}
        />
        <div className="product_info_item">
          <div>
            <h3>{item.pd_name}</h3>
            <p>배송비 {item.delivery_fee.toLocaleString()} P 차감</p>
            <span className="product_amount">수량 : {item?.quantity || 1}</span>
          </div>
          <div>
            <span className="product_price">
              {item.price.toLocaleString()} P
            </span>
          </div>
        </div>
      </div>
      <button onClick={() => deleteCartItem(item.item_no)}>삭제하기</button>
    </>
  );
}
