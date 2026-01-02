export default function UserTable({ users }) {
  return (
    <table className="w-full text-sm text-left border rounded-lg overflow-hidden shadow">
      <thead className="bg-indigo-100">
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Class</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u, idx) => (
          <tr key={idx} className="border-t hover:bg-gray-50">
            <td className="px-4 py-2">{u.name}</td>
            <td className="px-4 py-2">{u.class}</td>
            <td className="px-4 py-2">{u.email}</td>
            <td className="px-4 py-2">{u.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}