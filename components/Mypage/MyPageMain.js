import React from "react";
import Link from "next/link";
import CommentsArea from "./CommentsArea";
import MyPageSidebar from './MyPageSidebar';

const MyPageMain = () => {
  return (
    <>
      <section className="news-details-area ptb-100">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-12">
              <MyPageSidebar/>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="blog-details-desc">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-contact-info">
                      <p>잔여 이용 혜택</p>
                      <h3>월 5 회 / 연 80회</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="single-contact-info">
                      <p>월 잔여 포인트</p>
                      <h3>50000P</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="single-contact-info">
                      <p>주문/배송</p>
                      <h3>0건</h3>
                    </div>
                  </div>
                </div>


                <div className="post-navigation">
                  <div className="navigation-links justify-content-between">
                    <div>
                      <p>박선주 님은 그린갤러리 블랙 이용중이십니다. </p>
                    </div>

                    <div>
                      <p>최대 월 7회 / 연 83회</p>
                      <Link className="default-btn" href="#">혜택보기</Link>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <div>
                      <p>예약 내역(최근 5개)</p>
                      <Link href="#">전체보기</Link>
                    </div>
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-3">
                            <img src="/images/mypage/booking01.png" alt="골프장 사진"/>
                          </div>
                          <div className="col-9">
                            <p>2021.05.17 월 06:17 코스명: 밸리ㅣ18홀</p>
                            <span>세현  경기 용인</span>
                            <span>예약완료</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MyPageMain;
