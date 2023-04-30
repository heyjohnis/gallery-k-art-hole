import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <section className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="business-content text-center">
                <h2>PRODUCT</h2>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div 
                  className="col-lg-4 col-sm-5 position-relative main-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <img src="/images/main/main_product1.png" alt="골프이미지"/>
                  <h2 className="main-product-item item1">프리미엄 골프 멤버십</h2>
                  <Link className="main-product-link" href="/golf"><span>자세히 보기</span></Link>
                </div>

                <div className="col-lg-1 col-sm-1">
                </div>

                <div 
                  className="col-lg-4 col-sm-5 position-relative main-product main-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <img src="/images/main/main_product2.png" alt="미술이미지"/>
                  <h2 className="main-product-item item2">미술품</h2>
                  <Link className="main-product-link" href="/art"><span>자세히 보기</span></Link>
                </div>

                <div 
                  className="col-lg-4 col-sm-5 position-relative main-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <img src="/images/main/main_product3.png" alt="요트 이미지"/>
                  <h2 className="main-product-item item3">포인트몰</h2>
                  <Link 
                    className="main-product-link" 
                    href="#"
                    onClick={() => alert('준비중입니다')}
                  >
                    <span>자세히 보기</span>
                  </Link>
                </div>

                <div className="col-lg-1 col-sm-1"></div>
                <div className="col-lg-4 col-sm-5"></div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
