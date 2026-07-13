'use client'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
        bg-light-gray border border-light-mid text-light-charcoal
        dark:bg-dark-card dark:border-dark-border dark:text-gold
        hover:border-gold dark:hover:border-gold
        hover:text-gold dark:hover:shadow-gold
      "
    >
      {theme === 'dark'
        ? <Sun className="w-4 h-4" />
        : <Moon className="w-4 h-4" />
      }
    </button>
  )
}
