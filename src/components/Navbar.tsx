import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LogoIcon from '../../logo/icono.svg'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/firm', label: 'Firm' },
  { to: '/advisory', label: 'Advisory' },
  { to: '/approach', label: 'Approach' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const HIDE_THRESHOLD = 160
    const handleScroll = () => {
      const currentY = window.scrollY

      setScrolled(currentY > 40)

      // Always show navbar near la parte superior
      if (currentY < 10) {
        setHidden(false)
      } else {
        const delta = currentY - lastScrollY.current

        // Solo empezamos a ocultar después de cierto desplazamiento
        if (currentY > HIDE_THRESHOLD) {
          // Pequeño umbral para evitar temblores
          if (delta > 4) {
            // Scroll hacia abajo → ocultar
            setHidden(true)
          } else if (delta < -4) {
            // Scroll hacia arriba → mostrar
            setHidden(false)
          }
        } else {
          // Antes del umbral, la navbar siempre visible
          setHidden(false)
        }
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
    setHidden(false)
  }, [location])

  const isDark = isHome && !scrolled

  return (
    <>
      <motion.header
        initial="visible"
        animate={hidden ? 'hidden' : 'visible'}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -80, opacity: 0 },
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ paddingTop: '24px' }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 sm:px-10"
      >
        <nav
          style={{ paddingTop: '14px', paddingBottom: '14px' }}
          className={`
            w-full max-w-[1080px] flex items-center justify-between
            rounded-2xl border transition-all duration-500 ease-out
            px-10 sm:px-14
            ${scrolled
              ? 'bg-white/75 border-black/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl'
              : isDark
                ? 'bg-white/[0.07] border-white/[0.1] backdrop-blur-xl'
                : 'bg-white/50 border-black/[0.04] backdrop-blur-xl'
            }
          `}
        >
          {/* Logo */}
          <Link to="/" className="group shrink-0" style={{ marginLeft: '20px' }}>
            <img
              src={LogoIcon}
              alt="Advin Capital"
              className="h-7 sm:h-8 w-auto transition-opacity duration-500 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop links */}
          <div
            className={`hidden md:flex items-center rounded-2xl border ${isDark ? 'bg-white/[0.06] border-white/[0.08]' : 'bg-black/[0.03] border-black/[0.04]'}`}
            style={{ padding: '6px', gap: '4px', marginRight: '-404px' }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ padding: '12px 28px', fontSize: '15px' }}
                  className={`
                    relative font-medium rounded-xl transition-all duration-200
                    ${isDark
                      ? isActive ? 'text-white bg-white/[0.12]' : 'text-white/55 hover:text-white hover:bg-white/[0.06]'
                      : isActive ? 'text-navy bg-white shadow-sm' : 'text-slate-mid hover:text-navy hover:bg-white/60'
                    }
                  `}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-colors ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-navy'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mx-5 mt-28 bg-white/90 backdrop-blur-2xl rounded-2xl border border-black/[0.06] shadow-2xl p-3 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className={`
                      block px-5 py-4 rounded-xl text-[15px] font-medium transition-all duration-150
                      ${location.pathname === link.to
                        ? 'bg-black/[0.04] text-navy'
                        : 'text-slate-mid hover:bg-black/[0.02] hover:text-navy'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
