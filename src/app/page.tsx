import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistic";
import WorkUnits from "@/components/sections/WorkUnits";
import Timeline from "@/components/sections/Timeline";
import ExpectedOutput from "@/components/sections/ExpectedOutput";
import Documents from "@/components/sections/Documents";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      <About />

      <Statistics />

      <WorkUnits />

      <Timeline />

      <ExpectedOutput />

      <Documents />

      <CTA />
    </>
  );
}