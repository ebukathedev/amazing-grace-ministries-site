import AboutSection from "@/components/AboutSection";
import AnnouncementBar from "@/components/AnnouncementBar";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MinistriesSection from "@/components/MinistriesSection";
import MissionSection from "@/components/MissionSection";
import Navbar from "@/components/Navbar";
import NextSteps from "@/components/NextSteps";
import PlanYourVisit from "@/components/PlanYourVisit";
import ScrollReveal from "@/components/ScrollReveal";
import SermonSection from "@/components/SermonSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-light-white dark:bg-dark-charcoal font-body antialiased transition-colors duration-300">
        <Navbar />
        <AnnouncementBar />
        <Hero />
        <AboutSection />
        <PlanYourVisit />
        <MissionSection />
        <NextSteps />
        <EventsSection />
        <MinistriesSection />
        <SermonSection />
        <Footer />
        <ScrollReveal />
      </main>
  );
}
