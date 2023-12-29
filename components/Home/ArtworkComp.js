import React from "react";
import { Section } from "react-fullpage";

export default function ArtworkComp() {
  return (
    <Section>
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
                        <div
                          className={`jumpx-slider-text overflow-hidden one`}
                        >
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
    </Section>
  );
}
