import React, { useMemo, useState } from "react";

export default function StudentTable({ rows }) {
  const [q, setQ] = useState("");
  const [cls, setCls] = useState("All");

  const classes = useMemo(() => ["All", ...new Set(rows.map(r => r.className))], [rows]);

  const filtered = useMemo(() => {
    return rows.filter(r => {
      const byText =
        r.name.toLowerCase().includes(q.toLowerCase()) ||
        String(r.roll).includes(q) ||
        r.id.toLowerCase().includes(q.toLowerCase());
      const byClass = cls === "All" ? true : r.className === cls;
      return byText && byClass;
    });
  }, [rows, q, cls]);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      {/* controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search by name / roll / ID…"
          className="border rounded-lg px-3 py-2 w-full sm:w-72"
        />
        <select
          value={cls}
          onChange={e => setCls(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full sm:w-56"
        >
          {classes.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="text-left px-3 py-2">ID</th>
              <th className="text-left px-3 py-2">Roll</th>
              <th className="text-left px-3 py-2">Name</th>
              <th className="text-left px-3 py-2">Class</th>
              <th className="text-left px-3 py-2">Attendance</th>
              <th className="text-left px-3 py-2">Average</th>
              <th className="text-left px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id} className="border-b last:border-0 hover:bg-indigo-50/40">
                <td className="px-3 py-2 font-mono">{r.id}</td>
                <td className="px-3 py-2">{r.roll}</td>
                <td className="px-3 py-2 font-medium">{r.name}</td>
                <td className="px-3 py-2">{r.className}</td>
                <td className="px-3 py-2">{r.attendance}%</td>
                <td className="px-3 py-2">{r.average}%</td>
                <td className="px-3 py-2">
                  <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs hover:bg-indigo-700">View</button>
                  <button className="px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs hover:bg-amber-600 ml-2">Edit</button>
                  <button className="px-3 py-1.5 rounded-lg bg-rose-500 text-white text-xs hover:bg-rose-600 ml-2">Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td className="px-3 py-6 text-center text-slate-500" colSpan={7}>
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
