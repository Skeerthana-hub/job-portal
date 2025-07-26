import { useLocation } from "react-router-dom";

const JobDetails = () => {
  const { state: job } = useLocation();

  if (!job) return <p className="text-center pt-24 text-red-600">Job not found</p>;

  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto font-sans">
      {/* Gradient Header Card */}
      <div className="bg-gradient-to-r from-[#8c68c5] to-[#33174c] text-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 border">
        <img
          src={job.image}
          alt={job.title}
          className="w-28 h-28 object-contain bg-white p-2 rounded-lg border border-white shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold">{job.title}</h1>
          <div className="mt-2 space-x-4 text-sm md:text-base font-medium">
            <span>🕒 {job.type}</span>
            <span>📍 {job.location}</span>
            <span>💰 {job.pay}</span>
          </div>
        </div>
        <button className="bg-white text-purple-800 font-semibold px-6 py-2 rounded-md hover:bg-purple-100 transition">
          Apply Now
        </button>
      </div>

      {/* JD Details */}
      <div className="bg-[#F9FAFB] mt-6 rounded-xl shadow-sm p-6 text-gray-800 whitespace-pre-line leading-relaxed text-[15px] md:text-base border border-gray-200">
        {job.fullDetails}
      </div>
    </div>
  );
};

export default JobDetails;
