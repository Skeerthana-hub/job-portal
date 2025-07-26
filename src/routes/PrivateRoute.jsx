import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const PrivateRoute = ({ children }) => {
  return useAuth() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
