"use client"

import { useState } from "react"
import { Sparkles, ChevronUp, ChevronDown, SprayCan, Droplets, CalendarClock, AlertTriangle, CheckCircle2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface AICropDrawerProps {
  isOpen: boolean
  onToggle: () => void
}

interface TaskCard {
  id: string
  title: string
  description: string
  priority: "high" | "medium" | "low"
  icon: React.ReactNode
  timing: string
  status: "pending" | "scheduled" | "completed"
}

const tasks: TaskCard[] = [
  {
    id: "1",
    title: "Spray Recommendation",
    description: "Apply fungicide to Field C - early blight detected in soybean crop. Optimal window: next 48 hours.",
    priority: "high",
    icon: <SprayCan className="h-6 w-6" />,
    timing: "Urgent - Next 48h",
    status: "pending",
  },
  {
    id: "2",
    title: "Irrigation Alert",
    description: "Field B wheat section showing water stress. Increase irrigation by 15% for optimal growth.",
    priority: "medium",
    icon: <Droplets className="h-6 w-6" />,
    timing: "Today",
    status: "scheduled",
  },
  {
    id: "3",
    title: "Harvest Window",
    description: "Field A corn reaching maturity. Optimal harvest window predicted: April 5-12 based on weather forecast.",
    priority: "low",
    icon: <CalendarClock className="h-6 w-6" />,
    timing: "In 8 days",
    status: "pending",
  },
]

const getPriorityStyles = (priority: string) => {
  switch (priority) {
    case "high":
      return "border-orange-500/50 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
    case "medium":
      return "border-yellow-500/40 bg-yellow-500/10"
    case "low":
      return "border-emerald-500/40 bg-emerald-500/10"
    default:
      return "border-white/20 bg-white/5"
  }
}

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "high":
      return <AlertTriangle className="h-4 w-4 text-orange-400" />
    case "medium":
      return <Clock className="h-4 w-4 text-yellow-400" />
    case "low":
      return <CheckCircle2 className="h-4 w-4 text-emerald-400" />
    default:
      return null
  }
}

export function AICropDrawer({ isOpen, onToggle }: AICropDrawerProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>("1")

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 z-20 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "translate-y-[calc(100%-60px)]"
      }`}
    >
      {/* Handle Bar */}
      <div className="flex justify-center pt-2 pb-1">
        <Button
          onClick={onToggle}
          variant="ghost"
          className="h-14 rounded-t-2xl bg-white/10 backdrop-blur-xl border border-white/20 border-b-0 px-6 text-white hover:bg-white/20 min-w-[200px]"
          aria-label={isOpen ? "Collapse drawer" : "Expand drawer"}
        >
          <Sparkles className="h-5 w-5 text-emerald-400 mr-2" />
          <span className="font-semibold">AI Crop Guide</span>
          {isOpen ? (
            <ChevronDown className="h-5 w-5 ml-2" />
          ) : (
            <ChevronUp className="h-5 w-5 ml-2" />
          )}
        </Button>
      </div>

      {/* Drawer Content */}
      <div className="bg-white/10 backdrop-blur-xl border-t border-white/20 rounded-t-3xl shadow-2xl">
        <div className="p-5 max-h-[45vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4 px-2">
            <p className="text-sm text-white/60">
              {tasks.filter(t => t.status === "pending").length} action items require attention
            </p>
            <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 h-11 px-4">
              View All
            </Button>
          </div>

          {/* Task Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <Card
                key={task.id}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.02] ${getPriorityStyles(task.priority)}`}
                onClick={() => setExpandedCard(expandedCard === task.id ? null : task.id)}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    task.priority === "high" 
                      ? "bg-orange-500/20 text-orange-400" 
                      : task.priority === "medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-emerald-500/20 text-emerald-400"
                  }`}>
                    {task.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {getPriorityIcon(task.priority)}
                      <h3 className="font-semibold text-white truncate">{task.title}</h3>
                    </div>
                    <p className={`text-sm text-white/70 ${expandedCard === task.id ? "" : "line-clamp-2"}`}>
                      {task.description}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.priority === "high"
                          ? "bg-orange-500/20 text-orange-300"
                          : task.priority === "medium"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-emerald-500/20 text-emerald-300"
                      }`}>
                        {task.timing}
                      </span>
                      {task.status === "pending" && (
                        <Button 
                          size="sm" 
                          className="h-9 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs"
                          onClick={(e) => {
                            e.stopPropagation()
                          }}
                        >
                          Take Action
                        </Button>
                      )}
                      {task.status === "scheduled" && (
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Scheduled
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
