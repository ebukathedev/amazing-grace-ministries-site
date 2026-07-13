import { MapPin, Navigation, Phone, Mail, ExternalLink } from 'lucide-react'

export default function LocationMap() {
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
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          FIND US
        </span>
        <h2
          className="
            font-display font-bold text-[44px] md:text-[52px] mt-2
            text-light-charcoal dark:text-white
          "
        >
          Our Location
        </h2>
      </div>

      {/* ===== 2-COLUMN LAYOUT ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        
        {/* Left — Map placeholder */}
        <div className="relative w-full min-h-[420px] rounded-2xl overflow-hidden border border-light-mid dark:border-dark-border reveal">
          
          {/* Map placeholder bg */}
          <div className="absolute inset-0 bg-light-mid dark:bg-dark-card transition-colors duration-300" />
          
          {/* Center content of placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-4">
            <MapPin className="w-12 h-12 text-gold" />
            <div>
              <span
                className="
                  font-body font-semibold text-[13px] uppercase tracking-widest block
                  text-light-secondary dark:text-white/50
                "
              >
                Map loads here
              </span>
              <span
                className="
                  font-body text-[12px] block mt-1
                  text-light-muted dark:text-white/30
                "
              >
                Replace with Google Maps embed
              </span>
            </div>
          </div>
          
          {/* Production Comment:
          Replace this div with:
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.454341909874!2d-93.0818274!3d44.9750058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32ad7f13c6601%3A0xe54e6015d554a991!2s715%20Edgerton%20St%2C%20St%20Paul%2C%20MN%2055130!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          */}

          {/* Get Directions button overlay */}
          <a
            href="https://maps.google.com/?q=715+Edgerton+Street,+Saint+Paul,+MN+55130"
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2
              bg-gold text-dark-charcoal font-body font-bold text-[13px] uppercase tracking-[0.08em] py-3 rounded-lg
              hover:bg-gold-light hover:-translate-y-0.5 transition-all shadow-gold
            "
          >
            <Navigation className="w-[15px] h-[15px]" />
            Get Directions
          </a>
        </div>

        {/* Right — Contact details */}
        <div className="reveal reveal-delay-1">
          <div
            className="
              border rounded-2xl p-8 h-full flex flex-col justify-between transition-colors duration-300
              bg-light-white border-light-mid shadow-ph-light
              dark:bg-dark-card dark:border-dark-border
            "
          >
            <div>
              {/* Address block */}
              <div>
                <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block mb-2">
                  ADDRESS
                </span>
                <div className="w-8 h-[2px] bg-gold mb-5" />
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div
                    className="
                      font-body text-[16px] leading-loose
                      text-light-charcoal dark:text-white
                    "
                  >
                    <p>715 Edgerton Street</p>
                    <p>Saint Paul, MN 55130</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-light-mid dark:border-dark-border my-6" />

              {/* Contact info block */}
              <div>
                <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block mb-2">
                  CONTACT
                </span>
                <div className="w-8 h-[2px] bg-gold mb-5" />
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-light-gray dark:bg-dark-elevated transition-colors text-gold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-body font-semibold text-[10px] uppercase tracking-widest block text-light-muted dark:text-white/40">
                        PHONE
                      </span>
                      <span className="font-body text-[15px] text-light-charcoal dark:text-white block mt-0.5">
                        (651) 555-0199
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-light-gray dark:bg-dark-elevated transition-colors text-gold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-body font-semibold text-[10px] uppercase tracking-widest block text-light-muted dark:text-white/40">
                        EMAIL
                      </span>
                      <span className="font-body text-[15px] text-light-charcoal dark:text-white block mt-0.5">
                        info@amazinggracemn.org
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-light-mid dark:border-dark-border my-6" />

              {/* Parking info block */}
              <div>
                <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block mb-2">
                  PARKING
                </span>
                <div className="w-8 h-[2px] bg-gold mb-4" />
                <p
                  className="
                    font-body text-[14px] leading-relaxed
                    text-light-secondary dark:text-white/60
                  "
                >
                  Free parking is available in the main lot adjacent to the building. Overflow parking is available across the street. Accessible spaces are located near the main entrance.
                </p>
              </div>
            </div>

            {/* Social quick links */}
            <div className="flex flex-wrap gap-4 mt-8 pt-4 border-t border-light-mid dark:border-dark-border">
              <a
                href="https://maps.google.com/?q=715+Edgerton+Street,+Saint+Paul,+MN+55130"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body font-semibold text-[12px] text-gold hover:text-gold-dark transition-colors duration-300"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="http://maps.apple.com/?q=715+Edgerton+Street,+Saint+Paul,+MN+55130"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body font-semibold text-[12px] text-gold hover:text-gold-dark transition-colors duration-300"
              >
                <span>Get Apple Maps Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
