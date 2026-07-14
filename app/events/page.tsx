import Navbar from '@/components/Navbar'
import EventsHero from '@/components/events/EventsHero'
import FeaturedEvent from '@/components/events/FeaturedEvent'
import EventsBrowser from '@/components/events/EventsBrowser'
import RecurringEvents from '@/components/events/RecurringEvents'
import EventsCTA from '@/components/events/EventsCTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Events | Amazing Grace Ministries MN',
  description: 'Discover upcoming events, gatherings, and experiences at Amazing Grace Ministries MN. There is always something meaningful happening.',
}

export default function EventsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-light-white dark:bg-dark-charcoal font-body antialiased transition-colors duration-300">
      <Navbar />
      <EventsHero />
      <FeaturedEvent />
      <EventsBrowser />
      <RecurringEvents />
      <EventsCTA />
      <Footer />
      <ScrollReveal />
    </main>
  )
}
