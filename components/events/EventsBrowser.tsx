'use client'
import { useState } from 'react'
import { Clock, MapPin, CalendarDays, ArrowRight } from 'lucide-react'

type EventCategory = 'All' | 'Community' | 'Youth' | 'Worship' | 'Special'

type ChurchEvent = {
  id: number
  title: string
  category: EventCategory
  date: string
  month: string
  day: string
  time: string
  location: string
  description: string
  isHighlighted: boolean
  gradient: string
}

const events: ChurchEvent[] = [
  {
    id: 1,
    title: 'Open Heavens',
    category: 'Special',
    date: 'June 7, 2025',
    month: 'JUN',
    day: '07',
    time: '10:00 AM',
    location: 'Main Sanctuary',
    description: 'Start the month with a supercharge of prayer. Set your mind in tune with God in our monthly corporate prayer gathering.',
    isHighlighted: true,
    gradient: 'from-[#2a1a1a] to-dark-black',
  },
  {
    id: 2,
    title: 'Community Night',
    category: 'Community',
    date: 'June 15, 2025',
    month: 'JUN',
    day: '15',
    time: '6:00 PM',
    location: 'Fellowship Hall',
    description: 'An evening of worship, connection, and community. Come meet new friends and deepen existing relationships in the Amazing Family.',
    isHighlighted: false,
    gradient: 'from-dark-muted to-dark-black',
  },
  {
    id: 3,
    title: 'Monday Bible Study',
    category: 'Community',
    date: 'June 16, 2025',
    month: 'JUN',
    day: '16',
    time: 'Audio Conference',
    location: '470-480-9523 · Code: 198407',
    description: 'Digging For Hidden Treasures — study to shew ourselves approved as workmen rightly dividing the word of truth.',
    isHighlighted: false,
    gradient: 'from-dark-elevated to-dark-black',
  },
  {
    id: 4,
    title: 'Hour of Battle',
    category: 'Worship',
    date: 'June 18, 2025',
    month: 'JUN',
    day: '18',
    time: 'Audio Conference',
    location: '470-480-9523 · Code: 198407',
    description: 'Our weekly midweek prayer service. We gather to pray fervently until something happens.',
    isHighlighted: false,
    gradient: 'from-[#2a1a2a] to-dark-black',
  },
  {
    id: 5,
    title: 'Sunday Celebration',
    category: 'Worship',
    date: 'June 22, 2025',
    month: 'JUN',
    day: '22',
    time: '10:00 AM',
    location: 'Sanctuary',
    description: 'Join our weekly family gathering — Spirit-filled worship, powerful teaching from Pastor Uchegbu, and real community.',
    isHighlighted: false,
    gradient: 'from-dark-section to-dark-black',
  },
  {
    id: 6,
    title: 'Open Heavens',
    category: 'Special',
    date: 'July 5, 2025',
    month: 'JUL',
    day: '05',
    time: '10:00 AM',
    location: 'Main Sanctuary',
    description: 'Our monthly corporate prayer gathering. Start July with a supercharge of prayer and seek God together as a church family.',
    isHighlighted: false,
    gradient: 'from-[#1a1a2a] to-dark-black',
  },
]

const categories: EventCategory[] = ['All', 'Community', 'Youth', 'Worship', 'Special']

export default function EventsBrowser() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('All')

  const filtered = events.filter(
    (e) => activeCategory === 'All' || e.category === activeCategory
  )

  return (
    <section
      id="browser"
      className="
        py-24 px-6 relative overflow-hidden
        bg-light-charcoal dark:bg-dark-section
        transition-colors duration-300
      "
    >
      {/* Watermark */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          font-body font-black text-[70px] sm:text-[100px] md:text-[120px] lg:text-[140px]
          uppercase tracking-[0.2em] select-none pointer-events-none z-0
          text-dark-mark dark:text-dark-mark/30 opacity-[0.2] whitespace-nowrap
        "
      >
        EVENTS
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ===== SECTION HEADER ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 reveal">
          <div>
            <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block">
              UPCOMING
            </span>
            <h2 className="font-display font-bold text-[44px] md:text-[50px] text-white mt-1">
              All Events
            </h2>
          </div>
          <span className="font-body text-[14px] text-white/40">
            Showing {filtered.length} events
          </span>
        </div>

        {/* ===== CATEGORY FILTER PILLS ===== */}
        <div className="flex flex-wrap gap-2 mt-8 reveal">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  font-body font-semibold text-[12px] uppercase tracking-wide px-5 py-2.5 rounded-sm border transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? 'bg-gold text-dark-charcoal border-gold'
                      : 'bg-dark-card border-dark-border text-white/60 hover:border-gold hover:text-gold'
                  }
                `}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* ===== EVENTS GRID ===== */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filtered.map((event, idx) => (
              <div
                key={event.id}
                className="
                  rounded-xl overflow-hidden border transition-all duration-300 group hover:shadow-gold bg-dark-card border-dark-border reveal
                  reveal-delay-[idx % 3]
                "
              >
                {/* Card image area */}
                <div className={`relative h-[180px] bg-gradient-to-br ${event.gradient}`}>
                  <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/35" />
                  
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-dark-black border border-dark-border rounded-lg px-3 py-2 text-center">
                    <span className="font-body font-bold text-[9px] uppercase tracking-widest text-gold block">
                      {event.month}
                    </span>
                    <span className="font-display font-bold text-[30px] leading-none text-white block mt-0.5">
                      {event.day}
                    </span>
                  </div>

                  {/* Category pill */}
                  <span className="absolute top-4 right-4 bg-gold/15 border border-gold/30 text-gold font-body font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-sm">
                    {event.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-body font-bold text-[18px] text-white group-hover:text-gold transition-colors duration-300 uppercase tracking-wide leading-snug">
                    {event.title}
                  </h3>
                  <p className="font-body text-[13px] text-white/55 mt-2 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2 font-body text-[12px] text-white/40">
                      <Clock className="w-3.5 h-3.5 text-gold/60" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 font-body text-[12px] text-white/40">
                      <MapPin className="w-3.5 h-3.5 text-gold/60" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="border-t border-dark-border my-4" />
                  
                  <div className="flex items-center justify-between">
                    <span className="font-body text-[12px] text-white/35">
                      {event.date}
                    </span>
                    <a
                      href="https://maps.google.com/?q=715+Edgerton+Street,+Saint+Paul,+MN+55130"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-body font-semibold text-[12px] text-gold hover:text-gold-light transition-colors duration-300"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-20 reveal">
            <CalendarDays className="w-12 h-12 text-gold/30 mx-auto" />
            <div className="font-display italic text-[28px] text-white/30 mt-4">
              No events found.
            </div>
            <p className="font-body text-[14px] text-white/20 mt-2">
              Check back soon or browse all categories.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}
