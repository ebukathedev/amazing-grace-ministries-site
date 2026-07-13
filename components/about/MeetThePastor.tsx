import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function MeetThePastor() {
  return (
    <section
      className="
        py-24 px-6
        bg-light-charcoal dark:bg-dark-section
        transition-colors duration-300
      "
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-20 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          LEADERSHIP
        </span>
        <h2 className="font-display font-bold text-[44px] md:text-[52px] text-white mt-2">
          Meet the Pastors
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-6" />
      </div>

      <div className="flex flex-col gap-28 max-w-4xl mx-auto">
        
        {/* ===== PASTOR 1 (DAVID) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center reveal">
          {/* Left — pastor image */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-ph-deeper">
            {/* Placeholder: Gradient background */}
            <div className="w-full h-full bg-gradient-to-b from-dark-muted via-dark-elevated to-dark-black" />

            {/* Production Image:
            <Image
              src="/images/about/pastor-david.jpg"
              alt="Pastor David"
              fill
              className="object-cover object-top"
            />
            */}
            
            {/* Floating name card */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4">
              <span className="font-body font-bold text-[11px] uppercase tracking-widest text-gold block">
                SENIOR PASTOR
              </span>
              <h3 className="font-display font-bold text-[28px] text-white mt-1">
                Pastor David Cole
              </h3>
            </div>
          </div>

          {/* Right — bio stack */}
          <div>
            <p className="font-display italic text-[26px] text-gold leading-snug">
              &ldquo;My greatest passion is seeing people step into the fullness of who God created them to be.&rdquo;
            </p>
            <div className="font-body text-[16px] text-white/65 leading-[1.85] mt-6 space-y-4">
              <p>
                Pastor David has served the Minnesota community for over 15 years, building a church culture rooted in authenticity, prayer, and the uncompromising Word of God.
              </p>
              <p>
                Under his leadership, Amazing Grace Ministries MN has grown into a multigenerational family where people from all walks of life find belonging, purpose, and transformation.
              </p>
              <p>
                He is passionate about equipping the next generation, strengthening families, and seeing the church impact the city of Minneapolis and beyond.
              </p>
            </div>
            
            {/* Social row */}
            <div className="flex gap-3 mt-8">
              <a
                href="#instagram"
                aria-label="Instagram Link"
                className="w-9 h-9 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:shadow-gold transition-all duration-300"
              >
                <Instagram className="w-[15px] h-[15px]" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook Link"
                className="w-9 h-9 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:shadow-gold transition-all duration-300"
              >
                <Facebook className="w-[15px] h-[15px]" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube Link"
                className="w-9 h-9 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:shadow-gold transition-all duration-300"
              >
                <Youtube className="w-[15px] h-[15px]" />
              </a>
            </div>
          </div>
        </div>

        {/* ===== PASTOR 2 (SARAH) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center reveal">
          {/* Left — Bio stack (on desktop moves to first column via order class) */}
          <div className="lg:order-first">
            <p className="font-display italic text-[26px] text-gold leading-snug">
              &ldquo;We are called to build a multigenerational family that worships in spirit and in truth.&rdquo;
            </p>
            <div className="font-body text-[16px] text-white/65 leading-[1.85] mt-6 space-y-4">
              <p>
                Pastor Sarah has served the Minnesota community for over 15 years, leading with compassion and teaching the deep truths of Scripture to equip families.
              </p>
              <p>
                Under her leadership, the ministry has nurtured a vibrant, welcoming atmosphere where individuals of all backgrounds experience growth and spiritual renewal.
              </p>
              <p>
                She is passionate about empowering local outreach ministries, supporting families, and seeing the light of the Gospel transform our city and beyond.
              </p>
            </div>
            
            {/* Social row */}
            <div className="flex gap-3 mt-8">
              <a
                href="#instagram"
                aria-label="Instagram Link"
                className="w-9 h-9 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:shadow-gold transition-all duration-300"
              >
                <Instagram className="w-[15px] h-[15px]" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook Link"
                className="w-9 h-9 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:shadow-gold transition-all duration-300"
              >
                <Facebook className="w-[15px] h-[15px]" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube Link"
                className="w-9 h-9 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:shadow-gold transition-all duration-300"
              >
                <Youtube className="w-[15px] h-[15px]" />
              </a>
            </div>
          </div>

          {/* Right — pastor image (on desktop moves to last column via order class) */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-ph-deeper lg:order-last">
            {/* Placeholder: Gradient background */}
            <div className="w-full h-full bg-gradient-to-b from-dark-muted via-dark-elevated to-dark-black" />

            {/* Production Image:
            <Image
              src="/images/about/pastor-sarah.jpg"
              alt="Pastor Sarah"
              fill
              className="object-cover object-top"
            />
            */}
            
            {/* Floating name card */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4">
              <span className="font-body font-bold text-[11px] uppercase tracking-widest text-gold block">
                CO-PASTOR
              </span>
              <h3 className="font-display font-bold text-[28px] text-white mt-1">
                Pastor Sarah Cole
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
