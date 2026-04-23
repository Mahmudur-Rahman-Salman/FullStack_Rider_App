import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <>
      <Link to="/" className="text-2xl font-bold ml-2">
        <span className="text-amber-500">RID</span>ER
      </Link>
    </>
  );
};

export default Logo;
