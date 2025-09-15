import React from "react";

export default function Profile() {
  const user = {
    name: "Sneha Patil",
    email: "sneha@example.com",
    role: "Student",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 space-y-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
          👤 My Profile
        </h2>

        <div className="space-y-4">
          {/* Name */}
          <div className="flex items-center gap-3">
            <span className="text-indigo-600 text-xl">📝</span>
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg font-medium text-gray-800">{user.name}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <span className="text-indigo-600 text-xl">📧</span>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-medium text-gray-800">{user.email}</p>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3">
            <span className="text-indigo-600 text-xl">🎓</span>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-medium text-gray-800">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Optional Edit Button */}
        <div className="text-right">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold">
            ✏️ Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}