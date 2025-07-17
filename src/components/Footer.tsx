// Footer.tsx
'use client'

import Link from 'next/link'
import { Full } from '@components/brand'
import { Discord, Facebook, Instagram, X } from '@components/icons'
import { useUpcomingEvent } from '@features/events/hooks/useEvents'
import { cn } from '@lib/utils'
import packageJson from '@package'
import { Badge } from '@ui/badge'
import { Button } from '@ui/button'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const { upcomingEvent } = useUpcomingEvent()
  return (
    <footer
      className={cn(
        'container mx-auto flex flex-col gap-12 pb-6 pt-24',
        className,
      )}
    >
      {/* First Row */}
      <div className="flex flex-col items-center justify-between gap-6 xs:flex-row xs:items-end">
        {/* Left Side - Logo and CTAs */}
        <div className="flex flex-col items-center gap-3 xs:items-start xs:gap-1">
          <Full width={112} />
          <p className="text-sm text-muted-foreground">
            Tournois Esport Sans Friction
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              className="flex gap-1 bg-white text-xs hover:bg-white/90"
            >
              <Discord size={14} />
              <span>Discord</span>
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Link href="/contact">Contacter</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-end gap-6 xs:items-end">
          <Badge variant="secondary" className="font-normal">
            {`Alpha v${packageJson.version}`}
          </Badge>
          <div className="flex items-end gap-2">
            <Link
              href="https://www.facebook.com/lowping.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                size={18}
                className="h-5 w-5 text-zinc-500 hover:text-foreground"
              />
            </Link>
            <Link
              href="https://x.com/lowping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X
                size={18}
                className="h-5 w-5 text-zinc-500 hover:text-foreground"
              />
            </Link>
            <Link
              href="https://www.instagram.com/lowping.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={18}
                className="h-5 w-5 text-zinc-500 hover:text-foreground"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Third Row - Copyright and Social */}
      <div className="flex flex-col-reverse items-center gap-4 xs:flex-row xs:justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Lowping. Tous droits réservés.
        </p>
        <div className="flex gap-4">
          <Link
            target="_blank"
            href={`/events/${upcomingEvent?.slug}/register`}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Événements
          </Link>
          <Link
            href="/tournaments"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Reglements
          </Link>
          <Link
            href="/about"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Termes & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
