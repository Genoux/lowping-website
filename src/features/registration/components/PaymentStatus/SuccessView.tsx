// features/registration/components/layout/PaymentStatus/SuccessView.tsx
import Link from 'next/link'
import { EventPoster } from '@features/events/components/EventGallery/EventPoster'
import { EventSummaryCard } from '@features/registration/components/EventSummary'
import { baseVariants, staggerVariants } from '@lib/animations'
import type { RegistrationDetails } from '@registration/types/registrations'
import { Button } from '@ui/button'
import { BadgeCheck, Calendar } from 'lucide-react'
import { motion } from 'motion/react'

interface SuccessViewProps {
  details: RegistrationDetails
  title: string
}

export function CalendarButton({
  event,
}: {
  event: { name: string; date: string }
}) {
  const handleAddToCalendar = () => {
    const eventDate = new Date(event.date)
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&dates=${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}/${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}`
    window.open(url, '_blank')
  }

  return (
    <Button
      variant="link"
      onClick={() => handleAddToCalendar()}
      className="m-0 p-0 text-white"
    >
      <Calendar size={16} />
      Ajouter au calendrier
    </Button>
  )
}

export function SuccessView({ details, title }: SuccessViewProps) {
  if (!details?.event) return null

  return (
    <div className="grid h-full w-full grid-cols-1 items-center gap-12 overflow-hidden md:grid-cols-2 md:gap-2">
      <motion.div
        variants={baseVariants.slideUp}
        initial="initial"
        animate="animate"
        className="flex justify-center"
      >
        <EventPoster event={details.event} showCTA={false} size="md" />
      </motion.div>

      <div className="flex w-full flex-col items-center md:max-w-md md:items-start">
        <motion.div
          variants={staggerVariants.parent}
          initial="initial"
          animate="animate"
          className="flex w-full flex-col gap-6"
        >
          <motion.div
            variants={staggerVariants.child}
            className="flex flex-col gap-2 text-center md:text-left"
          >
            <h1 className="flex items-center justify-center gap-2 text-2xl font-bold md:justify-start">
              <BadgeCheck className="text-green-500" size={28} />
              {title}
            </h1>
            {details.registration && (
              <p className="text-sm text-muted-foreground">
                Un email de confirmation a été envoyé à{' '}
                {details.registration.email}
              </p>
            )}
          </motion.div>

          <motion.div
            variants={staggerVariants.child}
            className="mx-auto w-full xs:w-3/4 md:w-full"
          >
            <EventSummaryCard event={details.event} />
          </motion.div>

          <motion.div
            variants={staggerVariants.child}
            className="mx-auto flex gap-2 md:mx-0"
          >
            <Link href="/">
              <Button className="bg-white text-background hover:bg-white/80">
                Retour
              </Button>
            </Link>
            {details.receipt_url && (
              <Button variant="outline">Voir la commande</Button>
            )}
          </motion.div>

          <motion.div
            variants={staggerVariants.child}
            className="self-center md:self-start"
          >
            <CalendarButton event={details.event} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
