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
                <div className={styles.info_wrap}><span className={styles.tit}>브랜드:</span>{content.brand}</div>
                { options.length > 0 &&
                  <>
                    <div className={styles.info_wrap}>
                      <span className={styles.tit}>컬러선택:</span>                
                      <select>
                        {
                          options.map( option => <option key={option} value={option}>{option}</option>)
                        }
                      </select>
                    </div>
                  </>
                }
                <div className={styles.info_wrap}><span className={styles.tit}>수량선택:</span></div>
                <h2 className={styles.price}>713,000<span>원</span></h2>
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