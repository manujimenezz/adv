import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import CapabilityCard from '../components/CapabilityCard'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const ease = [0.22, 1, 0.36, 1] as const

const CAPABILITIES = [
  {
    title: 'Hospitality',
    description: 'Advisory and capital solutions for hospitality and leisure assets. From operational due diligence to structuring and execution.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
    to: '/advisory',
  },
  {
    title: 'Capital',
    description: 'Capital structuring, placement and selective co-investment across real assets. Tailored to institutional and family office mandates.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    to: '/advisory',
  },
  {
    title: 'Strategic',
    description: 'Strategic advisory for acquisitions, disposals and portfolio optimisation. Independent perspective with execution focus.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
    to: '/advisory',
  },
]

export default function Home() {
  return (
    <PageTransition>
      {/* Hero (unchanged) */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=1080&fit=crop&q=80"
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
              Independent Investment Advisory
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white tracking-tight leading-[1.08]"
          >
            Advin Capital
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-lg sm:text-xl text-white/55 leading-[1.7] max-w-xl"
          >
            Focused on structured real asset transactions. Strategic advisory, capital structuring and selective co-investment.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ marginTop: '30px' }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              to="/contact"
              style={{ padding: '16px 44px', fontSize: '16px' }}
              className="inline-flex items-center justify-center gap-3 bg-white text-navy font-semibold rounded-2xl hover:bg-cream active:scale-[0.97] transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.15)] group"
            >
              Contact the Firm
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/advisory"
              style={{ padding: '16px 44px', fontSize: '16px' }}
              className="inline-flex items-center justify-center gap-3 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] text-white font-semibold rounded-2xl hover:bg-white/[0.14] active:scale-[0.97] transition-all duration-200"
            >
              Our Advisory
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-6 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro / Value */}
      <section id="intro" className="w-full bg-warm-white min-h-[420px] flex items-center justify-center gap-[100px] py-20 sm:py-28 mt-32 sm:mt-40 lg:mt-52 mb-40 sm:mb-48 lg:mb-56">
        <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-14 flex flex-col items-center text-center justify-center">
          <SectionHeading
            label="Why Advin"
            title="Independent advice, execution focus"
            description="We advise on structured real asset transactions across domestic and international markets—without conflicts of interest."
            align="center"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-10 sm:gap-16 md:gap-24"
          >
            <div className="text-center">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-gold tabular-nums">15+</span>
              <p className="mt-1 text-sm font-medium text-slate-mid uppercase tracking-wider">Years experience</p>
            </div>
            <div className="text-center">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-navy tabular-nums">50+</span>
              <p className="mt-1 text-sm font-medium text-slate-mid uppercase tracking-wider">Transactions advised</p>
            </div>
            <div className="text-center">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-navy tabular-nums">€2B+</span>
              <p className="mt-1 text-sm font-medium text-slate-mid uppercase tracking-wider">Volume structured</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="w-full bg-cream min-h-[720px] py-24 sm:py-32 flex justify-center items-center mb-24 sm:mb-32 lg:mb-40">
        <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-14 flex flex-col items-center justify-center gap-12 sm:gap-16">
          <SectionHeading
            label="What we do"
            title="Advisory and capital solutions"
            description="Hospitality, capital structuring and strategic advisory—delivered with a single team and one standard."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full" style={{ marginBottom: 40, marginTop: -40 }}>
            {CAPABILITIES.map((item, i) => (
              <CapabilityCard
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                to={item.to}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Firm */}
      <section id="the-firm" className="w-full bg-warm-white py-20 sm:py-28 mb-24 sm:mb-32 lg:mb-40">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Texto: padding izquierdo claro */}
          <div className="order-2 lg:order-1 w-full px-6 sm:px-10 lg:px-14 lg:pl-24 lg:pr-12 lg:max-w-[50%]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease }}
              className="max-w-3xl"
              style={{ padding: '40px 111px' }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
                The Firm
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.12] text-navy">
                Boutique advisory, institutional standard
              </h2>
              <p className="mt-[23px] mb-[23px] text-slate-mid text-lg sm:text-xl leading-[34px]">
                A dedicated team with deep experience in hospitality and real assets. We combine sector expertise with rigorous execution and alignment to our clients' objectives.
              </p>
              <Link
                to="/firm"
                className="inline-flex items-center gap-2 mt-10 text-gold font-semibold hover:text-gold-light transition-colors duration-200 group text-base"
              >
                About the firm
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          {/* Imagen: pegada a la derecha, altura media */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="order-1 lg:order-2 w-full lg:flex-1 lg:min-w-[45%]"
          >
            <div className="w-full max-w-2xl mx-auto lg:max-w-none lg:ml-0 lg:mr-0 rounded-2xl overflow-hidden border border-black/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.08)] lg:rounded-l-2xl lg:rounded-r-none lg:border-r-0 lg:h-[580px]">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=1000&fit=crop&q=80"
                alt=""
                className="w-full h-full object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full lg:object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Coverage */}
      <section id="market-coverage" className="relative min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0">
          <motion.img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=800&fit=crop&q=80"
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
            label="Coverage"
            title="Domestic and international markets"
            description="We advise on transactions across Europe and selected international markets, with on-the-ground experience and a consistent approach."
            align="center"
            light
          />
        </div>
      </section>

    </PageTransition>
  )
}
