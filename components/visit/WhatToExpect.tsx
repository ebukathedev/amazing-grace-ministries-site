import { Music, BookOpen, Heart, Baby, Coffee, Clock, Phone } from 'lucide-react'

export default function WhatToExpect() {
  const steps = [
    {
      icon: Clock,
      label: 'ARRIVAL',
      title: 'Welcome & Greeting',
      body: 'Arrive 15–20 minutes early. Our welcome team will greet you at the door, help you find your seat, and answer any questions.',
    },
    {
      icon: Music,
      label: 'WORSHIP',
      title: 'Spirit-Filled Worship',
      body: "We open with engaging, Spirit-filled worship. Feel free to stand, sing along, or simply take it all in — there's no pressure.",
    },
    {
      icon: BookOpen,
      label: 'THE MESSAGE',
      title: 'Powerful Bible Teaching',
      body: 'Pastor Nnaemeka Uchegbu delivers a relevant, scripture-based message designed to speak to real life. Messages typically run 35–45 minutes.',
    },
    {
      icon: Baby,
      label: 'CHILDREN',
      title: 'Kids Are Welcome',
      body: "We have a safe, fun, and age-appropriate children's program running during the main service for ages infant through 5th grade.",
    },
    {
      icon: Heart,
      label: 'COMMUNITY',
      title: 'Connect After Service',
      body: 'Stay after the service for refreshments and conversation. Our team will be available to meet you and help you find your next step in the Amazing Family.',
    },
    {
      icon: Coffee,
      label: 'ATMOSPHERE',
      title: 'Casual & Welcoming',
      body: "Come as you are — seriously. Jeans, t-shirts, whatever you're comfortable in. We are a come-as-you-are, non-denominational community.",
    },
  ]

  return (
    <section
      className="py-16 md:py-24 px-5 md:px-6 bg-light-charcoal dark:bg-dark-section transition-colors duration-300"
    >
      {/* ===== WHAT TO EXPECT ===== */}
      {/* Header */}
      <div className="text-center mb-16 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          FIRST TIME?
        </span>
        <h2 className="font-display font-bold text-[44px] md:text-[52px] text-white mt-2">
          What to Expect
        </h2>
        <p className="font-body text-[16px] text-white/60 max-w-xl mx-auto mt-4">
          We want your first visit to feel like coming home. Here&apos;s everything you need to know before you walk through the doors.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto mt-14 relative">
        {/* Vertical line (hidden on mobile/tablet <= 768px) */}
        <div className="absolute left-[27px] top-4 bottom-4 w-px bg-dark-border hidden md:block pointer-events-none" />

        {steps.map((step, idx) => {
          const IconComponent = step.icon
          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-4 md:gap-6 mb-10 last:mb-0 reveal"
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full border border-dark-border bg-dark-card flex items-center justify-center flex-shrink-0 z-10 text-gold"
              >
                <IconComponent className="w-6 h-6" />
              </div>

              {/* Content block */}
              <div className="flex-1 pt-1">
                <span className="font-body font-semibold text-[11px] uppercase tracking-widest text-gold block mb-1">
                  {step.label}
                </span>
                <h3 className="font-body font-bold text-[18px] text-white">
                  {step.title}
                </h3>
                <p className="font-body text-[14px] text-white/60 leading-relaxed mt-2">
                  {step.body}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
