import React, { useState } from "react";
import JobCard from "./ui/JobCard";
import jobsData from "./data/JobsData";

import { Link } from "react-router-dom";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";

function Jobs() {
  const [visibleJobs, setVisibleJobs] = useState(4);
  const [searchTitle, setSearchTitle] = useState("");
  const [location, setLocation] = useState("");

  const loadMore = () => {
    setVisibleJobs((prev) => prev + 2);
  };

  // 🔍 Filter Logic
  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  });

  return (
    <>
    <Nav/>
    <div className="jobs-page">
      
      {/* 🔷 HEADER */}
      <div className="jobs-header">
        <h1>Find Your Next Job</h1>
        <p>Explore {filteredJobs.length} available positions</p>
      </div>

      {/* 🔍 SEARCH BAR */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Job title or keyword"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className="filter-btn">Filters</button>
      </div>

      {/* 💼 JOB CARDS */}
      <div className="job-grid">
        {filteredJobs.slice(0, visibleJobs).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* ⬇ LOAD MORE */}
      {visibleJobs < filteredJobs.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMore}>
            Load More Jobs
          </button>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default Jobs;