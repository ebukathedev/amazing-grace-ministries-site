import { MapPin, Play, MessageCircle } from 'lucide-react'

export default function VisitContactCTA() {
  return (
    <section
      className="
        py-24 px-6 relative overflow-hidden
        bg-light-charcoal dark:bg-dark-black
        transition-colors duration-300
      "
    >
      {/* Gold radial glow (dark only) */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.2em] text-gold block">
          WE&apos;D LOVE TO MEET YOU
        </span>
        <h2 className="font-display font-bold text-[36px] md:text-[56px] leading-tight text-white mt-3">
          See You This Sunday.
        </h2>
        <p className="font-body text-[17px] text-white/60 max-w-xl mx-auto mt-5 leading-relaxed">
          Whether you show up in person or tune in online &mdash; there&apos;s a seat with your name on it. We can&apos;t wait to meet you.
        </p>

        {/* 2-column CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-2xl mx-auto">
          
          {/* Card 1 — Visit In Person */}
          <div
            className="
              border border-dark-border rounded-xl p-8 text-center hover:border-gold transition-all duration-300 bg-dark-card group
            "
          >
            <MapPin className="w-10 h-10 text-gold mx-auto" />
            <h3 className="font-body font-bold text-[20px] text-white mt-4 uppercase tracking-wide">
              Visit In Person
            </h3>
            <div className="font-body text-[14px] text-white/60 mt-2 leading-relaxed">
              <p>Sundays at 10:00 AM</p>
              <p className="text-[12px] opacity-80 mt-1">715 Edgerton St, Saint Paul, MN</p>
            </div>
            
            <a
              href="https://maps.google.com/?q=715+Edgerton+Street,+Saint+Paul,+MN+55130"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6 w-full bg-gold text-dark-charcoal font-body font-bold text-[13px] uppercase tracking-[0.08em] py-3.5 rounded-sm
                hover:bg-gold-light hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2
              "
            >
              <MapPin className="w-[14px] h-[14px]" />
              Get Directions
            </a>
          </div>

          {/* Card 2 — Watch Online */}
          <div
            className="
              border border-dark-border rounded-xl p-8 text-center hover:border-gold transition-all duration-300 bg-dark-card group
            "
          >
            <Play className="w-10 h-10 text-gold mx-auto" />
            <h3 className="font-body font-bold text-[20px] text-white mt-4 uppercase tracking-wide">
              WATCH ONLINE
            </h3>
            <div className="font-body text-[14px] text-white/60 mt-2 leading-relaxed">
              <p>Live every Sunday at 10:00 AM</p>
              <p className="text-[12px] opacity-80 mt-1">Available on YouTube</p>
            </div>

            <a
              href="https://www.youtube.com/@amazinggracemn"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6 w-full border border-white/20 text-white font-body font-semibold text-[13px] uppercase tracking-[0.08em] py-3.5 rounded-sm
                hover:border-gold hover:text-gold hover:shadow-gold transition-all flex items-center justify-center gap-2
              "
            >
              <Play className="w-[14px] h-[14px]" />
              Watch Live
            </a>
          </div>

        </div>

        {/* Still have questions row */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <span className="font-body text-[14px] text-white/50">Still have questions?</span>
          <a
            href="#contact"
            className="flex items-center gap-1 font-body font-semibold text-[14px] text-gold hover:text-gold-light transition-colors"
          >
            <MessageCircle className="w-[14px] h-[14px]" />
            <span>Contact Us &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
