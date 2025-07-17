// features/home/components/Hero/components/ActionButtons.tsx
import Link from 'next/link'
import { Discord, Thunder } from '@components/icons'
import { introVariants } from '@lib/animations'
import { Button } from '@ui/button'
import { motion } from 'motion/react'

export function ActionButtons() {
  return (
    <motion.div
      variants={introVariants.content.button}
      initial="initial"
      animate="animate"
      className="flex flex-row justify-center gap-2"
    >
      <Button
        variant="default"
        size="lg"
        className="flex items-center gap-1.5 pl-3 pr-4 mix-blend-screen"
      >
        <Thunder size={18} />
        <Link href="/events" className="flex items-center gap-2">
          Évènements
        </Link>
      </Button>
      <Button
        size="lg"
        className="bg-white px-8 text-background mix-blend-screen hover:bg-white/80"
      >
        Discord
        <Discord className="text-[#000000]" />
      </Button>
    </motion.div>
  )
}
