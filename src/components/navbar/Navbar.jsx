import React from 'react'
import './navbar.css';

export default function Navbar() {
  return (
    <header className='primary-header'>
      <nav className='navbar container'>
        <a href='index.html' className='logo'> ONESTA </a>
        <ul className='nav-list'>
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/" className="nav-link">Pricing</a>
          </li>
          <li>
            <a href="/" className="nav-link">Dates</a>
          </li>
          <li>
            <a href="/" className="nav-link">Testimonials</a>
          </li>
          <li>
            <a href="/" className="nav-link">Contact</a>
          </li>
        </ul>
        <a href="/" className="button">Book now</a>
      </nav>
    </header>
  )
}
