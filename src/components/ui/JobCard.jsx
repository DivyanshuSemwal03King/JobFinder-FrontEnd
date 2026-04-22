import React from "react";
import { useNavigate } from "react-router-dom";
import jobIcon from "../../assets/jobIcon.png"; // ✅ fixed
import location2 from "../../assets/location2.png"; // ✅ fixed
import suitcase from "../../assets/suitcase.png"; // ✅ fixed

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="job-card" onClick={() => navigate(`/job/${job.id}`)}>
      <div className="job-card-top">
        {/* <div className="icon">💼</div> */}
        <img src={jobIcon} alt="Job Icon" className="icon" />
        <div className="job-info">
        <h3>{job.title}</h3>
          <p className="company">{job.company}</p>
        </div>

      </div>

    

      <div className="job-meta">
        <span> <img src={location2} alt="Location" className="meta-icons" /> {job.location}</span>
        <span> <img src={suitcase} alt="Suit Case" className="meta-icons" /> {job.type}</span>
        <span>⏱ 2 days ago</span>
      </div>

      <div className="salary">{job.salary}</div>
    </div>
  );
}

export default JobCard;