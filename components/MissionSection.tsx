import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function MissionSection() {
  return (
    <section
      className="
        relative py-28 px-6 overflow-hidden bg-light-gray dark:bg-dark-charcoal
      "
    >
      {/* Decorative corner blocks */}
      <div
        className="absolute top-0 left-0 w-24 h-24 bg-light-charcoal dark:bg-dark-black pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />
      <div
        className="absolute top-0 right-0 w-24 h-24 bg-light-charcoal dark:bg-dark-black pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-24 h-24 bg-light-charcoal dark:bg-dark-black pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-24 h-24 bg-light-charcoal dark:bg-dark-black pointer-events-none"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />

      <div
        className="
          max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10
        "
      >
        {/* Left Image */}
        <div
          className="
            relative w-full h-[420px] rounded-2xl overflow-hidden shadow-ph-dark reveal
            bg-gradient-to-b from-light-mid via-light-dark to-light-charcoal
            dark:bg-gradient-to-b dark:from-dark-elevated dark:via-dark-section dark:to-dark-black
          "
        >
          <Image
            src="/images/img1.jpg"
            alt="Amazing Grace Ministries Mission Image Left"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10 dark:bg-transparent" />
        </div>

        {/* Center Text Column */}
        <div className="text-center px-4 reveal reveal-delay-1">
          <h2
            className="
              font-display font-bold text-[38px] sm:text-[44px] leading-[1.1]
              text-light-charcoal dark:text-white
            "
          >
            ROOTED IN FAITH. <br />
            REACHING THE <br />
            WORLD.
          </h2>

          <p className="font-display italic text-[20px] text-gold mt-4">
            &ldquo;You Belong Here.&rdquo;
          </p>

          <div className="mt-8">
            <a
              href="#about"
              className="
                inline-flex items-center gap-2 font-body font-semibold text-[13px] uppercase tracking-[0.08em] px-6 py-3 rounded-sm transition-all
                border border-light-charcoal text-light-charcoal hover:bg-light-mid
                dark:border-dark-border dark:text-white dark:hover:bg-dark-card
              "
            >
              About Us
              <ArrowRight className="w-[15px] h-[15px]" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            relative w-full h-[420px] rounded-2xl overflow-hidden shadow-ph-dark reveal reveal-delay-2
            bg-gradient-to-b from-light-mid via-light-dark to-light-charcoal
            dark:bg-gradient-to-b dark:from-dark-elevated dark:via-dark-section dark:to-dark-black
          "
        >
          <Image
            src="/images/img2.jpg"
            alt="Amazing Grace Ministries Mission Image Right"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 dark:bg-transparent" />
        </div>
      </div>
    </section>
  )
}

