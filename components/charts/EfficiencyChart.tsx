"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

interface EfficiencyChartProps {
  data: { metric: string; before: number; after: number }[];
  color?: string;
}

export default function EfficiencyChart({ data, color = "#714B67" }: EfficiencyChartProps) {
  const chartData = data.map((item) => ({
    name: item.metric,
    Before: item.before,
    After: item.after,
    improvement: Math.round(((item.before - item.after) / item.before) * 100),
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} layout="vertical" margin={{ top: 20, right: 80, left: 20, bottom: 20 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#64748b", fontSize: 12 }}
            width={120}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="Before" fill="#94a3b8" radius={[0, 4, 4, 0]} barSize={20}>
            <LabelList dataKey="Before" position="right" fill="#64748b" fontSize={12} formatter={(v: unknown) => `${v} min`} />
          </Bar>
          <Bar dataKey="After" fill={color} radius={[0, 4, 4, 0]} barSize={20}>
            <LabelList
              dataKey="improvement"
              position="right"
              fill={color}
              fontSize={12}
              fontWeight="bold"
              formatter={(v: unknown) => `${v}% faster`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-slate-400" />
          <span className="text-sm text-slate-500">Before Odoo</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: color }} />
          <span className="text-sm text-slate-500">After Odoo</span>
        </div>
      </div>
    </div>
  );
}
