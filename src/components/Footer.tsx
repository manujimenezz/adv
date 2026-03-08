import { Link } from 'react-router-dom'
import { Mail, MapPin, Linkedin } from 'lucide-react'
import { FooterBackgroundGradient, TextHoverEffect } from '@/components/ui/hover-footer'

const footerLinks = [
  { title: 'Navigation', links: [
    { label: 'Firm', to: '/firm' },
    { label: 'Advisory', to: '/advisory' },
    { label: 'Approach', to: '/approach' },
    { label: 'Contact', to: '/contact' },
  ]},
  { title: 'Helpful links', links: [
    { label: 'Contact', to: '/contact' },
  ]},
]

const contactInfo = [
  {
    icon: <Mail size={20} className="text-[#3ca2fa]" />,
    text: 'contact@advincapital.com',
    href: 'mailto:contact@advincapital.com',
  },
  {
    icon: <MapPin size={20} className="text-[#3ca2fa]" />,
    text: 'www.advincapital.com',
  },
]

const socialLinks = [
  { icon: <Linkedin size={22} />, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-navy relative h-fit overflow-hidden m-8 w-full">
      <FooterBackgroundGradient />
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Advin" className="z-50" />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-0 px-6 sm:px-10 lg:px-14 py-24 sm:py-32 z-40 relative h-80 -mt-[29px] mb-[25px]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-16 lg:gap-24 pb-16">
            {/* Description */}
            <div className="flex flex-col">
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Independent Investment Advisory focused on structured real asset transactions across domestic and international markets.
              </p>
            </div>

            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white text-xl font-semibold mb-8">
                  {section.title}
                </h4>
                <ul className="space-y-6">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="block text-base text-white/70 hover:text-[#3ca2fa] transition-colors my-3"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-white text-xl font-semibold mb-8">
                Contact
              </h4>
              <ul className="space-y-6">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    {item.icon}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block text-base text-white/70 hover:text-[#3ca2fa] transition-colors my-3"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="block text-base text-white/70 hover:text-[#3ca2fa] transition-colors cursor-default my-3">
                        {item.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-t border-white/10 my-10" />

          <div className="flex flex-col md:flex-row justify-between items-center text-base space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-white/50">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:text-[#3ca2fa] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-center md:text-left text-white/50">
              &copy; {new Date().getFullYear()} Advin Capital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
