import React, { useEffect } from 'react'
import './Subscribe.css';
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
    <div class="subscribe-container">
      <div class="subscribe-content">
        <form class="subscription">
          <input class="add-email" type="email" placeholder="subscribe@me.now" />
            <button class="submit-email" type="button">
              <span class="before-submit">Subscribe</span>
              <span class="after-submit">Thank you for subscribing!</span>
            </button>
        </form>
      </div>
    </div>
  )
}
