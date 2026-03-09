import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import HolographicCard from '../components/ui/holographic-card'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const ease = [0.22, 1, 0.36, 1] as const

const FIRM_HERO_IMAGE =
  'https://images.unsplash.com/photo-1522517779552-6cf4c1f31ee3?w=1920&h=1080&fit=crop&q=80&auto=format'

const PHILOSOPHY = [
  {
    title: 'Selectividad',
    description:
      'Participamos de forma selectiva en operaciones donde un asesoramiento estructurado puede aportar valor significativo.',
  },
  {
    title: 'Discreción',
    description:
      'Las operaciones se desarrollan bajo procesos confidenciales cuidadosamente gestionados para proteger los intereses de todas las partes.',
  },
  {
    title: 'Estructura',
    description:
      'Cada operación sigue una metodología disciplinada que aporta claridad, transparencia y certeza en la ejecución.',
  },
  {
    title: 'Alineación',
    description:
      'Priorizamos relaciones a largo plazo y la alineación estratégica entre propietarios e inversores.',
  },
]

const FOUNDER_SPECIALIZATIONS = ['Hospitality', 'Real Estate', 'Investment Advisory'] as const

export default function Firm() {
  const [specializationIndex, setSpecializationIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecializationIndex((prev) => (prev + 1) % FOUNDER_SPECIALIZATIONS.length)
    }, 2600)

    return () => clearInterval(interval)
  }, [])

  return (
    <PageTransition>
      {/* Hero (same pattern as Advisory, adapted for Firm) */}
      <section className="relative min-h-[70svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={FIRM_HERO_IMAGE}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />
        </div>

        <div className="relative z-10 w-full mx-auto px-8 sm:px-14 lg:px-20 flex flex-col items-center text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ padding: '6px 24px' }}
            className="inline-flex items-center rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] mb-10"
          >
            <span className="text-[12px] font-medium text-white/70 tracking-widest uppercase">
              La Firma
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white tracking-tight leading-[1.08]"
          >
            Identidad y filosofía
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-lg sm:text-xl text-white/55 leading-[1.7] max-w-xl"
          >
            Advin Capital es una firma independiente de asesoramiento enfocada en operaciones complejas de inversión, combinando estructuración estratégica y ejecución con estándares institucionales.
          </motion.p>
        </div>
      </section>

      {/* Intro: The Firm (text + image, same pattern as Home) */}
      <section
        id="the-firm"
        className="w-full bg-warm-white min-h-[520px] sm:min-h-[580px] py-20 sm:py-28 mt-32 sm:mt-40 lg:mt-52 mb-24 sm:mb-32 lg:mb-40"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[666px]">
          <div className="order-2 lg:order-1 w-full px-6 sm:px-10 lg:px-14 lg:pl-24 lg:pr-12 lg:max-w-[50%] lg:w-[955px] lg:ml-[20px]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease }}
              style={{ marginLeft: 40 }}
              className="max-w-[700px] py-10 px-6 sm:py-10 sm:px-12 lg:py-10 lg:px-[111px]"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
                La Firma
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3rem] font-bold tracking-tight leading-[1.12] text-navy">
                Asesoramiento independiente. Ejecución con estándares institucionales.
              </h2>
              <p className="mt-[23px] mb-[23px] text-slate-mid text-lg sm:text-xl leading-[34px]">
                Advin Capital es una firma independiente de asesoramiento enfocada en operaciones complejas de inversión que requieren estructuración estratégica y una ejecución rigurosa.
              </p>
              <p className="mb-[23px] text-slate-mid text-lg sm:text-xl leading-[34px]">
                La firma se especializa en inversiones en hospitality y real estate, donde un enfoque disciplinado y procesos de transacción bien estructurados resultan esenciales para maximizar el valor de cada operación.
              </p>
              <p className="text-slate-mid text-lg sm:text-xl leading-[34px]">
                Advin Capital trabaja junto a propietarios de activos, inversores y socios institucionales que buscan asesoramiento estratégico, un posicionamiento claro de la inversión y procesos de mercado cuidadosamente gestionados.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="order-1 lg:order-2 w-full lg:flex-1 lg:min-w-[45%]"
          >
            <div className="w-full max-w-2xl mx-auto lg:max-w-none lg:ml-0 lg:mr-0 rounded-2xl overflow-hidden border border-black/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.08)] lg:rounded-l-2xl lg:rounded-r-none lg:border-r-0 lg:h-[613px]">
              <img
                src="https://images.unsplash.com/photo-1522517779552-6cf4c1f31ee3?w=900&h=700&fit=crop&q=80&auto=format"
                alt=""
                className="w-full h-full object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full lg:object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="w-full bg-cream min-h-[648px] py-24 sm:py-32 flex justify-center items-center mb-24 sm:mb-32 lg:mb-40">
        <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-14 flex flex-col items-center justify-center gap-12 sm:gap-16">
          <SectionHeading
            label="Filosofía"
            title="Principios"
            description="Advin Capital se guía por un conjunto de principios que definen su forma de trabajar en cada operación."
            align="center"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 w-full max-w-4xl mx-auto"
          >
            {PHILOSOPHY.map((item) => (
              <div key={item.title} className="flex flex-col">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-mid text-base sm:text-[17px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section
        id="founder"
        className="w-full bg-warm-white min-h-[520px] sm:min-h-[560px] py-20 sm:py-28 lg:py-32 flex justify-center items-center mb-24 sm:mb-32 lg:mb-40"
      >
        <div className="w-full max-w-6xl px-6 sm:px-10 lg:px-14">
          <SectionHeading
            label="Fundador"
            title="Josu Jiménez"
            description="Founder & Investment Advisor"
            align="left"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-12 sm:gap-16 md:items-center"
          >
            <div className="space-y-5 text-slate-mid text-base sm:text-[17px] leading-relaxed">
              <p>
                Josu Jiménez es fundador de AdvinCapital y cuenta con más de 15 años de experiencia en el sector inmobiliario y en
                operaciones de inversión vinculadas al sector hospitality. A lo largo de su trayectoria ha participado en la originación,
                estructuración y ejecución de múltiples operaciones, trabajando junto a propietarios, operadores e inversores en distintos
                mercados.
              </p>
              <p>
                Su enfoque combina conocimiento sectorial, análisis estratégico y una ejecución rigurosa en operaciones de inversión.
              </p>
            </div>
            <div className="md:pl-6 flex items-center justify-center">
              <HolographicCard className="w-full h-full rounded-3xl">
                <div className="w-full h-full min-h-[260px] rounded-3xl border border-navy/10 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] px-10 py-10 sm:px-12 sm:py-10 flex flex-col items-center justify-center text-center">
                  <p className="text-[13px] font-semibold tracking-tight text-navy -mt-[70px] mb-0">
                    Josu Jiménez
                  </p>
                  <p className="mt-1 mb-[30px] text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-mid">
                    Founder &amp; Investment Advisor
                  </p>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-mid">
                    Especialización
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={FOUNDER_SPECIALIZATIONS[specializationIndex]}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.6, ease }}
                      className="mt-4 text-2xl sm:text-3xl font-heading font-semibold tracking-tight text-navy"
                    >
                      {FOUNDER_SPECIALIZATIONS[specializationIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </HolographicCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operating Model (full-width image like Market Coverage) */}
      <section id="operating-model" className="relative min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden py-20 sm:py-28 mb-24 sm:mb-32 lg:mb-40">
        <div className="absolute inset-0">
          <motion.img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=800&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease }}
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 text-center">
          <SectionHeading
            label="Modelo operativo"
            title="Procesos estructurados"
            description="Cada operación se aborda mediante una estrategia definida, documentación rigurosa y un proceso de mercado cuidadosamente gestionado. Advin Capital se centra en operaciones selectivas donde la estructuración estratégica y una ejecución disciplinada son determinantes para alcanzar resultados óptimos."
            align="center"
            light
          />
        </div>
      </section>

    </PageTransition>
  )
}
