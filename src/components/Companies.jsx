import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companies = [
  { name: "Black Panther", image: "/companies/ALPHA.webp" },
  { name: "My Elegant Group", image: "/companies/ELEGANT.webp" },
  { name: "Prestige Group", image: "/companies/PRESTIGE.webp" },
  { name: "DLF", image: "/companies/DLF.webp" },
  { name: "AIH Geekz", image: "/companies/AIH.webp" },
  { name: "Tirumala Realty", image: "/companies/TIRUMALA.webp" },
];

const Companies = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 2 }
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h4 className="text-sm font-medium text-gray-500 uppercase mb-2 tracking-wider">
          COMPANYS
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Our Top Recruiters
        </h2>

        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow hover:shadow-lg p-4 transition duration-300">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-24 object-contain mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Companies;
