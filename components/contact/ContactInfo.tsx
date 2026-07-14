import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react'

export default function ContactInfo() {
  const cards = [
    {
      icon: MapPin,
      label: 'ADDRESS',
      val: (
        <>
          <p>715 Edgerton Street</p>
          <p>Saint Paul, MN 55130</p>
        </>
      ),
    },
    {
      icon: Phone,
      label: 'PHONE',
      val: <p>(651) 274-9224</p>,
    },
    {
      icon: Mail,
      label: 'EMAIL',
      val: <p>info@amazinggracemn.org</p>,
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
          FIND US
        </span>
        <h2 className="font-display font-bold text-[38px] md:text-[48px] text-white mt-2">
          Church Information
        </h2>
      </div>

      {/* ===== INFO GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {cards.map((card, idx) => {
          const IconComponent = card.icon
          return (
            <div
              key={idx}
              className="
                border rounded-xl p-6 text-center hover:border-gold transition-all duration-300 reveal
                bg-dark-card border-dark-border
              "
            >
              {/* Icon circle */}
              <div
                className="
                  w-12 h-12 rounded-full bg-dark-elevated border border-dark-border
                  flex items-center justify-center mx-auto mb-4 text-gold
                "
              >
                <IconComponent className="w-5 h-5" />
              </div>

              {/* Label */}
              <span className="font-body font-bold text-[10px] uppercase tracking-widest text-gold mb-2 block">
                {card.label}
              </span>

              {/* Value */}
              <div className="font-body text-[14px] text-white/80 leading-relaxed block">
                {card.val}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
