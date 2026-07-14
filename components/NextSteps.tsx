import { Heart, Users, Handshake, UsersRound, ArrowRight } from 'lucide-react'

export default function NextSteps() {
  const steps = [
    {
      icon: Heart,
      title: 'SALVATION',
      description: 'Begin your journey with Christ and experience the power of a transformed life.',
      linkText: 'Get Started',
      href: '/contact',
    },
    {
      icon: Users,
      title: 'MEMBERSHIP',
      description: 'Make Amazing Grace your spiritual home and grow in faith with a community that cares.',
      linkText: 'Learn More',
      href: '/about',
    },
    {
      icon: Handshake,
      title: 'VOLUNTEER',
      description: 'Use your gifts to serve others and be part of something bigger than yourself.',
      linkText: 'Get Involved',
      href: '/contact',
    },
    {
      icon: UsersRound,
      title: 'COMMUNITY GROUPS',
      description: 'Build authentic relationships that encourage spiritual growth and real connection.',
      linkText: 'Find a Group',
      href: '/events',
    },
  ]

  return (
    <section
      className="
        relative py-24 px-6 overflow-hidden bg-light-charcoal dark:bg-dark-section
      "
    >
      {/* Watermark Ghost Text */}
      <div
        className="
          absolute left-1/2 top-12 -translate-x-1/2
          font-body font-black text-[65px] sm:text-[100px]
          uppercase tracking-[0.25em] select-none pointer-events-none z-0
          text-dark-section dark:text-dark-mark/80 opacity-[0.4] whitespace-nowrap
        "
      >
        ENGAGE
      </div>

      <div className="max-w-6xl mx-auto relative z-10 reveal">
        <h2 className="font-display font-bold text-[36px] sm:text-[50px] text-white text-center leading-tight">
          FIND YOUR PLACE. <br className="sm:hidden" />
          LIVE YOUR PURPOSE.
        </h2>

        <p className="font-body text-[15px] sm:text-[16px] text-white/65 max-w-2xl mx-auto text-center mt-4">
          Faith grows best in community. Whether you&apos;re new or ready to take your next step, there&apos;s a place for you to connect, grow, and belong.
        </p>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {steps.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.title}
                className={`
                  border rounded-xl p-7 hover:-translate-y-1.5 hover:border-gold transition-all relative overflow-hidden bg-dark-card border-dark-border
                  reveal reveal-delay-${idx + 1}
                `}
              >
                {/* Top Gold Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />

                <IconComponent className="w-9 h-9 text-gold mt-1" />

                <h3 className="font-body font-bold text-[18px] text-white mt-4 uppercase tracking-wide">
                  {step.title}
                </h3>

                <p className="font-body text-[13px] text-white/60 leading-relaxed mt-2">
                  {step.description}
                </p>

                <a
                  href={step.href}
                  className="
                    font-body font-semibold text-[12px] text-gold hover:text-gold-light flex items-center gap-1 hover:gap-2 transition-all mt-6 uppercase tracking-wide
                  "
                >
                  {step.linkText}
                  <ArrowRight className="w-[13px] h-[13px]" />
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom Ghost CTA */}
        <div className="text-center mt-14">
          <a
            href="/plan-your-visit"
            className="
              inline-flex items-center gap-2 border border-white/25 text-white font-body font-semibold text-[13px] uppercase tracking-[0.08em] px-10 py-4 rounded-sm hover:border-gold hover:text-gold transition-all
              dark:border-dark-border
            "
          >
            Take the Next Step
            <ArrowRight className="w-[15px] h-[15px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
