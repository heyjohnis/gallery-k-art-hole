import React from 'react'
import Footer from '../../components/Layouts/Footer'
import { MobileMyBooking } from '../../components/NewMypage/MobileMyBooking'
import { PcMyBooking } from '../../components/NewMypage/PcMyBooking'


function Reservation() {
  return (
    <>
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