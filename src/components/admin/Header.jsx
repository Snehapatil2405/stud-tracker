export default function Header() {
  return (
    <div className="bg-white border-b px-6 py-4 flex justify-between items-center shadow">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Control Center</h2>
        <p className="text-xs text-gray-500">Manage users, notices & conversations</p>
      </div>
      <div className="flex items-center gap-3">
        <img src="/Avtar.png" alt="Admin" className="w-8 h-8 rounded-full" />
        <div className="text-sm">
          <p className="font-medium text-gray-800">Admin</p>
          <p className="text-xs text-gray-500">admin@example.com</p>
        </div>
      </div>
    </div>
  );
}