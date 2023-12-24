import React from 'react';
import { GolfBookingAgreement } from './GolfBookingAgreement';
import GolfBookingForm from './GolfBookingForm';

export const GolfBookingPage = () => {
  return (
    <section className='container'>

      <div className='booking_container row'>
        <div className='col-lg-6'>
          <GolfBookingForm/>
        </div>  
        <div className='col-lg-5'>
          <GolfBookingAgreement/>
        </div>
      </div>
    </section>
  )
}
