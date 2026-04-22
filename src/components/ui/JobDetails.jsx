import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

function JobDetails({ job }) {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  if (!job) return <h2>Job Not Found</h2>;

  const handleApply = () => {
    alert(`Applied for ${job.title} at ${job.company}`);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Job link copied!");
  };

  return (<>
     <Nav/>
    <div className="job-details-page">

      {/* Back */}
      <p className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Jobs
      </p>

      {/* TOP CARD */}
      <div className="job-details-header">
        <div className="header-left">
          <h1>{job.title}</h1>
          <p>{job.company}</p>

          <div className="job-meta">
            <span>📍 {job.location}</span>
            <span>💼 {job.type}</span>
            <span>⏱ {job.posted}</span>
            <span>💰 {job.salary}</span>
          </div>

          <button className="apply-btn" onClick={handleApply}>
            Apply Now
          </button>
        </div>

        <div className="header-actions">
          <button onClick={handleSave}>
            {saved ? "💜" : "🤍"}
          </button>
          <button onClick={handleShare}>🔗</button>
        </div>
      </div>

      {/* BIG CONTENT CARD */}
      <div className="job-content">

        <h2>Job Description</h2>
        <p>{job.description}</p>

        <h2>Responsibilities</h2>
        <ul className="purple-list">
          {job.responsibilities?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>Requirements</h2>
        <ul className="blue-list">
          {job.requirements?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>Benefits</h2>
        <ul className="green-list">
          {job.benefits?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <hr />

        <h2>About {job.company}</h2>
        <p>{job.about}</p>

        <button className="apply-btn bottom-btn" onClick={handleApply}>
          Apply Now
        </button>
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default JobDetails;