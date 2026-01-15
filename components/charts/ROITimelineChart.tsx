"use client";

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip } from "recharts";

interface ROITimelineChartProps {
  color?: string;
  breakevenMonths?: number;
  roiAt12Months?: number;
}

function generateROIData(breakevenMonths: number, roiAt12Months: number) {
  // Calculate ROI at 24 months (approximately 2.5x the 12-month ROI)
  const roiAt24Months = Math.round(roiAt12Months * 2.3);

  // Calculate intermediate points based on breakeven
  const goLiveMonth = Math.round(breakevenMonths * 0.4);
  const goLiveROI = Math.round(-100 + (100 * goLiveMonth / breakevenMonths));

  return [
    { month: 0, roi: -100, label: "Investment" },
    { month: goLiveMonth, roi: goLiveROI, label: "Go-Live" },
    { month: breakevenMonths, roi: 0, label: "Break-Even" },
    { month: 12, roi: roiAt12Months, label: `${roiAt12Months}% ROI` },
    { month: 24, roi: roiAt24Months, label: `${roiAt24Months}% ROI` },
  ];
}

export default function ROITimelineChart({
  color = "#714B67",
  breakevenMonths = 6,
  roiAt12Months = 150
}: ROITimelineChartProps) {
  const roiData = generateROIData(breakevenMonths, roiAt12Months);
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={roiData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <defs>
            <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            tick={{ fill: "#64748b", fontSize: 12 }}
            axisLine={{ stroke: "#e2e8f0" }}
            tickLine={false}
            tickFormatter={(v) => `${v}mo`}
          />
          <YAxis
            tick={{ fill: "#64748b", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <ReferenceLine y={0} stroke="#e2e8f0" strokeDasharray="3 3" />
          <Tooltip
            formatter={(value: unknown) => [`${value}% ROI`, "Return"]}
            labelFormatter={(label) => `Month ${label}`}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
            }}
          />
          <Area
            type="monotone"
            dataKey="roi"
            stroke={color}
            strokeWidth={3}
            fill="url(#roiGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-between px-4 mt-2">
        {roiData.map((point) => (
          <div key={point.month} className="text-center">
            <div className="text-xs font-medium text-slate-600">{point.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
