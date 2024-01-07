import React from 'react'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layouts/Footer'
import { MyArtwork } from '../../components/NewMypage/MyArtwork'
import MyContract from '../../components/NewMypage/MyContract'
import { UserInfo } from '../../components/NewMypage/UserInfo'

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
        <div className="mypage_content">
          <div className="content_user_info">
            <UserInfo/>
          </div>
          <div className="content_items">
            <MyContract/>
            <MyArtwork/>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Mypage