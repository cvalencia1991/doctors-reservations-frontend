import React from 'react';

import ReservationForm from '../components/ReservationForm';
import doctorsDefault from '../imgs/doctors-form-background-default.jpg';

const backgroundStyle = {
  background: `url(${doctorsDefault}) no-repeat center center fixed`,
  backgroundSize: 'cover',
  backgroundColor: '#afd917',
  opacity: '0.7',
  backgroundBlendMode: 'multiply',
};

const AddReservation = () => (
  <div className="flex flex-col items-center" style={backgroundStyle}>
    <div className="w-3/4 h-full flex flex-col items-center justify-center text-white">
      <h2 className="text-xl font-bold">BOOK A DOCTOR APPOINTMENT</h2>
      <div className="w-3/4 border-b-2 border-white-100 my-4" />
      <p className="text-sm">
        Take care of your health, book a doctor&apos;s appointment today.
        Our expert team is ready to provide personalized
        care and answer any questions you may have.
        Don&apos;t wait, prioritize your well-being now.
      </p>
      <ReservationForm />
    </div>
  </div>
);

export default AddReservation;
