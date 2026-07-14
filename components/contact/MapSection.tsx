import { MapPin, Navigation, ExternalLink } from 'lucide-react'

export default function MapSection() {
  const addressQuery = '715+Edgerton+Street,+Saint+Paul,+MN+55130'

  return (
    <section
      className="
        py-24 px-6
        bg-light-gray dark:bg-dark-charcoal
        transition-colors duration-300
      "
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-14 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block">
          HOW TO FIND US
        </span>
        <h2
          className="
            font-display font-bold text-[38px] md:text-[48px] mt-2
            text-light-charcoal dark:text-white
          "
        >
          We&apos;re Located in <span className="font-display italic text-gold block sm:inline">Saint Paul, Minnesota.</span>
        </h2>
      </div>

      {/* ===== MAP CONTAINER ===== */}
      <div
        className="
          max-w-6xl mx-auto rounded-2xl overflow-hidden border shadow-ph-deeper relative reveal
          border-light-mid dark:border-dark-border
        "
      >
        <div className="relative h-[300px] md:h-[480px] w-full">
          {/* Placeholder bg */}
          <div className="absolute inset-0 bg-light-mid dark:bg-dark-card transition-colors duration-300" />
          
          {/* Center placeholder content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 pointer-events-none">
            <MapPin className="w-14 h-14 text-gold" />
            <span className="font-body font-semibold text-[13px] uppercase tracking-widest text-light-secondary dark:text-white/50 block">
              Interactive Map
            </span>
            <span className="font-body text-[12px] text-light-muted dark:text-white/30 block">
              Replace with Google Maps embed
            </span>
          </div>

          {/* Google Maps embed code comment
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.860161405021!2d-93.07897042375539!3d44.96677947107009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32ad8d39c5957%3A0xe54e3d368e7d808e!2s715%20Edgerton%20St%2C%20St%20Paul%2C%20MN%2055130!5e0!3m2!1sen!2sus!4v1720880000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
          */}
        </div>
      </div>

      {/* ===== QUICK ACTIONS PILLS ===== */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 reveal">
        <a
          href={`https://maps.google.com/?q=${addressQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 font-body font-semibold text-[13px] uppercase tracking-wide px-6 py-3 rounded-lg border transition-all cursor-pointer
            bg-gold text-dark-charcoal border-gold hover:bg-gold-light
          "
        >
          <Navigation className="w-[14px] h-[14px]" />
          Get Directions
        </a>
        <a
          href={`https://maps.google.com/?q=${addressQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 font-body font-semibold text-[13px] uppercase tracking-wide px-6 py-3 rounded-lg border transition-all cursor-pointer
            bg-light-white border-light-mid text-light-charcoal hover:border-gold hover:text-gold
            dark:bg-dark-card dark:border-dark-border dark:text-white dark:hover:border-gold dark:hover:text-gold
          "
        >
          <ExternalLink className="w-[14px] h-[14px]" />
          Open in Google Maps
        </a>
        <a
          href={`https://maps.apple.com/?q=${addressQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 font-body font-semibold text-[13px] uppercase tracking-wide px-6 py-3 rounded-lg border transition-all cursor-pointer
            bg-light-white border-light-mid text-light-charcoal hover:border-gold hover:text-gold
            dark:bg-dark-card dark:border-dark-border dark:text-white dark:hover:border-gold dark:hover:text-gold
          "
        >
          <MapPin className="w-[14px] h-[14px]" />
          Open in Apple Maps
        </a>
      </div>

      {/* ===== PARKING + TRANSPORT NOTE ===== */}
      <div
        className="
          max-w-3xl mx-auto mt-10 border rounded-xl p-6 reveal transition-colors duration-300
          bg-light-white border-light-mid
          dark:bg-dark-card dark:border-dark-border
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Parking */}
          <div>
            <span className="font-body font-bold text-[11px] uppercase tracking-widest text-gold mb-3 block">
              PARKING
            </span>
            <p className="font-body text-[14px] leading-relaxed text-light-secondary dark:text-white/60">
              Free parking is available in our main lot. Overflow parking is across the street. Accessible spaces are near the main entrance.
            </p>
          </div>

          {/* Transport */}
          <div>
            <span className="font-body font-bold text-[11px] uppercase tracking-widest text-gold mb-3 block">
              PUBLIC TRANSPORT
            </span>
            <p className="font-body text-[14px] leading-relaxed text-light-secondary dark:text-white/60">
              We are accessible by Metro Transit bus routes. The nearest stop is Edgerton St &amp; Payne Ave, a 3-minute walk from the church.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
