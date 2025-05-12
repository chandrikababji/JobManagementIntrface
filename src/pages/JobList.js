import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard"; // ✅ Import your JobCard
import { Container, Row, Col } from "react-bootstrap"; // ✅ Use Bootstrap grid

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/jobs/")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {jobs.map((job) => (
          <Col key={job.id} sm={12} md={6} lg={4} className="mb-4">
            <JobCard job={job} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobList;
