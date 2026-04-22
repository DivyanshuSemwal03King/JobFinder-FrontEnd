import React from "react";
import { useParams } from "react-router-dom";
import jobsData from "../data/JobsData";

import JobDetails from "./JobDetails";

function JobDetailsPage() {
  const { id } = useParams();

  const job = jobsData.find((j) => j.id === Number(id));

  return <JobDetails job={job} />;
}

export default JobDetailsPage;