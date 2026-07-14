import { Play, ListVideo } from 'lucide-react'

export default function SermonSection() {
  return (
    <section
      id="sermons"
      className="
        relative py-24 px-6 overflow-hidden bg-light-gray dark:bg-dark-charcoal
      "
    >
      {/* Decorative flanking angular blocks */}
      <div
        className="
          absolute left-0 top-1/2 -translate-y-1/2 w-[70px] h-[280px]
          bg-light-charcoal dark:bg-dark-black pointer-events-none z-10
        "
        style={{ clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)' }}
      />
      <div
        className="
          absolute right-0 top-1/2 -translate-y-1/2 w-[70px] h-[280px]
          bg-light-charcoal dark:bg-dark-black pointer-events-none z-10
        "
        style={{ clipPath: 'polygon(100% 0, 0 10%, 0 90%, 100% 100%)' }}
      />

      {/* Main Inner Container */}
      <div
        className="
          relative max-w-5xl mx-auto rounded-2xl overflow-hidden border p-8 md:p-12
          grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
          bg-light-charcoal border-dark-border shadow-ph-deeper
          dark:bg-dark-card dark:border-dark-border
          reveal
        "
      >
        {/* Left Side: Sermon Visual representation */}
        <div
          className="
            relative w-full h-[380px] rounded-xl overflow-hidden
            bg-gradient-to-br from-dark-elevated via-dark-section to-dark-black
          "
        >
          {/* Subtle line decoration to look like cinematic player */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Floating Info Overlay */}
          <div
            className="
              absolute bottom-5 left-5 right-5
              bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-5
            "
          >
            <span className="font-body font-semibold text-[10px] uppercase tracking-widest text-gold block">
              LATEST MESSAGE
            </span>
            <h3 className="font-body font-bold text-[20px] text-white mt-1 leading-snug">
              &ldquo;The Promise Is Still Yes&rdquo;
            </h3>
            <p className="font-body text-[13px] text-white/55 mt-1">
              Pastor Nnaemeka Uchegbu &middot; May 12, 2025
            </p>

            {/* Play Button Icon */}
            <div
              className="
                w-11 h-11 rounded-full bg-gold flex items-center justify-center shadow-gold
                hover:scale-105 hover:shadow-gold-glow transition-all cursor-pointer mt-4
              "
            >
              <Play className="text-dark-charcoal w-5 h-5 ml-0.5 fill-current" />
            </div>
          </div>
        </div>

        {/* Right Side: Info Text & CTAs */}
        <div className="flex flex-col justify-center">
          <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block">
            WATCH & LISTEN
          </span>

          <h2 className="font-display font-bold text-[36px] sm:text-[44px] leading-tight text-white mt-3">
            LISTEN TO OUR <br />
            SERMONS
          </h2>

          <p className="font-display italic text-[20px] text-white/55 mt-2">
            &ldquo;The message is always available.&rdquo;
          </p>

          <p className="font-body text-[15px] text-white/60 mt-5 leading-relaxed">
            Experience powerful, biblical teachings that will challenge, encourage, and build up your faith. Watch live online or listen to past messages anytime, anywhere.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/sermons"
              className="
                bg-gold text-dark-charcoal font-body font-bold text-[13px] uppercase tracking-[0.08em] px-7 py-3.5 rounded-sm hover:-translate-y-0.5 hover:shadow-gold-glow transition-all flex items-center gap-2
              "
            >
              <Play className="w-[15px] h-[15px] fill-current" />
              Watch Latest
            </a>
            <a
              href="/sermons"
              className="
                border border-white/25 text-white font-body font-semibold text-[13px] uppercase tracking-[0.08em] px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-all flex items-center gap-2
              "
            >
              <ListVideo className="w-[15px] h-[15px]" />
              Explore Sermons
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
