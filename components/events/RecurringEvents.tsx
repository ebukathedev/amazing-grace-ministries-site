import { Sun, Flame, BookOpen, Star, Clock, MapPin } from 'lucide-react'

export default function RecurringEvents() {
  const recurring = [
    {
      title: 'SUNDAY SERVICE',
      subtitle: '',
      desc: 'Our weekly family gathering — Spirit-filled worship, powerful teaching, and authentic community.',
      time: '10:00 AM Every Sunday',
      loc: 'Main Sanctuary',
      icon: Sun,
    },
    {
      title: 'HOUR OF BATTLE',
      subtitle: 'Wednesday Midweek Service',
      desc: 'On Wednesdays, we gather weekly to pray fervently until something happens. All are welcome to join in person or by audio conference.',
      time: 'Every Wednesday',
      loc: 'Audio: 470-480-9523 · Code: 198407',
      icon: Flame,
    },
    {
      title: 'BIBLE STUDY',
      subtitle: 'Digging For Hidden Treasures',
      desc: 'On Mondays, we study to shew ourselves approved as workmen that need not be afraid, rightly dividing the word of truth.',
      time: 'Every Monday',
      loc: 'Audio: 470-480-9523 · Code: 198407',
      icon: BookOpen,
    },
    {
      title: 'OPEN HEAVENS',
      subtitle: 'Monthly Prayer Gathering',
      desc: 'Start the month with a supercharge of prayer and set your mind in tune with God. This is our most powerful corporate prayer experience.',
      time: '1st Saturday of Every Month',
      loc: 'Main Sanctuary',
      icon: Star,
    },
  ]

  return (
    <section
      className="py-16 md:py-20 px-5 md:px-6 bg-light-gray dark:bg-dark-charcoal transition-colors duration-300"
    >
      {/* ===== RECURRING EVENTS ===== */}
      {/* Header */}
      <div className="text-center mb-14 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          EVERY WEEK
        </span>
        <h2 className="font-display font-bold text-[38px] md:text-[48px] mt-2 text-light-charcoal dark:text-white">
          Our Weekly Rhythm
        </h2>
        <p className="font-body text-[16px] max-w-lg mx-auto mt-4 text-light-secondary dark:text-white/60">
          Beyond special events, these gatherings happen every single week. You&apos;re always welcome.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {recurring.map((item, idx) => {
          const IconComponent = item.icon
          return (
            <div
              key={idx}
              className="border rounded-xl p-6 hover:border-gold transition-all duration-300 reveal bg-light-white border-light-mid shadow-ph-light dark:bg-dark-card dark:border-dark-border flex flex-col justify-between"
            >
              <div>
                {/* Top gold rule */}
                <div className="w-8 h-[3px] bg-gold mb-6" />

                {/* Icon */}
                <IconComponent className="w-8 h-8 text-gold mb-4" />

                {/* Title */}
                <h3 className="font-body font-bold text-[18px] uppercase tracking-wide text-light-charcoal dark:text-white">
                  {item.title}
                </h3>

                {/* Subtitle */}
                {item.subtitle && (
                  <p className="font-display italic text-[14px] text-gold mt-1">
                    {item.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="font-body text-[14px] leading-relaxed mt-3 text-light-secondary dark:text-white/65">
                  {item.desc}
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-light-mid dark:border-dark-border">
                <div className="flex items-center gap-2 font-body text-[13px] text-light-muted dark:text-white/45">
                  <Clock className="w-[13px] h-[13px] text-gold" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-start gap-2 font-body text-[13px] text-light-muted dark:text-white/45">
                  <MapPin className="w-[13px] h-[13px] text-gold flex-shrink-0 mt-0.5" />
                  <span className="leading-tight">{item.loc}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

