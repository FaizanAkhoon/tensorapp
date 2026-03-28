"use client"

interface MapViewProps {
  activeLayer: "satellite" | "pest" | "water"
}

export function MapView({ activeLayer }: MapViewProps) {
  return (
    <div className="absolute inset-0">
      {/* Mapbox Placeholder - Satellite Base */}
      <div 
        className="h-full w-full transition-all duration-500"
        style={{
          backgroundImage: `url('/placeholder-map.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay for map */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-emerald-950/40" />
        
        {/* Map Grid Pattern Placeholder */}
        <svg className="absolute inset-0 h-full w-full opacity-10">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Field Boundary Overlays */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {/* Field 1 - Main Crop Field */}
          <polygon 
            points="150,200 350,180 380,400 320,450 140,420"
            className={`transition-all duration-300 ${
              activeLayer === "pest" 
                ? "fill-orange-500/40 stroke-orange-400" 
                : activeLayer === "water"
                ? "fill-blue-500/30 stroke-blue-400"
                : "fill-emerald-500/20 stroke-emerald-400"
            }`}
            strokeWidth="3"
          />
          <text x="250" y="320" className="fill-white text-sm font-semibold" textAnchor="middle">
            Field A - Corn
          </text>

          {/* Field 2 - Secondary Field */}
          <polygon 
            points="420,150 620,130 680,350 640,420 400,380"
            className={`transition-all duration-300 ${
              activeLayer === "pest" 
                ? "fill-yellow-500/30 stroke-yellow-400" 
                : activeLayer === "water"
                ? "fill-cyan-500/40 stroke-cyan-400"
                : "fill-emerald-600/25 stroke-emerald-500"
            }`}
            strokeWidth="3"
          />
          <text x="540" y="280" className="fill-white text-sm font-semibold" textAnchor="middle">
            Field B - Wheat
          </text>

          {/* Field 3 - Lower Field */}
          <polygon 
            points="200,500 450,480 500,700 180,720"
            className={`transition-all duration-300 ${
              activeLayer === "pest" 
                ? "fill-red-500/50 stroke-red-400" 
                : activeLayer === "water"
                ? "fill-blue-400/20 stroke-blue-300"
                : "fill-emerald-400/30 stroke-emerald-300"
            }`}
            strokeWidth="3"
          />
          <text x="340" y="600" className="fill-white text-sm font-semibold" textAnchor="middle">
            Field C - Soybean
          </text>

          {/* Field 4 - Right Field */}
          <polygon 
            points="550,450 750,420 800,650 580,680"
            className={`transition-all duration-300 ${
              activeLayer === "pest" 
                ? "fill-green-500/30 stroke-green-400" 
                : activeLayer === "water"
                ? "fill-sky-500/35 stroke-sky-400"
                : "fill-emerald-500/25 stroke-emerald-400"
            }`}
            strokeWidth="3"
          />
          <text x="670" y="560" className="fill-white text-sm font-semibold" textAnchor="middle">
            Field D - Barley
          </text>

          {/* Animated markers for active alerts */}
          {activeLayer === "pest" && (
            <>
              <circle cx="340" cy="600" r="12" className="animate-ping fill-red-500/50" />
              <circle cx="340" cy="600" r="8" className="fill-red-500" />
            </>
          )}
          {activeLayer === "water" && (
            <>
              <circle cx="540" cy="280" r="12" className="animate-ping fill-cyan-500/50" />
              <circle cx="540" cy="280" r="8" className="fill-cyan-500" />
            </>
          )}
        </svg>

        {/* Layer-specific overlays */}
        {activeLayer === "pest" && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-radial from-orange-500/30 to-transparent blur-xl" />
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-gradient-radial from-red-500/40 to-transparent blur-2xl" />
          </div>
        )}
        {activeLayer === "water" && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/3 w-56 h-56 rounded-full bg-gradient-radial from-cyan-500/30 to-transparent blur-xl" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-radial from-blue-500/35 to-transparent blur-lg" />
          </div>
        )}
      </div>
    </div>
  )
}
