import { FaCog } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <FaCog className="text-indigo-600" />
          Control Center
        </h2>
        <p className="text-sm text-black-500">
          Manage users, notices & conversations
        </p>
      </div>
    </div>
  );
}