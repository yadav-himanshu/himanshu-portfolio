import HomeSection from "@/components/Home";
import About from "@/components/About";
import SkillsSlider from "@/components/SkillsSlider";
import Timeline from "@/components/Timeline";
import Showcase from "@/components/Showcase";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="w-full relative">
      <HomeSection />
      <About />
      <SkillsSlider />
      <Timeline />
      <Showcase />
      <ContactForm />
      <Footer />
    </div>
  );
}
