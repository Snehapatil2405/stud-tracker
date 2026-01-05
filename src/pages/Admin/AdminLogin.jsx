import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaRedo } from "react-icons/fa";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const passwordSectionRef = useRef(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "admin@example.com" && formData.password === "admin123") {
      alert("Admin login successful!");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleResetClick = () => {
    setShowPasswordForm(true);
    setTimeout(() => {
      passwordSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match");
      return;
    }
    alert("Password changed!");
    setShowPasswordForm(false);
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome Admin 🛡</h1>
          <p className="text-lg">
            Log in to manage teachers, students, notices & analytics
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-6 overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Admin Login
          </h2>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Admin Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-600 outline-none py-2 transition"
              required
            />
          </div>

          {/* Password + Icon Buttons */}
          <div className="mb-4 relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-600 outline-none py-2 pr-16"
              required
              style={{
                // ✅ Hide unwanted browser default icons
                WebkitTextSecurity: showPassword ? "none" : "disc",
              }}
            />
            {/* Show/Hide Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-10 top-2 text-gray-500 hover:text-purple-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {/* Reset Icon */}
            <button
              type="button"
              onClick={handleResetClick}
              className="absolute right-2 top-2 text-gray-500 hover:text-purple-600"
            >
              <FaRedo />
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:scale-105 transition"
          >
            Log In
          </button>

          {/* Extra Links */}
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-purple-600 font-medium hover:underline"
            >
              Register
            </a>
          </p>
        </form>

        {/* Change Password Section */}
        {showPasswordForm && (
          <div
            ref={passwordSectionRef}
            className="bg-gradient-to-br from-indigo-100 to-purple-200 p-6 mt-6 rounded-xl shadow-md w-full max-w-md space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              🔐 Change Password
            </h3>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords({ ...passwords, current: e.target.value })
              }
              placeholder="Current Password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-600 outline-none py-2 transition"
              required
            />
            <input
              type="password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords({ ...passwords, new: e.target.value })
              }
              placeholder="New Password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-600 outline-none py-2 transition"
              required
            />
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
              placeholder="Confirm New Password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-600 outline-none py-2 transition"
            />
            <button
              type="button"
              onClick={handlePasswordSubmit}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition duration-300"
            >
              Save New Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;