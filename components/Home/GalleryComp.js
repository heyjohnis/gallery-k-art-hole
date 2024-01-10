import React from "react";
import Link from "next/link";
import styles from "./home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation, Pagination } from "swiper";
const LIST_ITEM_GALLERY = [
  {
    id: 1,
    img: "https://erp.galleryk.co.kr/download?filename=83c1abe6-b74c-4aff-9007-0453e59ae3bc.jpg&dir=green-prod-thumb&ofilename=thumnail_09.jpg",
    title: "월.매화-21-32",
    name: "이군우",
    discript:
      "매화가 진채를 만나 새롭게 태어나다! 자개와 칠보 재료를 통해 사대부들의 고결한 정신과 인간세계를 표현하였다.",
    link: "https://naver.com/",
  },
  {
    id: 2,
    img: "https://erp.galleryk.co.kr/download?filename=a827dba9-f02d-47fe-94ba-3d9c7bba3d91.jpg&dir=green-prod-thumb&ofilename=thumnail_39.jpg",
    title: "영월의 가을",
    name: "김복동",
    discript:
      "풍경, 초상, 기독 성화 등을 주요 소재로 자연의 미감을 노래하는 작가",
    link: "# ",
  },
  {
    id: 3,
    img: "https://erp.galleryk.co.kr/download?filename=f5d12522-0778-4946-b969-cb0b1da7e31a.jpg&dir=green-prod-thumb&ofilename=thumnail_08.jpg",
    title: "Dreaming2350130",
    name: "안말환",
    discript:
      "나의 나무는 일상의 짐을 내려놓고 편히 쉴 수 있는 신선한 숲, 가장 깨끗한 당신의 호흡이 되기를...",
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
          navigation={true}
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
          modules={[Pagination, A11y, Autoplay, Navigation]}
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
