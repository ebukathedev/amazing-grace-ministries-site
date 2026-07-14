import { Clock, MapPin, Play } from 'lucide-react'

export default function VisitCTA() {
  return (
    <section
      className="py-16 md:py-24 px-5 md:px-6 text-center relative overflow-hidden bg-light-gray dark:bg-dark-black transition-colors duration-300"
    >
      {/* ===== VISIT CTA ===== */}
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.2em] text-gold block mb-3">
          COME AS YOU ARE
        </span>
        
        <h2 className="font-display font-bold text-[38px] md:text-[56px] leading-tight mt-3 text-light-charcoal dark:text-white">
          Ready to Experience <span className="font-display italic text-gold block md:inline">Amazing Grace?</span>
        </h2>

        <p className="font-body text-[17px] leading-relaxed max-w-xl mx-auto mt-6 text-light-secondary dark:text-white/60">
          Whether it&apos;s your first time or you&apos;re coming back after a long time away &mdash; you are welcome here. We believe in transparency and honesty, and we will work with you to ensure our community is the right fit for you.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="/plan-your-visit"
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
      </div>
    </section>
  )
}

