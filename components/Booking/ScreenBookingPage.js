import React from 'react';
import { ScreenBookingAgreement } from './ScreenBookingAgreement';
import ScreenBookingForm from './ScreenBookingForm';

export const ScreenBookingPage = () => {
  return (
    <section className='container'>

      <div className='booking_container row'>
        <div className='col-lg-6 p-0'>
          <ScreenBookingForm/>
        </div>  
        <div className='col-lg-5 p-0'>
          <ScreenBookingAgreement/>
        </div>
      </div>
    </section>
  )
}
