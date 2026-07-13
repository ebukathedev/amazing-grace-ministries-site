export default function OurStory() {
  return (
    <section
      className="
        py-24 px-6
        bg-light-gray dark:bg-dark-charcoal
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left — image stack */}
        <div className="relative reveal">
          <div className="w-full h-[480px] rounded-2xl overflow-hidden shadow-ph-deeper">
            {/* Placeholder: Gradient background */}
            <div className="w-full h-full bg-gradient-to-br from-dark-elevated via-dark-section to-dark-black" />

            {/* Production Image:
            <Image
              src="/images/about/story.jpg"
              alt="Amazing Grace Ministries community gathering"
              fill
              className="object-cover"
            />
            */}
          </div>

          {/* Floating stat card */}
          <div
            className="
              relative md:absolute md:bottom-[-20px] md:right-[-20px] mt-6 md:mt-0
              w-full md:w-auto border rounded-xl p-6 shadow-ph-dark transition-all duration-300
              bg-light-white border-light-mid
              dark:bg-dark-card dark:border-dark-border
            "
          >
            <span className="font-body font-semibold text-[10px] uppercase tracking-widest text-gold block mb-1">
              ESTABLISHED
            </span>
            <div
              className="
                font-display font-bold text-[48px] leading-none
                text-light-charcoal dark:text-white
              "
            >
              2018
            </div>
            <span
              className="
                font-body text-[13px] block mt-1
                text-light-secondary dark:text-white/55
              "
            >
              Serving Minnesota
            </span>
          </div>
        </div>

        {/* Right — text stack */}
        <div className="reveal reveal-delay-1">
          <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
            OUR STORY
          </span>
          <div className="w-10 h-[2px] bg-gold mt-2 mb-6" />
          <h2
            className="
              font-display font-bold text-[48px] leading-tight
              text-light-charcoal dark:text-white
            "
          >
            More Than a Church.
          </h2>
          <p className="font-display italic text-[24px] text-gold mt-2">
            A Family on Mission.
          </p>

          <div
            className="
              font-body text-[16px] leading-[1.85] mt-6 space-y-4
              text-light-secondary dark:text-white/65
            "
          >
            <p>
              Amazing Grace Ministries MN was founded on a simple but powerful conviction &mdash; that every person deserves to encounter the living God and find their place in a community that truly cares.
            </p>
            <p>
              What began as a small gathering has grown into a Spirit-filled, multigenerational family committed to the Word, passionate about prayer, and devoted to seeing lives transformed by the love of Christ.
            </p>
            <p>
              We believe the local church is the hope of the world. And we believe Amazing Grace is the place God has called us to live that out &mdash; together.
            </p>
          </div>

          <div className="border-l-2 border-gold pl-5 mt-8">
            <p
              className="
                font-display italic text-[20px]
                text-light-charcoal dark:text-white/80
              "
            >
              &ldquo;For where two or three gather in my name, there am I with them.&rdquo;
            </p>
            <p className="font-body text-[13px] text-gold mt-2">
              &mdash; Matthew 18:20
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
