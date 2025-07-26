import React, { useState } from "react";

const PostJobs = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full time",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    alert("Job posted successfully!");
    setFormData({
      title: "",
      company: "",
      location: "",
      type: "Full time",
      salary: "",
      description: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#1f5889]">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded"
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          <option value="Internship">Internship</option>
        </select>
        <input
          type="text"
          name="salary"
          placeholder="Salary (optional)"
          value={formData.salary}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded h-32"
        ></textarea>
        <button
          type="submit"
        className="bg-gray-400 text-white py-2 rounded hover:bg-black transition"

        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJobs;
