export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative pt-[250px] md:pt-[200px] py-28 px-6 text-center overflow-hidden z-10
        bg-light-charcoal dark:bg-dark-section
      "
    >
      {/* Watermark Ghost Text */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          font-body font-black text-[70px] sm:text-[110px] md:text-[140px]
          uppercase tracking-[0.2em] select-none pointer-events-none z-0
          text-dark-section dark:text-dark-mark/80 opacity-[0.4] whitespace-nowrap
        "
      >
        ABOUT US
      </div>

      <div className="relative z-10 max-w-4xl mx-auto reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.2em] text-gold block mb-3">
          WHO WE ARE
        </span>
        <h2 className="font-display font-bold text-[40px] sm:text-[52px] text-white">
          Who We Are
        </h2>

        <div className="font-body text-[16px] sm:text-[17px] leading-[1.85] text-center max-w-2xl mx-auto mt-10 space-y-6">
          <p className="text-white/75 dark:text-white/70">
            At <strong className="text-white font-semibold">Amazing Grace Ministries MN</strong>, we exist to help people encounter God&apos;s presence, discover their purpose, and grow together in authentic community.
          </p>
          <p className="text-white/75 dark:text-white/70">
            Led by <strong className="text-white font-semibold">Pastor David and Pastor Sarah</strong>, we are a Spirit-filled, multigenerational family &mdash; rooted in the Word and committed to loving our city and the world.
          </p>
        </div>

        <p className="font-display italic text-[21px] text-gold mt-10">
          &ldquo;You belong here.&rdquo;
        </p>
      </div>
    </section>
  )
}
