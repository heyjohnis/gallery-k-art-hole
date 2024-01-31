import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function GgshoppingListItems({ items }) {
  const router = useRouter();
  const productSale = "sale";

  const gotoDetail = (id) => {
    router.push(`/gg-mall/detail/${id}`);
  };

  return (
    <div className="shopping_list_container row">
      {items?.map((item, i) => (
        <div
          key={i}
          className="col-xxl-3 col-lg-3 col-6 cursor-pointer"
          onClick={() => gotoDetail(item.pd_no)}
        >
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
