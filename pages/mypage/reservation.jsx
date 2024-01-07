import React from 'react';
import PageBanner from "../../components/Common/PageBanner";
import Footer from '../../components/Layouts/Footer';
import { MobileMyBooking } from '../../components/NewMypage/MobileMyBooking';
import { PcMyBooking } from '../../components/NewMypage/PcMyBooking';


function Reservation() {
  return (
    <>
      <PageBanner
        pageTitle="예약확인"
        homePageUrl="/mypage/"
        homePageText="예약확인"
        activePageText="예약확인"
      />
      <section className="container">
        <ul className='mypage_tab_menu'>
          <li>HOME</li>
          <li className='active'>예약조회</li>
          <li>주문ㆍ배송조회</li>
          <li>포인트 이용내역</li>
          <li>1:1 상담</li>
        </ul>
        <div className='my_reservation_contanier'>
          {/* <PcMyBooking/> */}
          <MobileMyBooking/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Reservation