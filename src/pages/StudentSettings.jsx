import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";

export default function StudentSettings() {
  const [profile, setProfile] = useState({
    name: "Sneha Patil",
    email: "sneha@example.com",
    avatar: null,
    password: "",
    className: localStorage.getItem("studentClass") || "FYBCA",
  });

  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const passwordSectionRef = useRef(null);

  useEffect(() => {
    if (showPasswordForm) {
      passwordSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showPasswordForm]);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("studentClass", profile.className);
    console.log("👤 Updated Profile:", profile);
    alert("Profile updated & saved!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match");
      return;
    }
    localStorage.setItem("studentPassword", passwords.new);
    console.log("🔒 Password Change:", passwords);
    alert("Password changed & saved!");
    setShowPasswordForm(false);
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarRemove = () => {
    setProfile({ ...profile, avatar: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-6 flex flex-col items-center"><br></br>
    <br></br>
      

      {/* Profile Update Form */}
      <form
        onSubmit={handleProfileSubmit}
        className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-500 space-y-4 mb-8 max-w-lg w-full"
      >
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaUser /> Profile Information
        </h2>

        {/* Avatar Section */}
        <div className="flex items-center space-x-4">
          <img
            src={profile.avatar || "/Avtar.png"}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover shadow"
          />
          <div className="space-x-2">
            <label className="bg-purple-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-purple-700">
              <FaImage className="inline mr-1" /> Upload
              <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
            </label>
            <button
              type="button"
              onClick={handleAvatarRemove}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>

        {/* Class Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Class</label>
          <select
            value={profile.className}
            onChange={(e) => setProfile({ ...profile, className: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="FYBCA">FYBCA</option>
            <option value="SYBCA">SYBCA</option>
            <option value="TYBCA">TYBCA</option>
          </select>
        </div>

        {/* Password with Show + Reset */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
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
            onClick={() => setShowPasswordForm(true)}
            className="absolute right-2 top-8 text-sm text-teal-600 hover:underline"
          >
            Reset
          </button>
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Save Profile
        </button>
      </form>

      {/* Password Change Form */}
      {showPasswordForm && (
        <form
          ref={passwordSectionRef}
          onSubmit={handlePasswordSubmit}
          className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-500 space-y-4 max-w-lg w-full"
        >
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaLock /> Change Password
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              value={passwords.new}
              onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition duration-300"
          >
            Save New Password
          </button>
        </form>
      )}
    </div>
  );
}