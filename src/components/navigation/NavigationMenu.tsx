'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Full } from '@components/brand'
import { Thunder } from '@components/icons'
import { Button } from '@components/ui/button'
import { useUpcomingEvent } from '@features/events/hooks/useEvents'
import { setScrollLock } from '@hooks/use-lockscroll'
import { introVariants } from '@lib/animations'
import { Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { href: '/tournaments', label: 'Règlement' },
  { href: '/contact', label: 'Contacter' },
]

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { upcomingEvent } = useUpcomingEvent()

  return (
    <nav className="absolute left-0 right-0 top-0 z-30 w-full pt-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between overflow-hidden">
          <motion.div
            variants={introVariants.navigation.logo}
            initial="initial"
            animate="animate"
            className="z-20" // Changed to z-20 to match hamburger menu
          >
            <Link
              href="/"
              className="flex items-center gap-2 p-1.5 transition-opacity hover:opacity-80"
            >
              <Full width={160} color="white" />
            </Link>
          </motion.div>

          <div className="hidden items-center gap-4 sm:flex">
            <motion.div
              variants={introVariants.navigation.navLinks.container}
              initial="initial"
              animate="animate"
              className="flex items-center gap-0"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={introVariants.navigation.navLinks.item}
                >
                  <NavLink href={link.href}>{link.label}</NavLink>
                </motion.div>
              ))}
              <motion.div
                variants={introVariants.navigation.navLinks.item}
                className="ml-2"
              >
                <Button
                  variant="default"
                  size="sm"
                  className="flex h-10 items-center gap-1.5 pl-2.5 pr-3 mix-blend-screen"
                >
                  <Thunder size={16} />
                  <Link
                    href={`/events/${upcomingEvent?.slug}/register`}
                    target="_blank"
                    className="flex items-center gap-2 text-sm"
                  >
                    Évènement
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.button
            className="relative z-20 p-1.5 sm:hidden"
            onClick={() => {
              setIsOpen(!isOpen)
              setScrollLock(true)
            }}
            variants={introVariants.navigation.mobileButton}
            initial="initial"
            animate="animate"
          >
            <Menu size={32} color="white" />
            <span className="sr-only">Open menu</span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            onClose={() => {
              setIsOpen(false)
              setScrollLock(false)
            }}
            navLinks={[
              { href: '/', label: 'Accueil' },
              { href: '/tournaments', label: 'Règlement' },
              {
                href: `/events/${upcomingEvent?.slug}/register`,
                label: 'Évènement',
              },
              { href: '/contact', label: 'Contacter' },
            ]}
          />
        )}
      </AnimatePresence>
    </nav>
  )
}

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link href={href}>
    <Button
      variant="ghost"
      className="group relative text-sm font-normal text-white/90 transition-colors hover:bg-white/20 hover:text-white hover:backdrop-blur-sm"
    >
      {children}
    </Button>
  </Link>
)
