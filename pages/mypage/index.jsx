import React from 'react'
import PageBanner from '../../components/Common/PageBanner'

function Mypage() {
  return (
    <>
      <PageBanner
        pageTitle="마이페이지"
        homePageUrl="/mypage/"
        homePageText="My page"
        activePageText="My page"
      />
      <section className="container">
        <ul className='mypage_tab_menu'>
          <li className='active'>HOME</li>
          <li>예약조회</li>
          <li>주문ㆍ배송조회</li>
          <li>포인트 이용내역</li>
          <li>1:1 상담</li>
        </ul>
      </section>
    </>
  )
}

export default Mypage