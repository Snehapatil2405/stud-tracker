import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // ✅ State for form fields
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [department, setDepartment] = useState("Department");
  const [courseYear, setCourseYear] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!fullName || !gender || !mobile || !rollNumber || !department || !courseYear) {
      setError("All fields are required!");
      return;
    }
    if (!termsAgreed) {
      setError("You must agree to the Terms & Conditions!");
      return;
    }

    // ✅ Save user temporarily (localStorage for demo)
    const userData = { fullName, gender, mobile, rollNumber, department, courseYear, role: "student" };
    localStorage.setItem("user", JSON.stringify(userData));

    // ✅ Redirect → Student Settings
    navigate("/student-dashboard/student-settings");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section – Visual */}
      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Join Student Tracker</h1>
          <p className="text-lg">
            Register now to connect, learn, and manage seamlessly
          </p>
        </div>
      </div>

      {/* Right Section – Form */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-6 overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Student Register
          </h2>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm text-center font-medium">
              {error}
            </p>
          )}

          {/* Full Name */}
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Full Name"
            required
            className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 transition"
          />

          {/* Gender */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 transition"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            
          </select>

          {/* Mobile Number */}
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Mobile Number"
            required
            className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 transition"
          />

          {/* Roll Number */}
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter Roll Number"
            required
            className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 transition"
          />

          {/* Department Dropdown (Only BCA) */}
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 transition"
          >
            <option value=""> Select Department</option>
            <option value="BCA">BCA</option>
            
          </select>

          {/* Course Year Dropdown */}
          <select
            value={courseYear}
            onChange={(e) => setCourseYear(e.target.value)}
            required
            className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 transition"
          >
            <option value="">Select Course Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </select>

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
              className="h-4 w-4 text-purple-600"
            />
            <label className="text-gray-700 text-sm">
              I agree to the Terms & Conditions
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:scale-105 transition"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;