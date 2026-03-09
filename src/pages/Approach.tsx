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

const APPROACH_HERO_IMAGE = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80'
const APPROACH_CTA_IMAGE = APPROACH_HERO_IMAGE

const STEPS = [
  {
    step: 1,
    title: 'Análisis y estrategia',
    description:
      'Cada operación comienza con un análisis detallado del activo, de los objetivos de la propiedad y de la estrategia de transacción más adecuada. En esta fase se define el posicionamiento de la inversión, el diseño del proceso y el enfoque estratégico antes de iniciar cualquier interacción con el mercado.',
  },
  {
    step: 2,
    title: 'Preparación de la inversión',
    description:
      'Advin Capital prepara la operación mediante el desarrollo de una narrativa de inversión clara, documentación estructurada y materiales informativos para inversores. Esta fase permite presentar la oportunidad de forma clara, coherente y bien estructurada.',
  },
  {
    step: 3,
    title: 'Proceso de mercado',
    description:
      'La operación se presenta a un grupo seleccionado de inversores potenciales a través de un proceso cuidadosamente gestionado. La firma coordina el contacto con inversores, el flujo de información y el calendario del proceso.',
  },
  {
    step: 4,
    title: 'Ejecución de la operación',
    description:
      'Advin Capital acompaña la estructuración de capital y la coordinación con asesores legales y financieros hasta la finalización de la operación, asegurando claridad, eficiencia y disciplina en todo el proceso.',
  },
]

export default function Approach() {
  return (
    <PageTransition>
      {/* Hero (same pattern as Firm) */}
      <section className="relative min-h-[70svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={APPROACH_HERO_IMAGE}
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
              Metodología
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white tracking-tight leading-[1.08]"
          >
            Nuestro enfoque
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-lg sm:text-xl text-white/55 leading-[1.7] max-w-xl"
          >
            Cada operación se desarrolla mediante una metodología estructurada que permite una ejecución disciplinada y un proceso de inversión cuidadosamente gestionado.
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
              Contactar con la firma
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Four steps */}
      <section className="w-full bg-cream min-h-[720px] py-24 sm:py-32 mt-32 sm:mt-40 lg:mt-52 flex justify-center items-center mb-24 sm:mb-32 lg:mb-40">
        <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-14 flex flex-col items-center justify-center gap-12 sm:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 w-full">
            {STEPS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                className="flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                  {String(item.step).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight leading-[1.2] text-navy">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-mid text-base sm:text-[17px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (same pattern as Advisory) */}
      <section
        id="approach-cta"
        className="relative min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden py-20 sm:py-28"
      >
        <div className="absolute inset-0">
          <motion.img
            src={APPROACH_CTA_IMAGE}
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
            title="Para consultas confidenciales"
            description="Por favor, contacte con la firma."
            align="center"
            light
          />
          <Link
            to="/contact"
            style={{ padding: '16px 44px', fontSize: '16px' }}
            className="inline-flex items-center justify-center gap-3 mt-8 bg-white text-navy font-semibold rounded-2xl hover:bg-cream active:scale-[0.97] transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.15)] group"
          >
            Contactar con la firma
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
