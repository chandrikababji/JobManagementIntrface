import React, { useState } from 'react';
import './JobFilters.css';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

function FilterBar() {
  const [jobType, setJobType] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState(65); // in thousands

  const handleJobTypeChange = (event) => setJobType(event.target.value);
  const handleLocationChange = (event) => setPreferredLocation(event.target.value);
  const handleSalaryChange = (event) => setSalaryRange(event.target.value);

  return (
    <div className="filter-bar">
      {/* Search Input */}
      <div className="input-group">
        <FaSearch className="icon" />
        <input 
          type="text" 
          placeholder="Search By Job Title, Role" 
          className="underline-input"
        />
      </div>

      {/* Location Input */}
      <div className="input-group">
        <FaMapMarkerAlt className="icon" />
        <input 
          type="text" 
          placeholder="Preferred Location" 
          value={preferredLocation}
          onChange={handleLocationChange}
          className="underline-input"
        />
      </div>

      {/* Job Type Dropdown */}
      <div className="input-group">
        <select 
          value={jobType} 
          onChange={handleJobTypeChange} 
          className="underline-input select-input"
        >
          <option value="">Job Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
      </div>

      {/* Salary Range */}
      <div className="salary-range">
        <label className="salary-label">Salary Per Month: 50k - 80k</label>
        <input 
          type="range" 
          min="50" 
          max="80" 
          step="5" 
          value={salaryRange}
          onChange={handleSalaryChange}
        />
      </div>
    </div>
  );
}

export default FilterBar;
