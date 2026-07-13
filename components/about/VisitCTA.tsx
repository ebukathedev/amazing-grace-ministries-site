import { Clock, MapPin, Play } from 'lucide-react'

export default function VisitCTA() {
  return (
    <section
      className="
        py-24 px-6 text-center relative overflow-hidden
        bg-light-gray dark:bg-dark-black
        transition-colors duration-300
      "
    >
      {/* Background glow (dark only) */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.2em] text-gold block">
          COME AS YOU ARE
        </span>
        
        <h2
          className="
            font-display font-bold text-[38px] md:text-[56px] leading-tight mt-3
            text-light-charcoal dark:text-white
          "
        >
          Ready to Experience <span className="font-display italic text-gold block sm:inline">Amazing Grace?</span>
        </h2>

        <p
          className="
            font-body text-[17px] leading-relaxed max-w-xl mx-auto mt-6
            text-light-secondary dark:text-white/60
          "
        >
          Whether it&apos;s your first time or you&apos;re coming back after a long time away &mdash; you are welcome here. Join us this Sunday and experience what Amazing Grace is all about.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="#visit"
            className="
              font-body font-bold text-[13px] uppercase tracking-[0.1em] px-10 py-4 rounded-sm hover:-translate-y-0.5 transition-all flex items-center gap-2
              bg-light-charcoal text-white hover:bg-dark-section
              dark:bg-white dark:text-dark-charcoal dark:hover:bg-light-gray
            "
          >
            <MapPin className="w-[15px] h-[15px]" />
            Plan Your Visit
          </a>
          <a
            href="https://www.youtube.com/@amazinggracemn"
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-body font-semibold text-[13px] uppercase tracking-[0.1em] px-10 py-4 rounded-sm transition-all flex items-center gap-2
              border border-light-charcoal text-light-charcoal hover:bg-light-mid
              dark:border dark:border-dark-border dark:text-white dark:hover:bg-dark-card
            "
          >
            <Play className="w-[15px] h-[15px]" />
            Watch Online
          </a>
        </div>

        {/* Service times strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-12">
          <div className="flex items-center gap-2">
            <Clock className="w-[14px] h-[14px] text-gold" />
            <span
              className="
                font-body font-semibold text-[12px] uppercase tracking-wide
                text-light-secondary dark:text-white/50
              "
            >
              Sundays 10:00 AM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-[14px] h-[14px] text-gold" />
            <span
              className="
                font-body font-semibold text-[12px] uppercase tracking-wide
                text-light-secondary dark:text-white/50
              "
            >
              Wednesdays 7:00 PM
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
