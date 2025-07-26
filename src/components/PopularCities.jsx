import { useNavigate } from "react-router-dom"; // ✅ only if you're adding routing

const cities = [
  { name: "Hyderabad", image: "/cities/Hyderabad.webp", query: "hyderabad" },
  { name: "Bengaluru", image: "/cities/Bengaluru.jpg", query: "bengaluru" },
  { name: "Mumbai", image: "/cities/Mumbai.webp", query: "mumbai" },
  { name: "Delhi NCR", image: "/cities/Delhi.webp", query: "delhi" },
  { name: "Chennai", image: "/cities/Chennai.webp", query: "chennai" },
  { name: "Kolkata", image: "/cities/Kolkata.jpg", query: "kolkata" },
];

const PopularCities = () => {
  const navigate = useNavigate();

  const handleCityClick = (query) => {
    navigate("/all-jobs", { state: { searchQuery: query } });
  };

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Popular Cities
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto px-4">
        {cities.map((city) => (
          <div
            key={city.name}
            onClick={() => handleCityClick(city.query)}
            className="bg-gray-100 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-28 h-28 object-cover mb-4 border border-gray-200"
            />
            <span className="text-base font-medium text-gray-700 hover:text-violet-700 transition">
              {city.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCities;