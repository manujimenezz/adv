import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const ease = [0.22, 1, 0.36, 1] as const

const CONTACT_HERO_IMAGE =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80&auto=format'

export default function Contact() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CONTACT_HERO_IMAGE}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />
        </div>

        <div className="relative z-10 w-full mx-auto px-8 sm:px-14 lg:px-20 flex flex-col items-center text-center h-[284px]">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08]">
            Contacto con la firma
          </h1>

          <div
            className="mt-12 grid gap-y-[53px] gap-x-7 sm:grid-cols-2 w-full max-w-3xl pb-px"
            style={{ paddingTop: '55px' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease, delay: 0 }}
              className="text-left sm:text-left rounded-2xl bg-white/[0.07] border border-white/[0.1] backdrop-blur-xl"
              style={{ padding: '16px' }}
            >
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-2">
                Dónde encontrarnos
              </h2>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                Calle Antonio Machado 8<br />
                02003 Albacete (Spain)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="text-left sm:text-left rounded-2xl bg-white/[0.07] border border-white/[0.1] backdrop-blur-xl"
              style={{ padding: '16px' }}
            >
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-2">
                Escríbanos aquí
              </h2>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-3">
                hello@advincapital.com
              </p>
              <a
                href="mailto:hello@advincapital.com"
                className="inline-flex text-sm sm:text-base font-medium text-white/85 underline underline-offset-4 hover:text-white transition-colors"
              >
                Abrir en su cliente de correo
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
