export default function ScriptureSection() {
  return (
    <section
      className="
        py-20 px-6 relative overflow-hidden
        bg-light-charcoal dark:bg-dark-section
        transition-colors duration-300
      "
    >
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center reveal">
        {/* Large decorative quotation mark */}
        <span
          className="
            font-display font-bold text-[160px] leading-none text-gold/15 select-none pointer-events-none
            absolute top-[-80px] left-4 sm:left-12 z-0
          "
        >
          &ldquo;
        </span>

        {/* Quote */}
        <blockquote className="font-display italic text-[26px] md:text-[36px] leading-snug text-white relative z-10">
          &ldquo;Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously.&rdquo;
        </blockquote>

        {/* Attribution */}
        <cite className="font-body font-semibold text-[13px] text-gold uppercase tracking-widest mt-6 block not-italic">
          2 CORINTHIANS 9:6
        </cite>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-gold mx-auto mt-8" />
      </div>
    </section>
  )
}
