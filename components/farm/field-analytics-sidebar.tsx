"use client"

import { Leaf, Droplets, TrendingUp, ChevronLeft, ChevronRight, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { NDVIChart } from "./ndvi-chart"
import { SoilMoistureGauge } from "./soil-moisture-gauge"

interface FieldAnalyticsSidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function FieldAnalyticsSidebar({ isOpen, onToggle }: FieldAnalyticsSidebarProps) {
  const healthScore = 78

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={onToggle}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-lg transition-all"
        style={{ left: isOpen ? "calc(340px + 1rem)" : "1rem" }}
        size="icon"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`absolute left-0 top-0 h-full w-[340px] z-20 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full p-4 overflow-y-auto">
          <div className="h-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-5 flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 backdrop-blur">
                <Activity className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Field Analytics</h2>
                <p className="text-sm text-white/60">Real-time crop monitoring</p>
              </div>
            </div>

            {/* Health Score Card */}
            <Card className="bg-emerald-900/40 border-emerald-500/30 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm font-medium text-white/80">Health Score</span>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full">Good</span>
              </div>
              
              {/* Circular Progress */}
              <div className="flex items-center justify-center py-2">
                <div className="relative h-28 w-28">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="12"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="url(#healthGradient)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${healthScore * 2.64} 264`}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">{healthScore}</span>
                    <span className="text-xs text-white/60">/ 100</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 text-sm text-emerald-400">
                <TrendingUp className="h-4 w-4" />
                <span>+5% from last week</span>
              </div>
            </Card>

            {/* NDVI Trend Chart */}
            <Card className="bg-emerald-900/40 border-emerald-500/30 p-4 rounded-xl flex-1 min-h-[200px]">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium text-white/80">NDVI Trend</span>
              </div>
              <NDVIChart />
            </Card>

            {/* Soil Moisture Gauge */}
            <Card className="bg-emerald-900/40 border-emerald-500/30 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-white/80">Soil Moisture</span>
              </div>
              <SoilMoistureGauge value={65} />
            </Card>
          </div>
        </div>
      </aside>
    </>
  )
}
