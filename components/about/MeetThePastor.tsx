import Image from 'next/image'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function MeetThePastor() {
  return (
    <section
      className="py-24 px-6 bg-light-charcoal dark:bg-dark-section transition-colors duration-300"
    >
      {/* ===== MEET THE PASTORS ===== */}
      {/* Header */}
      <div className="text-center mb-16 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          LEADERSHIP
        </span>
        <h2 className="font-display font-bold text-[52px] text-white mt-2">
          Meet Our Pastors
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-6" />
      </div>

      {/* Pastor 1 — Pastor Nnaemeka Uchegbu */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center reveal mb-20">
        {/* Left — image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-ph-deeper">
          {/* Placeholder: Gradient background */}
          <div className="w-full h-full bg-gradient-to-b from-dark-muted via-dark-elevated to-dark-black" />

          {/* Production Image:
          */}
          <Image
            src="/images/pastor-nnaemeka.jpg"
            alt="Pastor Nnaemeka Uchegbu"
            fill
            className="object-cover object-top"
          />

          {/* Floating name card */}
          <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4">
            <span className="font-body font-bold text-[11px] uppercase tracking-widest text-gold block">
              SENIOR PASTOR & FOUNDER
            </span>
            <h3 className="font-display font-bold text-[28px] text-white mt-1">
              Pastor Nnaemeka Uchegbu
            </h3>
          </div>
        </div>

        {/* Right — bio */}
        <div>
          <p className="font-display italic text-[24px] text-gold leading-snug">
            &ldquo;Spreading hope, love, and the teachings of Christ &mdash; one life at a time.&rdquo;
          </p>
          <div className="font-body text-[16px] text-white/65 leading-[1.85] mt-6 space-y-4">
            <p>
              Pastor Nnaemeka Uchegbu is the Founder and spiritual leader of Amazing Grace Ministries MN &mdash; the driving force behind everything the church does. He loves to keep his hands full by participating in the development of sermons, outreach programs, and community engagement strategies.
            </p>
            <p>
              Pastor Uchegbu has built a reputation for inspiring and transforming lives through his powerful sermons and compassionate leadership. Under his guidance, Amazing Grace Ministries has grown into a thriving congregation, dedicated to spreading hope, love, and the teachings of Christ.
            </p>
          </div>
        </div>
      </div>

      {/* Divider between pastors */}
      <div className="max-w-4xl mx-auto border-t border-dark-border my-4" />

      {/* Pastor 2 — Pastor Nuhu Musa */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center reveal mt-20">
        {/* Left — image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-ph-deeper">
          {/* Placeholder: Gradient background */}
          <div className="w-full h-full bg-gradient-to-b from-dark-muted via-dark-elevated to-dark-black" />

          {/* Production Image:
          */}
          <Image
            src="/images/pastor-nuhu.jpg"
            alt="Pastor Nuhu Musa"
            fill
            className="object-cover object-top"
          />

          {/* Floating name card */}
          <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4">
            <span className="font-body font-bold text-[11px] uppercase tracking-widest text-gold block">
              PASTOR
            </span>
            <h3 className="font-display font-bold text-[28px] text-white mt-1">
              Pastor Nuhu Musa
            </h3>
          </div>
        </div>

        {/* Right — bio */}
        <div>
          <p className="font-display italic text-[24px] text-gold leading-snug">
            &ldquo;The message of grace and hope resonates with all who have the privilege of hearing it.&rdquo;
          </p>
          <div className="font-body text-[16px] text-white/65 leading-[1.85] mt-6 space-y-4">
            <p>
              Pastor Nuhu Musa is a vibrant and charismatic leader known for his dynamic approach to ministry. With a deep passion for guiding his congregation, Pastor Musa infuses his sermons with energy and inspiration, fostering a strong sense of community and spiritual growth.
            </p>
            <p>
              His engaging personality and unwavering commitment to his faith make him a beloved figure within the church. Pastor Musa&apos;s dedication to spreading the message of grace and hope resonates deeply with all who have the privilege of hearing him speak.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
