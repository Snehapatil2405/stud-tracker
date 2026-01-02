import React, { useState, useEffect, useRef } from "react";

export default function TeacherSettings({ onSave }) {
  const [profile, setProfile] = useState({
    name: "",
    subject: "",
    email: "",
    mobile: "",
    password: "",
    avatar: null,
    classes: [],
    bio: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const passwordSectionRef = useRef(null);

  useEffect(() => {
    // जर आधी localStorage मध्ये profile save असेल तर ते load करा
    const savedProfile = localStorage.getItem("teacherProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      // dummy logged-in teacher info
      const loggedInTeacher = {
        email: "devika@example.com",
        mobile: "9876543210",
        password: "",
      };
      setProfile((prev) => ({
        ...prev,
        email: loggedInTeacher.email,
        mobile: loggedInTeacher.mobile,
        password: loggedInTeacher.password,
      }));
    }
  }, []);

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

  const handleClassToggle = (cls) => {
    setProfile((prev) => {
      const alreadySelected = prev.classes.includes(cls);
      return {
        ...prev,
        classes: alreadySelected
          ? prev.classes.filter((c) => c !== cls)
          : [...prev.classes, cls],
      };
    });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // localStorage मध्ये save करा
    localStorage.setItem("teacherProfile", JSON.stringify(profile));
    console.log("👩‍🏫 Teacher Profile Submitted:", profile);
    alert("Profile submitted successfully!");
    if (onSave) onSave(); // Dashboard refresh trigger
  };

  const handleResetClick = () => {
    setShowPasswordForm(true);
    setTimeout(() => {
      passwordSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match");
      return;
    }
    console.log("🔐 Password Change:", passwords);
    alert("Password change submitted!");
    setShowPasswordForm(false);
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 text-[17px]">
      <form
        onSubmit={handleProfileSubmit}
        className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-indigo-500 space-y-6 max-w-3xl mx-auto"
      >
        <h2 className="text-xl font-semibold text-gray-800">👤 Create Profile</h2>

        <div className="flex items-center space-x-4">
          <img
            src={profile.avatar || "/Avtar.png"}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover border border-indigo-500"
          />
          <div className="space-x-2">
            <label className="bg-indigo-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-indigo-700">
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

        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          placeholder="Enter your full name"
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="text"
          value={profile.subject}
          onChange={(e) => setProfile({ ...profile, subject: e.target.value })}
          placeholder="Subject Specialization"
          className="w-full px-3 py-2 border rounded-md"
        />

        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="Email Address"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
        <input
          type="tel"
          value={profile.mobile}
          onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
          placeholder="Mobile Number"
          className="w-full px-3 py-2 border rounded-md"
          maxLength={10}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-20 top-2 text-sm text-indigo-600 hover:underline"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          <button
            type="button"
            onClick={handleResetClick}
            className="absolute right-2 top-2 text-sm text-purple-600 hover:underline"
          >
            Reset
          </button>
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-2">🎓 Classes</label>
          <div className="space-y-2">
            {["FYBCA", "SYBCA", "TYBCA"].map((cls) => (
              <label key={cls} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={cls}
                  checked={profile.classes.includes(cls)}
                  onChange={() => handleClassToggle(cls)}
                  className="accent-indigo-600"
                />
                <span>{cls}</span>
              </label>
            ))}
          </div>
        </div>

        <textarea
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          placeholder="Teaching Philosophy / Bio"
          className="w-full px-3 py-2 border rounded-md resize-none h-24"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition duration-300"
        >
          Submit Profile
        </button>

        {showPasswordForm && (
          <div ref={passwordSectionRef} className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">🔐 Change Password</h3>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              placeholder="Current Password"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <input
              type="password"
              value={passwords.new}
              onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              placeholder="New Password"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              placeholder="Confirm New Password"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <button
              type="button"
              onClick={handlePasswordSubmit}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition duration-300"
            >
              Save New Password
            </button>
          </div>
        )}
      </form>
    </div>
  );
}