import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


export const GolfCompleteRecommend = () => {

	return (
    <>
      <section className='complete_recomend_content'>
        <h3>추천서비스 <span className='total'>4</span></h3>
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
        <SwiperSlide>
          <article className='complete_recommend_items'>
            <div className='recommend_item_img'>
              <img src="/images/booking/recommend_01.png"></img>
            </div>
            <h4>개인 제트기 서비스</h4>
            <span className='item_name'>JETCAP</span>
            <span className='item_price'>별도문의</span>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='complete_recommend_items'>
            <div className='recommend_item_img'>
              <img src="/images/booking/recommend_02.png"></img>
            </div>
            <h4>리무진 서비스</h4>
            <span className='item_name'>벤트 스플린터</span>
            <span className='item_price'>600,000 P</span>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='complete_recommend_items'>
            <div className='recommend_item_img'>
              <img src="/images/booking/recommend_03.png"></img>
            </div>
            <h4>제주 스위트룸 이용권</h4>
            <span className='item_name'>제주 에어시티 호텔</span>
            <span className='item_price'>150,000 P</span>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='complete_recommend_items'>
            <div className='recommend_item_img'>
              <img src="/images/booking/recommend_04.png"></img>
            </div>
            <h4>골프연습장</h4>
            <span className='item_name'>쇼골프</span>
            <span className='item_price'>230,000 P</span>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='complete_recommend_items'>
            <div className='recommend_item_img'>
              <img src="/images/booking/recommend_01.png"></img>
            </div>
            <h4>개인 제트기 서비스</h4>
            <span className='item_name'>JETCAP</span>
            <span className='item_price'>별도문의</span>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='complete_recommend_items'>
            <div className='recommend_item_img'>
              <img src="/images/booking/recommend_02.png"></img>
            </div>
            <h4>리무진 서비스</h4>
            <span className='item_name'>벤트 스플린터</span>
            <span className='item_price'>600,000 P</span>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='complete_recommend_items'>
            <div className='recommend_item_img'>
              <img src="/images/booking/recommend_03.png"></img>
            </div>
            <h4>제주 스위트룸 이용권</h4>
            <span className='item_name'>제주 에어시티 호텔</span>
            <span className='item_price'>150,000 P</span>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='complete_recommend_items'>
            <div className='recommend_item_img'>
              <img src="/images/booking/recommend_04.png"></img>
            </div>
            <h4>골프연습장</h4>
            <span className='item_name'>쇼골프</span>
            <span className='item_price'>230,000 P</span>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  </>
	);
}