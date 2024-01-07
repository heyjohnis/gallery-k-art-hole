import React from 'react';
import Footer from '../../components/Layouts/Footer';
import { MobileMyBookingDetail } from '../../components/NewMypage/MobileMyBookingDetail';

export default function Reserdetail() {
  return (
    <>
      <section className="container">
        <MobileMyBookingDetail/>
      </section>
      <Footer/>
    </>
  );
}

