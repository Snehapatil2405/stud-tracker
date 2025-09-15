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
/*import React, { useState } from 'react';

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
       
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
          <p className="text-gray-500">{profile.email}</p>
        </div>

        
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-6 md:col-span-2 space-y-6"
        >
         
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

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
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
}*/

/*import React from "react";

export default function Settings({ darkMode, setDarkMode }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">⚙️ Settings</h2>

   
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-3">👤 Profile</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Save Changes
          </button>
        </form>
      </div>

     
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-3">🌙 Preferences</h3>
        <div className="flex items-center justify-between mb-3">
          <span>Enable Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="w-5 h-5 accent-indigo-600"
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Enable Notifications</span>
          <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
        </div>
      </div>

      
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-3">🔐 Account</h3>
        <button className="w-full px-4 py-2 mb-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
          Change Password
        </button>
        <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  );
}


/*import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">⚙ Settings</h1>

      
      <div className="flex space-x-4 border-b mb-6">
        {["profile", "preferences", "notifications", "security"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 font-medium capitalize ${
              activeTab === tab
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow-md">
        {activeTab === "profile" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">👤 Profile Settings</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 rounded"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeTab === "preferences" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🎨 Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Enable Dark Mode</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Show Dashboard Tips</span>
              </label>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🔔 Notifications</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Email Attendance Alerts</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Performance Reports</span>
              </label>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🔒 Security</h2>
            <form className="space-y-4">
              <input
                type="password"
                placeholder="Old Password"
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border p-2 rounded"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Update Password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;*/

/*import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">⚙ Settings</h1>

      
      <div className="flex space-x-4 border-b mb-6">
        {["profile", "preferences", "notifications", "security"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 font-medium capitalize ${
              activeTab === tab
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

     
      <div className="bg-white p-6 rounded-lg shadow-md">
        {activeTab === "profile" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">👤 Profile Settings</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 rounded"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeTab === "preferences" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🎨 Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Enable Dark Mode</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Show Dashboard Tips</span>
              </label>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🔔 Notifications</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Email Attendance Alerts</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Performance Reports</span>
              </label>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🔒 Security</h2>
            <form className="space-y-4">
              <input
                type="password"
                placeholder="Old Password"
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border p-2 rounded"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Update Password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;*/

/*import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully! 🎉");
  };

  return (
    <div className="space-y-6 p-6">
      <Toaster position="top-right" />

      <h2 className="text-3xl font-bold mb-4">⚙️ Settings</h2>

      
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold mb-3">👤 Profile</h3>

        <div className="flex items-center gap-6 mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full border shadow"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Change Photo
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSave}>
          <div>
            <label className="block text-sm text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </form>
      </div>

      
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold mb-3">🌙 Preferences</h3>

       
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-gray-700">Enable Dark Mode</span>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
              darkMode ? "bg-indigo-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </div>
        </label>

        
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-gray-700">Enable Notifications</span>
          <div
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
              notifications ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                notifications ? "translate-x-6" : ""
              }`}
            />
          </div>
        </label>
      </div>

      
      <div className="bg-white shadow-md rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold mb-3">🔐 Account</h3>
        <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
          Change Password
        </button>
        <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  );
}
*/

import React, { useState } from "react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");
  const [language, setLanguage] = useState("en");
  const [layout, setLayout] = useState("grid");
  const [landingPage, setLandingPage] = useState("dashboard");
  const [profilePic, setProfilePic] = useState(
    "https://ui-avatars.com/api/?name=Sneha&background=indigo&color=fff&size=128"
  );

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // preview image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

      <form onSubmit={handleSave} className="space-y-10">
        {/* 👤 Profile Section */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Profile</h2>
          <div className="flex items-center space-x-4">
            <img
              src={profilePic}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              id="profileUpload"
              onChange={handleProfilePicChange}
              className="hidden"
            />

            <label
              htmlFor="profileUpload"
              className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536M9 13h3l9-9a1.5 1.5 0 00-2.121-2.121l-9 9v3z"
                />
              </svg>
              Change Photo
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          </section>

        {/* 🔐 Security Section */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Security</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="button"
              onClick={() => alert("Open change password modal")}
              className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v2h4v-2zM6 13v4h12v-4M6 17v2h12v-2"
                />
              </svg>
              Change Password
            </button>

            <button
              type="button"
              onClick={() =>
                alert("Are you sure you want to delete your account?")
              }
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete Account
            </button>
          </div>
        </section>

        {/* 🎨 Preferences Section */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Preferences</h2>

          <div className="flex items-center justify-between">
            <label className="text-gray-600">Enable Dark Mode</label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-5 h-5"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-600">Enable Notifications</label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="retro">Retro</option>
              <option value="cinematic">Cinematic</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Font Size</label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="en">English</option>
              <option value="mr">Marathi</option>
            </select>
          </div>
        </section>

        {/* 📊 Dashboard Settings */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Dashboard Settings
          </h2>

          <div>
            <label className="block text-gray-600 mb-1">Layout Style</label>
            <select
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">
              Default Landing Page
            </label>
            <select
              value={landingPage}
              onChange={(e) => setLandingPage(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="dashboard">Dashboard</option>
              <option value="students">Students</option>
              <option value="performance">Performance</option>
              <option value="attendance">Attendance</option>
            </select>
          </div>
        </section>

        {/* 🧹 Reset Button */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <button
            type="button"
            onClick={() => alert("Reset all settings to default")}
            className="text-red-600 hover:underline"
          >
            Reset All Settings
          </button>
        </section>

        {/* ✅ Save Button */}
        <div className="sticky bottom-4 flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
