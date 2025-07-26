import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Page Components
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Header from "./components/Header";
import Home from "./pages/Home";
import CategoryJobs from "./pages/CategoryJobs";
import JobDetails from "./pages/JobDetails";
import AllJobs from "./pages/AllJobs";
import AboutUs from "./pages/AboutUs";
import Company from "./pages/Company";
import CompanyDetails from "./pages/CompanyDetails";
import PostJobs from "./pages/PostJobs"; // ✅ Make sure file name matches
import AdminDashboard from "./pages/admin/Dashboard";
function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, [location]);

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/jobs/:category" element={<CategoryJobs />} />
        <Route path="/jobs/:category/:id" element={<JobDetails />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/company" element={<Company />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/post-job" element={<PostJobs />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        

      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
