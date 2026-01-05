import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  // ✅ State for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!fullName || !email || !password) {
      setError("All fields are required!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    // ✅ Save user temporarily (localStorage for demo)
    const userData = { fullName, email, role: "student" }; // role fixed
    localStorage.setItem("user", JSON.stringify(userData));

    // ✅ Redirect → Student Settings
    navigate("/student-dashboard/student-settings");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section – Visual */}
      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Join Student Tracker</h1>
          <p className="text-lg">
            Register now to connect, learn, and manage seamlessly
          </p>
        </div>
      </div>

      {/* Right Section – Form */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-6 overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Student Register
          </h2>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm text-center font-medium">
              {error}
            </p>
          )}

          {/* Full Name */}
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Full Name"
            required
            className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 transition"
          />

          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            required
            className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 transition"
          />

          {/* Password + Eye/EyeSlash */}
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
              className="w-full pr-10 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 transition"
              style={{
                WebkitTextSecurity: showPassword ? "none" : "disc",
              }}
            />
            {/* Eye/EyeSlash Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500 hover:text-purple-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
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
            <a
              href="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;