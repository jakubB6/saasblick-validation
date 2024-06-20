import FeatureSection from "@/components/FeatureSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WaitingListSection from "@/components/WaitingListSection";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <Wrapper className="flex flex-col">
      <div className="min-h-screen flex flex-col ">
        <Header />
        <HeroSection />
      </div>
      <div className="min-h-screen flex flex-col ">
        <FeatureSection />
        <WaitingListSection />
      </div>
    </Wrapper>
  );
}
