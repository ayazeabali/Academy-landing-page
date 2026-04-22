import { HeroSection } from "../../components/Common/HeroSection/HeroSection";
import { COMMON_HERO_DATA } from "../../data/hero";
import { MissionVision } from "../../section/about/MissionVision/MissionVision";
import { AwardsSlider } from "../../section/about/AwardsSlider/AwardsSlider";
import{OurHistory} from "../../section/about/AboutHistory/OurHistory";
import {Team} from "../../section/about/AboutTeam/Team";
export default function About() {
  return (
    <>
      <HeroSection 
      badge={COMMON_HERO_DATA.about.badge}
      title={COMMON_HERO_DATA.about.title}
      description={COMMON_HERO_DATA.about.description}
    />
      <MissionVision />
      <AwardsSlider />
      <OurHistory/>
      <Team/>
    </>
  );
}

