import Navbar from '@/components/Navbar'
import ContactHero from '@/components/contact/ContactHero'
import ContactMain from '@/components/contact/ContactMain'
import ContactInfo from '@/components/contact/ContactInfo'
import MapSection from '@/components/contact/MapSection'
import ConnectStrip from '@/components/contact/ConnectStrip'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Contact Us | Amazing Grace Ministries MN',
  description: 'Get in touch with Amazing Grace Ministries MN. We would love to hear from you.',
}

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-light-white dark:bg-dark-charcoal font-body antialiased transition-colors duration-300">
      <Navbar />
      <ContactHero />
      <ContactMain />
      <ContactInfo />
      <MapSection />
      <ConnectStrip />
      <Footer />
      <ScrollReveal />
    </main>
  )
}
