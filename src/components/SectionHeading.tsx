import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ label, title, description, align = 'center', light = false }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  const maxWidth = align === 'left' ? 'max-w-2xl' : 'max-w-[900px]'
  const marginBottom = align === 'center' ? 'mb-20 sm:mb-24' : 'mb-12 sm:mb-16'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={align === 'center' ? { paddingTop: 28, paddingBottom: 28, paddingLeft: 17, paddingRight: 17 } : undefined}
      className={`flex flex-col ${alignment} ${maxWidth} ${align === 'center' ? 'mx-auto' : ''} ${marginBottom}`}
    >
      {label && (
        <span className={`inline-block text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 ${light ? 'text-gold-light' : 'text-gold'}`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15] w-[849px] max-w-full ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base sm:text-[17px] leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/50' : 'text-slate-mid'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
