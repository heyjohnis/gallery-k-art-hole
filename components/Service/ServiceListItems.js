import React from "react";

export const ServiceListItems = () => {
  const productSale = "sale";
  return (
    <div className="shopping_list_container row">
      <div className="col-xxl-3 col-lg-4 cursor-pointer">
        <div className="items">
          <div className="list_img">
            <img
              src={`/images/service/service01.png`}
              width={523}
              height={523}
              alt="상품사진"
            />
          </div>
          <div className="list_product">
            <h3>쇼골프 아카데미 레슨 바우처</h3>
            <p>SHOW GOLF</p>
            <div
              className={`product_price_info ${
                productSale
                //  item.discount_rate > 0 ? productSale : ""
              }`}
            >
              <span className="label_sale">SALE</span>
              <span className="product_sales">10 % </span>
              <span className="product_price">862,200 P</span>
              <span className="product_ori">958,000 P</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
