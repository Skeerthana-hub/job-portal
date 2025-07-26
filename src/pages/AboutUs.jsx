// 📁 src/pages/AboutUs.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";

const coreValues = [
  {
    title: "Service Beyond Self",
    desc: "We prioritize the needs of our community and clients above personal gain, striving to make a positive impact through compassion, dedication, and meaningful action.",
  },
  {
    title: "Empowerment",
    desc: "We believe in nurturing talent, encouraging innovation, and providing opportunities for individuals and teams to grow, lead, and succeed.",
  },
  {
    title: "Accountability",
    desc: "We take full responsibility for our actions and outcomes, delivering on promises and owning both our successes and challenges.",
  },
  {
    title: "Sustainability",
    desc: "We are committed to environmentally and socially responsible practices that ensure long-term well-being for future generations and the planet.",
  },
  {
    title: "Integrity",
    desc: "We uphold the highest standards of honesty, ethics, and moral principles in all our decisions and interactions.",
  },
  {
    title: "Transparency",
    desc: "We foster trust through open communication, clarity in our processes, and a commitment to honesty in all that we do.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      delay: 100,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* 🖼 Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/about/banner.jpg"
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 👋 Welcome Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4"
          data-aos="fade-up"
        >
          Welcome to REALESTATE JOBS
        </h1>
        <p className="text-lg md:text-xl text-black-600" data-aos="fade-up">
          We are dedicated to bridging the gap between top talent and leading
          real estate companies, making hiring and job hunting easier, faster,
          and more professional.
        </p>
      </section>

      {/* 👉 Section 1: About Us */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-4">
            About REALESTATE JOBS
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">www.realestatejobs.co.in</span> – India’s first and only dedicated job portal exclusively designed for the real estate industry. Whether you are a job seeker looking to build a career in real estate or an employer searching for top talent, we are here to connect you with the right opportunities and resources.
          </p>
        </div>
        <div
          className="w-full h-80 bg-gray-200 rounded-xl shadow-md overflow-hidden"
          data-aos="fade-left"
        >
          <img
            src="/about/about1.jpg"
            alt="About REALESTATE JOBS"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 👉 Section 2: Who We Are */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div
          className="w-full h-80 bg-gray-200 rounded-xl shadow-md overflow-hidden order-2 md:order-1"
          data-aos="fade-right"
        >
          <img
            src="/about/about2.jpg"
            alt="Who We Are"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-cyan-700 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Real Estate Jobs, we understand the specialized needs of the real
            estate sector. From sales and marketing roles to technical and
            managerial positions, we cater to the entire spectrum of real estate
            job opportunities.
            <br /><br />
            Our platform is the brainchild of Vikrant Rathod, a recruitment
            expert with over 15 years of experience, who envisioned a
            one-stop destination for matching real estate professionals with
            companies.
          </p>
        </div>
      </section>

      {/* 👉 Section 3: Our Mission */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <div
          className="md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h2 className="text-4xl font-bold text-cyan-700 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-loose">
            At <span className="font-semibold">Real Estate Jobs</span>, our mission is to
            revolutionize the hiring process in the real estate industry by creating
            a focused platform where talented professionals meet the right companies.
            <br /><br />
            We are committed to making recruitment simple, fast, and efficient for both
            job seekers and employers. Whether you're a company seeking top-performing
            sales agents, telecallers, managers, or CRM executives — or a candidate
            aiming to grow your career — our goal is to serve as the bridge that connects
            both worlds meaningfully.
            <br /><br />
            Our platform ensures real estate businesses can build high-performing teams,
            while professionals find exciting and rewarding opportunities that match
            their expertise and goals.
          </p>
        </div>
        <div
          className="md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img
            src="/about/about3.webp"
            alt="Our Mission"
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* 👉 Section 4: Our Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row-reverse items-center gap-10">
        <div
          className="md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <h2 className="text-4xl font-bold text-cyan-700 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-loose">
            To be the go-to hub for real estate employment across India,
            driving innovation, trust, and collaboration in the hiring process.
            <br /><br />
            We envision a future where every real estate organization can hire confidently
            and every candidate finds the right opportunity to thrive — all under one trusted platform.
          </p>
        </div>
        <div
          className="md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <img
            src="/about/about4.jpg"
            alt="Our Vision"
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* 👉 Section 5: Our Core Values */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-800" data-aos="fade-up">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FaCheckCircle className="text-yellow-500 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
              {/* 👉 Section 6: What We Offer */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-800" data-aos="fade-up">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-gray-800">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-700">
                Exclusive Real Estate Focus
              </h3>
              <p>
                Unlike generic job portals, our platform is dedicated solely to the real estate sector,
                ensuring specialized opportunities for candidates and a highly targeted talent pool for employers.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-700">
                Comprehensive Job Listings
              </h3>
              <p>
                From entry-level positions to senior leadership roles, we cover all aspects of real estate,
                including sales, marketing, construction, HR, legal, operations, and more.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-700">
                Easy-to-Use Platform
              </h3>
              <p>
                Designed with simplicity and efficiency in mind, our portal makes job searching
                and hiring a hassle-free experience.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-700">
                Insights & Resources
              </h3>
              <p>
                We provide industry updates, career advice, and tips to help job seekers and employers
                stay ahead in the ever-evolving real estate landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      </section>
    </div>
  );
};

export default AboutUs;
