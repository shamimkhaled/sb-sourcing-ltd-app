import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import GoalSection from '../components/GoalSection';
import HowWeWork from '../components/HowWeWork';
import CounterSection from '../components/CounterSection';
import ServicesGrid from '../components/ServicesGrid';
import ContactCTA from '../components/ContactCTA';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import NewsCarousel from '../components/NewsCarousel';
import LogosSlider from '../components/LogosSlider';

export default function Home() {
  return (
    <div className="pt-[100px] lg:pt-[128px]">
      <Hero />
      <AboutSection />
      <GoalSection />
      <HowWeWork />
      <CounterSection />
      <ServicesGrid />
      <ContactCTA />
      <ContactForm />
      <Testimonials />
      <NewsCarousel />
      <LogosSlider title="Our Compliance" type="compliance" />
      <div className="bg-white py-12">
        <LogosSlider title="Our Membership" type="membership" />
      </div>
    </div>
  );
}
