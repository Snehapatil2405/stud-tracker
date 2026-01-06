import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
  FaPhone,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa"

export default function StudentSettings() {
  const [profile, setProfile] = useState({
    firstName: "Sneha",
    lastName: "Patil",
    dob: "",
    gender: "",
    email: "sneha@example.com",
    phone: "",
    countryCode: "+91",
    address: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    securityAnswer: "",
    twoFA: false,
    notifications: { email: true, sms: false },
    language: "English",
    timezone: "UTC+5:30",
    avatar: null,
    disabilityInfo: "",
    className: localStorage.getItem("studentClass") || "FYBCA",
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (profile.password !== profile.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem("studentClass", profile.className);
    console.log("👤 Updated Profile:", profile);
    alert("Profile updated & saved!");
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

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };

  return (
    <div className="min-h-screen bg-gray-300 p-6 flex flex-col items-center">
      {/* Content */}
      <div className="w-full max-w-5xl space-y-4">
        {/* Personal Information */}
        <form
          onSubmit={handleProfileSubmit}
          className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-300 space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <FaUser className="text-blue-500" /> Personal Information
          </h2>

          {/* Avatar Section */}
          <div className="flex items-center space-x-4">
            <img
              src={profile.avatar || "/Avtar.png"}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-blue-500"
            />
            <div className="space-x-2">
              <label className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
                <FaImage className="inline mr-2" /> Upload Avatar
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
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
              >
                Remove
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                placeholder="Enter first name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                placeholder="Enter last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                value={profile.dob}
                onChange={(e) =>
                  setProfile({ ...profile, dob: e.target.value })
                }
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Gender
              </label>
              <select
                value={profile.gender}
                onChange={(e) =>
                  setProfile({ ...profile, gender: e.target.value })
                }
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              >
                <option value="" className="bg-gray-50">
                  Select Gender
                </option>
                <option value="Male" className="bg-gray-50">
                  Male
                </option>
                <option value="Female" className="bg-gray-50">
                  Female
                </option>
                <option value="Other" className="bg-gray-50">
                  Other
                </option>
              </select>
            </div>
          </div>
        </form>

        {/* Contact Information */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-300 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <FaEnvelope className="text-blue-500" /> Contact Information
          </h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="grid grid-cols-1  gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                value={profile.countryCode}
                onChange={(e) =>
                  setProfile({ ...profile, countryCode: e.target.value })
                }
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                placeholder="+91"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Address
            </label>
            <textarea
              value={profile.address}
              onChange={(e) =>
                setProfile({ ...profile, address: e.target.value })
              }
              className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
              placeholder="Enter full address"
              rows="4"
              required
            />
          </div>
        </div>
        {/*Academic Information*/}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-300 space-y-6">
  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
    <FaGraduationCap className="text-blue-500" /> Academic Information
  </h2>

  <div className="grid grid-cols-3 gap-4">
    {/* Student Roll No */}
    <div>
      <label className="block text-sm font-semibold text-gray-700">
        Student Roll No
      </label>
      <input
        type="text"
        value={profile.rollNo}
        onChange={(e) =>
          setProfile({ ...profile, rollNo: e.target.value })
        }
        className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
        placeholder="Enter Roll No"
        required
      />
    </div>

    {/* Department Dropdown */}
    <div>
      <label className="block text-sm font-semibold text-gray-700">
        Department
      </label>
      <select
        value={profile.department}
        onChange={(e) =>
          setProfile({ ...profile, department: e.target.value })
        }
        className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
        required
      >
        <option value="">Select Department</option>
        <option value="BCA">BCA</option>
      </select>
    </div>

    {/* Course Year Dropdown */}
    <div>
      <label className="block text-sm font-semibold text-gray-700">
        Course Year
      </label>
      <select
        value={profile.courseYear}
        onChange={(e) =>
          setProfile({ ...profile, courseYear: e.target.value })
        }
        className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
        required
      >
        <option value="">Select Year</option>
        <option value="1st Year">1st Year</option>
        <option value="2nd Year">2nd Year</option>
        <option value="3rd Year">3rd Year</option>
      </select>
    </div>
  </div>
</div>

        {/* Preferences & Custom Fields */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-300 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <FaCog className="text-blue-500" /> Preferences & Custom Fields
          </h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Notification Preferences
            </label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={profile.notifications.email}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      notifications: {
                        ...profile.notifications,
                        email: e.target.checked,
                      },
                    })
                  }
                  className="mr-2"
                />
                <span className="text-gray-700">Email Updates</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={profile.notifications.sms}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      notifications: {
                        ...profile.notifications,
                        sms: e.target.checked,
                      },
                    })
                  }
                  className="mr-2"
                />
                <span className="text-gray-700">SMS Alerts</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Preferred Language
              </label>
              <select
                value={profile.language}
                onChange={(e) =>
                  setProfile({ ...profile, language: e.target.value })
                }
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="English" className="bg-gray-50">
                  English
                </option>
                <option value="Marathi" className="bg-gray-50">
                  Marathi
                </option>
                <option value="Hindi" className="bg-gray-50">
                  Hindi
                </option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Timezone
              </label>
              <select
                value={profile.timezone}
                onChange={(e) =>
                  setProfile({ ...profile, timezone: e.target.value })
                }
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="UTC+5:30" className="bg-gray-50">
                  UTC+5:30 (IST)
                </option>
                <option value="UTC+0" className="bg-gray-50">
                  UTC+0 (GMT)
                </option>
                <option value="UTC-5" className="bg-gray-50">
                  UTC-5 (EST)
                </option>
              </select>
            </div>
          </div>
        </div>
        {/* Account & Security Settings */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-300 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <FaShieldAlt className="text-blue-500" /> Account & Security
            Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                New Password
              </label>
              <input
                value={profile.password}
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
                className={`mt-2 block w-full px-4 py-3 bg-gray-50 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 ${validatePassword(profile.password)
                    ? "border-green-500"
                    : "border-red-500"
                  }`}
                placeholder="Enter new password"
                required
              />
              <p className="text-xs text-gray-600 mt-1">
                Must be 8+ chars, include uppercase, number, symbol.
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                value={profile.confirmPassword}
                onChange={(e) =>
                  setProfile({ ...profile, confirmPassword: e.target.value })
                }
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700">
              <input
                type="checkbox"
                checked={profile.twoFA}
                onChange={(e) =>
                  setProfile({ ...profile, twoFA: e.target.checked })
                }
                className="mr-2"
              />
              Enable Two-Factor Authentication (2FA)
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg font-semibold"
          >
            Save 
          </button>
        </div>
      </div>
    </div>
  );
}
