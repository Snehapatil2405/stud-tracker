import React from 'react';

export default function Card({ title, value, icon, color = 'blue' }) {
  const colorMap = {
    blue: 'text-blue-600 bg-blue-100',
    green: 'text-green-600 bg-green-100',
    red: 'text-red-600 bg-red-100',
    purple: 'text-purple-600 bg-purple-100',
    yellow: 'text-yellow-600 bg-yellow-100',
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className={`text-3xl font-bold ${colorMap[color]}`}>{value}</p>
      </div>
      {icon && (
        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${colorMap[color]}`}>
          {icon}
        </div>
      )}
    </div>
  );
}