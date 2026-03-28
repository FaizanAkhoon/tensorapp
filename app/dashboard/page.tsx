import Link from 'next/link'
import {
  CloudSun,
  Droplets,
  MapPin,
  Sprout,
  Tractor,
} from 'lucide-react'
import { MapPlaceholder } from '@/components/map'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const statCards = [
  {
    title: 'Active fields',
    value: '12',
    hint: '3 need attention',
    icon: MapPin,
  },
  {
    title: 'Soil moisture',
    value: 'Optimal',
    hint: 'North block 62%',
    icon: Droplets,
  },
  {
    title: '7-day outlook',
    value: 'Dry',
    hint: 'Irrigate by Thu',
    icon: CloudSun,
  },
] as const

export default function DashboardPage() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:gap-8 lg:px-8 lg:py-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="secondary"
              className="border-border bg-secondary text-secondary-foreground"
            >
              Live
            </Badge>
            <Badge className="bg-accent text-accent-foreground border-transparent">
              Outdoor mode
            </Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Field command
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Emerald on white, orange alerts — built for glare and quick glances
            in the cab or the field.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button asChild size="lg" className="min-h-11 min-w-[44px]">
            <Link href="/">Open map view</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-11 min-w-[44px] border-2 border-border bg-card"
          >
            <Link href="#field-map">Jump to map</Link>
          </Button>
        </div>
      </header>

      <Separator className="bg-border" />

      <section
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Quick stats"
      >
        {statCards.map(({ title, value, hint, icon: Icon }) => (
          <Card
            key={title}
            className="border-2 border-border shadow-sm"
          >
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <Icon
                className="size-6 shrink-0 text-primary"
                aria-hidden
              />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold tracking-tight text-foreground">
                {value}
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {hint}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-5 lg:items-start">
        <Card className="border-2 border-border lg:col-span-3">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Tractor className="size-5 text-primary" aria-hidden />
              <CardTitle>Operations</CardTitle>
            </div>
            <CardDescription>
              Tasks and scouting notes for today.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3 text-base">
              <li className="flex flex-col gap-1 rounded-lg border-2 border-border bg-secondary/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-medium text-foreground">
                  West pivot — zone 2
                </span>
                <Badge className="w-fit bg-accent text-accent-foreground border-transparent">
                  Irrigate
                </Badge>
              </li>
              <li className="flex flex-col gap-1 rounded-lg border-2 border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-medium text-foreground">
                  East corn — row 18–40
                </span>
                <Badge variant="secondary">Scout</Badge>
              </li>
              <li className="flex flex-col gap-1 rounded-lg border-2 border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-medium text-foreground">
                  Barn diesel tank
                </span>
                <Badge variant="outline" className="border-2">
                  Refill
                </Badge>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 border-t-2 border-border pt-6 sm:flex-row">
            <Button className="w-full min-h-11 sm:w-auto">Add task</Button>
            <Button
              variant="outline"
              className="w-full min-h-11 border-2 sm:w-auto"
            >
              Export day sheet
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-2 border-border lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sprout className="size-5 text-primary" aria-hidden />
              <CardTitle>Crop health</CardTitle>
            </div>
            <CardDescription>Summary for the main rotation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-base text-muted-foreground">
              NDVI trending stable across soy. Corn on the south quarter shows a
              warm strip — tie in with the Mapbox layer when wired up.
            </p>
            <div className="rounded-lg border-2 border-dashed border-primary/50 bg-primary/5 p-4">
              <p className="text-sm font-semibold text-foreground">
                Next: Mapbox in{' '}
                <code className="rounded bg-secondary px-1.5 py-0.5 text-sm">
                  components/map
                </code>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <section id="field-map" aria-label="Map preview">
        <MapPlaceholder />
      </section>
    </div>
  )
}
