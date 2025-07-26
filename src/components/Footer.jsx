import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#153A5B] text-white py-10 px-4 md:px-20 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <img src="/logo.webp" alt="logo" className="w-40 mb-4" />
          <p className="text-sm">
            Welcome to Real Estate Jobs, Inc – India’s first and only dedicated
            job portal exclusively designed for the real estate industry.
            Whether you are a job seeker looking to build a career in real
            estate or an employer searching for top talent, we are here to
            connect you with the right opportunities and resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/jobs" className="hover:underline">Job Listings</a></li>
            <li><a href="/companies" className="hover:underline">Companies</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div>

        {/* Jobs by Category */}
        <div>
          <h2 className="text-lg font-bold mb-2">Jobs by Category</h2>
          <ul className="space-y-1 text-sm">
            <li>Real Estate Sales</li>
            <li>Channel Partners</li>
            <li>Tele Caller</li>
            <li>HR & Operations</li>
            <li>CRM Executive</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="text-sm font-semibold">Corporate Office:</p>
          <p className="text-sm">
            7th Floor, Block 2, My Home Hub, Madhapur, <br />
            Patrika Nagar, HITEC City, Hyderabad
          </p>
          <br />
          <p className="text-sm font-semibold">Bangalore Office:</p>
          <p className="text-sm">
            40/1A, 1st floor, Basappa Complex, <br />
            Lavelle Road, behind Rotary Club, <br />
            Bengaluru, Karnataka 560001
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-white/20 pt-6">
        <p className="text-sm">© 2024 Real Estate Jobs. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
