import Section from "@/components/Section";
import ContactForm from "../components/ContactForm";
import Showcase from "@/components/Showcase";
import HomeSection from "@/components/Home";
import Footer from "@/components/footer";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ToolsAndSkills from "@/components/SliderForSkillsAndTools";


export default function Home() {
  return (
    <div className="w-full">
      <Section id="home">
        <HomeSection/>
      </Section>

      <Section id="about">
        <About/>
      </Section>
      <Section id="skills">
        <ToolsAndSkills/>
      </Section>

      <Section id="ExperienceTimeline">
        <ExperienceTimeline/>
      </Section>

      <Section id="showcase">
            <Showcase/>
      </Section>

      <Section id="contact">
        <ContactForm />
      </Section>
      <Footer></Footer>
    </div>
  );
}
