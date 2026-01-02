import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnalyticsChart() {
  const data = {
    labels: ["Notices", "Feedback", "Messages", "Users"],
    datasets: [
      {
        label: "Count",
        data: [120, 340, 560, 200],
        backgroundColor: ["#6366F1", "#22C55E", "#F59E0B", "#EF4444"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Admin Analytics Overview" },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4 text-indigo-700">Analytics</h2>
      <Bar data={data} options={options} />
    </div>
  );
}