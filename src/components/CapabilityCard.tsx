import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HolographicCard from './ui/holographic-card'

const ease = [0.22, 1, 0.36, 1] as const

export interface CapabilityCardProps {
  title: string
  description: string
  image: string
  imageAlt?: string
  to: string
  index?: number
}

export default function CapabilityCard({
  title,
  description,
  image,
  imageAlt = '',
  to,
  index = 0,
}: CapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <Link to={to} className="block h-full rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
        <HolographicCard className="block h-full rounded-2xl overflow-hidden">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text readability */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"
              aria-hidden
            />
            <div
              className="absolute inset-0 flex flex-col justify-end"
              style={{ padding: '2.5rem 2.5rem 3rem 2.5rem' }}
            >
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                {title}
              </h3>
              <p className="mt-4 text-white/90 text-[15px] leading-relaxed">
                {description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-200">
                Learn more
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </HolographicCard>
      </Link>
    </motion.div>
  )
}
