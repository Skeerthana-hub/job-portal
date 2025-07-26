import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-700">
          <Link to="/">RealEstateJobs</Link>
        </div>
        <ul className="flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-purple-600">
              Home
            </Link>
          </li>
          <li className="relative group cursor-pointer">
            <span className="hover:text-purple-600">About Us</span>
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-2 space-y-2 w-56 hidden group-hover:block z-50">
              <li>
                <Link to="/about#about" className="block px-4 py-2 hover:bg-gray-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#who-we-are" className="block px-4 py-2 hover:bg-gray-100">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/about#mission" className="block px-4 py-2 hover:bg-gray-100">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/about#vision" className="block px-4 py-2 hover:bg-gray-100">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link to="/about#core-values" className="block px-4 py-2 hover:bg-gray-100">
                  Core Values
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/jobs" className="hover:text-purple-600">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
