
import HeroSection from "@/components/homePage/HeroSection";
import ImpactSection from "@/components/homePage/ImpactSection";
import ProblemSection from "@/components/homePage/ProblemSection";
import SolutionSection from "@/components/homePage/SolutionSection";
import WhySection from "@/components/homePage/WhySection";
import LeaderStroySection from "@/components/homePage/LeaderStroySection";


export default function Home() {
  return (
   <>
    <HeroSection />
    <ProblemSection/>
    <SolutionSection/>
    <ImpactSection/>
    <LeaderStroySection/>
    <WhySection/>
   </>
  );
}
