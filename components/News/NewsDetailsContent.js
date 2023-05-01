import React from "react";
import NewsSidebar from "./NewsSidebar";
import Link from "next/link";
import CommentsArea from "./CommentsArea";

const NewsDetailsContent = () => {
  return (
    <>
      <section className="news-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    src="/images/news/news1.jpg"
                    alt="Image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        2023.04.24 16:24
                      </li>
                      <li>
                        강석봉 기자
                      </li>
                    </ul>
                  </div>

                  <h3>갤러리K, 골프회원권 ‘그린갤러리’ 출시</h3>

                  <p>
                    갤러리K는 골프에 미술을 더한 신개념 프리미엄 골프회원권 ‘그린갤러리’를 출시했다고 밝혔다.
                  </p>

                  <p>
                  그린갤러리는 골프와 미술이 결합된 신개념 상품으로 개인회원 전용인 ▲그린, ▲블루, 
                  개인과 법인회원 모두 가능한 ▲레드, ▲퍼플, ▲블랙, ▲플래티넘의 총 6종으로 구성되어 있으며, 가입기간은 5년이다.
                  </p>
                  <p>
                  특히 골프 이용 스타일에 따라 보증금과 골프 이용 혜택 (그린피 지원금) 금액을 선택할 수 있으며, 
                  멤버십 가입 금액의 30%와 50%에 해당하는 미술품을 고객에게 증정한다.
                  </p>
                  <p>
                    또한 골프 이용 혜택을 포인트로 전환하여 골프 이용 뿐만 아니라 그린갤러리 멤버십 포인트몰에서 보다 
                    다양한 방면으로 사용이 가능하다.
                  </p>
                  <p>
                    갤러리K 손대웅 부대표는 “미술의 대중화를 위해 노력해 온 갤러리K에서 미술품과 골프에 관심이 있는 고객을 위해 
                    골프와 미술이 결합된 신개념 상품을 출시하게 되었다”며 “이번 ‘그린갤러리’ 출시를 통해 미술품의 예술적 가치에 
                    경제적 가치를 더해 한국미술의 대중화에 앞장서겠다”고 밝혔다.
                  </p>

                  <p>
                    한편, 갤러리K는 ‘그린갤러리’ 출시이벤트로 가입 고객에게는 세계 유명 브랜드 커스터마이징 골프백을 증정하며, 
                    황금 네임택, 아트 골프공 등 다양한 가입 선물도 제공한다.
                  </p>

                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="bx bx-left-arrow-alt"></i> 이전기사
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="#">
                        다음기사 <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetailsContent;
