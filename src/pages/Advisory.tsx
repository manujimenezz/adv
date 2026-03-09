import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const ease = [0.22, 1, 0.36, 1] as const

const ADVISORY_CTA_IMAGE = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=800&fit=crop&q=80'
const IMAGE_HOSPITALITY = 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=600&fit=crop&q=80'
const IMAGE_CAPITAL = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=600&fit=crop&q=80'
const IMAGE_STRATEGIC = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop&q=80'

const SERVICES = [
  {
    label: 'Hospitality',
    title: 'Asesoramiento estratégico en inversión hotelera',
    bullets: [
      'Operational hotels',
      'Development opportunities',
      'Value-add repositioning',
      'Operaciones estratégicas',
    ],
    closing:
      'Advin Capital works closely with owners and investors to structure transactions that maximise value and ensure efficient execution.',
    image: IMAGE_HOSPITALITY,
  },
  {
    label: 'Capital',
    title: 'Estructuración de capital',
    bullets: [
      'Estructuración de equity',
      'Diseño de investment structures',
      'Definición de capital strategies',
      'Investor alignment',
    ],
    closing:
      'Advin Capital apoya tanto a propietarios de activos que buscan socios de capital como a inversores que buscan oportunidades estructuradas.',
    image: IMAGE_CAPITAL,
  },
  {
    label: 'Strategic',
    title: 'Strategic Advisory',
    bullets: [
      'Investment positioning',
      'Transaction preparation',
      'Operator selection',
      'Investment thesis development',
    ],
    closing:
      'Advin Capital asesora en la preparación estratégica de las operaciones y en el posicionamiento de los activos para su presentación al mercado.',
    image: IMAGE_STRATEGIC,
  },
] as const

export default function Advisory() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[70svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ADVISORY_CTA_IMAGE}
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
              Advisory
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white tracking-tight leading-[1.08]"
          >
            Asesoramiento estratégico
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-lg sm:text-xl text-white/55 leading-[1.7] max-w-xl"
          >
            Asesoramiento estratégico en operaciones del sector hospitality y en transacciones de inversión, acompañando a
            nuestros clientes en todas las fases del ciclo de inversión.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ marginTop: '30px' }}
          >
            <Link
              to="/contact"
              style={{ padding: '16px 44px', fontSize: '16px' }}
              className="inline-flex items-center justify-center gap-3 bg-white text-navy font-semibold rounded-2xl hover:bg-cream active:scale-[0.97] transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.15)] group"
            >
              Contact the Firm
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section
        id="advisory-intro"
        className="w-full bg-warm-white min-h-[420px] flex items-center justify-center py-20 sm:py-28 mt-32 sm:mt-40 lg:mt-52 mb-40 sm:mb-48 lg:mb-56"
      >
        <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-14 flex flex-col items-center text-center justify-center">
          <SectionHeading
            label="Servicios"
            title="Asesoramiento estratégico"
            description="Asesoramiento estratégico en la estructuración y ejecución de operaciones de inversión."
            align="center"
          />
        </div>
      </section>

      {/* Service blocks */}
      {SERVICES.map((service, index) => {
        const textFirst = index % 2 === 0
        return (
          <section
            key={service.label}
            id={`advisory-${service.label.toLowerCase()}`}
            className="w-full bg-warm-white py-20 sm:py-28 mb-24 sm:mb-32 lg:mb-40"
          >
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div
                className={`order-2 w-full px-6 sm:px-10 lg:px-14 lg:pr-12 lg:max-w-[50%] ${
                  textFirst ? 'lg:order-1 lg:pl-24' : 'lg:order-2 lg:pr-24 lg:pl-12'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: textFirst ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease }}
                  className="max-w-3xl"
                  style={{
                    padding: '40px 0',
                    ...(service.label === 'Hospitality' ? { paddingLeft: 70 } : {}),
                    ...(service.label === 'Capital' ? { marginLeft: 70 } : {}),
                    ...(service.label === 'Strategic' ? { marginLeft: 70 } : {}),
                  }}
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
                    {service.label}
                  </span>
                  <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.12] text-navy">
                    {service.title}
                  </h2>
                  <ul className="mt-6 list-disc list-inside space-y-2 text-slate-mid text-lg sm:text-xl leading-relaxed">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="mt-6 text-slate-mid text-lg sm:text-xl leading-[34px]">
                    {service.closing}
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: textFirst ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease }}
                className={`order-1 w-full lg:flex-1 lg:min-w-[45%] ${
                  textFirst ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div
                  className={`w-full max-w-2xl mx-auto lg:max-w-none lg:ml-0 lg:mr-0 rounded-2xl overflow-hidden border border-black/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.08)] lg:h-[580px] ${
                    textFirst
                      ? 'lg:rounded-l-2xl lg:rounded-r-none lg:border-r-0'
                      : 'lg:rounded-r-2xl lg:rounded-l-none lg:border-l-0'
                  }`}
                >
                  <img
                    src={service.image}
                    alt=""
                    className="w-full h-full object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full lg:object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section
        id="advisory-cta"
        className="relative min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden py-20 sm:py-28"
      >
        <div className="absolute inset-0">
          <motion.img
            src={ADVISORY_CTA_IMAGE}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease }}
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 text-center flex flex-col items-center">
          <SectionHeading
            title="Contactar con Advin Capital."
            description="Para consultas confidenciales, contacte con Advin Capital."
            align="center"
            light
          />
          <Link
            to="/contact"
            style={{ padding: '16px 44px', fontSize: '16px' }}
            className="inline-flex items-center justify-center gap-3 mt-8 bg-white text-navy font-semibold rounded-2xl hover:bg-cream active:scale-[0.97] transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.15)] group"
          >
            Contactar
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
