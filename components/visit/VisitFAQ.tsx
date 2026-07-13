'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function VisitFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Do I need to dress up?',
      a: 'Not at all. We are a come-as-you-are community. Whether you show up in a suit or jeans and sneakers, you are equally welcome here.',
    },
    {
      q: 'Is there parking available?',
      a: 'Yes! Free parking is available in our main lot. Accessible spaces are near the main entrance, and overflow parking is available across the street.',
    },
    {
      q: 'What about my kids?',
      a: "We love kids! We offer a safe, engaging children's program for ages infant through 5th grade during the Sunday morning service. Middle and high school students are welcome to attend the main service or our youth programs.",
    },
    {
      q: 'How long is the service?',
      a: 'Our Sunday services typically run about 90 minutes &mdash; including worship, announcements, and the message. Wednesday night services are usually around 60 minutes.',
    },
    {
      q: 'Do I have to give money?',
      a: 'Absolutely not. Offering is a personal act of worship for members of our church family. As a guest, please feel no obligation whatsoever.',
    },
    {
      q: 'What kind of music do you play?',
      a: "Our worship is contemporary and Spirit-filled &mdash; think modern worship songs with live instrumentation. It's uplifting, engaging, and designed to draw you into God's presence.",
    },
    {
      q: "What if I'm not a Christian?",
      a: "You are still completely welcome. We regularly have people exploring faith for the first time. Come with your questions &mdash; we're glad you're here.",
    },
    {
      q: 'How do I get connected?',
      a: 'After service, look for our welcome team or visit our Connection Table in the lobby. You can also fill out a connect card or visit our website to find a next step that&apos;s right for you.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

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
          GOT QUESTIONS?
        </span>
        <h2
          className="
            font-display font-bold text-[44px] md:text-[52px] mt-2
            text-light-charcoal dark:text-white
          "
        >
          We Have Answers
        </h2>
      </div>

      {/* ===== FAQ ACCORDION ===== */}
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className="
                border-b last:border-b-0 border-light-mid dark:border-dark-border
                transition-all duration-300
              "
            >
              <button
                onClick={() => toggle(idx)}
                className="
                  w-full flex items-center justify-between py-5 cursor-pointer group text-left
                "
                aria-expanded={isOpen}
              >
                <span
                  className="
                    font-body font-semibold text-[16px] group-hover:text-gold transition-colors duration-300
                    text-light-charcoal dark:text-white
                  "
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`
                    w-5 h-5 text-gold transition-transform duration-300
                    ${isOpen ? 'rotate-180' : ''}
                  `}
                />
              </button>

              {isOpen && (
                <div
                  className="
                    pb-5 font-body text-[15px] leading-relaxed
                    text-light-secondary dark:text-white/60
                  "
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
