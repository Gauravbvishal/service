import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import CardContainer from "../Components/Homepage/Card";
import { CardHoverEffectDemo } from "../Components/Homepage/CardHoverEffectDemo";
import { GlobeDemo } from "../Components/Homepage/GlobeDemo";
import { Newsletter } from "../Components/Homepage/Newsletter";
import OurMission from "../Components/Homepage/OurMission";
import { AnimatedTooltipPreview } from "../Components/Homepage/OurTeam";
import HeroSection from "../Components/Homepage/StarBackgroun";
import { InfiniteMovingCardsDemo } from "../Components/Homepage/Why To Choese";


export default function Home() {
  return (
  <> 
   <HeroSection></HeroSection>
    <AnimatedTooltipPreview></AnimatedTooltipPreview>
    <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
    <OurMission></OurMission>
    {/* <CardContainer></CardContainer> */}
    <CardHoverEffectDemo></CardHoverEffectDemo>
    <Newsletter></Newsletter>
    </>
  );
}
