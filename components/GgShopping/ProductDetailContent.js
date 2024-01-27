import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const ProductDetailContent = ({ content }) => {
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
        <div id="delivery" className="detail_item">
          <h2>
            추천상품 <span>3</span>
          </h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            grabCursor={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <article className="complete_recommend_items">
                <div className="recommend_item_img">
                  <img src="/images/booking/recommend_01.png"></img>
                </div>
                <h4>개인 제트기 서비스</h4>
                <span className="item_name">JETCAP</span>
                <span className="item_price">별도문의</span>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="complete_recommend_items">
                <div className="recommend_item_img">
                  <img src="/images/booking/recommend_02.png"></img>
                </div>
                <h4>리무진 서비스</h4>
                <span className="item_name">벤트 스플린터</span>
                <span className="item_price">600,000 P</span>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
