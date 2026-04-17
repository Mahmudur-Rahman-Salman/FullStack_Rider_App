import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-bounce-slow text-[8rem] md:text-[12rem] mb-8">
            🚚
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#1A1A2E] leading-tight">
            Deliveries + Rides:
            <br />
            <span className="text-[#FF6B00]">One Vehicle, Double Value</span>
          </h1>
          <p className="mt-6 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            The first smart logistics hybrid in Lagos. Send your packages and
            hitch a ride in the same trip for half the cost.
          </p>
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/"
              className="bg-[#FF6B00] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-100 hover:bg-[#e66000] transition"
            >
              📦 Send a Package
            </Link>
            <Link
              to="/"
              className="bg-[#FFD700] text-[#1A1A2E] px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-yellow-100 hover:bg-[#ffcc00] transition"
            >
              👥 Book a Ride
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
