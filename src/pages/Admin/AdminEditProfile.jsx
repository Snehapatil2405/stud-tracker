import { useState } from "react";

export default function AdminEditProfile() {
  const DEFAULT_AVATAR = "/images/default-avatar.png"; // तुमचा default avatar path

  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [profilePic, setProfilePic] = useState("");

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-6 text-indigo-700">Edit Profile</h2>

      {/* Profile Picture */}
      <div className="flex items-center mb-6 space-x-4">
        <img
          src={profilePic || "/Avtar.png"}
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-indigo-600 object-cover"
        />
        <label className="cursor-pointer text-indigo-600 hover:underline text-sm">
          Change Picture
          <input
            type="file"
            accept="image/*"
            onChange={handlePicChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}