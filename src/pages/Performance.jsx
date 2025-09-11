import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", marks: 60 },
  { month: "Feb", marks: 72 },
  { month: "Mar", marks: 86 },
  { month: "Apr", marks: 68 },
  { month: "May", marks: 94 },
  { month: "Jun", marks: 85 },
  { month: "July", marks:94 },
  { month: "Aug", marks: 70 },
  { month: "Sept", marks:80 },
  { month: "Oct", marks: 28 },
  { month: "Nov", marks: 50 },
  { month: "Dec", marks: 45 },
];

const Performance = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Student Performance</h1>

      {/* Chart */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Performance Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="marks" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Marks Table</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Month</th>
              <th className="border-b p-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr key={index}>
                <td className="border-b p-2">{d.month}</td>
                <td className="border-b p-2">{d.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Performance;
