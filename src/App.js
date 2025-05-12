import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/JobFilters';
import JobCard from './components/JobCard';
import CreateJobForm from './components/JobForm';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleCreateJobClick = () => {
    setShowForm(true); // Show the form when button is clicked
  };
const jobs = [
  {
    logo: 'https://static.wixstatic.com/media/4f6c27_feed207e82294daa80e7ca62f83142ff~mv2.png/v1/fill/w_157,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4f6c27_feed207e82294daa80e7ca62f83142ff~mv2.png',
    title: 'Full Stack Developer',
    exp: '1-3 yr Exp',
    type: 'Onsite',
    salary: '12LPA'
  },
  {
    logo: 'https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg',
    title: 'Node Js Developer',
    exp: '1-3 yr Exp',
    type: 'Onsite',
    salary: '12LPA'
  },
  {
    logo: 'https://logos-marcas.com/wp-content/uploads/2020/11/Swiggy-Simbolo.png',
    title: 'UX/UI Designer',
    exp: '1-3 yr Exp',
    type: 'Onsite',
    salary: '12LPA'
  },
  {
    logo: 'https://static.wixstatic.com/media/4f6c27_feed207e82294daa80e7ca62f83142ff~mv2.png/v1/fill/w_157,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4f6c27_feed207e82294daa80e7ca62f83142ff~mv2.png',
    title: 'Full Stack Developer',
    exp: '1-3 yr Exp',
    type: 'Onsite',
    salary: '12LPA'
  },
  {
    logo: 'https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg',
    title: 'Node Js Developer',
    exp: '1-3 yr Exp',
    type: 'Onsite',
    salary: '12LPA'
  },
  {
    logo: 'https://logos-marcas.com/wp-content/uploads/2020/11/Swiggy-Simbolo.png',
    title: 'UX/UI Designer',
    exp: '1-3 yr Exp',
    type: 'Onsite',
    salary: '12LPA'
  },
  {
    logo: 'https://static.wixstatic.com/media/4f6c27_feed207e82294daa80e7ca62f83142ff~mv2.png/v1/fill/w_157,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4f6c27_feed207e82294daa80e7ca62f83142ff~mv2.png',
    title: 'Full Stack Developer',
    exp: '1-3 yr Exp',
    type: 'Onsite',
    salary: '12LPA'
  },
  {
    logo: 'https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg',
    title: 'Node Js Developer',
    exp: '1-3 yr Exp',
    type: 'Onsite',
    salary: '12LPA'
  }
];

  return (
    <div className="App">
      <Navbar onCreateJobClick={handleCreateJobClick} />
      <FilterBar />

      {showForm && (
        <div style={{ marginTop: '20px', marginBottom: '30px' }}>
          <CreateJobForm />
        </div>
      )}

      <div className="job-grid">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}

export default App;
