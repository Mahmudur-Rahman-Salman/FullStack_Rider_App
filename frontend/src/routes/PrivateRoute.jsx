import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return children; 
};

export default PrivateRoute;
