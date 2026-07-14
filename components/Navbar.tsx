'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'PLAN YOUR VISIT', href: '/plan-your-visit' },
    { label: 'SERMONS', href: '/sermons' },
    { label: 'EVENTS', href: '/events' },
    { label: 'GIVE', href: '/give' },
    { label: 'CONTACT US', href: '/contact' },
  ]

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300
        ${scrolled
          ? 'bg-light-white shadow-ph-light border-b border-light-mid dark:bg-dark-charcoal dark:shadow-ph-dark dark:border-b dark:border-dark-border'
          : 'bg-light-gray/95 backdrop-blur-md border-b border-light-mid dark:bg-dark-black/95 dark:backdrop-blur-md dark:border-b dark:border-dark-border'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo zone */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-[52px] h-[52px] rounded-full border border-light-charcoal bg-light-mid flex items-center justify-center dark:border-dark-border dark:bg-dark-card group-hover:border-gold transition-colors duration-300">
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
            <h1 className="font-display font-bold text-[17px] leading-tight text-light-charcoal dark:text-white group-hover:text-gold transition-colors duration-300">
              Amazing Grace
            </h1>
            <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-light-secondary dark:text-dark-muted">
              Ministries MN
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="
                    font-body font-semibold text-[13px] uppercase tracking-[0.08em] relative group
                    text-light-charcoal hover:text-gold transition-colors duration-300
                    dark:text-white dark:hover:text-gold
                    after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 group-hover:after:w-full
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <ThemeToggle />
            <Link
              href="/plan-your-visit"
              className="
                bg-light-charcoal text-white hover:bg-dark-section
                dark:bg-white dark:text-dark-charcoal dark:hover:bg-light-gray
                font-body font-bold text-[12px] uppercase tracking-[0.1em] px-5 py-2.5 rounded-sm hover:-translate-y-0.5 transition-all
              "
            >
              JOIN US SUNDAY
            </Link>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-light-charcoal dark:text-white hover:text-gold transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 z-40 flex flex-col bg-light-white border-b border-light-mid shadow-ph-light dark:bg-dark-charcoal dark:border-dark-border p-6 transition-all duration-300">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block font-body font-semibold text-[14px] uppercase tracking-[0.08em]
                    text-light-charcoal hover:text-gold transition-colors duration-300
                    dark:text-white dark:hover:text-gold
                  "
                >
                  {navLinks.find(nl => nl.href === link.href)?.label || link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/plan-your-visit"
            onClick={() => setMenuOpen(false)}
            className="
              w-full text-center bg-light-charcoal text-white hover:bg-dark-section
              dark:bg-white dark:text-dark-charcoal dark:hover:bg-light-gray
              font-body font-bold text-[12px] uppercase tracking-[0.1em] py-3 rounded-sm hover:-translate-y-0.5 transition-all
            "
          >
            JOIN US SUNDAY
          </Link>
        </div>
      )}
    </nav>
  )
}
