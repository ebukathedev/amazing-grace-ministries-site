'use client'
import { useState } from 'react'
import { Heart, RefreshCw, DollarSign, Lock, ChevronDown } from 'lucide-react'

export default function GivingForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [givingType, setGivingType] = useState<'one-time' | 'recurring'>('one-time')
  const [selectedFund, setSelectedFund] = useState<string>('General Fund')

  const presetAmounts = [25, 50, 100, 250, 500, 1000]

  const handleCustomChange = (val: string) => {
    // Only allow numeric or decimal inputs
    if (val === '' || /^\d*\.?\d*$/.test(val)) {
      setCustomAmount(val)
      setSelectedAmount(null)
    }
  }

  const activeDisplayAmount = selectedAmount !== null ? selectedAmount : customAmount

  return (
    <section
      id="giving-form"
      className="
        py-24 px-6
        bg-light-gray dark:bg-dark-charcoal
        transition-colors duration-300
      "
    >
      {/* ===== SECTION HEADER ===== */}
      <div className="text-center mb-14 reveal">
        <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block">
          PARTNER WITH US
        </span>
        <h2
          className="
            font-display font-bold text-[44px] md:text-[52px] mt-2
            text-light-charcoal dark:text-white
          "
        >
          Give Online
        </h2>
        <p
          className="
            font-body text-[16px] max-w-lg mx-auto mt-4
            text-light-secondary dark:text-white/60
          "
        >
          Your generosity fuels everything we do &mdash; from Sunday services to community outreach. Thank you for partnering with us.
        </p>
      </div>

      {/* ===== GIVING FORM CARD ===== */}
      <div
        className="
          max-w-xl mx-auto rounded-2xl border shadow-ph-deeper p-8 reveal transition-colors duration-300
          bg-light-white border-light-mid
          dark:bg-dark-card dark:border-dark-border
        "
      >
        {/* Step 1 — Giving type toggle */}
        <div>
          <span className="font-body font-bold text-[11px] uppercase tracking-widest mb-3 block text-light-muted dark:text-white/40">
            GIVING TYPE
          </span>
          <div className="flex rounded-lg overflow-hidden border border-light-mid dark:border-dark-border">
            <button
              onClick={() => setGivingType('one-time')}
              className={`
                flex-1 py-3 font-body font-bold text-[12px] uppercase tracking-[0.08em] transition-all cursor-pointer
                flex items-center justify-center gap-2
                ${
                  givingType === 'one-time'
                    ? 'bg-gold text-dark-charcoal border-gold'
                    : 'bg-light-white text-light-secondary hover:bg-light-gray dark:bg-dark-elevated dark:text-white/50 dark:hover:bg-dark-muted'
                }
              `}
            >
              <Heart className="w-3.5 h-3.5" />
              One-Time
            </button>
            <button
              onClick={() => setGivingType('recurring')}
              className={`
                flex-1 py-3 font-body font-bold text-[12px] uppercase tracking-[0.08em] transition-all cursor-pointer
                flex items-center justify-center gap-2
                ${
                  givingType === 'recurring'
                    ? 'bg-gold text-dark-charcoal border-gold'
                    : 'bg-light-white text-light-secondary hover:bg-light-gray dark:bg-dark-elevated dark:text-white/50 dark:hover:bg-dark-muted'
                }
              `}
            >
              <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              Recurring
            </button>
          </div>
        </div>

        {/* Step 2 — Fund selector */}
        <div className="mt-6">
          <span className="font-body font-bold text-[11px] uppercase tracking-widest mb-3 block text-light-muted dark:text-white/40">
            GIVING FUND
          </span>
          <div className="relative">
            <select
              value={selectedFund}
              onChange={(e) => setSelectedFund(e.target.value)}
              className="
                w-full py-3 pl-4 pr-10 rounded-lg border font-body text-[14px] font-semibold focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer
                bg-light-white border-light-mid text-light-charcoal
                dark:bg-dark-elevated dark:border-dark-border dark:text-white
              "
            >
              <option value="General Fund">General Fund</option>
              <option value="Building Fund">Building Fund</option>
              <option value="Missions & Outreach">Missions & Outreach</option>
              <option value="Youth Ministry">Youth Ministry</option>
              <option value="Benevolence Fund">Benevolence Fund</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold pointer-events-none" />
          </div>
        </div>

        {/* Step 3 — Amount selector */}
        <div className="mt-6">
          <span className="font-body font-bold text-[11px] uppercase tracking-widest mb-3 block text-light-muted dark:text-white/40">
            SELECT AMOUNT
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {presetAmounts.map((amt) => {
              const isSelected = selectedAmount === amt
              return (
                <button
                  key={amt}
                  onClick={() => {
                    setSelectedAmount(amt)
                    setCustomAmount('')
                  }}
                  className={`
                    py-3 rounded-lg border font-body font-bold text-[15px] transition-all cursor-pointer
                    ${
                      isSelected
                        ? 'bg-gold text-dark-charcoal border-gold'
                        : 'bg-light-white border-light-mid text-light-charcoal hover:border-gold hover:text-gold dark:bg-dark-elevated dark:border-dark-border dark:text-white dark:hover:border-gold dark:hover:text-gold'
                    }
                  `}
                >
                  ${amt}
                </button>
              )
            })}
          </div>

          <div className="relative mt-3">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
            <input
              type="text"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => handleCustomChange(e.target.value)}
              className="
                w-full pl-9 pr-4 py-3 rounded-lg border font-body text-[15px] focus:outline-none focus:border-gold transition-colors
                bg-light-white border-light-mid text-light-charcoal placeholder-light-muted
                dark:bg-dark-elevated dark:border-dark-border dark:text-white dark:placeholder-white/30
              "
            />
          </div>
        </div>

        {/* Step 4 — Submit button */}
        {/* TODO: Wire up to payment gateway — client to implement */}
        <button
          onClick={() => {
            alert(`generosity button clicked! fund: ${selectedFund}, type: ${givingType}, amount: $${activeDisplayAmount || '0'}`)
          }}
          className="
            w-full mt-8 bg-gold text-dark-charcoal font-body font-bold text-[14px] uppercase tracking-[0.1em] py-4 rounded-lg
            hover:bg-gold-light hover:-translate-y-0.5 transition-all shadow-gold flex items-center justify-center gap-2 cursor-pointer
          "
        >
          <Heart className="w-4 h-4 text-dark-charcoal fill-dark-charcoal" />
          Give ${activeDisplayAmount || '—'} {givingType === 'recurring' ? 'Monthly' : 'Now'}
        </button>

        {/* Security note */}
        <div className="flex items-center justify-center gap-2 mt-4 text-light-muted dark:text-white/35">
          <Lock className="w-3.5 h-3.5 text-gold/60" />
          <span className="font-body text-[12px]">
            Secure, encrypted giving powered by Stripe
          </span>
        </div>

      </div>
    </section>
  )
}
