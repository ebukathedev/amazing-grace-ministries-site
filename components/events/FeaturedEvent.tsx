import { CalendarDays, Clock, MapPin, Users } from 'lucide-react'

export default function FeaturedEvent() {
  return (
    <section
      className="py-16 md:py-24 px-5 md:px-6 bg-light-gray dark:bg-dark-charcoal transition-colors duration-300"
    >
      {/* ===== HEADER ===== */}
      <div className="max-w-6xl mx-auto mb-10 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          NEXT UP
        </span>
        <div className="w-8 h-[2px] bg-gold mt-2" />
      </div>

      {/* ===== FEATURED CARD ===== */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border shadow-ph-deeper reveal border-light-mid dark:border-dark-border"
      >
        {/* Left — large date column */}
        <div
          className="flex flex-row lg:flex-col items-center justify-center p-6 lg:p-10 bg-gold lg:col-span-1 gap-2 lg:gap-0"
        >
          <span className="font-body font-bold text-[14px] uppercase tracking-[0.2em] text-dark-charcoal lg:mb-1">
            JUN
          </span>
          <div className="font-display font-bold text-[36px] lg:text-[96px] leading-none text-dark-charcoal">
            07
          </div>
          <span className="font-body font-semibold text-[12px] uppercase tracking-widest text-dark-charcoal/70 lg:mt-3">
            SATURDAY
          </span>
        </div>

        {/* Right — event details */}
        <div
          className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-center transition-colors duration-300 bg-light-white dark:bg-dark-card"
        >
          <span className="inline-block self-start bg-gold/15 border border-gold/30 text-gold font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
            SPECIAL EVENT
          </span>
          
          <h2 className="font-display font-bold text-[38px] lg:text-[42px] leading-tight text-light-charcoal dark:text-white">
            Open Heavens
          </h2>
          
          <p className="font-body text-[16px] leading-relaxed mt-4 max-w-xl text-light-secondary dark:text-white/60">
            Start the month with a supercharge of prayer. Open Heavens is our monthly corporate prayer gathering where we come together as the Amazing Family to seek God, pray fervently, and set our minds in tune with Him. No registration required.
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 border-t pt-8 border-light-mid dark:border-dark-border">
            {/* Time */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-light-gray dark:bg-dark-elevated transition-colors text-gold">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-body font-semibold text-[10px] uppercase tracking-widest block text-light-muted dark:text-white/35">
                  TIME
                </span>
                <span className="font-body font-semibold text-[14px] text-light-charcoal dark:text-white block mt-0.5">
                  10:00 AM
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-light-gray dark:bg-dark-elevated transition-colors text-gold">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-body font-semibold text-[10px] uppercase tracking-widest block text-light-muted dark:text-white/35">
                  LOCATION
                </span>
                <span className="font-body font-semibold text-[14px] text-light-charcoal dark:text-white block mt-0.5">
                  Main Sanctuary
                </span>
              </div>
            </div>

            {/* Open to */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-light-gray dark:bg-dark-elevated transition-colors text-gold">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="font-body font-semibold text-[10px] uppercase tracking-widest block text-light-muted dark:text-white/35">
                  OPEN TO
                </span>
                <span className="font-body font-semibold text-[14px] text-light-charcoal dark:text-white block mt-0.5">
                  Everyone
                </span>
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Open+Heavens+Amazing+Grace+Ministries+MN&dates=20250607T100000/20250607T120000&details=Start+the+month+with+a+supercharge+of+prayer.+Open+Heavens+is+our+monthly+corporate+prayer+gathering+where+we+come+together+as+the+Amazing+Family+to+seek+God,+pray+fervently,+and+set+our+minds+in+tune+with+Him.&location=715+Edgerton+Street,+Saint+Paul,+MN+55130"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-dark-charcoal font-body font-bold text-[13px] uppercase tracking-[0.08em] px-7 py-3.5 rounded-sm hover:bg-gold-light hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-gold"
            >
              <CalendarDays className="w-[15px] h-[15px]" />
              Add to Calendar
            </a>
            <a
              href="https://maps.google.com/?q=715+Edgerton+Street,+Saint+Paul,+MN+55130"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold text-[13px] uppercase tracking-[0.08em] px-7 py-3.5 rounded-sm transition-all flex items-center justify-center gap-2 border border-light-mid text-light-charcoal hover:border-light-charcoal dark:border-dark-border dark:text-white dark:hover:border-gold dark:hover:text-gold"
            >
              <MapPin className="w-[15px] h-[15px]" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
