import React, { useState } from 'react';
import './JobForm.css';

function CreateJobForm() {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [salaryRange, setSalaryRange] = useState(50000);
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSalaryChange = (e) => {
    setSalaryRange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      jobTitle,
      companyName,
      location,
      jobType,
      salaryRange,
      applicationDeadline,
      jobDescription,
    });
  };

  return (
    <div className="create-job-form">
      <h2>Create Job Opening</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Full Stack Developer"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            placeholder="Amazon, Microsoft, Swiggy"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="Choose Preferred Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Job Type</label>
          <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
            <option value="">Choose Job Type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div className="form-group">
          <label>Salary Range</label>
          <input
            type="range"
            min="50000"
            max="1200000"
            step="10000"
            value={salaryRange}
            onChange={handleSalaryChange}
          />
          <div className="salary-display">₹{salaryRange.toLocaleString()} per month</div>
        </div>

        <div className="form-group">
          <label>Application Deadline</label>
          <input
            type="date"
            value={applicationDeadline}
            onChange={(e) => setApplicationDeadline(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Job Description</label>
          <textarea
            placeholder="Please share a description to let the candidate know more about the job role"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        <button type="submit">Publish</button>
        <button type="button" className="save-draft">Save Draft</button>
      </form>
    </div>
  );
}

export default CreateJobForm;
