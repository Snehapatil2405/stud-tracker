export default function AdminSettings() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl">
      <h2 className="text-xl font-bold mb-6 text-indigo-700">System Settings</h2>

      {/* Role Management */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Default Role for New Users
        </label>
        <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500">
          <option>Student</option>
          <option>Teacher</option>
          <option>Admin</option>
        </select>
      </div>

      {/* Notifications */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Notifications</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700">Email Alerts</span>
          <input type="checkbox" defaultChecked className="w-5 h-5 accent-indigo-600" />
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700">SMS Alerts</span>
          <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Push Notifications</span>
          <input type="checkbox" defaultChecked className="w-5 h-5 accent-indigo-600" />
        </div>
      </div>

      {/* Security */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Security</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700">Two-Factor Authentication</span>
          <input type="checkbox" defaultChecked className="w-5 h-5 accent-indigo-600" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Allow Password Reset</span>
          <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
        </div>
      </div>

      {/* Save Button */}
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
        Save Settings
      </button>
    </div>
  );
}