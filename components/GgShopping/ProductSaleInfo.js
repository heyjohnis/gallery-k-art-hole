import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { POST } from "../../utils/restApi";
import { GgQuantityComp } from "./GgQuantityComp";
import { set } from "date-fns";

export const ProductSaleInfo = ({ content, options }) => {
  const router = useRouter();
  const productSale = "sale";
  const [keywords, setKeywords] = useState([]);
  const [form, setForm] = useState({ content });
  const [unitOption, setUnitOption] = useState({ label: "수량", unit: "개" });
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
    setForm((prev) => ({ ...prev, ...content }));
    if (content?.pd_keyword) parseKeyword(content?.pd_keyword);
    if (["tour", "service"].includes(content?.pd_kind)) {
      setUnitOption({ label: "인원", unit: "명" });
    }
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
      <Table className="delivery_notice">
        <div dangerouslySetInnerHTML={{ __html: content.info_product }}></div>
      </Table>
      <GgQuantityComp
        setForm={setForm}
        maxQuantity={content.max_quantity}
        unitOption={unitOption}
      />
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
};
