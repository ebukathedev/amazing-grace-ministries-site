import Navbar from '@/components/Navbar'
import VisitHero from '@/components/visit/VisitHero'
import ServiceTimes from '@/components/visit/ServiceTimes'
import LocationMap from '@/components/visit/LocationMap'
import WhatToExpect from '@/components/visit/WhatToExpect'
import VisitFAQ from '@/components/visit/VisitFAQ'
import VisitContactCTA from '@/components/visit/VisitContactCTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Plan Your Visit | Amazing Grace Ministries MN',
  description: 'Everything you need to know before your first visit — service times, location, what to expect, and how to join us online.',
}

export default function PlanYourVisitPage() {
  return (
    <main>
      <Navbar />
      <VisitHero />
      <ServiceTimes />
      <LocationMap />
      <WhatToExpect />
      <VisitFAQ />
      <VisitContactCTA />
      <Footer />
      <ScrollReveal />
    </main>
  )
}

