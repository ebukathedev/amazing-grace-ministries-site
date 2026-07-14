import Navbar from '@/components/Navbar'
import SermonsHero from '@/components/sermons/SermonsHero'
import FeaturedSermon from '@/components/sermons/FeaturedSermon'
import SermonSeries from '@/components/sermons/SermonSeries'
import SermonBrowser from '@/components/sermons/SermonBrowser'
import YouTubeCTA from '@/components/sermons/YouTubeCTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Sermons | Amazing Grace Ministries MN',
  description: 'Watch and listen to messages from Amazing Grace Ministries MN. Spirit-filled teaching available anytime, anywhere.',
}

export default function SermonsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-light-white dark:bg-dark-charcoal font-body antialiased transition-colors duration-300">
      <Navbar />
      <SermonsHero />
      <FeaturedSermon />
      <SermonSeries />
      <SermonBrowser />
      <YouTubeCTA />
      <Footer />
      <ScrollReveal />
    </main>
  )
}
