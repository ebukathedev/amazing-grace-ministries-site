import { Sun, BookOpen, Flame, Star, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function OurPrograms() {
  const programs = [
    {
      icon: Sun,
      label: 'WEEKLY WORSHIP',
      title: 'Sunday Service',
      subtitle: '',
      accent: 'bg-gold',
      description: 'We are committed to providing high quality services that enhance your spiritual journey and allow you to connect with our community both in person and virtually.',
      schedule: 'Sundays at 10:00 AM',
      meta: 'In Person & Live Streamed',
    },
    {
      icon: BookOpen,
      label: 'DISCIPLESHIP',
      title: 'Bible Study',
      subtitle: '“Digging For Hidden Treasures”',
      accent: 'bg-gold/70',
      description: 'On Mondays, we study to shew ourselves approved as workmen that need not be afraid, rightly dividing the word of truth.',
      schedule: 'Mondays at 7:00 PM',
      meta: 'Audio: 470-480-9523 | Code: 198407',
    },
    {
      icon: Flame,
      label: 'PRAYER MEETING',
      title: 'Midweek Service',
      subtitle: '“Hour of Battle”',
      accent: 'bg-gold/50',
      description: 'On Wednesdays, we gather weekly to pray fervently until something happens.',
      schedule: 'Wednesdays at 7:00 PM',
      meta: 'Audio: 470-480-9523 | Code: 198407',
    },
    {
      icon: Star,
      label: 'MONTHLY PRAYER',
      title: 'Open Heavens',
      subtitle: '“Monthly Prayer Gathering”',
      accent: 'bg-gold/30',
      description: 'Every first Saturday of the month. Start the month with a super charge of prayer and set your mind in tune with God.',
      schedule: '1st Saturday of Month',
      meta: 'Main Sanctuary',
    },
  ]

  return (
    <section
      id="programs"
      className="
        relative py-20 px-6 bg-light-charcoal dark:bg-dark-black
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto">
        {/* ===== HEADER ===== */}
        <h2 className="font-display font-bold text-[40px] sm:text-[50px] text-white text-center mb-14 reveal">
          Our Programs
        </h2>

        {/* ===== 4-COLUMN SERVICE GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 reveal">
          {programs.map((prog, idx) => {
            const IconComponent = prog.icon
            return (
              <div
                key={idx}
                className="
                  border border-dark-border rounded-xl p-6 hover:border-gold transition-all duration-300 bg-dark-card flex flex-col justify-between
                "
              >
                <div>
                  {/* Top accent */}
                  <div className={`w-full h-[3px] rounded-t-xl -mt-6 mb-5 ${prog.accent}`} />

                  {/* Icon */}
                  <IconComponent className="text-gold w-8 h-8 mb-3" />

                  {/* Program Label */}
                  <span className="font-body font-bold text-[10px] uppercase tracking-widest text-gold block">
                    {prog.label}
                  </span>

                  {/* Program Title */}
                  <h3 className="font-body font-bold text-[16px] text-white mt-1 tracking-wide">
                    {prog.title}
                  </h3>

                  {/* Italic subtitle */}
                  {prog.subtitle && (
                    <p className="font-display italic text-[14px] text-gold/70 mt-0.5">
                      {prog.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="font-body text-[13px] text-white/70 mt-3 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                {/* Schedule details */}
                <div className="mt-5 border-t border-dark-border/40 pt-4">
                  <span className="font-body font-bold text-[11px] text-white block">
                    {prog.schedule}
                  </span>
                  <span className="font-body text-[11px] text-white/50 block mt-1">
                    {prog.meta}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
