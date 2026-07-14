import { Clock, MapPin, Navigation } from 'lucide-react'

export default function PlanYourVisit() {
  return (
    <section
      id="visit"
      className="
        relative py-24 px-6 bg-light-charcoal dark:bg-dark-black
      "
    >
      <div className="max-w-5xl mx-auto reveal">
        <h2 className="font-display font-bold text-[40px] sm:text-[50px] text-white text-center mb-14">
          Plan Your Visit
        </h2>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 max-w-4xl mx-auto">
          {/* Column 1 — Service Times */}
          <div className="flex items-start gap-4 px-6 md:px-10 py-6 flex-1">
            <Clock className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
            <div className="flex-1">
              <span className="font-body font-bold text-[11px] uppercase tracking-[0.16em] text-gold block">
                SERVICE TIMES
              </span>
              <div className="w-full h-px bg-white/15 dark:bg-dark-border my-3" />
              <div className="font-body text-white/75 dark:text-white/65 text-[15px] leading-loose">
                <p>Sundays: 10:00 AM</p>
                <p>Mondays: 7:00 PM</p>
                <p>Wednesdays: 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-white/15 dark:bg-dark-border self-stretch mx-4" />

          {/* Column 2 — Location */}
          <div className="flex items-start gap-4 px-6 md:px-10 py-6 flex-1">
            <MapPin className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
            <div className="flex-1">
              <span className="font-body font-bold text-[11px] uppercase tracking-[0.16em] text-gold block">
                LOCATION
              </span>
              <div className="w-full h-px bg-white/15 dark:bg-dark-border my-3" />
              <div className="font-body text-white/75 dark:text-white/65 text-[15px] leading-loose">
                <p>715 Edgerton Street</p>
                <p>Saint Paul, MN 55130</p>
                <p>United States</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ghost CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/yT1Xi1r9cJRBvYLz9"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 border border-white/30 text-white font-body font-semibold text-[13px] uppercase tracking-[0.08em] px-8 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-all
              dark:border-dark-border
            "
          >
            <Navigation className="w-[15px] h-[15px]" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
