import React, { useState } from "react";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
import { useNavigate } from "react-router-dom";


function JobSeeker() {
    const [activeTab, setActiveTab] = useState("applied");
    const navigate = useNavigate();


    const appliedJobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "TechCorp Inc.",
            location: "San Francisco, CA",
            type: "Full-time",
            time: "Applied 2 days ago",
            salary: "$80k - $120k/year",
        },

        {
            id: 3,
            title: "UX Designer",
            company: "DesignHub",
            location: "New York, NY",
            type: "Full-time",
            time: "Applied 1 week ago",
            salary: "$70k - $100k/year",
        },
        {
            id: 4,
            title: "Product Manager",
            company: "Innovate Labs",
            location: "Seattle, WA",
            type: "Full-time",
            salary: "$100k - $150k/year",
        },
    ];

    const savedJobs = [
        {
            title: "Backend Engineer",
            company: "DataFlow",
            location: "Austin, TX",
            type: "Remote",
            time: "3 days ago",
            salary: "$90k - $140k/year",
        },
        {
            title: "Product Manager",
            company: "Innovate Labs",
            location: "Seattle, WA",
            type: "Full-time",
            time: "1 day ago",
            salary: "$100k - $150k/year",
        },
    ];

    const countApplied = appliedJobs.length;
    const countSaved = savedJobs.length;

    const jobs = activeTab === "applied" ? appliedJobs : savedJobs;

    return (
        <>
            <Nav />
            <div className="jobseeker">

                {/* PROFILE */}
                <div className="profile-card">
                    <div className="profile-left">
                        <div className="avatar"></div>
                        <div>
                            <h2>John Doe</h2>
                            <p>Frontend Developer</p>
                            <span>San Francisco, CA</span>
                        </div>
                    </div>

                    <button className="browse-btn">Browse Jobs</button>
                </div>

                {/* STATS */}
                <div className="stats">
                    <div className="card">
                        <h3>{countApplied}</h3>
                        <p>Applied Jobs</p>
                    </div>
                    <div className="card">
                        <h3>{countSaved}</h3>
                        <p>Saved Jobs</p>
                    </div>
                    <div className="card">
                        <h3>0</h3>
                        <p>Interviews</p>
                    </div>
                </div>

                {/* TABS */}
                <div className="tabs">
                    <button
                        className={activeTab === "applied" ? "tab active" : "tab"}
                        onClick={() => setActiveTab("applied")}
                    >
                        Applied Jobs {(countApplied)}
                    </button>

                    <button
                        className={activeTab === "saved" ? "tab active" : "tab"}
                        onClick={() => setActiveTab("saved")}
                    >
                        Saved Jobs {(countSaved)}
                    </button>
                </div>

                {/* JOB LIST */}
                <div className="jobs" >
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="job-card"
                            onClick={() => navigate(`/job/${job.id}`)}
                        >
                            <h3>{job.title}</h3>
                            <p className="company">{job.company}</p>

                            <div className="meta">
                                <span>{job.location}</span>
                                <span>{job.type}</span>
                                <span>{job.time || "2 days ago"}</span>
                            </div>

                            <div className="salary">{job.salary}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default JobSeeker;