import { Facebook, Instagram, Youtube, Music2, Twitter, ArrowRight } from 'lucide-react'

export default function ConnectStrip() {
  const socials = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/amazinggracemn' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/amazinggracemn' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@amazinggracemn' },
    { icon: Music2, label: 'TikTok', href: 'https://tiktok.com/@amazinggracemn' },
    { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/amazinggracemn' },
  ]

  return (
    <section
      className="
        py-20 px-6 relative overflow-hidden
        bg-light-charcoal dark:bg-dark-black
        transition-colors duration-300
      "
    >
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.2em] text-gold block">
          STAY CONNECTED
        </span>
        
        <h2 className="font-display font-bold text-[36px] md:text-[52px] text-white mt-3 leading-tight">
          Follow Our Journey. <span className="font-display italic text-gold block sm:inline">Join the Conversation.</span>
        </h2>
        
        <p className="font-body text-[16px] text-white/60 max-w-xl mx-auto mt-5 leading-relaxed">
          Stay up to date with sermons, events, announcements, and behind-the-scenes moments from the Amazing Grace family.
        </p>

        {/* Social Icons row (2-col grid on mobile, 3-col grid on tablet, flex row on lg+) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-4 mt-10">
          {socials.map((platform, idx) => {
            const IconComponent = platform.icon
            return (
              <a
                key={idx}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-3 border rounded-lg px-5 py-3 transition-all duration-300 group
                  bg-dark-card border-dark-border text-white/70 hover:border-gold hover:text-gold cursor-pointer
                "
              >
                <IconComponent className="w-5 h-5 group-hover:text-gold transition-colors text-white/70" />
                <span className="font-body font-semibold text-[13px] uppercase tracking-wide text-white/70 group-hover:text-gold transition-colors">
                  {platform.label}
                </span>
              </a>
            )
          })}
        </div>

        {/* Closing line */}
        <div className="flex items-center justify-center gap-3 mt-14">
          <span className="font-body text-[15px] text-white/50">Ready to visit in person?</span>
          <a
            href="/plan-your-visit"
            className="flex items-center gap-1 font-body font-bold text-[15px] text-gold hover:text-gold-light transition-colors duration-300"
          >
            <span>Plan Your Visit</span>
            <ArrowRight className="w-[15px] h-[15px]" />
          </a>
        </div>

      </div>
    </section>
  )
}
