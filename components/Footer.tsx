import { Clock, MapPin, Navigation, Facebook, Instagram, Youtube, Music2, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const quickLinks1 = [
    { label: 'About Us', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Sermons', href: '#sermons' },
    { label: 'Give', href: '#give' },
    { label: 'Employment', href: '#employment' },
  ]

  const quickLinks2 = [
    { label: 'Visit', href: '#visit' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Community', href: '#community' },
    { label: 'Terms of Use', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ]

  const socials = [
    { icon: Facebook, href: '#facebook' },
    { icon: Instagram, href: '#instagram' },
    { icon: Youtube, href: '#youtube' },
  ]

  return (
    <footer className="bg-dark-black text-white pt-0">
      {/* Top Gold Ribbon */}
      <div className="w-full h-1 bg-gold" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12">
          {/* Col 1 — Brand + Links + Social */}
          <div className="flex flex-col">
            {/* Logo zone */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full border border-dark-border bg-light-mid flex items-center justify-center font-body font-bold text-white text-xs tracking-widest dark:bg-dark-card">
                    <Image
                    src="/logo-white.svg"
                    alt="Amazing Grace Ministries Logo"
                    width={48}
                    height={48}
                    priority
                    className="object-contain hidden dark:block"
                  />
                  <Image
                    src="/logo-dark.svg"
                    alt="Amazing Grace Ministries Logo"
                    width={48}
                    height={48}
                    priority
                    className="object-contain dark:hidden"
                  />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-white">
                  Amazing Grace
                </h2>
                <p className="font-body text-xs text-white/45 tracking-widest uppercase">
                  Ministries MN
                </p>
              </div>
            </div>

            <p className="font-display italic text-sm text-white/35 max-w-[240px] mb-8">
              &ldquo;Surely the Lord is in this place.&rdquo; &mdash; Genesis 28:16
            </p>

            {/* Quick Links */}
            <span className="font-body font-bold text-[11px] uppercase tracking-[0.14em] text-gold underline underline-offset-4 mb-4">
              QUICK LINKS
            </span>

            {/* Tier 1 */}
            <div className="flex flex-wrap gap-x-2 items-center mb-1.5">
              {quickLinks1.map((link, idx) => (
                <div key={link.label} className="flex items-center gap-2">
                  <a
                    href={link.href}
                    className="font-body text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                  {idx < quickLinks1.length - 1 && (
                    <span className="text-dark-border text-sm">|</span>
                  )}
                </div>
              ))}
            </div>

            {/* Tier 2 */}
            <div className="flex flex-wrap gap-x-2 items-center">
              {quickLinks2.map((link, idx) => (
                <div key={link.label} className="flex items-center gap-2">
                  <a
                    href={link.href}
                    className="font-body text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                  {idx < quickLinks2.length - 1 && (
                    <span className="text-dark-border text-sm">|</span>
                  )}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-dark-border my-6 w-full" />

            {/* Follow Us */}
            <span className="font-body font-semibold text-[12px] uppercase tracking-widest text-white underline underline-offset-4 mb-3">
              FOLLOW US
            </span>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social, idx) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="
                      w-9 h-9 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-white/60 hover:bg-dark-elevated hover:text-gold hover:border-gold transition-all duration-300
                    "
                    aria-label="Social Link"
                  >
                    <IconComponent className="w-[15px] h-[15px]" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Col 2 — Service Times */}
          <div>
            <Clock className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-body font-bold text-[12px] uppercase tracking-widest text-white underline underline-offset-4 mb-3">
              SERVICE TIMES
            </h3>
            <div className="font-body text-[14px] text-white/60 leading-[2.2]">
              <p>Sundays: 10:00 AM</p>
              <p>Wednesdays: 7:00 PM</p>
            </div>
          </div>

          {/* Col 3 — Location */}
          <div>
            <MapPin className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-body font-bold text-[12px] uppercase tracking-widest text-white underline underline-offset-4 mb-3">
              LOCATION
            </h3>
            <div className="font-body text-[14px] text-white/60 leading-loose">
              <p>715 Edgerton Street</p>
              <p>Saint Paul, MN 55130</p>
              <p>United States</p>
            </div>

            <a
              href="https://maps.google.com/?q=715+Edgerton+Street,+Saint+Paul,+MN+55130"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold text-[13px] text-gold hover:text-gold-dark flex items-center gap-1 mt-3"
            >
              <Navigation className="w-[13px] h-[13px]" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-dark-border mt-12 pt-6 text-center font-body text-[12px] text-white/30">
          &copy; 2025 Amazing Grace Ministries MN &mdash; All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
