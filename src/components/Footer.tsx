import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { to: '/firm', label: 'Firm' },
  { to: '/advisory', label: 'Advisory' },
  { to: '/approach', label: 'Approach' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-[15px] font-bold tracking-tight">Advin Capital</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Independent Investment Advisory focused on structured real asset transactions across domestic and international markets.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-5">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-5">
              Contact
            </h4>
            <a
              href="mailto:contact@advincapital.com"
              className="group inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              contact@advincapital.com
              <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-sm text-white/30 mt-3">
              www.advincapital.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/25">
            &copy; {new Date().getFullYear()} Advin Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
