import { Clock, Calendar, Wifi, Users, BookOpen } from 'lucide-react'

export default function ServiceTimes() {
  return (
    <section
      className="
        py-20 px-6
        bg-light-charcoal dark:bg-dark-section
        transition-colors duration-300
      "
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-14 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          JOIN US
        </span>
        <h2 className="font-display font-bold text-[44px] md:text-[52px] text-white mt-2">
          Service Times
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-6" />
      </div>

      {/* ===== SERVICE CARDS GRID ===== */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        
        {/* Card 1 — Sunday Service */}
        <div
          className="
            border border-dark-border rounded-xl p-8 hover:border-gold transition-all duration-300 reveal bg-dark-card
          "
        >
          <div className="w-full h-[3px] bg-gold rounded-t-xl -mt-8 mb-8" />
          <Users className="w-10 h-10 text-gold mb-4" />
          <span className="font-body font-semibold text-[11px] uppercase tracking-widest text-gold block">
            SUNDAY SERVICE
          </span>
          <div className="font-display font-bold text-[44px] sm:text-[52px] text-white leading-none mt-2">
            10:00 AM
          </div>
          <div className="font-body text-[15px] text-white/60 mt-3 leading-loose">
            <p>Every Sunday</p>
            <p>Main Sanctuary</p>
          </div>
          <div className="w-full h-px bg-dark-border my-5" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-body text-[13px] text-white/50">
              <Wifi className="w-[13px] h-[13px] text-gold/70" />
              <span>Livestream available online</span>
            </div>
            <div className="flex items-center gap-2 font-body text-[13px] text-white/50">
              <Users className="w-[13px] h-[13px] text-gold/70" />
              <span>Children&apos;s program available</span>
            </div>
          </div>
        </div>

        {/* Card 2 — Wednesday Night */}
        <div
          className="
            border border-dark-border rounded-xl p-8 hover:border-gold transition-all duration-300 reveal bg-dark-card
          "
        >
          <div className="w-full h-[3px] bg-gold rounded-t-xl -mt-8 mb-8" />
          <Users className="w-10 h-10 text-gold mb-4" />
          <span className="font-body font-semibold text-[11px] uppercase tracking-widest text-gold block">
            WEDNESDAY NIGHT
          </span>
          <div className="font-display font-bold text-[44px] sm:text-[52px] text-white leading-none mt-2">
            7:00 PM
          </div>
          <div className="font-body text-[15px] text-white/60 mt-3 leading-loose">
            <p>Every Wednesday</p>
            <p>Fellowship Hall</p>
          </div>
          <div className="w-full h-px bg-dark-border my-5" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-body text-[13px] text-white/50">
              <BookOpen className="w-[13px] h-[13px] text-gold/70" />
              <span>Bible study &amp; prayer</span>
            </div>
            <div className="flex items-center gap-2 font-body text-[13px] text-white/50">
              <Users className="w-[13px] h-[13px] text-gold/70" />
              <span>All ages welcome</span>
            </div>
          </div>
        </div>

      </div>

      {/* ===== BOTTOM INFO STRIP ===== */}
      <div
        className="
          max-w-4xl mx-auto mt-8 border border-dark-border/50 rounded-xl p-5
          flex flex-wrap items-center justify-center gap-4 sm:gap-6 reveal
          bg-dark-card
        "
      >
        <div className="flex items-center gap-2 font-body text-[13px] text-white/55">
          <Clock className="w-[13px] h-[13px] text-gold" />
          <span>Doors open 30 minutes early</span>
        </div>
        <span className="hidden sm:inline text-dark-border text-lg">&middot;</span>
        <div className="flex items-center gap-2 font-body text-[13px] text-white/55">
          <Calendar className="w-[13px] h-[13px] text-gold" />
          <span>No registration required</span>
        </div>
        <span className="hidden sm:inline text-dark-border text-lg">&middot;</span>
        <div className="flex items-center gap-2 font-body text-[13px] text-white/55">
          <span>Come as you are</span>
        </div>
      </div>
    </section>
  )
}
