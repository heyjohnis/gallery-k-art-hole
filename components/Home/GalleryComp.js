import React from "react";
import Link from "next/link";
import styles from "./home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, EffectFade } from "swiper";
const LIST_ITEM_GALLERY = [
  {
    id: 1,
    img: "/images/home/gallery1.png",
    title: "월.매화-21-32",
    name: "이군우",
    discript:
      "매화가 진채를 만나 새롭게 태어나다! 자개와 칠보 재료를 통해 사대부들의 고결한 정신과 인간세계를 표현하였다.",
    link: "#",
  },
  {
    id: 2,
    img: "/images/home/gallery2.png",
    title: "영월의 가을",
    name: "김복동",
    discript:
      "풍경, 초상, 기독 성화 등을 주요 소재로 자연의 미감을 노래하는 작가",
    link: "#",
  },
  {
    id: 3,
    img: "/images/home/gallery3.png",
    title: "해바라기가 있는 정원3",
    name: "정미애",
    discript:
      "고향에 대한 그리움을 모티브로 담아내는 작가, 프랑스 루브르 박물관 및 그랑팔레 초대 전시 작가 ",
    link: "#",
  },
];
export default function GalleryComp() {
  return (
    <div
      className={`col-lg-6 col-md-6 ${styles.onePage} ${styles.sliderPageSection}`}
    >
      <div className={`${styles.titleWrap}`}>
        <h1>
          ART GALLERY<span>.</span>
        </h1>
        <p>
          갤러리케이에서 최정상 제휴 작가의 노력으로 완성된 원화 작품을
          제공합니다.
        </p>
      </div>
      <div>
        <Swiper
          effect="fade"
          navigation={false}
          spaceBetween={0}
          // pagination={{
          //   clickable: true,
          //   type: "bullets",
          // }}
          modules={[Pagination, A11y, Navigation, EffectFade]}
          className={`hero-swiper ${styles.swiper}`}
        >
          {LIST_ITEM_GALLERY.map((itemList) => (
            <SwiperSlide key={itemList.id}>
              <div className={`row ${styles.sildeSize}`}>
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className={`container`}>
                      <div className={`jumpx-slider-text overflow-hidden one`}>
                        <div className={`${styles.slideWrap}`}>
                          <div className={`${styles.sectionLeft}`}>
                            <h1>{itemList.title}</h1>
                            <span>{itemList.name}</span>
                            <p>{itemList.discript}</p>
                            <div className={`${styles.buttonWrap}`}>
                              <Link
                                href={`${itemList.link}`}
                                className={`${styles.defaultBtnBlack}`}
                              >
                                VIEW MORE
                              </Link>
                            </div>
                          </div>
                          <div className={`${styles.sectionRight}`}>
                            <img
                              src={`${itemList.img}`}
                              alt={`${itemList.title}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
