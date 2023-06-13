'use client';
import React, { useState } from 'react';

export default function Subscribe() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleButtonClick() {
    if (email.trim() === '') {
      return; // No se permite enviar un correo electrónico vacío
    }

    try {
      setIsLoading(true);
      // Realiza una solicitud POST a la API de contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
      } else {
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <form className={`subscription ${isSubscribed ? 'done' : ''}`}>
          <input
            className="add-email"
            type="email"
            placeholder="subscribe@me.now"
            value={email}
            onChange={handleEmailChange}
          />
          <button className="submit-email" type="button" onClick={handleButtonClick}>
            <span className="before-submit">
              {isLoading ? 'Enviando..' : 'Subscribirse'}
            </span>
            <span className="after-submit">Subscripción enviada!</span>
          </button>
        </form>
      </div>
    </div>
  );
}
