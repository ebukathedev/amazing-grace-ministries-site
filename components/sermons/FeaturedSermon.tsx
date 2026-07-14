import { Play, Clock, BookOpen, ChevronRight } from 'lucide-react'

export default function FeaturedSermon() {
  return (
    <section
      id="latest"
      className="
        py-24 px-6
        bg-light-gray dark:bg-dark-charcoal
        transition-colors duration-300
      "
    >
      {/* ===== HEADER ===== */}
      <div className="max-w-6xl mx-auto mb-10 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          THIS WEEK&apos;S MESSAGE
        </span>
        <div className="w-8 h-[2px] bg-gold mt-2" />
      </div>

      {/* ===== FEATURED CARD ===== */}
      <div
        className="
          max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border shadow-ph-deeper reveal
          border-light-mid dark:border-dark-border
        "
      >
        {/* Left — sermon thumbnail */}
        <div className="relative h-[360px] lg:h-auto min-h-[360px]">
          {/* Placeholder: Gradient background */}
          <div className="w-full h-full bg-gradient-to-br from-dark-muted via-dark-elevated to-dark-black" />

          {/* Production Image:
          <Image
            src="/images/sermons/featured.jpg"
            alt="The Promise Is Still Yes Sermon Thumbnail"
            fill
            className="object-cover"
          />
          */}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Center play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="https://www.youtube.com/@amazinggracemn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play Featured Sermon"
              className="
                w-20 h-20 rounded-full bg-gold/90 hover:bg-gold flex items-center justify-center
                shadow-gold-glow hover:scale-105 transition-all cursor-pointer
              "
            >
              <Play className="w-8 h-8 text-dark-charcoal ml-1 fill-dark-charcoal" />
            </a>
          </div>

          {/* Bottom meta strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <span className="inline-block bg-gold text-dark-charcoal font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm mb-3">
              LATEST MESSAGE
            </span>
            <div className="font-body font-semibold text-[12px] uppercase tracking-wide text-white/60">
              Living in the Promise
            </div>
          </div>
        </div>

        {/* Right — sermon details */}
        <div
          className="
            p-8 lg:p-10 flex flex-col justify-center transition-colors duration-300
            bg-light-white dark:bg-dark-card
          "
        >
          <h2
            className="
              font-display font-bold text-[34px] sm:text-[38px] leading-tight
              text-light-charcoal dark:text-white
            "
          >
            &ldquo;The Promise Is Still Yes&rdquo;
          </h2>
          <span className="font-display italic text-[18px] text-gold mt-3 block">
            Numbers 23:19
          </span>
          <p
            className="
              font-body text-[15px] leading-relaxed mt-5
              text-light-secondary dark:text-white/60
            "
          >
            God&apos;s promises are not subject to circumstances, seasons, or setbacks. In this powerful message, Pastor David walks us through why the promise over your life remains yes and amen &mdash; no matter what you&apos;re facing.
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-5 mt-6">
            <div className="flex items-center gap-2 font-body text-[13px] text-light-muted dark:text-white/45">
              <Clock className="w-[13px] h-[13px] text-gold" />
              <span>42 min</span>
            </div>
            <div className="flex items-center gap-2 font-body text-[13px] text-light-muted dark:text-white/45">
              <BookOpen className="w-[13px] h-[13px] text-gold" />
              <span>Numbers 23:19</span>
            </div>
            <div className="font-body text-[13px] text-light-muted dark:text-white/45">
              May 12, 2025
            </div>
          </div>

          <div className="border-t border-light-mid dark:border-dark-border my-6" />

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.youtube.com/@amazinggracemn"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gold text-dark-charcoal font-body font-bold text-[13px] uppercase tracking-[0.08em] px-6 py-3 rounded-sm
                hover:bg-gold-light hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-gold
              "
            >
              <Play className="w-[14px] h-[14px] fill-dark-charcoal" />
              Watch Now
            </a>
            <a
              href="mailto:?subject=The%20Promise%20Is%20Still%20Yes%20-%20Amazing%20Grace%20Ministries%20MN&body=Check%20out%20this%20sermon%20from%20Amazing%20Grace%20Ministries%20MN:%20The%20Promise%20Is%20Still%20Yes."
              className="
                font-body font-semibold text-[13px] uppercase tracking-[0.08em] px-6 py-3 rounded-sm transition-all flex items-center justify-center gap-2
                border border-light-mid text-light-charcoal hover:border-light-charcoal
                dark:border-dark-border dark:text-white dark:hover:border-gold dark:hover:text-gold
              "
            >
              Share
              <ChevronRight className="w-[14px] h-[14px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
