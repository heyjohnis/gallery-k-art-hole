import React from "react";
import Link from "next/link";
import MyPageSidebar from './MyPageSidebar';
import MyPageInfo from './MyPageInfo';

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
              <MyPageInfo/>

              <div>
                <div>
                  <div className='d-flex justify-content-between mt-30'>
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
      </section>
    </>
  );
};

export default MyPageMain;
