import { HeroSection } from "../../components/Common/HeroSection/HeroSection";
import { FeatureSection } from "../../components/FeatureSection/FeatureSection"; 
import { COMMON_HERO_DATA } from "../../data/hero";
import { FEATURES_DATA } from "../../data/features"; 
import { Curriculum } from "../../section/academics/Curriculum/Curriculum";
import { ACADEMICS_CURRICULUM } from "../../data/curriculumData";

import RoomsGallery from "../../section/academics/RoomsGallery/RoomsGallery"; 
import { galleryData } from "../../data/GalleryData";

export default function Academics() {
  return (
    <>
      <HeroSection 
        badge={COMMON_HERO_DATA.academics.badge}
        title={COMMON_HERO_DATA.academics.title}
        description={COMMON_HERO_DATA.academics.description}
      />

      <FeatureSection data={FEATURES_DATA.academics} />
      
      <Curriculum data={ACADEMICS_CURRICULUM} />

      <RoomsGallery data={galleryData} />
    </>
  );
}