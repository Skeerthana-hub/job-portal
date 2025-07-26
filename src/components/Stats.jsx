const Stats = () => {
  return (
    <section className="bg-[#1f5889] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real Estate Jobs Stats</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Empowering talent in real estate by connecting passionate professionals to top industry employers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center items-center">
          {[
            { number: "1930+", label: "Candidates" },
            { number: "1660+", label: "Jobs Posted" },
            { number: "1120+", label: "Jobs Filled" },
            { number: "400+", label: "Companies" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="hover:scale-105 transition duration-300 ease-in-out"
            >
              <h3 className="text-4xl font-extrabold">{stat.number}</h3>
              <p className="text-sm text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
