'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function GiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Is my gift tax-deductible?',
      a: 'Yes. Amazing Grace Ministries MN is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent permitted by law. You will receive a giving statement for your records.',
    },
    {
      q: 'How is my donation used?',
      a: "Your gift goes directly to support our church's ministry operations &mdash; including Sunday services, outreach programs, youth ministry, and community care. We are committed to financial transparency and good stewardship.",
    },
    {
      q: 'Is online giving secure?',
      a: 'Absolutely. Our online giving platform uses industry-standard SSL encryption and is processed through a trusted, PCI-compliant payment provider. Your financial information is never stored on our servers.',
    },
    {
      q: 'Can I set up recurring giving?',
      a: "Yes. You can set up weekly, bi-weekly, or monthly recurring donations through our online giving form. Recurring giving is one of the most powerful ways to consistently support the church's mission.",
    },
    {
      q: 'Can I give to a specific fund?',
      a: 'Yes. When giving online, you can designate your gift to a specific fund &mdash; including our General Fund, Building Fund, Missions & Outreach, Youth Ministry, or Benevolence Fund.',
    },
    {
      q: 'What if I want to cancel my recurring gift?',
      a: "You can cancel or modify your recurring gift at any time by contacting our finance team at finance@amazinggracemn.org or by logging into your giving account. We'll take care of it promptly.",
    },
    {
      q: 'Do I need to create an account to give?',
      a: 'No account is required for one-time gifts. However, creating a free account allows you to track your giving history, download tax statements, and manage recurring donations easily.',
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
          GIVING QUESTIONS
        </span>
        <h2
          className="
            font-display font-bold text-[44px] md:text-[52px] mt-2
            text-light-charcoal dark:text-white
          "
        >
          Common Questions
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
                    font-body font-semibold text-[16px] group-hover:text-gold transition-colors duration-300 pr-4
                    text-light-charcoal dark:text-white
                  "
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`
                    w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300
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
