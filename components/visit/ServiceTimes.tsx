import { Sun, BookOpen, Flame, Star, Phone, Wifi } from 'lucide-react'

export default function ServiceTimes() {
  return (
    <section
      className="py-16 md:py-20 px-5 md:px-6 bg-light-charcoal dark:bg-dark-section transition-colors duration-300"
    >
      {/* ===== SERVICE TIMES ===== */}
      {/* Header */}
      <div className="text-center mb-14 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          JOIN US
        </span>
        <h2 className="font-display font-bold text-[52px] text-white mt-2">
          Service Times
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-6" />
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Card 1 — Sunday Service */}
        <div className="border border-dark-border rounded-xl p-8 hover:border-gold transition-all duration-300 bg-dark-card reveal">
          <div className="w-full h-[3px] bg-gold rounded-t-xl -mt-8 mb-8" />
          <Sun className="w-10 h-10 text-gold mb-4" />
          <span className="font-body font-semibold text-[11px] uppercase tracking-widest text-gold block">
            SUNDAY SERVICE
          </span>
          <div className="font-display font-bold text-[52px] text-white leading-none mt-2">
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
              <Sun className="w-[13px] h-[13px] text-gold/70" />
              <span>In person & virtual</span>
            </div>
          </div>
        </div>

        {/* Card 2 — Bible Study (Monday) */}
        <div className="border border-dark-border rounded-xl p-8 hover:border-gold transition-all duration-300 bg-dark-card reveal">
          <div className="w-full h-[3px] bg-gold rounded-t-xl -mt-8 mb-8" />
          <BookOpen className="w-10 h-10 text-gold mb-4" />
          <span className="font-body font-semibold text-[11px] uppercase tracking-widest text-gold block">
            MONDAY BIBLE STUDY
          </span>
          <p className="font-display italic text-[18px] text-gold/80 mt-1">
            &ldquo;Digging For Hidden Treasures&rdquo;
          </p>
          <div className="font-display font-bold text-[52px] text-white leading-none mt-2">
            MONDAYS
          </div>
          <p className="font-body text-[13px] text-white/50 mt-3 italic leading-relaxed">
            &ldquo;We study to shew ourselves approved as workmen that need not be afraid, rightly dividing the word of truth.&rdquo;
          </p>
          <div className="w-full h-px bg-dark-border my-5" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-body text-[13px] text-gold/70">
              <Phone className="w-[13px] h-[13px]" />
              <span>470-480-9523 or 425-436-6364</span>
            </div>
            <div className="font-body text-[12px] text-white/40">
              Access Code: 198407
            </div>
          </div>
        </div>

        {/* Card 3 — Midweek Service (Wednesday) */}
        <div className="border border-dark-border rounded-xl p-8 hover:border-gold transition-all duration-300 bg-dark-card reveal">
          <div className="w-full h-[3px] bg-gold rounded-t-xl -mt-8 mb-8" />
          <Flame className="w-10 h-10 text-gold mb-4" />
          <span className="font-body font-semibold text-[11px] uppercase tracking-widest text-gold block">
            WEDNESDAY MIDWEEK
          </span>
          <p className="font-display italic text-[18px] text-gold/80 mt-1">
            &ldquo;Hour of Battle&rdquo;
          </p>
          <div className="font-display font-bold text-[52px] text-white leading-none mt-2">
            WEDNESDAYS
          </div>
          <p className="font-body text-[13px] text-white/50 mt-3 italic leading-relaxed">
            &ldquo;We gather weekly to pray fervently until something happens.&rdquo;
          </p>
          <div className="w-full h-px bg-dark-border my-5" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-body text-[13px] text-gold/70">
              <Phone className="w-[13px] h-[13px]" />
              <span>470-480-9523 or 425-436-6364</span>
            </div>
            <div className="font-body text-[12px] text-white/40">
              Access Code: 198407
            </div>
          </div>
        </div>

        {/* Card 4 — Open Heavens (1st Saturday) */}
        <div className="border border-dark-border rounded-xl p-8 hover:border-gold transition-all duration-300 bg-dark-card reveal">
          <div className="w-full h-[3px] bg-gold rounded-t-xl -mt-8 mb-8" />
          <Star className="w-10 h-10 text-gold mb-4" />
          <span className="font-body font-semibold text-[11px] uppercase tracking-widest text-gold block">
            OPEN HEAVENS
          </span>
          <p className="font-display italic text-[18px] text-gold/80 mt-1">
            &ldquo;Monthly Prayer Gathering&rdquo;
          </p>
          <div className="font-display font-bold text-[36px] text-white leading-tight mt-2">
            1ST SATURDAY
          </div>
          <span className="font-body text-[14px] text-white/60 mt-1 block">
            of every month
          </span>
          <p className="font-body text-[13px] text-white/50 mt-3 italic leading-relaxed">
            &ldquo;Start the month with a supercharge of prayer and set your mind in tune with God.&rdquo;
          </p>
          <div className="w-full h-px bg-dark-border my-5" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-body text-[13px] text-gold/70">
              <Star className="w-[13px] h-[13px]" />
              <span>Main Sanctuary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
