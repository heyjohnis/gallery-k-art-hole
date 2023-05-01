import Link from 'next/link';
import React from "react";
import styles from "./Ggmall.module.scss";

const AssociateItems = () => {
  return (
    <>
      <section className="news-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.items_image}>
                <img src="/images/ggmall/gg_detail01.png"/>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.items_details_desc}>
                <h2>가입 고객 특전</h2>
                <p> 멤버십 가입 시 유명 브랜드 커스터마이징 골프백 등 차별화된 사은품을 증정합니다.</p>
                <h2 className={styles.price}>519,000</h2>
                <div className={styles.btn_warp}>
                  <Link href="#" className={`default-btn ${styles.btn}`}>서비스 신청</Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssociateItems;
