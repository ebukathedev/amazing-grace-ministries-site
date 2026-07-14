import { MapPin, Navigation, Phone, Mail, ExternalLink } from 'lucide-react'

export default function LocationMap() {
  return (
    <section
      className="py-16 md:py-24 px-5 md:px-6 bg-light-gray dark:bg-dark-charcoal transition-colors duration-300"
    >
      {/* ===== FIND US ===== */}
      {/* Header */}
      <div className="text-center mb-14 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          FIND US
        </span>
        <h2 className="font-display font-bold text-[44px] md:text-[52px] mt-2 text-light-charcoal dark:text-white">
          Our Location
        </h2>
      </div>

      {/* ===== 2-COLUMN LAYOUT ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        
        {/* Left — Map placeholder */}
        <div className="relative w-full min-h-[420px] rounded-2xl overflow-hidden border border-light-mid dark:border-dark-border reveal">
          
          {/* Active Google Map Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.7107222090467!2d-93.0790403344524!3d44.96266734038071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d535db58a159%3A0x30db70624ab5b834!2sAmazing%20Grace%20MN!5e1!3m2!1sen!2sng!4v1784043618752!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
          />

          {/* Get Directions button overlay */}
          <a
            href="https://maps.app.goo.gl/BdDkKSzQqxf4gv6g6"
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
                        (651) 274-9224
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
                  Free parking is available in the main lot adjacent to the building. Accessible spaces are located near the main entrance.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
