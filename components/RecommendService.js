import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { POST } from "../utils/restApi";
import { commaFormat } from "../utils/number";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RecommendService({ user, pdKind, countTotal = 5 }) {
  const router = useRouter();
  const [goods, setGoods] = React.useState([]);
  const getRecommendService = () => {
    POST("/mall/rand", {
      pd_kind: pdKind,
      limit_cnt: countTotal,
      membership: user.membership,
      service_group: user.service_group,
    }).then((res) => {
      console.log("/mall/rand: ", res.data);
      setGoods(res.data);
    });
  };

  useEffect(() => {
    getRecommendService();
  }, []);

  return (
    <>
      <section className="complete_recomend_content">
        <h3>
          추천 {pdKind === "shop" ? "상품" : "서비스"}{" "}
          <span className="total">{countTotal}</span>
        </h3>
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {goods.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/ggmall/detail/service/${item.pd_no}`}>
                <article className="complete_recommend_items">
                  <div className="recommend_item_img">
                    <img src={item.thumb_img}></img>
                  </div>
                  <h4>{item?.pd_name}</h4>
                  <span className="item_name">{item?.brand}</span>
                  <span className="item_price">
                    {item?.price ? commaFormat(item?.price) : "별도문의"}
                  </span>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
