// src/components/JobList.jsx
import { jobs } from "../data/jobsData";
import JobCard from "./JobCard";

const JobList = () => {
  const category = "realestate-sales";
  const jobList = jobs[category];

  return (
    <div className="pt-24 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {jobList.map((job) => (
        <JobCard key={job.id} job={job} category={category} />
      ))}
    </div>
  );
};

export default JobList;
