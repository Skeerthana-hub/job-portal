// src/pages/CategoryJobs.jsx
import { useParams, useNavigate } from "react-router-dom";

const jobs = {
  "realestate-sales": [
    {
      id: 1,
      title: "Director of Real Estate Sales",
      location: "My Elegant Group, HITEC City, Hyderabad",
      pay: "₹1,00,000 – ₹2,00,000/month",
      image: "/jobs/sale1.webp",
      link: "/jobs/realestate-sales/1"
    },
    {
      id: 2,
      title: "Senior Sales Manager",
      location: "Elegant Towers, Gachibowli",
      pay: "₹80,000 – ₹1,50,000/month",
      image: "/jobs/sale2.webp",
      link: "/jobs/realestate-sales/2"
    },
    {
      id: 3,
      title: "Property Consultant",
      location: "Elegant Heights, Financial District",
      pay: "₹40,000 – ₹70,000/month",
      image: "/jobs/sale3.webp",
      link: "/jobs/realestate-sales/3"
    },
    {
      id: 4,
      title: "Sales Executive",
      location: "Elegant Enclave, Hyderabad",
      pay: "₹30,000 – ₹50,000/month",
      image: "/jobs/sale4.webp",
      link: "/jobs/realestate-sales/4"
    },
  ]
};

const CategoryJobs = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const listings = jobs[category] || [];

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center capitalize">
        Jobs for {category.replace("-", " ")}
      </h2>

      {listings.length === 0 ? (
        <p className="text-center text-gray-500">No jobs found in this category.</p>
      ) : (
        <div className="space-y-10">
          {listings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row border border-gray-200"
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full md:w-1/3 h-64 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                  <p className="text-gray-700 mt-2 font-medium">{job.pay}</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => navigate(job.link)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition"
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

export default CategoryJobs;
