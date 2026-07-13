import { Play, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="
        relative min-h-[90vh] lg:min-h-screen flex flex-col bg-light-gray z-30
        dark:bg-dark-black
      "
    >
      {/* Background Image with theme-aware overlay */}
      <div
        className="
          absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat
          opacity-[0.15] dark:opacity-[0.15] pointer-events-none
        "
      />
      {/* Left side diagonal vector border */}
      <div
        className="
          absolute left-0 top-0 bottom-0 w-[60px] bg-light-white/80 dark:bg-white/[0.03] pointer-events-none z-10
        "
        style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 95%, 0 100%)' }}
      />

      {/* Right side diagonal vector border */}
      <div
        className="
          absolute right-0 top-0 bottom-0 w-[60px] bg-light-white/80 dark:bg-white/[0.03] pointer-events-none z-10
        "
        style={{ clipPath: 'polygon(100% 0, 0 5%, 0 95%, 100% 100%)' }}
      />

      {/* Radial center glow (dark only) */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(201,168,76,0.06) 0%, transparent 65%)'
        }}
      />

      {/* Main Content */}
      <div
        className="
          flex-1 flex flex-col items-center justify-center text-center px-6 py-24 lg:py-32 max-w-4xl mx-auto z-10 relative
          pb-[280px] lg:pb-32
        "
      >
        <span
          className="
            font-body font-semibold text-[11px] uppercase tracking-[0.22em] text-gold reveal
          "
        >
          WELCOME TO
        </span>

        <h1
          className="
            font-display font-bold text-[54px] sm:text-[80px] lg:text-[96px] leading-[1.02] mt-3 reveal reveal-delay-1
            text-light-charcoal dark:text-white
          "
        >
          AMAZING GRACE <br />
          <span className="text-gold font-display italic font-medium">MINISTRIES</span>
        </h1>

        <p
          className="
            font-display italic text-[18px] sm:text-[20px] mt-5 reveal reveal-delay-2
            text-light-secondary dark:text-white/55
          "
        >
          &ldquo;Surely the Lord is in this place.&rdquo; &mdash; Genesis 28:16
        </p>

        {/* CTA Buttons */}
        <div
          className="
            flex flex-wrap items-center justify-center gap-4 mt-10 reveal reveal-delay-3
          "
        >
          <a
            href="https://www.youtube.com/@amazinggracemn"
            className="
              font-body font-bold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-sm hover:-translate-y-0.5 transition-all flex items-center gap-2
              bg-light-charcoal text-white hover:bg-dark-section
              dark:bg-white dark:text-dark-charcoal dark:hover:bg-light-gray
            "
          >
            <Play className="w-[15px] h-[15px] fill-current" />
            Watch Now
          </a>

          <a
            href="#visit"
            className="
              font-body font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-sm transition-all flex items-center gap-2
              border border-light-charcoal text-light-charcoal hover:bg-light-mid
              dark:border-white dark:text-white dark:hover:bg-white/10
            "
          >
            <MapPin className="w-[15px] h-[15px]" />
            Plan Your Visit
          </a>
        </div>
      </div>

      {/* Floating social sidebar */}
      <div
        className="
          absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 lg:flex z-30
        "
      >
        {[
          { icon: Facebook, href: 'https://web.facebook.com/amazinggracemn' },
          { icon: Instagram, href: 'https://www.instagram.com/amazinggracemn' },
          { icon: Youtube, href: 'https://youtube.com/@amazinggracemn?si=WxZgon4JMeDfYAQK' },
          // { icon: Twitter, href: '#twitter' },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="
              w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300
              bg-light-charcoal/10 text-light-charcoal hover:bg-gold hover:text-white
              dark:bg-white/10 dark:text-white dark:hover:bg-gold dark:hover:text-dark-charcoal
            "
            aria-label="Social Link"
          >
            <item.icon className="w-[15px] h-[15px]" />
          </a>
        ))}
      </div>

      {/* Bottom floating spotlight card */}
      <div
        className="
          absolute bottom-0 left-1/2 !-translate-x-1/2 translate-y-1/2 z-20 w-full max-w-2xl px-6
          reveal reveal-delay-4
        "
      >
        <div
          className="
            rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 border
            bg-white border-light-mid shadow-ph-card
            dark:bg-dark-card dark:border-dark-border dark:shadow-ph-deeper
          "
        >
          <div className="flex-1 text-center md:text-left">
            <span
              className="
                font-body font-semibold text-[10px] uppercase tracking-[0.18em]
                text-light-muted dark:text-dark-muted
              "
            >
              A WORD TO
            </span>
            <h3
              className="
                font-body font-bold text-[20px] uppercase tracking-[0.04em] leading-tight mt-1
                text-light-charcoal dark:text-white
              "
            >
              ANCHOR YOUR WEEK
            </h3>
            <p
              className="
                font-body text-[14px] leading-relaxed mt-2
                text-light-secondary dark:text-white/60
              "
            >
              Join us for timely, life-giving messages that strengthen your faith and speak to your season.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-3">
              <a
                href="#sermons"
                className="
                  font-body font-semibold text-[13px] text-gold hover:text-gold-dark flex items-center gap-1
                "
              >
                Watch Message <ArrowRight className="w-[14px] h-[14px]" />
              </a>
              <div className="flex gap-2">
                <span className="h-[3px] rounded-full w-7 bg-gold" />
                <span className="h-[3px] rounded-full w-3 bg-light-mid dark:bg-dark-border" />
                <span className="h-[3px] rounded-full w-3 bg-light-mid dark:bg-dark-border" />
              </div>
            </div>
          </div>

          <div
            className="
              w-full md:w-[160px] h-[110px] rounded-xl flex-shrink-0 flex items-center justify-center relative overflow-hidden
              bg-gradient-to-br from-light-mid via-light-gray to-light-dark
              dark:bg-gradient-to-br dark:from-dark-elevated dark:via-dark-section dark:to-dark-black
            "
          >
            <div className="absolute inset-0 bg-black/10 dark:bg-transparent" />
            <div className="w-10 h-10 rounded-full bg-white/95 dark:bg-dark-card/90 flex items-center justify-center shadow-lg">
              <Play className="w-[14px] h-[14px] fill-current text-gold ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
