import { MapPin, Play, MessageCircle, Phone } from 'lucide-react'

export default function VisitContactCTA() {
  return (
    <section
      className="py-16 md:py-24 px-5 md:px-6 relative overflow-hidden bg-light-charcoal dark:bg-dark-black transition-colors duration-300"
    >
      {/* ===== VISIT CONTACT CTA ===== */}
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
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
        <p className="font-body text-[17px] text-white/60 max-w-2xl mx-auto mt-5 leading-relaxed">
          Whether you show up in person or tune in online &mdash; there&apos;s a seat with your name on it at Amazing Grace Ministries MN.
        </p>

        {/* 3 CTA cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14 max-w-4xl mx-auto">
          {/* Card 1 — Visit In Person */}
          <div className="border border-dark-border rounded-xl p-7 text-center hover:border-gold transition-all duration-300 bg-dark-card group flex flex-col justify-between">
            <div>
              <MapPin className="w-9 h-9 text-gold mx-auto" />
              <h3 className="font-body font-bold text-[18px] text-white mt-4 uppercase tracking-wide">
                Visit In Person
              </h3>
              <div className="font-body text-[14px] text-white/60 mt-3 leading-relaxed">
                <p>Sundays at 10:00 AM</p>
                <p className="text-[12px] opacity-80 mt-1">Main Sanctuary</p>
              </div>
            </div>
            
            <a
              href="https://maps.app.goo.gl/BdDkKSzQqxf4gv6g6"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6 w-full bg-gold text-dark-charcoal font-body font-bold text-[13px] uppercase tracking-[0.08em] py-3.5 rounded-sm
                hover:bg-gold-light hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2
              "
            >
              Get Directions
            </a>
          </div>

          {/* Card 2 — Watch Online */}
          <div className="border border-dark-border rounded-xl p-7 text-center hover:border-gold transition-all duration-300 bg-dark-card group flex flex-col justify-between">
            <div>
              <Play className="w-9 h-9 text-gold mx-auto" />
              <h3 className="font-body font-bold text-[18px] text-white mt-4 uppercase tracking-wide">
                Watch Online
              </h3>
              <div className="font-body text-[14px] text-white/60 mt-3 leading-relaxed">
                <p>Live every Sunday at 10:00 AM</p>
                <p className="text-[12px] opacity-80 mt-1">Available online</p>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@amazinggracemn"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6 w-full border border-white/20 text-white font-body font-semibold text-[13px] uppercase tracking-[0.08em] py-3.5 rounded-sm
                hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-2
              "
            >
              Watch Live
            </a>
          </div>

          {/* Card 3 — Join by Phone */}
          <div className="border border-dark-border rounded-xl p-7 text-center hover:border-gold transition-all duration-300 bg-dark-card group flex flex-col justify-between">
            <div>
              <Phone className="w-9 h-9 text-gold mx-auto" />
              <h3 className="font-body font-bold text-[18px] text-white mt-4 uppercase tracking-wide">
                Join by Phone
              </h3>
              <div className="font-body text-[14px] text-white/60 mt-3 leading-relaxed">
                <p>470-480-9523 or 425-436-6364</p>
                <p className="text-[12px] opacity-85 mt-1 font-semibold text-gold">Access Code: 198407</p>
              </div>
            </div>

            <a
              href="tel:4704809523"
              className="
                mt-6 w-full border border-white/20 text-white font-body font-semibold text-[13px] uppercase tracking-[0.08em] py-3.5 rounded-sm
                hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-2
              "
            >
              Dial In
            </a>
          </div>
        </div>

        {/* Still have questions row */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <span className="font-body text-[14px] text-white/50">Still have questions?</span>
          <a
            href="/contact"
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
