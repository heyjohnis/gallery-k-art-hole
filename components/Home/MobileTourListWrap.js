/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper";
import styles from "./MobileMain.module.scss";
import { commaFormat } from "../../utils/number";

const MainListWrap = ({ items }) => {
  return (
    <>
      <div className={`${styles.slideSec}`}>
        <div className={`${styles.slideWrap}`}>
          <Swiper
            slidesPerView={"auto"}
            navigation={true}
            loop={false}
            spaceBetween={0}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            //  modules={[Pagination, A11y, Autoplay, Navigation]}
            modules={[A11y, Autoplay, Navigation]}
            className={`hero-swiper ${styles.swiper}`}
          >
            {items?.map((item, i) => (
              <SwiperSlide key={i} className={`${styles.swiperSlide}`}>
                <Link href={`/ggmall/detail/${item.pd_kind}/${item.pd_no}`}>
                  <div className={`${styles.slideLi}`}>
                    <img
                      className={`${styles.slideImg}`}
                      src={item.thumb_img}
                      alt={item.pd_name}
                    />
                    <h3 className={`${styles.slideTitle}`}>{item.pd_name}</h3>
                    <span className={`${styles.slideText}`}>
                      {item.info_short}
                    </span>
                    <span className={`${styles.slidePoint}`}>
                      {item.price === 0
                        ? `가격별도문의`
                        : commaFormat(item?.price) + "P"}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* <div className={`col col-lg-12 col-md-12 ${styles.itemListWrap}`}>
        <ul className={`row col-lg-12 col-md-12 ${styles.itemListUl}`}>
          {LIST_ITEM.map((itemList) => (
            <li className={`col col-lg-4 col-md-12 ${styles.itemListLi}`}>
              <Link href={`${itemList.link}`}>
                <div
                  className={
                    itemList.discount === 0
                      ? `${styles.img}`
                      : `${styles.imageWrap}`
                  }
                >
                  <img src={itemList.img} alt={itemList.title} />
                </div>
                <div>
                  <h4>{itemList.title}</h4>
                  <span className={`${styles.discript}`}>
                    {itemList.discript
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <div>
                    <span
                      className={
                        itemList.discount === 0
                          ? `${styles.displayNone}`
                          : `${styles.discountPercent}`
                      }
                    >
                      {itemList.discount}%
                    </span>
                    <span>
                      {itemList.point === 0
                        ? `가격별도문의`
                        : (itemList.point * (1 - itemList.discount / 100))
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      {itemList.point === 0 ? "" : " P"}
                    </span>
                    <span
                      className={
                        itemList.discount === 0
                          ? `${styles.displayNone}`
                          : `${styles.discountPoint}`
                      }
                    >
                      {itemList.point
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      &nbsp;P
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default MainListWrap;
