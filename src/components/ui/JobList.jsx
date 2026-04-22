import React, { useState } from "react";
import JobCard from "./ui/JobCard";
import jobsData from "../data/JobsData";

function JobList() {
  const [visibleJobs, setVisibleJobs] = useState(2);

  const loadMore = () => {
    setVisibleJobs((prev) => prev + 2);
  };

  return (
    <div className="job-list">
      <div className="job-grid">
        {jobsData.slice(0, visibleJobs).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {visibleJobs < jobsData.length && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More Jobs
        </button>
      )}
    </div>
  );
}

export default JobList;