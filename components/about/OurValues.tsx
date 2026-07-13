export default function OurValues() {
  const values = [
    {
      num: '01',
      name: 'WORD-CENTERED',
      body: "Everything we do is anchored in Scripture. We preach, teach, and live the uncompromising truth of God's Word.",
    },
    {
      num: '02',
      name: 'SPIRIT-LED',
      body: 'We create space for the Holy Spirit to move. We believe in authentic, Spirit-filled worship and Spirit-empowered living.',
    },
    {
      num: '03',
      name: 'COMMUNITY-DRIVEN',
      body: 'We do life together. Real relationships, real accountability, and real love for one another are at the core of who we are.',
    },
    {
      num: '04',
      name: 'MISSION-FOCUSED',
      body: 'We exist not just for ourselves but for our city and the world. Every member is called to carry the Gospel beyond these walls.',
    },
  ]

  return (
    <section
      className="
        py-24 px-6
        bg-light-charcoal dark:bg-dark-section
        transition-colors duration-300
      "
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-16 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          HOW WE LIVE
        </span>
        <h2 className="font-display font-bold text-[44px] md:text-[52px] text-white mt-2">
          Our Core Values
        </h2>
      </div>

      {/* ===== VALUES GRID ===== */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((val, idx) => (
          <div
            key={idx}
            className="
              bg-dark-card border border-dark-border rounded-xl p-8 hover:border-gold transition-all duration-300 group reveal
            "
          >
            <div
              className="
                font-display font-bold text-[80px] leading-none text-gold/20
                group-hover:text-gold/30 transition-colors
              "
            >
              {val.num}
            </div>
            <h3 className="font-body font-bold text-[20px] uppercase tracking-wide text-white mt-[-20px]">
              {val.name}
            </h3>
            <div className="w-8 h-[2px] bg-gold my-4" />
            <p className="font-body text-[15px] text-white/60 leading-relaxed">
              {val.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
