"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface CostComparisonChartProps {
  legacyCost?: number;
  odooCost?: number;
  color?: string;
}

export default function CostComparisonChart({
  legacyCost = 240000,
  odooCost = 45000,
  color = "#714B67"
}: CostComparisonChartProps) {
  const savings = legacyCost - odooCost;
  const savingsPercent = Math.round((savings / legacyCost) * 100);

  const data = [
    { name: "Odoo Cost", value: odooCost, color: color },
    { name: "Savings", value: savings, color: "#22c55e" },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-green-600">{savingsPercent}%</span>
            <span className="text-sm text-slate-500">Savings</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-slate-400" />
            <span className="text-sm text-slate-600">Legacy ERP (Annual)</span>
          </div>
          <span className="font-semibold text-slate-700">${legacyCost.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: color }} />
            <span className="text-sm text-slate-600">Odoo (Annual)</span>
          </div>
          <span className="font-semibold" style={{ color }}>${odooCost.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green-500" />
            <span className="text-sm text-green-700 font-medium">Your Savings</span>
          </div>
          <span className="font-bold text-green-600">${savings.toLocaleString()}/year</span>
        </div>
      </div>
    </div>
  );
}
