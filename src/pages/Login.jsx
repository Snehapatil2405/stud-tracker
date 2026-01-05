import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password || !formData.role) {
      alert("All fields are required!");
      return;
    }

    alert("Login successful!");

    if (formData.role === "student") {
      // Student → Register page
      navigate("/register");
    } else if (formData.role === "teacher") {
      // Teacher → Teacher Dashboard
      navigate("/teacher-dashboard");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome 🎓</h1>
          <p className="text-lg">
            Log in to access your dashboard and track your progress
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center bg-gray-100 p-6 overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6 relative"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              required
              placeholder=" "
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="peer w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-2 bg-transparent"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-sm text-indigo-600 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600"
            >
              Email Address
            </label>
          </div>

          {/* Password + Eye/EyeSlash */}
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              placeholder=" "
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="peer w-full pr-10 border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-2 bg-transparent"
              style={{
                WebkitTextSecurity: showPassword ? "none" : "disc",
              }}
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-sm text-indigo-600 transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600"
            >
              Password
            </label>

            {/* Eye/EyeSlash Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500 hover:text-indigo-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
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