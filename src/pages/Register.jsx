import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      alert("Please select a role!");
      return;
    }
    alert("Registered successfully!");
    navigate(role === "student" ? "/student-login" : "/teacher-login");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section – Visual */}
      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Join Student Tracker</h1>
          <p className="text-lg">Create your account and start managing students efficiently</p>
        </div>
      </div>

      {/* Right Section – Form */}
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Full Name "
              required
              className="peer w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2"
            />
            
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Email Address "
              required
              className="peer w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2"
            />
            
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password "
              required
              className="peer w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2"
            />
            
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-2 text-sm text-purple-600 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:scale-105 transition"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-purple-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;