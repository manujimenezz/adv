import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/firm', label: 'Firm' },
  { to: '/advisory', label: 'Advisory' },
  { to: '/approach', label: 'Approach' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  const isDark = isHome && !scrolled

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
             <span className={`text-lg font-bold tracking-tight transition-colors duration-500 group-hover:opacity-80 ${isDark ? 'text-white' : 'text-navy'}`}>
               Advin Capital
             </span>
          </Link>

          {/* Desktop links */}
          <div
            className={`hidden md:flex items-center rounded-2xl border ${isDark ? 'bg-white/[0.06] border-white/[0.08]' : 'bg-black/[0.03] border-black/[0.04]'}`}
            style={{ padding: '6px', gap: '4px', marginRight: '-450px' }}
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
              {[...navLinks, { to: '/contact', label: 'Contact' }].map((link, i) => (
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
