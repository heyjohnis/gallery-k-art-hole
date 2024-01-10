import React from 'react';

export const MyPoint = () => {

  const myPiontStatus = {
    buyCancle: "cancle",
    pointDeposit: "deposit",
  }

  return (
    <>
      <article className='complete_title mypoint_tit'>
        <img src="/images/mypage/ico_mypoint.png"/>
        <h2 className='mypoint_headline'>사용 가능 포인트</h2>
        <p className='mypoint_point'>1,234,567,890,000 P</p>
      </article>
      <section className='mypoint_content'>
        <section className='mypoint_info'>
          <h3>회원님의 이용현황</h3>
          <ul className='mypoint_info_list'>
            <li>
              <span className='tit'>총 연간 포인트</span>
              <span className='item'>1,234,567,890,000P</span>
            </li>
            <li>
              <span className='tit'>월별 혜택 횟수</span>
              <span className='item'>월 7회</span>
            </li>
            <li>
              <span className='tit'>연간 혜택 횟수</span>
              <span className='item'>연 83회</span>
            </li>
            <li>
              <span className='tit'>시작일</span>
              <span className='item'>2023년 5월 1일</span>
            </li>
            <li>
              <span className='tit'>종료일</span>
              <span className='item'>2028년 4월 30일</span>
            </li>
          </ul>
        </section>
        <section className='mypoint_history'>
          <h3>포인트 이용내역</h3>
          <ul className='mypoint_history_list'>
            <li>
              <article className='mypoint_history_items'>
                <span className='label'>구매확정</span>
                <div className='item'>
                  <h4>상품 : [GG 쇼핑] 휴테크 안마의자 G9 블랙에디션</h4>
                  <p>사용일시 : 2023. 08. 10 17:50</p>
                </div>
              </article>
              <div className='mypoint_history_amount'>- 3,480,000 P</div>
            </li>
            <li>
              <article className='mypoint_history_items'>
                <span className='label'>구매신청</span>
                <div className='item'>
                  <h4>상품 : [GG 쇼핑] 갤럭시 탭 S8 (Wi-Fi)</h4>
                  <p>사용일시 : 2023. 08. 10 17:50</p>
                </div>
              </article>
              <div className='mypoint_history_amount'>- 853,965 P</div>
            </li>
            <li>
              <article className='mypoint_history_items'>
                <span className={`label ${myPiontStatus.buyCancle}`}>구매취소</span>
                {/* TODO: 구매취소일때만  style 추가 ${myPiontStatus.buyCancle} */}
                <div className='item'>
                  <h4>상품 : [GG 쇼핑] 라부아뜨 CUBE 2.1 CORIAN 스피커</h4>
                  <p>사용일시 : 2023. 08. 10 17:50</p>
                </div>
              </article>
              <div className={`mypoint_history_amount ${myPiontStatus.pointDeposit}`}>+ 2,650,000 P</div>
              {/* TODO: 포인트 입금 +일때만 style 추가  */}
            </li>
            <li>
              <article className='mypoint_history_items'>
                <span className='label'>구매신청</span>
                <div className='item'>
                  <h4>상품 : [GG 쇼핑] 갤럭시 북3 Pro 360 512GB 그라파이트</h4>
                  <p>사용일시 : 2023. 08. 10 17:50</p>
                </div>
              </article>
              <div className='mypoint_history_amount'>- 2,278,520 P</div>
            </li>
            <li>
              <article className='mypoint_history_items'>
                <span className='label'>예약확정</span>
                <div className='item'>
                  <h4>상품 : [제휴서비스] 미디어 프로 골프 동반라운드</h4>
                  <p>사용일시 : 2023. 08. 10 17:50</p>
                </div>
              </article>
              <div className='mypoint_history_amount'>- 2,000,000 P</div>
            </li>
            <li>
              <article className='mypoint_history_items'>
                <span className='label'>예약신청</span>
                <div className='item'>
                  <h4>상품 : [제휴서비스] 더레인지 논현 레슨 바우처</h4>
                  <p>사용일시 : 2023. 08. 10 17:50</p>
                </div>
              </article>
              <div className='mypoint_history_amount'>- 115,000 P</div>
            </li>
            <li>
              <article className='mypoint_history_items'>
                <span className='label'>구매확정</span>
                <div className='item'>
                  <h4>상품 : [GG 투어] 마스터스 토너먼트</h4>
                  <p>사용일시 : 2023. 08. 10 17:50</p>
                </div>
              </article>
              <div className='mypoint_history_amount'>- 24,900,000 P</div>
            </li>
          </ul>

        </section>
      </section>
    
    </>
  )
}
