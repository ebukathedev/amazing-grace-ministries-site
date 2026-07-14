'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function VisitFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Do I need to dress up?',
      a: 'Not at all. Amazing Grace Ministries is a come-as-you-are, non-denominational community. Whether you show up in a suit or jeans and sneakers, you are equally welcome here.',
    },
    {
      q: 'Can I join the service remotely?',
      a: 'Absolutely. Our Sunday services are available online via livestream. Bible Study on Mondays and our Wednesday Midweek service are accessible by audio conference — call 470-480-9523 or 425-436-6364 and enter Access Code 198407.',
    },
    {
      q: 'What is Open Heavens?',
      a: "Open Heavens is our monthly corporate prayer gathering held on the first Saturday of every month. It's a powerful time to start the month with prayer and set your mind in tune with God. All are welcome.",
    },
    {
      q: 'What is the Hour of Battle?',
      a: "Hour of Battle is our Wednesday midweek prayer service. We gather weekly to pray fervently together. It's a key part of our spiritual rhythm as a church family.",
    },
    {
      q: 'What about my kids?',
      a: "We love kids! We offer a safe, engaging children's program for ages infant through 5th grade during the Sunday morning service.",
    },
    {
      q: 'How long is the Sunday service?',
      a: 'Our Sunday services typically run about 90 minutes — including worship, announcements, and the message from Pastor Uchegbu.',
    },
    {
      q: 'Do I have to give money?',
      a: 'Absolutely not. Offering is a personal act of worship for members of our church family. As a guest, please feel no obligation whatsoever.',
    },
    {
      q: 'How do I get connected?',
      a: 'After service, look for our welcome team. You can also reach out through our Contact page and our team will provide you with a warm welcome and answer any questions you may have.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section
      className="py-16 md:py-24 px-5 md:px-6 bg-light-gray dark:bg-dark-charcoal transition-colors duration-300"
    >
      {/* ===== VISIT FAQ ===== */}
      {/* Header */}
      <div className="text-center mb-14 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold">
          GOT QUESTIONS?
        </span>
        <h2 className="font-display font-bold text-[44px] md:text-[52px] mt-2 text-light-charcoal dark:text-white">
          We Have Answers
        </h2>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className="border-b last:border-b-0 border-light-mid dark:border-dark-border transition-all duration-300"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between py-5 cursor-pointer group text-left"
                aria-expanded={isOpen}
              >
                <span className="font-body font-semibold text-[16px] group-hover:text-gold transition-colors duration-300 text-light-charcoal dark:text-white">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isOpen && (
                <div className="pb-5 font-body text-[15px] leading-relaxed text-light-secondary dark:text-white/60">
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

