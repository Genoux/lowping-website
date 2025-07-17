import Image from 'next/image'
import { Full } from '@components/brand'
import { HeaderContent } from '@features/events/components/Header/HeaderContent'
import { HeaderTitle } from '@features/events/components/Header/HeaderTitle'
import { motion, useScroll, useTransform } from 'motion/react'

export function Header() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'], {
    clamp: false,
  })

  return (
    <motion.div className="relative w-full origin-left">
      <div className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]">
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src="/banner-hero.png"
            alt="Lowping"
            fill
            className="object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
            }}
            quality={100}
            priority
          />
        </motion.div>
      </div>
      <section className="container">
        <div className="relative z-40 origin-center pb-28 pt-24 sm:origin-left sm:pb-40 sm:pt-32">
          <div className="overflow-hidden">
            <motion.div className="mb-8 flex justify-center xs:justify-start">
              <Full width={180} />
            </motion.div>
          </div>
          <HeaderTitle />
          <HeaderContent />
        </div>
      </section>
    </motion.div>
  )
}
