'use client'
import { useState } from 'react'
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  Check,
  HeartHandshake,
  Megaphone,
  HandHeart,
} from 'lucide-react'

type DepartmentKey =
  | 'General Enquiries'
  | 'Pastoral Care & Prayer'
  | 'Church Office'
  | 'Media & Communications'
  | 'Volunteering & Serving'

export default function ContactMain() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '' as DepartmentKey | '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const departments = [
    {
      key: 'General Enquiries' as DepartmentKey,
      icon: MessageSquare,
      name: 'General Enquiries',
      email: 'hello@amazinggracemn.org',
    },
    {
      key: 'Pastoral Care & Prayer' as DepartmentKey,
      icon: HeartHandshake,
      name: 'Pastoral Care & Prayer',
      email: 'prayer@amazinggracemn.org',
    },
    {
      key: 'Church Office' as DepartmentKey,
      icon: Phone,
      name: 'Church Office',
      email: 'office@amazinggracemn.org',
    },
    {
      key: 'Media & Communications' as DepartmentKey,
      icon: Megaphone,
      name: 'Media & Communications',
      email: 'media@amazinggracemn.org',
    },
    {
      key: 'Volunteering & Serving' as DepartmentKey,
      icon: HandHeart,
      name: 'Volunteering & Serving',
      email: 'serve@amazinggracemn.org',
    },
  ]

  const selectDept = (key: DepartmentKey) => {
    setFormData((prev) => ({ ...prev, department: key }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      subject: '',
      message: '',
    })
    setSubmitted(false)
  }

  return (
    <section
      id="contact-form"
      className="
        py-24 px-6
        bg-light-gray dark:bg-dark-charcoal
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
        
        {/* ===== Left Column — Departments info ===== */}
        <div className="lg:col-span-2 reveal">
          <span className="font-body font-semibold text-[11px] uppercase tracking-[0.18em] text-gold block">
            REACH THE RIGHT TEAM
          </span>
          <div className="w-8 h-[2px] bg-gold mt-2 mb-6" />
          
          <h2
            className="
              font-display font-bold text-[38px] leading-tight
              text-light-charcoal dark:text-white
            "
          >
            Get in Touch
          </h2>
          <span className="font-display italic text-[20px] text-gold mt-2 block">
            With the Right Person.
          </span>
          
          <p className="font-body text-[15px] leading-relaxed mt-5 text-light-secondary dark:text-white/60">
            Whether you have a general question, need prayer, or want to connect with a specific ministry &mdash; we have a team ready to help. Select a department below and we&apos;ll make sure your message gets to the right person.
          </p>

          {/* Department Cards */}
          <div className="flex flex-col gap-3 mt-8">
            {departments.map((dept) => {
              const IconComponent = dept.icon
              const isSelected = formData.department === dept.key
              return (
                <div
                  key={dept.key}
                  onClick={() => selectDept(dept.key)}
                  className={`
                    flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition-all duration-300
                    ${
                      isSelected
                        ? 'bg-gold/10 border-gold shadow-sm shadow-gold/20'
                        : 'bg-light-white border-light-mid hover:border-gold dark:bg-dark-card dark:border-dark-border dark:hover:border-gold'
                    }
                  `}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-light-gray dark:bg-dark-elevated text-gold transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-[14px] text-light-charcoal dark:text-white">
                      {dept.name}
                    </h3>
                    <span className="font-body text-[12px] text-light-muted dark:text-white/40 block mt-0.5">
                      {dept.email}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ===== Right Column — Contact Form ===== */}
        <div className="lg:col-span-3 reveal reveal-delay-1 w-full">
          <div
            className="
              border rounded-2xl p-8 shadow-ph-deeper transition-colors duration-300
              bg-light-white border-light-mid
              dark:bg-dark-card dark:border-dark-border
            "
          >
            {submitted ? (
              /* Success State */
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display font-bold text-[32px] mt-6 text-light-charcoal dark:text-white">
                  Message Sent!
                </h3>
                <p className="font-body text-[15px] mt-3 text-light-secondary dark:text-white/60 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Someone from our team will get back to you within 24&ndash;48 hours. God bless you!
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 font-body font-semibold text-[13px] text-gold hover:text-gold-dark transition-colors cursor-pointer"
                >
                  Send Another Message &rarr;
                </button>
              </div>
            ) : (
              /* Form input fields */
              <form onSubmit={handleSubmit}>
                {/* Row 1 — Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body font-bold text-[11px] uppercase tracking-widest mb-2 block text-light-muted dark:text-white/40">
                      FIRST NAME
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, firstName: e.target.value }))
                        }
                        className="
                          w-full pl-10 pr-4 py-3 rounded-lg border font-body text-[14px] focus:outline-none focus:border-gold transition-colors
                          bg-light-white border-light-mid text-light-charcoal placeholder-light-muted
                          dark:bg-dark-elevated dark:border-dark-border dark:text-white dark:placeholder-white/30
                        "
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-body font-bold text-[11px] uppercase tracking-widest mb-2 block text-light-muted dark:text-white/40">
                      LAST NAME
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                        }
                        className="
                          w-full pl-10 pr-4 py-3 rounded-lg border font-body text-[14px] focus:outline-none focus:border-gold transition-colors
                          bg-light-white border-light-mid text-light-charcoal placeholder-light-muted
                          dark:bg-dark-elevated dark:border-dark-border dark:text-white dark:placeholder-white/30
                        "
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                    </div>
                  </div>
                </div>

                {/* Row 2 — Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <div>
                    <label className="font-body font-bold text-[11px] uppercase tracking-widest mb-2 block text-light-muted dark:text-white/40">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="
                          w-full pl-10 pr-4 py-3 rounded-lg border font-body text-[14px] focus:outline-none focus:border-gold transition-colors
                          bg-light-white border-light-mid text-light-charcoal placeholder-light-muted
                          dark:bg-dark-elevated dark:border-dark-border dark:text-white dark:placeholder-white/30
                        "
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-body font-bold text-[11px] uppercase tracking-widest mb-2 block text-light-muted dark:text-white/40">
                      PHONE NUMBER <span className="text-[9px] text-gold/60 ml-1.5">(OPTIONAL)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="(651) 555-0100"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        className="
                          w-full pl-10 pr-4 py-3 rounded-lg border font-body text-[14px] focus:outline-none focus:border-gold transition-colors
                          bg-light-white border-light-mid text-light-charcoal placeholder-light-muted
                          dark:bg-dark-elevated dark:border-dark-border dark:text-white dark:placeholder-white/30
                        "
                      />
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                    </div>
                  </div>
                </div>

                {/* Row 3 — Department Select */}
                <div className="mt-5">
                  <label className="font-body font-bold text-[11px] uppercase tracking-widest mb-2 block text-light-muted dark:text-white/40">
                    DEPARTMENT
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.department}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          department: e.target.value as DepartmentKey,
                        }))
                      }
                      className="
                        w-full pl-4 pr-10 py-3 rounded-lg border font-body text-[14px] focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer
                        bg-light-white border-light-mid text-light-charcoal
                        dark:bg-dark-elevated dark:border-dark-border dark:text-white
                      "
                    >
                      <option value="" disabled>
                        Select a department...
                      </option>
                      <option value="General Enquiries">General Enquiries</option>
                      <option value="Pastoral Care & Prayer">Pastoral Care & Prayer</option>
                      <option value="Church Office">Church Office</option>
                      <option value="Media & Communications">Media & Communications</option>
                      <option value="Volunteering & Serving">Volunteering & Serving</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold pointer-events-none" />
                  </div>
                </div>

                {/* Row 4 — Subject */}
                <div className="mt-5">
                  <label className="font-body font-bold text-[11px] uppercase tracking-widest mb-2 block text-light-muted dark:text-white/40">
                    SUBJECT
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, subject: e.target.value }))
                      }
                      className="
                        w-full pl-10 pr-4 py-3 rounded-lg border font-body text-[14px] focus:outline-none focus:border-gold transition-colors
                        bg-light-white border-light-mid text-light-charcoal placeholder-light-muted
                        dark:bg-dark-elevated dark:border-dark-border dark:text-white dark:placeholder-white/30
                      "
                    />
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                  </div>
                </div>

                {/* Row 5 — Message */}
                <div className="mt-5">
                  <label className="font-body font-bold text-[11px] uppercase tracking-widest mb-2 block text-light-muted dark:text-white/40">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="
                      w-full px-4 py-3 rounded-lg border font-body text-[14px] focus:outline-none focus:border-gold transition-colors resize-none h-36
                      bg-light-white border-light-mid text-light-charcoal placeholder-light-muted
                      dark:bg-dark-elevated dark:border-dark-border dark:text-white dark:placeholder-white/30
                    "
                  />
                </div>

                {/* Submit Button */}
                {/* TODO: Wire up form submission to backend email handler — client to implement */}
                <button
                  type="submit"
                  className="
                    mt-8 w-full bg-gold text-dark-charcoal font-body font-bold text-[14px] uppercase tracking-[0.1em] py-4 rounded-lg
                    hover:bg-gold-light hover:-translate-y-0.5 transition-all shadow-gold flex items-center justify-center gap-2 cursor-pointer
                  "
                >
                  <Send className="w-4 h-4 text-dark-charcoal" />
                  Send Message
                </button>

                {/* Privacy Note */}
                <div className="flex items-center justify-center gap-2 mt-4 text-light-muted dark:text-white/30">
                  <span className="font-body text-[12px]">
                    Your information is kept private and never shared.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
