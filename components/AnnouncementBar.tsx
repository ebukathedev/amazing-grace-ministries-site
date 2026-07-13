import { Clock, Calendar, PlayCircle } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div
      className="
        mt-[72px] py-[9px] px-6 border-b border-dark-border bg-light-charcoal
        dark:bg-dark-black dark:border-dark-border
      "
    >
      <div
        className="
          max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-8
        "
      >
        {/* Sundays */}
        <div className="flex items-center gap-2">
          <Clock className="w-[13px] h-[13px] text-gold" />
          <span className="font-body font-bold text-[11px] uppercase tracking-[0.12em] text-white/80 dark:text-white/70">
            SUNDAYS 10:00 AM
          </span>
        </div>

        <span className="hidden sm:inline text-white/20 text-sm">|</span>

        {/* Wednesdays */}
        <div className="flex items-center gap-2">
          <Calendar className="w-[13px] h-[13px] text-gold" />
          <span className="font-body font-bold text-[11px] uppercase tracking-[0.12em] text-white/80 dark:text-white/70">
            WEDNESDAYS 7:00 PM
          </span>
        </div>

        <span className="hidden md:inline text-white/20 text-sm">|</span>

        {/* Watch Online */}
        <a
          href="#sermons"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <PlayCircle className="w-[13px] h-[13px] text-gold" />
          <span className="font-body font-bold text-[11px] uppercase tracking-[0.12em] text-white/80 dark:text-white/70">
            WATCH ONLINE
          </span>
        </a>
      </div>
    </div>
  )
}
