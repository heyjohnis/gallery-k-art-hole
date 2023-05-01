import Link from 'next/link';
import React from "react";
import styles from "./Ggmall.module.scss";

const Associate = () => {
  return (
    <>
      <section className="news-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="business-content text-center">
                <h2>그린갤러리 제휴서비스</h2>
                <p>그린갤러리와 함께 하는 다양한 제휴 혜택을 받아보세요.</p>
              </div>
            </div>
          </div>

          <div className="row mt-50">
            <div className="col-lg-4 col-md-6">
              <div className={styles.item_card}>
                <div>
                  <img src="/images/ggmall/gg1.png" alt="가입 고객 특전 사진" />
                </div>

                <div className={styles.items}>
                  <h3>가입 고객 특전</h3>
                  <Link href="#" className="default-btn">서비스 신청</Link> 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.item_card}>
                <div>
                  <img src="/images/ggmall/gg2.png" alt="리무진 서비스 사진" />
                </div>

                <div className={styles.items}>
                  <h3>리무진 서비스(자사)</h3>
                  <Link href="#" className="default-btn">서비스 신청</Link> 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.item_card}>
                <div>
                  <img src="/images/ggmall/gg3.png" alt="리무진 서비스 사진" />
                </div>

                <div className={styles.items}>
                  <h3>리무진 서비스(제휴)</h3>
                  <Link href="#" className="default-btn">서비스 신청</Link> 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.item_card}>
                <div>
                  <img src="/images/ggmall/gg4.png" alt="여수 1박 2일 숙박 서비스 사진" />
                </div>

                <div className={styles.items}>
                  <h3>여수 1박 2일 숙박 서비스</h3>
                  <Link href="#" className="default-btn">서비스 신청</Link> 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.item_card}>
                <div>
                  <img src="/images/ggmall/gg5.png" alt="여수 2박 3일 숙박 서비스 사진" />
                </div>

                <div className={styles.items}>
                  <h3>여수 2박 3일 숙박 서비스</h3>
                  <Link href="#" className="default-btn">서비스 신청</Link> 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.item_card}>
                <div>
                  <img src="/images/ggmall/gg6.png" alt="여수 요트 이용 사진" />
                </div>

                <div className={styles.items}>
                  <h3>여수 요트 이용</h3>
                  <Link href="#" className="default-btn">서비스 신청</Link> 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.item_card}>
                <div>
                  <img src="/images/ggmall/gg7.png" alt="프로 동반 라운드 서비스 사진" />
                </div>

                <div className={styles.items}>
                  <h3>프로 동반 라운드 서비스</h3>
                  <Link href="#" className="default-btn">서비스 신청</Link> 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.item_card}>
                <div>
                  <img src="/images/ggmall/gg8.png" alt="제주 1박 2일 숙박 서비스 사진" />
                </div>

                <div className={styles.items}>
                  <h3>제주 1박 2일 숙박 서비스</h3>
                  <Link href="#" className="default-btn">서비스 신청</Link> 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.item_card}>
                <div>
                  <img src="/images/ggmall/gg9.png" alt="제주 2박3일 숙박 서비스 사진" />
                </div>

                <div className={styles.items}>
                  <h3>제주 2박3일 숙박 서비스</h3>
                  <Link href="#" className="default-btn">서비스 신청</Link> 
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Associate;
