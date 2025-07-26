import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../auth/useAuth";
import logo from "../assets/logo.webp";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      loginAdmin();
      navigate("/admin/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen w-full font-inter relative overflow-hidden">
      {/* Background */}
      <img
        src="/loginside.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-20 py-10">
        
        {/* Left text */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-white animate-zoomIn text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg max-w-xl mx-auto md:mx-0">
            A Portal for Real Estate Professionals
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
            Discover jobs, hire talent, and grow your real estate career — all in one place.
          </p>
        </div>

        {/* Right form */}
        <div className="w-full md:w-[420px] bg-white/10 backdrop-blur-md border border-white/30 p-8 sm:p-10 rounded-2xl shadow-xl text-white">
          <div className="text-center mb-6">
            <img src={logo} alt="Logo" className="h-14 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold">Admin Login</h2>
            <p className="text-sm text-gray-300">Welcome back, please login</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Remember me + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-purple-300 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-2.5 rounded-lg text-base"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
