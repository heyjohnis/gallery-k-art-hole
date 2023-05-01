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
                  <Link href="#">
                    <img src="/images/blog/blog1.png" alt="Image" />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      2023.04.30
                    </li>
                  </ul>

                  <Link href="#">
                    <h3>행사 제목 입니다 행사 1 행사 1</h3>
                  </Link>

                  <p>
                  밤이 내린 우는 어머니, 많은 보고, 있습니다. 
                  애기 가득 풀이 벌써 이름자를 아침이 오는 있습니다. 
                  아이들의 잠, 이네들은 계십니다. 그리고 아름다운 토끼, 흙으로 우는 별 이름과, 거외다. 
                  당신은 무엇인지 경, 내린 지나고 별 아무 지나가는 계십니다.
                  </p>

                  <Link href="#" className="read-more">
                    자세히 보기 <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="#">
                    <img src="/images/blog/blog2.png" alt="Image" />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      2023.04.24
                    </li>
                  </ul>

                  <Link href="#">
                    <h3>갤러리K, 골프회원권 ‘그린갤러리’ 출시</h3>
                  </Link>

                  <p>
                  갤러리K는 골프에 미술을 더한 신개념 프리미엄 골프회원권 ‘그린갤러리’를 출시했다고 밝혔다.
                  그린갤러리는 골프와 미술이 결합된 신개념 상품으로 개인회원 전용인 ▲그린, ▲블루, 개인과 법인회원 모두 가능한 ▲레드, ▲퍼플, ▲블랙, ▲플래티넘의 총 6종으로 구성되어 있으며, 가입기간은 5년이다.
                  </p>

                  <Link href="#" className="read-more">
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
