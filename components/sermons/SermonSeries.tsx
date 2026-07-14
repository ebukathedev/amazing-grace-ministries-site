import { PlayCircle, ChevronRight } from 'lucide-react'

const sermonSeries = [
  {
    id: 1,
    title: 'Living in the Promise',
    description: 'A powerful series on stepping into everything God has prepared for you.',
    sermonCount: 6,
    date: 'Apr – May 2025',
    gradient: 'from-dark-elevated via-dark-section to-dark-black',
  },
  {
    id: 2,
    title: 'Rooted',
    description: 'Building an unshakeable foundation in the Word of God.',
    sermonCount: 4,
    date: 'Feb – Mar 2025',
    gradient: 'from-[#1a2a1a] via-dark-section to-dark-black',
  },
  {
    id: 3,
    title: 'Grace Upon Grace',
    description: 'Exploring the depths of God\'s unending grace in our everyday lives.',
    sermonCount: 5,
    date: 'Jan 2025',
    gradient: 'from-[#1a1a2a] via-dark-section to-dark-black',
  },
]

export default function SermonSeries() {
  return (
    <section
      className="
        py-20 px-6
        bg-light-charcoal dark:bg-dark-section
        transition-colors duration-300
      "
    >
      {/* ===== HEADER ROW ===== */}
      <div className="max-w-6xl mx-auto flex items-end justify-between mb-10 reveal">
        <div>
          <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block">
            BROWSE BY SERIES
          </span>
          <h2 className="font-display font-bold text-[38px] md:text-[44px] text-white mt-1">
            Sermon Series
          </h2>
        </div>
        
        <a
          href="#browser"
          className="
            font-body font-semibold text-[13px] text-gold hover:text-gold-light
            flex items-center gap-1 transition-colors duration-300
          "
        >
          View All
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {/* ===== SERIES SCROLL ROW ===== */}
      <div
        className="
          max-w-6xl mx-auto flex gap-5 overflow-x-auto pb-4 reveal
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {sermonSeries.map((series) => (
          <a
            key={series.id}
            href={`#browser`}
            className="
              flex-shrink-0 w-[300px] rounded-xl overflow-hidden border transition-all duration-300 group cursor-pointer
              bg-dark-card border-dark-border hover:border-gold
            "
          >
            {/* Card thumbnail */}
            <div className={`relative h-[160px] bg-gradient-to-br ${series.gradient}`}		>
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white/40 group-hover:text-gold transition-colors duration-300" />
              </div>
            </div>

            {/* Card body */}
            <div className="p-5">
              <h3 className="font-body font-bold text-[17px] text-white group-hover:text-gold transition-colors duration-300">
                {series.title}
              </h3>
              <p className="font-body text-[13px] text-white/55 mt-2 leading-relaxed line-clamp-2">
                {series.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-body text-[11px] text-white/40 uppercase tracking-wide">
                  {series.sermonCount} Messages &middot; {series.date}
                </span>
                <ChevronRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
