import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { POST } from "../../utils/restApi";
import { GgOptionsComp } from "./GgOptionsComp";

export function ProductSaleInfo({ content, options }) {
  const router = useRouter();
  const productSale = "sale";
  const [keywords, setKeywords] = useState([]);
  const [form, setForm] = useState({ content });
  const parseKeyword = (keyword) => {
    setKeywords(keyword.split(",").map((item) => item?.trim()));
  };

  const addCart = () => {
    POST("/mall/add/cart", form).then((res) => {
      if (res?.data?.insertId > 0) {
        alert("장바구니에 추가되었습니다.");
        router.push(`/gg-mall/${content?.pd_kind}/`);
      }
    });
  };

  const gotoOrder = () => {
    POST("/mall/add/cart", form).then((res) => {
      if (res?.data?.insertId > 0) {
        router.push(`/gg-mall/order/${content?.pd_kind}/`);
      }
    });
  };

  const setDiscountRate = (origin_price, price) => {
    const discount_rate = Math.round(
      100 - ((origin_price - price) / origin_price) * 100
    );
    return discount_rate;
  };

  useEffect(() => {
    console.log("content: ", content);
    console.log("options: ", options);
    setForm((prev) => ({ ...prev, ...content }));
    if (content?.pd_keyword) parseKeyword(content?.pd_keyword);
  }, [content]);

  return (
    <section className="product_sale_info">
      <span className="product_brand">{content?.brand}</span>
      <h1 className="product_name">{content?.pd_name}</h1>
      <div className="product_keyword">
        <span className="keyword_label">키워드</span>
        <ul className="keyword_hashtag">
          {keywords?.length > 0 &&
            keywords?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <div className={`price_info ${productSale}`}>
        {setDiscountRate(content?.origin_price, content?.price) < 100 ? (
          <>
            <span className="discount_rate">
              {setDiscountRate(content?.origin_price, content?.price)}%
            </span>
            <span className="price_original">
              {content?.price?.toLocaleString()} P
            </span>
            <span className="discount_price">
              {content?.origin_price?.toLocaleString()} P
            </span>
          </>
        ) : (
          <span className="price_original">
            {content?.price?.toLocaleString()} P
          </span>
        )}
      </div>
      <div className="delivery_notice">
        <div dangerouslySetInnerHTML={{ __html: content.info_product }}></div>
      </div>
      <GgOptionsComp content={content} options={options} setForm={setForm} />
      <div>
        총 {(form.price * form.quantity + form.option_price).toLocaleString()}
      </div>
      <div className="shopping_btn row">
        <button className="btn_cart col-5" onClick={addCart}>
          장바구니
        </button>
        <button className="btn_order col-5" onClick={gotoOrder}>
          주문하기
        </button>
      </div>
    </section>
  );
}
