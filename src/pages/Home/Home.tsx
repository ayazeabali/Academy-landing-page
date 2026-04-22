import { Hero } from "../../section/home/Hero/Hero";
import { FeatureSection } from "../../components/FeatureSection/FeatureSection";
import { FEATURES_DATA } from "../../data/features";

import { Testimonials } from "../../section/home/Testimonials/Testimonials";
import { Accordion } from "../../section/home/FAQ/Accordion";
import { Explore } from "../../section/home/Explore/Explore";

export default function Home() {
  return (
    <>
      <Hero />
      
      <FeatureSection data={FEATURES_DATA.benefits} />
      
      <Testimonials />
      <Accordion />
      <Explore />
    </>
  );
}