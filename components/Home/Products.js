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
                <span>PRODUCT</span>
                <h2>그린갤러리의 독보적인 상품구성</h2>
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
                  <img src="/images/main/main_product1.png" alt="골프이미지" />
                  <h2 className="main-product-item item1">
                    프리미엄 골프 멤버십
                  </h2>
                  <Link className="main-product-link" href="#">
                    <p>
                      해당 골프장 회원과
                      <br />
                      동일한 서비스 제공
                    </p>
                  </Link>
                </div>

                <div className="col-lg-1 col-sm-1"></div>

                <div
                  className="col-lg-4 col-sm-5 position-relative main-product main-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <img src="/images/main/main_product2.png" alt="미술이미지" />
                  <h2 className="main-product-item item2">미술품</h2>
                  <Link className="main-product-link" href="#">
                    <p>
                      한국미술협회에서
                      <br />
                      인증하는 정찰 원화 작품
                    </p>
                  </Link>
                </div>

                <div
                  className="col-lg-4 col-sm-5 position-relative main-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <img src="/images/main/main_product3.png" alt="요트 이미지" />
                  <h2 className="main-product-item item3">제휴서비스</h2>
                  <Link className="main-product-link" href="#">
                    <p>
                      패션, 쇼핑, 여행, 레저,
                      <br />
                      미식, 인테리어 등<br />
                      럭셔리라이프스타일
                    </p>
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
