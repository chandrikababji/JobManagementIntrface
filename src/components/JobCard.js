import React from 'react';
import './JobCard.css';
import { FaUserTie, FaBuilding, FaLayerGroup } from 'react-icons/fa'; // icons

function JobCard({ logo, title, exp, type, salary }) {
  return (
    <div className="job-card">
      <div className="posted-time">24h Ago</div>
      <div className="company-logo">
        <img src={logo} alt="Company" />
      </div>
      <h3>{title}</h3>
      <div className="job-info">
        <span><FaUserTie /> {exp}</span>
        <span><FaBuilding /> {type}</span>
        <span><FaLayerGroup /> {salary}</span>
      </div>
      <ul className="desc">
        <li> A user-friendly interface lets you browse stunning photos and videos</li>
        <li> Filter destination based on interests and travel style, and create personalized</li>
      </ul>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
}

export default JobCard;
