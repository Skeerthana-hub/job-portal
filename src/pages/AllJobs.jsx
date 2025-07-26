import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jobs from "../data/jobsData"; // ✅ Make sure this path is correct

const AllJobs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.state?.searchQuery?.toLowerCase() || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const matched = [];

    for (const category in jobs) {
      jobs[category].forEach((job) => {
        const searchable = `${job.title} ${job.location} ${job.type}`.toLowerCase();
        if (searchable.includes(query)) {
          matched.push({ ...job, category });
        }
      });
    }

    setResults(matched);
  }, [query]);

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Search results for <span className="text-gray-700">"{query}"</span>
      </h2>

      {results.length === 0 ? (
        <div className="text-center mt-20 text-gray-500 text-lg">
          <p>No matching jobs found.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition"
          >
            Go Back Home
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {results.map((job, index) => (
            <div
              key={`${job.category}-${job.id}-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row border border-gray-200 hover:shadow-lg transition"
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full md:w-1/3 h-64 object-contain bg-white"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-blue-600">
                    <span>🕒 {job.type}</span>
                    <span>📍 {job.location}</span>
                    <span>💰 {job.pay}</span>
                  </div>
                  <p className="text-gray-600 mt-2 line-clamp-3">{job.description}</p>
                </div>
                <div className="mt-4">
                  <button
                    className="bg-gray-700 text-white py-2 px-4 rounded-l-lg hover:bg-gray-800 transition"
                    onClick={() =>
                      navigate(`/jobs/${job.category}/${job.id}`, { state: job })
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllJobs;
