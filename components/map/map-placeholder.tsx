import { Map } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

/** Placeholder shell for upcoming Mapbox GL integration. */
export function MapPlaceholder() {
  return (
    <Card className="overflow-hidden border-2 border-border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Map className="size-5 text-primary" aria-hidden />
          <CardTitle>Field map</CardTitle>
        </div>
        <CardDescription>
          Mapbox will mount here — token, style, and layers go in this folder.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div
          className="flex min-h-[220px] flex-col items-center justify-center gap-4 border-t-2 border-border bg-muted/50 px-6 py-10 sm:min-h-[280px]"
          role="status"
          aria-live="polite"
        >
          <div className="rounded-full border-2 border-primary bg-primary/10 p-4">
            <Map className="size-10 text-primary" strokeWidth={2} aria-hidden />
          </div>
          <p className="max-w-md text-center text-base font-medium text-foreground">
            Map container reserved — add Mapbox GL JS and a client component
            next.
          </p>
          <Button type="button" variant="secondary" size="lg" className="min-h-11">
            Prepare map
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
