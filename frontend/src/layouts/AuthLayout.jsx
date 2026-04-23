import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo/Logo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center  mb-3">
            <span className="text-3xl">🚚</span>
            <Logo />
          </div>
          <h1 className="text-xl font-bold text-gray-800">
            Parcel Delivery System
          </h1>
        </div>

        {/* Page Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
