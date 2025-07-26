import ImageCarousel from "../components/ImageCarousel";
import JobCategories from "../components/JobCategories";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopularCities from "../components/PopularCities";
import Stats from "../components/Stats";
import Companies from "../components/Companies";

const keywordToCategory = {
  hyderabad: "realestate-sales",
  tirupati: "realestate-sales",
  "my elegant": "realestate-sales",
  "channel partner": "channel-partner",
  accounting: "accounting",
  crm: "crm-executive",
  "digital marketing": "digital-marketing",
  hr: "hr-operations",
  operations: "hr-operations",
  telecaller: "telecaller",
  "web developer": "web-development",
  react: "web-development",
  developer: "web-development",
  // Add more keyword mappings as needed
};

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const lowerQuery = searchQuery.toLowerCase();
    const matchedCategory = Object.entries(keywordToCategory).find(([keyword]) =>
      lowerQuery.includes(keyword)
    );

    if (matchedCategory) {
      navigate(`/jobs/${matchedCategory[1]}`, { state: { searchQuery } });
    } else {
      navigate("/all-jobs", { state: { searchQuery } });
    }
  };

  return (
    <div className="pt-20 bg-gray-50">
      <ImageCarousel />

      <section className="text-center my-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Click to unlock your{" "}
          <span className="text-[#7e6e99]">DREAM REAL ESTATE</span> Jobs below
        </h1>
        <p className="text-gray-500 text-md max-w-2xl mx-auto">
          Explore job roles tailored to your real estate career path — from sales and marketing to operations and finance.
        </p>
      </section>

      <JobCategories />

      {/* 🔍 Search Bar */}
      <div className="flex justify-center my-12 px-4">
        <input
          type="text"
          placeholder="Search job title, location, or type..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-xl px-4 py-3 border border-gray-300 rounded-l-lg shadow focus:outline-none focus:ring-2 focus:ring-violet-600 text-lg"
        />
        <button
          onClick={handleSearch}
          className="px-6 bg-[#2947a2] text-white font-semibold rounded-r-lg hover:bg-[#080411] transition duration-300 ease-in-out hover:scale-105 text-lg"
        >
          Search
        </button>
      </div>

      {/* ✅ Move Popular Cities below the search bar */}
      <PopularCities />
      <Stats />
      <Companies />
    
    </div>
  );
};

export default Home;
