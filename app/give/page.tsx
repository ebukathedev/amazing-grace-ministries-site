import Navbar from '@/components/Navbar'
import GiveHero from '@/components/give/GiveHero'
import GivingForm from '@/components/give/GivingForm'
import GivingOptions from '@/components/give/GivingOptions'
import ImpactSection from '@/components/give/ImpactSection'
import ScriptureSection from '@/components/give/ScriptureSection'
import GiveFAQ from '@/components/give/GiveFAQ'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Give | Amazing Grace Ministries MN',
  description: 'Partner with Amazing Grace Ministries MN through generous giving. Every gift makes an impact.',
}

export default function GivePage() {
  return (
    <main className="flex flex-col min-h-screen bg-light-white dark:bg-dark-charcoal font-body antialiased transition-colors duration-300">
      <Navbar />
      <GiveHero />
      <GivingForm />
      <GivingOptions />
      <ImpactSection />
      <ScriptureSection />
      <GiveFAQ />
      <Footer />
      <ScrollReveal />
    </main>
  )
}
