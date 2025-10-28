import React, { useState } from "react";

export default function StudentSettings() {
  const [profile, setProfile] = useState({
    name: "Sneha Kulkarni",
    email: "sneha@example.com",
    avatar: null, // base64 or file URL
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("👤 Updated Profile:", profile);
    alert("Profile updated (console only)");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match");
      return;
    }
    console.log("🔒 Password Change:", passwords);
    alert("Password change submitted (console only)");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result });
        console.log("🖼️ Avatar Uploaded:", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarRemove = () => {
    setProfile({ ...profile, avatar: null });
    console.log("🗑️ Avatar Removed");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-purple-700">
          ⚙️ Student Settings
        </h1>
        <p className="text-sm text-gray-600">
          Update your profile and secure your account
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Profile Update Form */}
        <form
          onSubmit={handleProfileSubmit}
          className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-500 space-y-4"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            👤 Update Profile
          </h2>

          {/* Avatar Section */}
          <div className="flex items-center space-x-4">
            <img
              src={
                profile.avatar || "/Avtar.png" // ✅ Your uploaded default avatar
              }
              alt="Avatar"
              className="w-20 h-20 rounded-full object-cover border-0 border-purple-500"
            />
            <div className="space-x-2">
              <label className="bg-purple-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-purple-700">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
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

          {/* Name & Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Save Profile
          </button>
        </form>

        {/* Password Change Form */}
        <form
          onSubmit={handlePasswordSubmit}
          className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-500 space-y-4"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            🔒 Change Password
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords({ ...passwords, current: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords({ ...passwords, new: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
