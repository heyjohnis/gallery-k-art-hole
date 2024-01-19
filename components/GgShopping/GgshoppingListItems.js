import React from "react";
export default function GgshoppingListItems({ items }) {
  const productSale = "sale";

  return (
    <div className="shopping_list_container row">
      {items?.map((item, i) => (
        <div key={i} className="col-xxl-3 col-lg-4">
          <div className="items">
            <div className="list_img">
              <img src={`${item.thumb_img}`} alt="상품사진" />
            </div>
            <div className="list_product">
              <h3>{item.pd_name}</h3>
              <p>{item.brand}</p>
              <div className={`product_price_info ${productSale}`}>
                <span className="label_sale">SALE</span>
                <span className="product_sales">{item.discount_rate}% </span>
                <span className="product_price">
                  {item.price.toLocaleString()} P
                </span>
                <span className="product_ori">
                  {item?.origin_price?.toLocaleString()} P
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
