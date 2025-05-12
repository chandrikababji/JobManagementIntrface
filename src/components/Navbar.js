import React from 'react';
import './Navbar.css';

function Navbar({ onCreateJobClick }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/i2xnfkpkjo7aizrtmf0z"
          alt="Company Logo"
          style={{ height: '30px' }}
        />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Find Jobs</li>
        <li>Find Talents</li>
        <li>About us</li>
        <li>Testimonials</li>
        <button className="create-job" onClick={onCreateJobClick}>
          Create Jobs
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
