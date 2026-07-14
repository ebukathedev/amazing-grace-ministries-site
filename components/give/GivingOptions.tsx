import { Landmark, Mail, HandCoins, Building2 } from 'lucide-react'

export default function GivingOptions() {
  const options = [
    {
      icon: HandCoins,
      title: 'IN PERSON',
      body: 'Drop your offering in the basket during any Sunday or Wednesday service. Every gift is received with gratitude.',
    },
    {
      icon: Mail,
      title: 'BY MAIL',
      body: 'Send a check made payable to "Amazing Grace Ministries MN" to our church address. Include your name and fund designation.',
    },
    {
      icon: Landmark,
      title: 'BANK TRANSFER',
      body: 'Set up a direct bank transfer or ACH payment. Contact our finance team for account details and setup instructions.',
    },
    {
      icon: Building2,
      title: 'PLANNED GIVING',
      body: 'Consider including Amazing Grace in your estate planning. Contact us to learn about legacy giving opportunities.',
    },
  ]

  return (
    <section
      className="
        py-20 px-6
        bg-light-charcoal dark:bg-dark-section
        transition-colors duration-300
      "
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-14 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block">
          OTHER WAYS TO GIVE
        </span>
        <h2 className="font-display font-bold text-[38px] md:text-[48px] text-white mt-2">
          More Giving Options
        </h2>
      </div>

      {/* ===== OPTIONS GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {options.map((opt, idx) => {
          const IconComponent = opt.icon
          return (
            <div
              key={idx}
              className="
                border rounded-xl p-7 hover:border-gold transition-all duration-300 reveal
                bg-dark-card border-dark-border
              "
            >
              {/* Top Accent */}
              <div className="w-8 h-[3px] bg-gold mb-5" />

              {/* Icon */}
              <IconComponent className="w-9 h-9 text-gold mb-4" />

              {/* Title */}
              <h3 className="font-body font-bold text-[16px] text-white uppercase tracking-wide">
                {opt.title}
              </h3>

              {/* Body */}
              <p className="font-body text-[13px] text-white/60 leading-relaxed mt-2">
                {opt.body}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
