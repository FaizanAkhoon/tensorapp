import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Field dashboard | AgriVision Pro',
  description:
    'High-contrast farmer dashboard for fields, weather, and maps — optimized for outdoor use.',
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="dashboard-outdoor min-h-dvh bg-background text-foreground">
      {children}
    </div>
  )
}
