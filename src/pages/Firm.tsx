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

const FIRM_HERO_IMAGE = 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop&q=80'

const PHILOSOPHY = [
  {
    title: 'Selectivity',
    description: 'Advin Capital engages selectively in opportunities where structured advisory can create meaningful value.',
  },
  {
    title: 'Discretion',
    description: 'Transactions are conducted under confidential processes designed to protect the interests of all parties.',
  },
  {
    title: 'Structure',
    description: 'Each engagement follows a disciplined methodology designed to ensure clarity, transparency and execution certainty.',
  },
  {
    title: 'Alignment',
    description: 'The firm prioritises long-term relationships and strategic alignment between owners and investors.',
  },
]

export default function Firm() {
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
              The Firm
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white tracking-tight leading-[1.08]"
          >
            Identity & philosophy
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-lg sm:text-xl text-white/55 leading-[1.7] max-w-xl"
          >
            Independent advisory firm established to support complex real asset transactions with strategic structuring and institutional execution.
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

      {/* Intro: The Firm (text + image, same pattern as Home) */}
      <section id="the-firm" className="w-full bg-warm-white py-20 sm:py-28 mt-32 sm:mt-40 lg:mt-52 mb-24 sm:mb-32 lg:mb-40">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="order-2 lg:order-1 w-full px-6 sm:px-10 lg:px-14 lg:pl-24 lg:pr-12 lg:max-w-[50%]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease }}
              className="max-w-3xl py-10 px-6 sm:py-10 sm:px-12 lg:py-10 lg:px-[111px]"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
                The Firm
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.12] text-navy">
                Independent advisory, institutional execution
              </h2>
              <p className="mt-[23px] mb-[23px] text-slate-mid text-lg sm:text-xl leading-[34px]">
                Advin Capital is an independent advisory firm established to support complex real asset transactions requiring strategic structuring and institutional execution.
              </p>
              <p className="mb-[23px] text-slate-mid text-lg sm:text-xl leading-[34px]">
                The firm focuses on hospitality and real estate investments where disciplined advisory and structured transaction processes are essential to achieving optimal outcomes.
              </p>
              <p className="text-slate-mid text-lg sm:text-xl leading-[34px]">
                Advin Capital works with asset owners, investors and institutional partners seeking thoughtful advisory, strategic positioning and controlled market processes.
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
            <div className="w-full max-w-2xl mx-auto lg:max-w-none lg:ml-0 lg:mr-0 rounded-2xl overflow-hidden border border-black/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.08)] lg:rounded-l-2xl lg:rounded-r-none lg:border-r-0 lg:h-[580px]">
              <img
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&h=700&fit=crop&q=80"
                alt=""
                className="w-full h-full object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full lg:object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="w-full bg-cream min-h-[420px] py-24 sm:py-32 flex justify-center items-center mb-24 sm:mb-32 lg:mb-40">
        <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-14 flex flex-col items-center justify-center gap-12 sm:gap-16">
          <SectionHeading
            label="Philosophy"
            title="Core principles"
            description="The firm is built on a set of core principles that guide every mandate."
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
            label="Operating model"
            title="Structured and confidential mandates"
            description="Advin Capital operates exclusively under structured and confidential mandates. The firm does not function as a listing platform or open brokerage intermediary. Instead, each mandate is approached through a defined strategy, institutional documentation and controlled investor engagement."
            align="center"
            light
          />
        </div>
      </section>

    </PageTransition>
  )
}
