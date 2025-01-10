// Footer.tsx
'use client'

import Link from 'next/link'
import { Discord, Facebook, Instagram, X } from '@components/icons'
import { cn } from '@lib/utils'
import { Full } from '@lowping/brand-kit'
import packageJson from '@package'
import { Badge } from '@ui/badge'
import { Button } from '@ui/button'
import { Calendar } from 'lucide-react'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'container mx-auto flex flex-col gap-8 pb-12 pt-40',
        className,
      )}
    >
      {/* First Row */}
      <div className="flex items-end justify-between">
        {/* Left Side - Logo and CTAs */}
        <div className="flex flex-col gap-1">
          <Full width={112} />
          <p className="text-sm text-muted-foreground">
            Tournois Esport Sans Friction
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Button variant="default" size="sm" className="flex gap-1 text-xs">
              <Calendar />
              <Link href="/events">Évenements</Link>
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Link href="/contact">Contacter</Link>
            </Button>
          </div>
        </div>

        {/* Right Side - Nav Links and Alpha Badge */}
        <div className="flex flex-col items-end justify-end gap-6">
          <Badge variant="secondary" className="font-normal">
            {`Alpha v${packageJson.version}`}
          </Badge>
          <div className="flex gap-2">
            <Link
              href="https://www.facebook.com/lowping.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                size={18}
                className="text-zinc-500 hover:text-foreground"
              />
            </Link>
            <Link
              href="https://discord.gg/lowping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord
                size={18}
                className="text-zinc-500 hover:text-foreground"
              />
            </Link>
            <Link
              href="https://x.com/lowping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X size={18} className="text-zinc-500 hover:text-foreground" />
            </Link>
            <Link
              href="https://www.instagram.com/lowping.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={18}
                className="text-zinc-500 hover:text-foreground"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Third Row - Copyright and Social */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Lowping. Tous droits réservés.
        </p>
        <div className="flex gap-4">
          <Link
            href="/events"
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
