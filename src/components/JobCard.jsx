// src/components/JobCard.jsx
import { Link } from "react-router-dom";

const JobCard = ({ job, category }) => (
  <div className="border rounded-lg shadow p-4 bg-white">
    <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded" />
    <h3 className="text-lg font-semibold mt-2">{job.title}</h3>
    <p className="text-gray-600">{job.location}</p>
    <p className="text-blue-600 mt-1">{job.pay}</p>
    <Link to={`/jobs/${category}/${job.id}`} state={job}>
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        View Details
      </button>
    </Link>
  </div>
);

export default JobCard;
