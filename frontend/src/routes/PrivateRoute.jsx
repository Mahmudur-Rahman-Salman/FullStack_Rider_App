import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
