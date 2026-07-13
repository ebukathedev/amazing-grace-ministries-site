export default function OurBeliefs() {
  const beliefs = [
    {
      title: 'THE BIBLE',
      body: 'We believe the Bible is the inspired, infallible Word of God and the ultimate authority for faith and life.',
    },
    {
      title: 'THE TRINITY',
      body: 'We believe in one God eternally existing in three persons — Father, Son, and Holy Spirit — co-equal and co-eternal.',
    },
    {
      title: 'SALVATION',
      body: 'We believe salvation is by grace alone, through faith alone, in Christ alone. Every person can be saved through repentance and belief.',
    },
    {
      title: 'THE HOLY SPIRIT',
      body: 'We believe in the present-day ministry of the Holy Spirit, including the gifts of the Spirit for the building up of the church.',
    },
    {
      title: 'THE CHURCH',
      body: "We believe the local church is God's primary vehicle for making disciples and transforming communities.",
    },
    {
      title: 'ETERNITY',
      body: 'We believe in the resurrection of the dead and the reality of eternal life — heaven for the redeemed and judgment for the unrepentant.',
    },
  ]

  return (
    <section
      className="
        py-24 px-6
        bg-light-gray dark:bg-dark-charcoal
        transition-colors duration-300
      "
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-16 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          WHAT WE STAND ON
        </span>
        <h2
          className="
            font-display font-bold text-[44px] md:text-[52px] mt-2
            text-light-charcoal dark:text-white
          "
        >
          What We Believe
        </h2>
        <p
          className="
            font-body text-[16px] max-w-xl mx-auto mt-4
            text-light-secondary dark:text-white/60
          "
        >
          Our beliefs are rooted in the timeless truth of Scripture. These are the convictions that anchor everything we do.
        </p>
      </div>

      {/* ===== BELIEF GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {beliefs.map((belief, idx) => (
          <div
            key={idx}
            className={`
              border rounded-xl p-7 hover:border-gold transition-all duration-300 reveal
              bg-light-white border-light-mid shadow-ph-light hover:shadow-ph-card
              dark:bg-dark-card dark:border-dark-border dark:hover:shadow-gold
              reveal-delay-${idx % 3}
            `}
          >
            <div className="w-8 h-[3px] bg-gold mb-5" />
            <h3
              className="
                font-body font-bold text-[16px] uppercase tracking-wide
                text-light-charcoal dark:text-white
              "
            >
              {belief.title}
            </h3>
            <p
              className="
                font-body text-[14px] leading-relaxed mt-3
                text-light-secondary dark:text-white/60
              "
            >
              {belief.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
