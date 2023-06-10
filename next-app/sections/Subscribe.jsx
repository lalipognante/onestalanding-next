'use client';

import React, { useState } from 'react'
export default function Subscribe() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleButtonClick = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <form className={`subscription ${isSubscribed ? 'done' : ''}`}>
          <input className="add-email" type="email" placeholder="subscribe@me.now" />
            <button className="submit-email" type="button" onClick={handleButtonClick}>
              <span className="before-submit">Subscribe</span>
              <span className="after-submit">Thank you for subscribing!</span>
            </button>
        </form>
      </div>
    </div>
  )
}
