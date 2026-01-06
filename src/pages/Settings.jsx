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
  FaGraduationCap,
} from "react-icons/fa";

const TeacherSettingsPage = () => {
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    // Professional Details
    department: '',
    subjects: [], // Array for checkboxes
    qualification: '',
    experience: '',
    employeeId: '',
    // Account Settings
    username: '',
    password: '',
    confirmPassword: '',
    profilePic: null,
    securityQuestion: '',
    securityAnswer: '',
    // Preferences & Permissions
    notifications: [], // Array for checkboxes
    theme: '',
    roles: [], // Array for checkboxes
    language: '',
  });

  const [errors, setErrors] = useState({});
  const [profilePicPreview, setProfilePicPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else if (type === 'file') {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePicPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'A valid email is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    if (!formData.username.trim()) newErrors.username = 'Username is required.';
    if (!validatePassword(formData.password)) newErrors.password = 'Password must be 8+ chars, include uppercase, number, and symbol.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      alert('Settings saved successfully!');
      // Integrate with API here, e.g., fetch('/api/teacher-settings', { method: 'POST', body: JSON.stringify(formData) });
    }
  };

  const handleProfilePicRemove = () => {
    setFormData((prev) => ({ ...prev, profilePic: null }));
    setProfilePicPreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-300 p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Personal Information */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-300 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <FaUser className="text-blue-500" /> Personal Information
            </h2>
            
            {/* Profile Picture Section */}
            <div className="flex items-center space-x-4">
              <img
                src={profilePicPreview || "/Avtar.png"}
                alt="Profile Picture"
                className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-blue-500"
              />
              <div className="space-x-2">
                <label className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
                  <FaImage className="inline mr-2" /> Upload Picture
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    name="profilePic"
                    className="hidden"
                  />
                </label>
                <button
                  type="button"
                  onClick={handleProfilePicRemove}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Enter full name"
                  required
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Enter email"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Enter phone"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Enter full address"
                  rows="4"
                />
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-300 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <FaGraduationCap className="text-blue-500" /> Professional Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Select Department</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Mathematics">Mathematics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Subjects Taught</label>
                <div className="mt-2 space-y-2">
                  {['Math', 'Physics', 'Chemistry', 'Computer Science'].map((subject) => (
                    <label key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        name="subjects"
                        value={subject}
                        checked={formData.subjects.includes(subject)}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="e.g., M.Tech, PhD"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Years of Experience</label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="e.g., 5"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Unique ID"
                />
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-300 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <FaLock className="text-blue-500" /> Account Settings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Enter username"
                  required
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`mt-2 block w-full px-4 py-3 bg-gray-50 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 ${
                    validatePassword(formData.password) ? "border-green-500" : "border-red-500"
                  }`}
                  placeholder="Enter password"
                  required
                />
                <p className="text-xs text-gray-600 mt-1">Must be 8+ chars, include uppercase, number, symbol.</p>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Confirm password"
                  required
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Security Question</label>
                <select
                  name="securityQuestion"
                  value={formData.securityQuestion}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Select Question</option>
                  <option value="What is your pet's name?">What is your pet's name?</option>
                  <option value="What is your favorite color?">What is your favorite color?</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700">Security Answer</label>
                <input
                  type="text"
                  name="securityAnswer"
                  value={formData.securityAnswer}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Enter answer"
                />
              </div>
            </div>
          </div>

                    {/* Preferences and Permissions */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-300 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <FaCog className="text-blue-500" /> Preferences & Permissions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Notification Preferences</label>
                <div className="mt-2 space-y-2">
                  {['Email Alerts', 'SMS', 'Push Notifications'].map((notif) => (
                    <label key={notif} className="flex items-center">
                      <input
                        type="checkbox"
                        name="notifications"
                        value={notif}
                        checked={formData.notifications.includes(notif)}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{notif}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Theme/Interface Settings</label>
                <select
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Select Theme</option>
                  <option value="Light Mode">Light Mode</option>
                  <option value="Dark Mode">Dark Mode</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Role/Permissions</label>
                <div className="mt-2 space-y-2">
                  {['Admin Access', 'Edit Student Records', 'View Reports'].map((role) => (
                    <label key={role} className="flex items-center">
                      <input
                        type="checkbox"
                        name="roles"
                        value={role}
                        checked={formData.roles.includes(role)}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{role}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Language Preference</label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Select Language</option>
                  <option value="English">English</option>
                  <option value="Marathi">Marathi</option>
                </select>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg font-semibold"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherSettingsPage;