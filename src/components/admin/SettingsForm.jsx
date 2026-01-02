import { useState } from "react";

export default function SettingsForm() {
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@example.com",
    password: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully (dummy)!");
  };

  return (
    <form
      onSubmit={handleSave}
      className="bg-white shadow-lg rounded-lg p-6 space-y-4 max-w-md"
    >
      <h2 className="text-lg font-bold text-indigo-700">Admin Settings</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={profile.password}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Save Changes
      </button>
    </form>
  );
}