import { CalendarDays, MessageCircle, Bell } from 'lucide-react'

export default function EventsCTA() {
  return (
    <section
      className="
        py-24 px-6 relative overflow-hidden
        bg-light-charcoal dark:bg-dark-black
        transition-colors duration-300
      "
    >
      {/* Gold radial glow (dark only) */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.2em] text-gold block">
          DON&apos;T MISS OUT
        </span>
        
        <h2 className="font-display font-bold text-[36px] md:text-[54px] leading-tight text-white mt-3">
          Stay in the Loop. <span className="font-display italic text-gold block sm:inline">Always.</span>
        </h2>
        
        <p className="font-body text-[17px] text-white/60 max-w-xl mx-auto mt-5 leading-relaxed">
          Never miss an event, announcement, or special gathering. Follow us on social media or reach out directly and we&apos;ll keep you connected.
        </p>

        {/* Social + contact row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="https://www.facebook.com/amazinggracemn"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gold text-dark-charcoal font-body font-bold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-sm
              hover:bg-gold-light hover:-translate-y-0.5 transition-all shadow-gold flex items-center gap-2
            "
          >
            <Bell className="w-4 h-4 text-dark-charcoal" />
            <span>Follow Us</span>
          </a>
          <a
            href="#contact"
            className="
              border border-white/20 text-white font-body font-semibold text-[13px] uppercase tracking-[0.08em] px-8 py-4 rounded-sm
              hover:border-gold hover:text-gold transition-all flex items-center gap-2
            "
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Upcoming count strip */}
        <div className="flex items-center justify-center gap-3 mt-14">
          <CalendarDays className="w-5 h-5 text-gold" />
          <span className="font-body font-semibold text-[14px] text-white/50">
            5 events coming up this month
          </span>
        </div>

      </div>
    </section>
  )
}
