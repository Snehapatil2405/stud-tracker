import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminProfile() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const DEFAULT_AVATAR = "/images/default-avatar.png"; // तुमचा default avatar path

  const user = {
    name: "Admin",
    email: "admin@example.com",
    profilePic: "", // जर रिकामं असेल तर default वापरलं जाईल
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          src={user.profilePic ||"/Avtar.png"}
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full border-2 border-indigo-600 object-cover"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-800">{user.name}</h3>
          <p className="text-xs text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
          <ul className="py-2">
            <li
              onClick={() => navigate("/admin/edit-profile")}
              className="px-4 py-2 hover:bg-indigo-50 cursor-pointer"
            >
              Edit Profile
            </li>
            <li
              onClick={() => navigate("/admin/settings")}
              className="px-4 py-2 hover:bg-indigo-50 cursor-pointer"
            >
              Settings
            </li>
            <li
              onClick={() => alert("Logged out successfully!")}
              className="px-4 py-2 hover:bg-red-50 text-red-600 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}