import React from "react";
import Image from "next/image";

export function ServiceListItems({ serviceItems }) {
  const productSale = "sale";
  console.log("serviceItems: ", serviceItems);
  return (
    <div className="shopping_list_container row">
      {serviceItems.map((item) => (
        <div key={item.item_no} className="col-xxl-3 col-lg-4 cursor-pointer">
          <div className="items">
            <div className="list_img">
              <Image
                src={item.thumb_img}
                width={523}
                height={523}
                alt={item.pd_name}
              />
            </div>
            <div className="list_product">
              <h3>{item.pd_name}</h3>
              <p>{item.brand}</p>
              <div
                className={`product_price_info ${
                  item.discount_rate > 0 && "sale"
                }`}
              >
                <span className="label_sale">SALE</span>
                {item.discount_rate > 0 && (
                  <>
                    <span className="product_sales">
                      {item.discount_rate.toLocaleString()} %
                    </span>
                    <span className="product_price">
                      {item.price.toLocaleString()} P
                    </span>
                    <span className="product_ori">
                      {item.origin_price.toLocaleString()} P
                    </span>
                  </>
                )}
                {item.discount_rate === 0 && (
                  <span className="product_price">
                    {item.price.toLocaleString()} P
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
