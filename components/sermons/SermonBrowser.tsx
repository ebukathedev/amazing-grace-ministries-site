'use client'
import { useState } from 'react'
import { Search, Play, Clock, BookOpen } from 'lucide-react'

const sermons = [
  {
    id: 1,
    title: 'The Promise Is Still Yes',
    series: 'Living in the Promise',
    pastor: 'Pastor Nnaemeka Uchegbu',
    date: 'May 12, 2025',
    duration: '42 min',
    scripture: 'Numbers 23:19',
    isLatest: true,
    gradient: 'from-dark-muted to-dark-black',
  },
  {
    id: 2,
    title: 'Walking by Faith, Not by Sight',
    series: 'Living in the Promise',
    pastor: 'Pastor Nnaemeka Uchegbu',
    date: 'May 5, 2025',
    duration: '38 min',
    scripture: '2 Corinthians 5:7',
    isLatest: false,
    gradient: 'from-dark-elevated to-dark-black',
  },
  {
    id: 3,
    title: 'God\'s Timing Is Perfect',
    series: 'Living in the Promise',
    pastor: 'Pastor Nnaemeka Uchegbu',
    date: 'Apr 28, 2025',
    duration: '45 min',
    scripture: 'Ecclesiastes 3:11',
    isLatest: false,
    gradient: 'from-[#1a1a2a] to-dark-black',
  },
  {
    id: 4,
    title: 'Deep Roots, Strong Fruit',
    series: 'Rooted',
    pastor: 'Pastor Nnaemeka Uchegbu',
    date: 'Mar 16, 2025',
    duration: '40 min',
    scripture: 'Psalm 1:1-3',
    isLatest: false,
    gradient: 'from-[#1a2a1a] to-dark-black',
  },
  {
    id: 5,
    title: 'The Word That Does Not Return Void',
    series: 'Rooted',
    pastor: 'Pastor Nnaemeka Uchegbu',
    date: 'Mar 9, 2025',
    duration: '36 min',
    scripture: 'Isaiah 55:11',
    isLatest: false,
    gradient: 'from-dark-muted to-dark-black',
  },
  {
    id: 6,
    title: 'More Grace',
    series: 'Grace Upon Grace',
    pastor: 'Pastor Nnaemeka Uchegbu',
    date: 'Jan 26, 2025',
    duration: '44 min',
    scripture: 'James 4:6',
    isLatest: false,
    gradient: 'from-dark-elevated to-dark-black',
  },
]

export default function SermonBrowser() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = ['All', 'Living in the Promise', 'Rooted', 'Grace Upon Grace']

  const filtered = sermons.filter((s) => {
    const matchesSeries = activeFilter === 'All' || s.series === activeFilter
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.scripture.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.pastor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSeries && matchesSearch
  })

  return (
    <section
      id="browser"
      className="py-16 md:py-24 px-5 md:px-6 bg-light-gray dark:bg-dark-charcoal transition-colors duration-300"
    >
      {/* ===== SERMON BROWSER ===== */}
      <div className="max-w-6xl mx-auto">
        
        {/* ===== FILTER SECTION ===== */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-10 reveal">
          
          {/* Search input */}
          <div className="relative w-full md:flex-1 md:max-w-md">
            <input
              type="text"
              placeholder="Search sermons, scriptures, speakers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full pl-10 pr-4 py-3 rounded-lg border font-body text-[14px] focus:outline-none focus:border-gold transition-colors duration-300
                bg-light-white border-light-mid text-light-charcoal placeholder-light-muted
                dark:bg-dark-card dark:border-dark-border dark:text-white dark:placeholder-white/30
              "
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`
                    font-body font-semibold text-[12px] uppercase tracking-wide px-4 py-2 rounded-sm border transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? 'bg-gold text-dark-charcoal border-gold'
                        : 'bg-light-white border-light-mid text-light-secondary hover:border-gold hover:text-gold dark:bg-dark-card dark:border-dark-border dark:text-white/60 dark:hover:border-gold dark:hover:text-gold'
                    }
                  `}
                >
                  {cat}
                </button>
              )
            })}
          </div>

        </div>

        {/* ===== SERMON GRID ===== */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((sermon) => (
              <a
                key={sermon.id}
                href="https://www.youtube.com/@amazinggracemn"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl overflow-hidden border transition-all duration-300 group cursor-pointer reveal
                  bg-light-white border-light-mid shadow-ph-light hover:shadow-ph-card
                  dark:bg-dark-card dark:border-dark-border dark:hover:shadow-gold
                "
              >
                {/* Card thumbnail */}
                <div className={`relative h-[180px] bg-gradient-to-br ${sermon.gradient}`}>
                  <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/30" />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center shadow-gold">
                      <Play className="w-6 h-6 text-dark-charcoal ml-0.5 fill-dark-charcoal" />
                    </div>
                  </div>

                  {sermon.isLatest && (
                    <span className="absolute top-3 left-3 bg-gold text-dark-charcoal font-body font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-sm">
                      LATEST
                    </span>
                  )}

                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white font-body text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-sm">
                    {sermon.series}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="font-body font-bold text-[17px] leading-snug group-hover:text-gold transition-colors duration-300 text-light-charcoal dark:text-white">
                    {sermon.title}
                  </h3>
                  <span className="font-display italic text-[14px] text-gold mt-1 block">
                    {sermon.scripture}
                  </span>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1.5 font-body text-[12px] text-light-muted dark:text-white/40">
                      <Clock className="w-3.5 h-3.5 text-gold/70" />
                      <span>{sermon.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-body text-[12px] text-light-muted dark:text-white/40">
                      <BookOpen className="w-3.5 h-3.5 text-gold/70" />
                      <span>{sermon.date}</span>
                    </div>
                  </div>

                  <div className="border-t border-light-mid dark:border-dark-border my-4" />
                  
                  <div className="font-body text-[12px] text-light-muted dark:text-white/40">
                    {sermon.pastor}
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-20 reveal">
            <div className="font-display italic text-[28px] text-light-secondary dark:text-white/30">
              No sermons found.
            </div>
            <p className="font-body text-[14px] mt-3 text-light-muted dark:text-white/25">
              Try adjusting your search query or choosing another series filter.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}
