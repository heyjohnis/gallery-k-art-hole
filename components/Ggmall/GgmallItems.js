import Link from 'next/link';
import React, { useEffect, useState } from "react";
import styles from "./Ggmall.module.scss";

const GgmallItems = ({ content }) => {

  const [options, setOptions] = useState([]);

  useEffect( () => {
    console.log("content: ", content.option);
    if(content.option) {
      setOptions((content.option).split('|'));
      console.log("options: ", options);
    } 
  }, [content]);

  
  return (
    <>
      <section className="news-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.items_image}>
                <img src="/images/ggmall/product01.png"/>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.product_details_desc}>
                <h2>{content.pd_name}</h2>
                <p>브랜드: {content.brand}</p>
              { options.length > 0 &&
                <>
                <p>색상선택</p>
                <select>
                  {
                    options.map( option => <option key={option} value={option}>{option}</option>)
                  }
                </select>
                </>
              }
                <h2 className={styles.price}>713,000원</h2>
                <div className={styles.btn_warp}>
                  <Link href="#" className={`default-btn ${styles.btn}`}>구매하기</Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GgmallItems;