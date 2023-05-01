import React from "react";
import Link from "next/link";

const NewsCard = () => {
  return (
    <>
      <section className="news-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news-details">
                    <img src="/images/news/news2.jpg" alt="뉴스썸네일" />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      2023.04.26
                    </li>
                  </ul>

                  <Link href="/news-details" className="news-tit">
                    <h3>갤러리K, 쇼골프와 골프회원권 ‘그린갤러리’ 공동 사업 위한 협력 체결</h3>
                  </Link>

                  <p>
                  갤러리K와 쇼골프는 지난 25일 신개념 프리미엄 골프 멤버십 ‘그린갤러리’ 공동 사업추진을 위해 사업협력계약을 체결했다고 밝혔다.
                  갤러리K 본사에서 진행된 이번 협약식에는 갤러리K의 허국현 대표와 쇼골프의 조성준 대표 등이 참여했으며, 양사는 골프장 예약 대행서비스와 상품에 대한 마케팅, 서비스 및 판매에 대해 협력을 약속했다.
                  </p>

                  <Link href="/news-details" className="read-more">
                    자세히 보기 <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news-details">
                    <img src="/images/news/news1.jpg" alt="뉴스썸네일" />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      2023.04.24
                    </li>
                  </ul>

                  <Link href="/news-details" className="news-tit">
                    <h3>갤러리K, 골프회원권 ‘그린갤러리’ 출시</h3>
                  </Link>

                  <p>
                  갤러리K는 골프에 미술을 더한 신개념 프리미엄 골프회원권 ‘그린갤러리’를 출시했다고 밝혔다.
                  그린갤러리는 골프와 미술이 결합된 신개념 상품으로 개인회원 전용인 ▲그린, ▲블루, 개인과 법인회원 모두 가능한 ▲레드, ▲퍼플, ▲블랙, ▲플래티넘의 총 6종으로 구성되어 있으며, 가입기간은 5년이다.
                  </p>

                  <Link href="/news-details" className="read-more">
                    자세히 보기 <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link href="#" className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </Link>
                    </li>

                    <li className="page-item active">
                      <Link href="#" className="page-link">
                        1
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        2
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        3
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsCard;
