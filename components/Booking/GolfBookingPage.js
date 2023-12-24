import React from 'react';
import { GolfBookingAgreement } from './GolfBookingAgreement';
import GolfBookingForm from './GolfBookingForm';

export const GolfBookingPage = () => {
  return (
    <section className='container'>
      <div className='booking_content'>
        <GolfBookingForm/>
      </div>  
      <div>
        <GolfBookingAgreement/>
      </div>  
    </section>
  )
}
