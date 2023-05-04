import React from "react";
import Link from "next/link";

const teamData = [
  {
    image: "/images/ggmall/product01.png",
    name: "아이젠하임 말리 블랙휠스탠드골프백",
    price: "713,000",
    aosDelay: "100",
  },
];

const GgmallList = () => {
  
  const onClick = () => {
    console.log('제품페이지 이동');
  }

  return (
    <>
      <section className="team-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {teamData &&
              teamData.map((value, i) => (
                <div
                  className="col-lg-3 col-sm-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-team active" onClick={onClick}>
                    <div className="team-single-img">
                      <img src={value.image} alt="Image" />
                    </div>

                    <div className="team-content">
                      <h3>{value.name}</h3>
                      <p><span className='price'>{value.price}</span>원</p>
                    </div>
                    <Link className="default-btn" href="/ggmall/1">
                      구매하기
                    </Link>
                  </div>
                </div>
        
              ))}

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link">1</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">2</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">3</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
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

export default GgmallList;
