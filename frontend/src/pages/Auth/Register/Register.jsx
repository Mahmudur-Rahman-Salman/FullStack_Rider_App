import React, { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // 🔥 1. get file
      const profileImg = data.photo[0];

      if (!profileImg) {
        throw new Error("No image selected");
      }

      // 🔥 2. create user first
      const result = await registerUser(data.email, data.password);

      // 🔥 3. prepare formData
      const formData = new FormData();
      formData.append("image", profileImg);

      // 🔥 4. upload to imgbb
      const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

      const res = await axios.post(image_API_URL, formData);

      const imageUrl = res.data.data.url;

      console.log("After Uploaded Image URL:", imageUrl);

      // 🔥 5. update Firebase profile
      if (result?.user) {
        await updateUserProfile({
          displayName: data.name,
          photoURL: imageUrl,
        });
      }

      console.log("Registered User:", result.user);

      reset();
    } catch (error) {
      console.error("Registration Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-500 mb-6">Sign up to get started</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Photo URL */}
          <div>
            <input
              type="file"
              {...register("photo", {
                required: "Photo URL is required",
              })}
              className="file-input file-input-bordered w-full rounded-xl bg-gray-100"
              placeholder="Profile Photo URL"
            />

            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full border px-4 py-3 rounded-xl"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              className="w-full border px-4 py-3 rounded-xl"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                  message:
                    "Password must have uppercase, lowercase, number, special character, and be 8+ chars",
                },
              })}
              className="w-full border px-4 py-3 rounded-xl pr-16"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <SocialLogin></SocialLogin>

        <p className="text-center mt-5 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
