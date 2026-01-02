import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    navigate("/Student-Dashboard");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome Student 🎓</h1>
          <p className="text-lg">
            Log in to access your dashboard and track your progress
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6 relative"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Student Login
          </h2>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 focus:border-teal-600 outline-none py-2 bg-transparent"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-sm text-teal-600 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-teal-600"
            >
              Email Address
            </label>
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <input
              type="tel"
              id="mobile"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 focus:border-teal-600 outline-none py-2 bg-transparent"
            />
            <label
              htmlFor="mobile"
              className="absolute left-0 -top-3.5 text-sm text-teal-600 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-teal-600"
            >
              Mobile Number
            </label>
          </div>

          {/* Password (only Show/Hide text toggle — no icon) */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              placeholder=" "
              className="peer w-full pr-16 border-b-2 border-gray-300 focus:border-teal-600 outline-none py-2 bg-transparent"
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-sm text-teal-600 transition-all
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
      peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-teal-600"
            >
              Password
            </label>

            {/* Only Show/Hide button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm text-teal-600 hover:underline pr-2"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:scale-105 transition"
          >
            Log In
          </button>

          {/* Extra Links */}
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-indigo-600 font-medium hover:underline"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
