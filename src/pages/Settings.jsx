/*import React, { useState } from "react";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Sneha Patil",
    email: "sneha@example.com",
    password: "",
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Settings saved (connect to backend later)");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-700">Settings</h2>

     
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-600">Profile Details</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm text-slate-500 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="border border-slate-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-500 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="border border-slate-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-500 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              placeholder="New password"
              className="border border-slate-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-600">Preferences</h3>
        <div>
          <label className="block text-sm text-slate-500 mb-1">Theme</label>
          <select
            name="theme"
            value={profile.theme}
            onChange={handleChange}
            className="border border-slate-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
      >
        Save Changes
      </button>
    </div>
  );
}*/

import React, { useState } from 'react';

export default function Settings() {
  const [profile, setProfile] = useState({
    name: 'Sneha',
    email: 'sneha@example.com',
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setProfile({
      ...profile,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated settings:', profile);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
          <p className="text-gray-500">{profile.email}</p>
        </div>

        {/* Settings Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-6 md:col-span-2 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Notifications */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded border">
              <span className="text-gray-700 font-medium">Enable Notifications</span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={profile.notifications}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-10 h-6 bg-gray-300 rounded-full shadow-inner transition duration-300 ${profile.notifications ? 'bg-blue-500' : ''}`}>
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow transform transition duration-300 ${
                      profile.notifications ? 'translate-x-4' : 'translate-x-1'
                    }`}
                  ></div>
                </div>
              </label>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded border">
              <span className="text-gray-700 font-medium">Enable Dark Mode</span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="darkMode"
                  checked={profile.darkMode}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-10 h-6 bg-gray-300 rounded-full shadow-inner transition duration-300 ${profile.darkMode ? 'bg-purple-600' : ''}`}>
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow transform transition duration-300 ${
                      profile.darkMode ? 'translate-x-4' : 'translate-x-1'
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}