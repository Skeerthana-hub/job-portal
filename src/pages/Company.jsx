import { Link } from "react-router-dom";

const companies = [
  {
    id: 1,
    name: "My Elegant Group",
    location: "Hyderabad, Telangana",
    industry: "Real Estate & Construction",
    image: "/companies/ELEGANT.webp",
    description:
      "A trusted name in real estate delivering quality homes and commercial spaces for over a decade.",
  },
  {
    id: 2,
    name: "Black Panther Estates",
    location: "Mumbai, Maharashtra",
    industry: "Luxury Real Estate",
    image: "/companies/ALPHA.webp",
    description:
      "Specializing in premium luxury real estate and exclusive properties across India.",
  },
];

const Company = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">Our Companies</h1>
      <div className="space-y-10">
        {companies.map((company) => (
          <div
            key={company.id}
            className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={company.image}
                alt={company.name}
                className="w-40 h-40 object-contain border rounded-md"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{company.name}</h2>
                <p className="text-gray-600 mt-2">
                  <strong>Location:</strong> {company.location}
                </p>
                <p className="text-gray-600">
                  <strong>Industry:</strong> {company.industry}
                </p>
                <p className="text-gray-700 mt-4">{company.description}</p>
                <Link
                  to={`/company/${company.id}`}
                  className="inline-block mt-4 text-purple-700 hover:underline font-medium"
                >
                  Know More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
