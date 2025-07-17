// features/events/pages/EventsPage.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Footer } from '@components/Footer'
import { Button } from '@components/ui/button'
import { EventFilters } from '@features/events/components/EventGallery/EventFilters'
import { EventsContent } from '@features/events/components/EventGallery/EventsContent'
import { useEvents } from '@features/events/hooks/useEvents'
import { FilterType } from '@features/events/types'
import { ArrowLeftIcon } from 'lucide-react'

export function EventsPageClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const { filterEvents } = useEvents()

  return (
    <>
      <main className="container">
        <div className="flex flex-col justify-center gap-6 pt-12">
          <div className="flex w-full flex-col justify-between border-b pb-4 xs:flex-row sm:items-center">
            <div className="flex items-center gap-6">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 p-2 text-white"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                  Retour
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-foreground sm:text-4xl">
                Événements
              </h1>
            </div>
            <EventFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
          <EventsContent events={filterEvents(activeFilter)} />
        </div>
        <Footer />
      </main>
    </>
  )
}
