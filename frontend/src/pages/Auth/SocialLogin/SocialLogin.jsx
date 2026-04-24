import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "./../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInWIthGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      const result = await signInWIthGoogle();
      console.log("Google user:", result.user);
      navigate(location?.state || "/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="my-6 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      <button
        onClick={handleGoogle}
        type="button"
        className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer"
      >
        <FcGoogle className="text-xl" />
        <span className="text-gray-700 font-medium">Continue with Google</span>
      </button>
    </>
  );
};

export default SocialLogin;
