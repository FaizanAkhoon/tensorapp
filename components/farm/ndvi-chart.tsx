"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { week: "W1", ndvi: 0.45 },
  { week: "W2", ndvi: 0.52 },
  { week: "W3", ndvi: 0.58 },
  { week: "W4", ndvi: 0.61 },
  { week: "W5", ndvi: 0.67 },
  { week: "W6", ndvi: 0.72 },
  { week: "W7", ndvi: 0.69 },
  { week: "W8", ndvi: 0.75 },
]

export function NDVIChart() {
  return (
    <div className="h-[140px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
          <defs>
            <linearGradient id="ndviGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="week" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
          />
          <YAxis 
            domain={[0.3, 0.9]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
            tickFormatter={(value) => value.toFixed(1)}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(6, 78, 59, 0.9)",
              border: "1px solid rgba(52, 211, 153, 0.3)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "12px",
            }}
            formatter={(value: number) => [value.toFixed(2), "NDVI"]}
          />
          <Area
            type="monotone"
            dataKey="ndvi"
            stroke="#34d399"
            strokeWidth={2}
            fill="url(#ndviGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
