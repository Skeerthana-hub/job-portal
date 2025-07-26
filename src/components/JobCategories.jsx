import { useNavigate } from "react-router-dom";

const categories = [
  {
    label: "Accounting",
    image: "/categories/accounting.jpg",
    link: "accounting",
    description: "Ensure financial clarity.",
  },
  {
    label: "Realestate Sales",
    image: "/categories/agent.png",
    link: "realestate-sales",
    description: "Sell property faster.",
  },
  {
    label: "Channel Partner",
    image: "/categories/channel.png",
    link: "channel-partner",
    description: "Collaborate and earn.",
  },
  {
    label: "CRM Executive",
    image: "/categories/crm.png",
    link: "crm-executive",
    description: "Manage client relations.",
  },
  {
    label: "Digital Marketing",
    image: "/categories/digitalmarketing.jpg",
    link: "digital-marketing",
    description: "Promote and convert.",
  },
  {
    label: "HR & Operations",
    image: "/categories/Hr.webp",
    link: "hr-operations",
    description: "People & processes.",
  },
  {
    label: "Telecaller",
    image: "/categories/telecaller.webp",
    link: "telecaller",
    description: "Engage and convert.",
  },
  {
    label: "Web Development",
    image: "/categories/webdev.jpg",
    link: "web-development",
    description: "Build real estate tech.",
  },
];

const JobCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/jobs/${cat.link}`)}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group border border-gray-200 hover:border-blue-500"
          >
            <div className="p-5 flex flex-col items-center text-center">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 group-hover:border-blue-500 transition duration-300"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {cat.label}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategories;
