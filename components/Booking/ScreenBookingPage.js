import React from 'react';
import { ScreenBookingAgreement } from './ScreenBookingAgreement';
import ScreenBookingForm from './ScreenBookingForm';

export const ScreenBookingPage = () => {
  return (
    <section className='container'>

      <div className='booking_container row'>
        <div className='col-lg-7'>
          <ScreenBookingForm/>
        </div>  
        <div className='col-lg-5'>
          <ScreenBookingAgreement/>
        </div>
      </div>
    </section>
  )
}
