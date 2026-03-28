"use client"

import { useState } from "react"
import { MapView } from "@/components/farm/map-view"
import { FieldAnalyticsSidebar } from "@/components/farm/field-analytics-sidebar"
import { AICropDrawer } from "@/components/farm/ai-crop-drawer"
import { MapLayerToggle } from "@/components/farm/map-layer-toggle"

export default function FarmingDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [activeLayer, setActiveLayer] = useState<"satellite" | "pest" | "water">("satellite")

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-emerald-950">
      {/* Full-screen Map Background */}
      <MapView activeLayer={activeLayer} />

      {/* Map Layer Toggle - Top Right */}
      <MapLayerToggle 
        activeLayer={activeLayer} 
        onLayerChange={setActiveLayer} 
      />

      {/* Field Analytics Sidebar - Left */}
      <FieldAnalyticsSidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />

      {/* AI Crop Guide Drawer - Bottom */}
      <AICropDrawer 
        isOpen={drawerOpen} 
        onToggle={() => setDrawerOpen(!drawerOpen)} 
      />
    </div>
  )
}
