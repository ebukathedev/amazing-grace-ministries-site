import Navbar from '@/components/Navbar'
import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import MeetThePastor from '@/components/about/MeetThePastor'
import OurBeliefs from '@/components/about/OurBeliefs'
import OurValues from '@/components/about/OurValues'
import VisitCTA from '@/components/about/VisitCTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'About Us | Amazing Grace Ministries MN',
  description: 'We are the Amazing Family — a non-denominational, Spirit-filled community led by Pastor Nnaemeka Uchegbu, dedicated to spreading hope, love, and the teachings of Christ.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <OurStory />
      <MeetThePastor />
      <OurBeliefs />
      <OurValues />
      <VisitCTA />
      <Footer />
      <ScrollReveal />
    </main>
  )
}

