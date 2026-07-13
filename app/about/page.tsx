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
  description: 'Learn who we are, what we believe, and what drives us at Amazing Grace Ministries MN.',
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-light-white dark:bg-dark-charcoal font-body antialiased transition-colors duration-300">
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
