import type { FormEvent } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import GoogleMap from '../components/GoogleMap'

const ease = [0.22, 1, 0.36, 1] as const

const CONTACT_HERO_IMAGE =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80&auto=format'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const lines = [
      name && `Nombre: ${name}`,
      email && `Email: ${email}`,
      '',
      message && message,
    ].filter(Boolean)

    const body = encodeURIComponent(lines.join('\n'))
    const subject = encodeURIComponent('Nuevo contacto desde la web')

    window.location.href = `mailto:hello@advincapital.com?subject=${subject}&body=${body}`
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-start md:items-center justify-center overflow-hidden pb-6 md:pb-0">
        <div className="absolute inset-0">
          <img
            src={CONTACT_HERO_IMAGE}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-10 lg:px-20 py-8 sm:py-14 lg:py-20 mt-16 md:mt-0">
          {/* Espaciador solo para móvil para evitar solapamiento con la navbar fija */}
          <div className="block md:hidden h-24" />

          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] w-full">
            <div className="order-2 lg:order-1 flex flex-col gap-3">
              <div className="px-1 sm:px-2">
                <p
                  className="text-lg sm:text-xl font-bold text-white"
                  style={{ marginLeft: 26 }}
                >
                  Encuéntranos aquí
                </p>
                <p
                  className="mt-1 text-xs sm:text-sm text-white/70"
                  style={{ marginLeft: 26 }}
                >
                  Calle Antonio Machado 8 - Albacete (Spain)
                </p>
              </div>
              {/* Mapa mobile */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease, delay: 0 }}
                className="md:hidden w-full max-w-[380px] mx-auto rounded-2xl bg-white/[0.08] border border-white/[0.14] backdrop-blur-2xl overflow-hidden min-h-[320px]"
                style={{ marginLeft: 26 }}
              >
                <GoogleMap lat={38.98896} lng={-1.85915} zoom={16} />
              </motion.div>

              {/* Mapa desktop (sin cambios de layout) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease, delay: 0 }}
                className="hidden md:block rounded-2xl bg-white/[0.08] border border-white/[0.14] backdrop-blur-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] lg:min-h-[455px]"
              >
                <GoogleMap lat={38.98896} lng={-1.85915} zoom={16} />
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-3">
              <div className="px-1 sm:px-2 text-left md:text-right">
                <p
                  className="text-lg sm:text-xl font-bold text-white"
                  style={{ marginLeft: 26 }}
                >
                  Escríbenos aquí
                </p>
                <p
                  className="mt-1 text-xs sm:text-sm text-white/70"
                  style={{ marginLeft: 26 }}
                >
                  hello@advincapital.com
                </p>
              </div>

              {/* Versión mobile del formulario */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease, delay: 0.12 }}
                className="md:hidden mt-20 w-full max-w-[380px] mx-auto rounded-2xl bg-white/[0.08] border border-white/[0.14] backdrop-blur-2xl p-4 sm:p-6"
                style={{ marginLeft: 26 }}
              >
                <div className="flex h-full flex-col rounded-[14px] bg-navy/60 px-5 sm:px-8 py-6 sm:py-8">
                  <form className="flex flex-col h-full" onSubmit={handleSubmit}>
                    <div className="space-y-5 flex-1 w-full max-w-[360px] mx-auto">
                      <div>
                        <input
                          type="text"
                          aria-label="Nombre"
                          className="w-full h-12 sm:h-16 rounded-2xl bg-white/10 border border-white/25 px-5 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white/80 placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-gold/80 focus:border-gold/80 transition mt-3"
                          style={{ marginTop: 10, marginLeft: 10, paddingLeft: 10 }}
                          placeholder="NOMBRE"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          aria-label="Email"
                          className="w-full h-12 sm:h-16 rounded-2xl bg-white/10 border border-white/25 px-5 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white/80 placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-gold/80 focus:border-gold/80 transition mt-3"
                          style={{ marginTop: 10, marginLeft: 10, paddingLeft: 10 }}
                          placeholder="EMAIL"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <textarea
                          aria-label="Mensaje"
                          className="w-full min-h-[160px] sm:min-h-[210px] rounded-2xl bg-white/10 border border-white/25 px-5 py-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white/80 placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-gold/80 focus:border-gold/80 transition resize-none mt-3"
                          style={{ marginTop: 10, marginLeft: 10, paddingLeft: 10, paddingTop: 10 }}
                          placeholder="MENSAJE"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-6 pt-1 w-full max-w-[350px] mx-auto">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center h-12 sm:h-14 rounded-full bg-white text-navy font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-cream active:scale-[0.98] transition-all duration-150 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                        style={{ marginTop: 10, marginBottom: 10, marginLeft: 15 }}
                      >
                        Enviar a hello@advincapital.com
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>

              {/* Versión desktop del formulario (idéntica a la original) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease, delay: 0.12 }}
                className="hidden md:block rounded-2xl bg-white/[0.08] border border-white/[0.14] backdrop-blur-2xl p-4 sm:p-6"
              >
                <div className="flex h-full flex-col rounded-[14px] bg-navy/60 px-5 sm:px-8 py-6 sm:py-8">
                  <form className="flex flex-col h-full" onSubmit={handleSubmit}>
                    <div className="space-y-5 flex-1">
                      <div>
                        <input
                          type="text"
                          aria-label="Nombre"
                          className="w-full sm:w-[457px] h-14 sm:h-16 rounded-2xl bg-white/10 border border-white/25 px-5 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white/80 placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-gold/80 focus:border-gold/80 transition"
                          style={{ marginLeft: 12, marginTop: 10, paddingLeft: 10 }}
                          placeholder="NOMBRE"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          aria-label="Email"
                          className="w-full sm:w-[457px] h-14 sm:h-16 rounded-2xl bg-white/10 border border-white/25 px-5 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white/80 placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-gold/80 focus:border-gold/80 transition"
                          style={{ marginLeft: 12, marginTop: 10, paddingLeft: 10 }}
                          placeholder="EMAIL"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <textarea
                          aria-label="Mensaje"
                          className="w-full sm:w-[457px] min-h-[180px] sm:min-h-[210px] rounded-2xl bg-white/10 border border-white/25 px-5 py-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white/80 placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-gold/80 focus:border-gold/80 transition resize-none"
                          style={{ marginLeft: 12, marginTop: 10, paddingLeft: 10, paddingTop: 10 }}
                          placeholder="MENSAJE"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-6 pt-1">
                      <button
                        type="submit"
                        className="inline-flex w-full sm:w-[457px] items-center justify-center h-12 sm:h-14 rounded-full bg-white text-navy font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-cream active:scale-[0.98] transition-all duration-150 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                        style={{ marginTop: 10, marginLeft: 12, marginBottom: 10 }}
                      >
                        Enviar a hello@advincapital.com
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
