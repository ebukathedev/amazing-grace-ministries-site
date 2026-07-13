import { ArrowRight } from 'lucide-react'

export default function MinistriesSection() {
  const ministries = [
    {
      name: "Children's Ministry",
      category: 'KIDS',
      gradient: 'from-dark-muted to-dark-black',
      span: 'col-span-1 md:col-span-2 h-44',
    },
    {
      name: 'Youth',
      category: 'NEXT GEN',
      gradient: 'from-dark-elevated to-dark-black',
      span: 'col-span-1 h-44 md:h-56',
    },
    {
      name: "Women's Ministry",
      category: 'WOMEN',
      gradient: 'from-[#2a2a1a] to-dark-black',
      span: 'col-span-1 h-44 md:h-56',
    },
    {
      name: "Men's Ministry",
      category: 'MEN',
      gradient: 'from-[#1a1a2a] to-dark-black',
      span: 'col-span-1 h-44 md:h-56',
    },
    {
      name: 'Prayer & Intercession',
      category: 'PRAYER',
      gradient: 'from-[#1a2a1a] to-dark-black',
      span: 'col-span-1 h-44 md:h-56',
    },
    {
      name: 'Outreach',
      category: 'OUTREACH',
      gradient: 'from-dark-section to-dark-black',
      span: 'col-span-1 md:col-span-2 h-44',
    },
  ]

  return (
    <section
      id="ministries"
      className="
        relative py-28 px-6 overflow-hidden bg-light-gray dark:bg-dark-charcoal
      "
    >
      {/* Angled Top Slice */}
      <div
        className="
          absolute top-0 left-0 right-0 h-16 pointer-events-none
          bg-light-charcoal dark:bg-dark-section
        "
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
      />

      <div
        className="
          max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10
        "
      >
        {/* Left Column — Text */}
        <div className="reveal">
          <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block mb-3">
            MINISTRIES
          </span>
          <h2
            className="
              font-display font-bold text-[36px] sm:text-[46px] leading-tight
              text-light-charcoal dark:text-white
            "
          >
            MINISTRIES THAT <br />
            MOVE YOU.
          </h2>
          <p
            className="
              font-body text-[15px] leading-[1.8] mt-6
              text-light-secondary dark:text-white/60
            "
          >
            At Amazing Grace Ministries, our ministries serve as bridges to help people connect, grow, and release their potential in Christ. From our kids to our community outreach, discover how you can grow and make an impact in every stage of life.
          </p>
        </div>

        {/* Right Column — Mosaic Grid */}
        <div className="grid grid-cols-2 gap-3 reveal reveal-delay-1">
          {ministries.map((min) => (
            <div
              key={min.name}
              className={`
                relative rounded-2xl overflow-hidden cursor-pointer group border border-transparent hover:border-gold transition-all duration-300
                bg-gradient-to-br ${min.gradient} ${min.span}
              `}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between z-10">
                <div>
                  <span className="font-body font-semibold text-[9px] text-gold/80 uppercase tracking-widest block mb-1">
                    {min.category}
                  </span>
                  <h3 className="font-body font-bold text-[15px] sm:text-[16px] text-white uppercase tracking-wide leading-snug">
                    {min.name}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-dark-charcoal transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
