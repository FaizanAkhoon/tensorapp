"use client"

interface SoilMoistureGaugeProps {
  value: number
}

export function SoilMoistureGauge({ value }: SoilMoistureGaugeProps) {
  // Calculate the angle for the needle (from -135 to 135 degrees)
  const angle = -135 + (value / 100) * 270

  const getStatusColor = (val: number) => {
    if (val < 30) return { color: "#ef4444", label: "Dry", bg: "bg-red-500/20", text: "text-red-400" }
    if (val < 50) return { color: "#f97316", label: "Low", bg: "bg-orange-500/20", text: "text-orange-400" }
    if (val < 70) return { color: "#10b981", label: "Optimal", bg: "bg-emerald-500/20", text: "text-emerald-400" }
    if (val < 85) return { color: "#06b6d4", label: "Good", bg: "bg-cyan-500/20", text: "text-cyan-400" }
    return { color: "#3b82f6", label: "High", bg: "bg-blue-500/20", text: "text-blue-400" }
  }

  const status = getStatusColor(value)

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-28 w-48">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          
          {/* Gradient arc segments */}
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="25%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          
          {/* Colored progress arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={`${(value / 100) * 251.2} 251.2`}
          />

          {/* Needle */}
          <g transform={`rotate(${angle}, 100, 100)`}>
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="35"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="100" cy="100" r="8" fill="white" />
            <circle cx="100" cy="100" r="4" fill={status.color} />
          </g>

          {/* Scale labels */}
          <text x="15" y="115" className="fill-white/50 text-xs">0%</text>
          <text x="175" y="115" className="fill-white/50 text-xs">100%</text>
        </svg>
      </div>
      
      <div className="flex items-center gap-2 mt-2">
        <span className={`text-2xl font-bold text-white`}>{value}%</span>
        <span className={`text-xs ${status.bg} ${status.text} px-2 py-1 rounded-full`}>
          {status.label}
        </span>
      </div>
    </div>
  )
}
