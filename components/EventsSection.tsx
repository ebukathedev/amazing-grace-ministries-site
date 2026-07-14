import { Clock, MapPin, CalendarDays } from 'lucide-react'

export default function EventsSection() {
  const events = [
    {
      date: { month: 'APR', day: '26' },
      category: 'COMMUNITY',
      title: 'Community Groups',
      description: 'Build authentic faith friendships in our weekly small groups.',
      time: 'April 26 – June 6',
      location: 'Online & In Person',
      gradient: 'from-dark-elevated to-dark-black',
    },
    {
      date: { month: 'MAY', day: '08' },
      category: 'SPECIAL',
      title: 'Open Heavens',
      description: 'Start the month with a supercharge of prayer. Set your mind in tune with God.',
      time: '1st Saturday of Month',
      location: 'Main Sanctuary',
      gradient: 'from-dark-muted to-dark-black',
    },
    {
      date: { month: 'MAY', day: '10' },
      category: 'WORSHIP',
      title: 'Sunday Celebration',
      description: 'Join our weekly family gathering — all are welcome. In person and online.',
      time: '10:00 AM Sunday',
      location: 'Sanctuary',
      gradient: 'from-dark-section to-dark-black',
    },
  ]

  return (
    <section
      id="events"
      className="
        relative py-24 px-6 overflow-hidden bg-light-charcoal dark:bg-dark-charcoal
      "
    >
      {/* Watermark Ghost Text */}
      <div
        className="
          absolute left-1/2 top-12 -translate-x-1/2
          font-body font-black text-[70px] sm:text-[110px]
          uppercase tracking-[0.2em] select-none pointer-events-none z-0
          text-dark-section dark:text-dark-mark/80 opacity-[0.4] whitespace-nowrap
        "
      >
        EVENTS
      </div>

      <div className="max-w-6xl mx-auto relative z-10 reveal">
        <h2 className="font-display font-bold text-[36px] sm:text-[50px] text-white text-center leading-tight">
          WHAT&apos;S HAPPENING <br />
          AT THE CHURCH
        </h2>

        <p className="font-body text-[15px] text-white/60 max-w-xl mx-auto text-center mt-4">
          Stay connected and grow with us. Find upcoming classes, gatherings, and special services here.
        </p>

        {/* 3-Column Event Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {events.map((event, idx) => (
            <div
              key={event.title}
              className={`
                border rounded-xl overflow-hidden hover:-translate-y-1 hover:border-gold transition-all bg-dark-card border-dark-border
                reveal reveal-delay-${idx + 1}
              `}
            >
              {/* Event Image Placeholder */}
              <div className={`relative h-[200px] w-full bg-gradient-to-br ${event.gradient}`}>
                <div className="absolute inset-0 bg-black/10" />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-dark-charcoal border border-dark-border rounded-lg px-3 py-1.5 text-center min-w-[64px]">
                  <div className="font-body font-bold text-[10px] uppercase tracking-widest text-gold leading-none">
                    {event.date.month}
                  </div>
                  <div className="font-display font-bold text-[32px] leading-none text-white mt-1">
                    {event.date.day}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <span className="inline-block bg-gold/10 border border-gold/30 text-gold font-body font-semibold text-[10px] uppercase tracking-wide rounded-sm px-3 py-1">
                  {event.category}
                </span>

                <h3 className="font-body font-bold text-[18px] text-white mt-3 uppercase tracking-wide">
                  {event.title}
                </h3>

                <p className="font-body text-[13px] text-white/60 mt-2 leading-relaxed">
                  {event.description}
                </p>

                {/* Meta details */}
                <div className="flex flex-col gap-1.5 mt-5 border-t border-dark-border pt-4">
                  <div className="flex items-center gap-2 font-body text-[12px] text-white/65">
                    <Clock className="w-[12px] h-[12px] text-gold/70" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 font-body text-[12px] text-white/65">
                    <MapPin className="w-[12px] h-[12px] text-gold/70" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ghost CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/events"
            className="
              inline-flex items-center gap-2 border border-white/20 text-white font-body font-semibold text-[13px] uppercase tracking-[0.08em] px-10 py-4 rounded-sm hover:border-gold hover:text-gold transition-all
              dark:border-dark-border
            "
          >
            <CalendarDays className="w-[15px] h-[15px]" />
            See More Events
          </a>
        </div>
      </div>
    </section>
  )
}
