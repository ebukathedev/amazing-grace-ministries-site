import { Youtube, Bell, ExternalLink } from 'lucide-react'

export default function YouTubeCTA() {
  const stats = [
    { num: '150+', label: 'SERMONS ONLINE' },
    { num: '12+', label: 'SERIES AVAILABLE' },
    { num: '1,200+', label: 'SUBSCRIBERS' },
  ]

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
        <Youtube className="w-14 h-14 text-gold mx-auto fill-gold/10" />
        
        <h2 className="font-display font-bold text-[40px] md:text-[52px] text-white mt-4 leading-tight">
          Never Miss a <span className="font-display italic text-gold block sm:inline">Sunday Message.</span>
        </h2>
        
        <p className="font-body text-[17px] text-white/60 max-w-xl mx-auto mt-5 leading-relaxed">
          Subscribe to the Amazing Grace Ministries MN YouTube channel and get notified every time a new message drops. Every sermon, every series &mdash; available free, forever.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="https://www.youtube.com/@amazinggracemn"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gold text-dark-charcoal font-body font-bold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-sm
              hover:bg-gold-light hover:-translate-y-0.5 transition-all shadow-gold flex items-center gap-2
            "
          >
            <Youtube className="w-4 h-4 fill-dark-charcoal" />
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.youtube.com/@amazinggracemn"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-white/20 text-white font-body font-semibold text-[13px] uppercase tracking-[0.08em] px-8 py-4 rounded-sm
              hover:border-gold hover:text-gold transition-all flex items-center gap-2
            "
          >
            <Bell className="w-4 h-4" />
            <span>Turn on Notifications</span>
          </a>
        </div>

        {/* Stats strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-14 mt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-display font-bold text-[40px] text-gold leading-none">
                {stat.num}
              </div>
              <div className="font-body font-semibold text-[11px] uppercase tracking-widest text-white/40 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
