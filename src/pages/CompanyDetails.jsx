import { useParams, Link } from "react-router-dom";

const companyData = {
  1: {
    name: "My Elegant Group",
    image: "/companies/ELEGANT.webp",
    location: "Hyderabad, Telangana",
    industry: "Real Estate & Construction",
    description: `My Elegant Group is a leading real estate developer known for constructing top-quality residential and commercial buildings across South India. 
They have successfully delivered more than 50+ real estate projects and continue to innovate in smart city development. They are committed to timely delivery, customer satisfaction, and high standards in design and architecture.`,
    contact: {
      email: "contact@myelegantgroup.in",
      phone: "+91-90000 12345",
    },
  },
  2: {
    name: "Black Panther Estates",
    image: "/companies/ALPHA.webp",
    location: "Mumbai, Maharashtra",
    industry: "Luxury Real Estate",
    description: `Black Panther Estates is a premium real estate firm specializing in luxury villas, penthouses, and beachfront properties. 
With over 25 years of experience, they have a strong portfolio across Mumbai, Goa, and Bangalore. Their mission is to deliver sophistication and luxury with sustainability and smart tech integration.`,
    contact: {
      email: "info@blackpantherestates.com",
      phone: "+91-80000 54321",
    },
  },
};

const CompanyDetails = () => {
  const { id } = useParams();
  const company = companyData[id];

  if (!company) {
    return (
      <div className="p-10 text-center text-xl text-red-600">
        Company not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-md border">
      <img
        src={company.image}
        alt={company.name}
        className="w-40 h-40 object-contain mb-6 mx-auto border"
      />
      <h1 className="text-3xl font-bold text-purple-800 text-center mb-2">{company.name}</h1>
      <p className="text-center text-gray-600 mb-6">{company.industry}</p>
      <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
        {company.description}
      </p>
      <div className="text-gray-800 space-y-2">
        <p><strong>📍 Location:</strong> {company.location}</p>
        <p><strong>📞 Phone:</strong> {company.contact.phone}</p>
        <p><strong>✉️ Email:</strong> {company.contact.email}</p>
      </div>
      <div className="mt-8 text-center">
        <Link to="/company" className="text-purple-700 font-medium hover:underline">
          ← Back to Companies
        </Link>
      </div>
    </div>
  );
};

export default CompanyDetails;
