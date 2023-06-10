'use client';

import React, { useEffect } from 'react'
export default function Subscribe() {
  useEffect(() => {
    const submitButton = document.querySelector('.submit-email');
    const subscriptionForm = document.querySelector('.subscription');

    const handleMouseDown = (e) => {
      e.preventDefault();
      subscriptionForm.classList.add('done');
    };

    submitButton.addEventListener('mousedown', handleMouseDown);

    return () => {
      // Limpiar el evento cuando el componente se desmonte
      submitButton.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <form className="subscription">
          <input className="add-email" type="email" placeholder="subscribe@me.now" />
            <button className="submit-email" type="button">
              <span className="before-submit">Subscribe</span>
              <span className="after-submit">Thank you for subscribing!</span>
            </button>
        </form>
      </div>
    </div>
  )
}
