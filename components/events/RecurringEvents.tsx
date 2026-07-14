import { Repeat, Clock, MapPin } from 'lucide-react'

export default function RecurringEvents() {
  const recurring = [
    {
      title: 'SUNDAY SERVICE',
      desc: 'Our weekly family gathering &mdash; Spirit-filled worship, powerful teaching, and authentic community.',
      time: '10:00 AM Every Sunday',
      loc: 'Main Sanctuary',
    },
    {
      title: 'WEDNESDAY NIGHT',
      desc: 'Midweek Bible study and prayer. A chance to go deeper in the Word and connect with the church family.',
      time: '7:00 PM Every Wednesday',
      loc: 'Fellowship Hall',
    },
    {
      title: 'COMMUNITY GROUPS',
      desc: 'Small groups meeting throughout the week across the city. Find your people and do life together.',
      time: 'Various Days & Times',
      loc: 'Various Locations',
    },
  ]

  return (
    <section
      className="
        py-20 px-6
        bg-light-gray dark:bg-dark-charcoal
        transition-colors duration-300
      "
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-14 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          EVERY WEEK
        </span>
        <h2
          className="
            font-display font-bold text-[38px] md:text-[48px] mt-2
            text-light-charcoal dark:text-white
          "
        >
          Our Weekly Rhythm
        </h2>
        <p
          className="
            font-body text-[16px] max-w-lg mx-auto mt-4
            text-light-secondary dark:text-white/60
          "
        >
          Beyond special events, these gatherings happen every single week. You&apos;re always welcome.
        </p>
      </div>

      {/* ===== CARD GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {recurring.map((item, idx) => (
          <div
            key={idx}
            className="
              border rounded-xl p-8 hover:border-gold transition-all duration-300 reveal
              bg-light-white border-light-mid shadow-ph-light
              dark:bg-dark-card dark:border-dark-border
            "
          >
            {/* Top gold rule */}
            <div className="w-8 h-[3px] bg-gold mb-6" />

            {/* Icon */}
            <Repeat className="w-8 h-8 text-gold mb-4" />

            {/* Title */}
            <h3
              className="
                font-body font-bold text-[19px] uppercase tracking-wide
                text-light-charcoal dark:text-white
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="
                font-body text-[14px] leading-relaxed mt-3
                text-light-secondary dark:text-white/60
              "
              dangerouslySetInnerHTML={{ __html: item.desc }}
            />

            {/* Meta */}
            <div
              className="
                flex flex-col gap-2 mt-5 pt-5 border-t
                border-light-mid dark:border-dark-border
              "
            >
              <div className="flex items-center gap-2 font-body text-[13px] text-light-muted dark:text-white/45">
                <Clock className="w-[13px] h-[13px] text-gold" />
                <span>{item.time}</span>
              </div>
              <div className="flex items-center gap-2 font-body text-[13px] text-light-muted dark:text-white/45">
                <MapPin className="w-[13px] h-[13px] text-gold" />
                <span>{item.loc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
