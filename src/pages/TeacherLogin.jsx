import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TeacherLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const passwordSectionRef = useRef(null);

  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    password: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    navigate("/settings");
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
      <div className="bg-gradient-to-br from-teal-700 to-blue-800 text-white flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome Teacher 👩‍🏫</h1>
          <p className="text-lg">
            Log in to manage students, track performance, and take attendance
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
            Teacher Login
          </h2>

          {/* Email */}
          <div className="mb-4">
            
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-blue-600 outline-none py-2 transition"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            
            <input
              type="tel"
              id="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              maxLength={10}
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-blue-600 outline-none py-2 transition"
              required
            />
          </div>

          {/* Password + Show/Hide + Reset */}
          <div className="mb-4 relative">
            
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-blue-600 outline-none py-2 transition"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-20 top-8 text-sm text-teal-600 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            <button
              type="button"
              onClick={handleResetClick}
              className="absolute right-2 top-8 text-sm text-teal-600 hover:underline"
            >
              Reset
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition"
          >
            Log In
          </button>

          {/* Extra Links */}
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-teal-600 font-medium hover:underline"
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
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-blue-600 outline-none py-2 transition"
              required
            />
            <input
              type="password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords({ ...passwords, new: e.target.value })
              }
              placeholder="New Password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-blue-600 outline-none py-2 transition"
              required
            />
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
              placeholder="Confirm New Password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-blue-600 outline-none py-2 transition"
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

export default TeacherLogin;
