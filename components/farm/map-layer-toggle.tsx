"use client"

import { Satellite, Bug, Droplets } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface MapLayerToggleProps {
  activeLayer: "satellite" | "pest" | "water"
  onLayerChange: (layer: "satellite" | "pest" | "water") => void
}

export function MapLayerToggle({ activeLayer, onLayerChange }: MapLayerToggleProps) {
  return (
    <div className="absolute top-4 right-4 z-30">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-1.5 shadow-2xl">
        <ToggleGroup
          type="single"
          value={activeLayer}
          onValueChange={(value) => {
            if (value) onLayerChange(value as "satellite" | "pest" | "water")
          }}
          className="flex flex-col gap-1"
        >
          <ToggleGroupItem
            value="satellite"
            aria-label="Satellite view"
            className="h-12 w-12 rounded-xl data-[state=on]:bg-emerald-500 data-[state=on]:text-white text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            <Satellite className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="pest"
            aria-label="Pest heatmap"
            className="h-12 w-12 rounded-xl data-[state=on]:bg-orange-500 data-[state=on]:text-white text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            <Bug className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="water"
            aria-label="Water stress"
            className="h-12 w-12 rounded-xl data-[state=on]:bg-blue-500 data-[state=on]:text-white text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            <Droplets className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Layer Label */}
      <div className="mt-2 text-center">
        <span className="text-xs font-medium text-white/60 bg-black/30 backdrop-blur px-3 py-1 rounded-full">
          {activeLayer === "satellite" && "Satellite View"}
          {activeLayer === "pest" && "Pest Heatmap"}
          {activeLayer === "water" && "Water Stress"}
        </span>
      </div>
    </div>
  )
}
