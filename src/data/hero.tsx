
export interface StatItem {
  number: string;
  label: string;
}

export interface HeroData {
  badge: string;
  title?: string;
  mainTitle?: string;
  highlightedText?: string;
  paragraph?: string;
  description?: string;
  tag?: string;
  stats?: StatItem[];
}

export const HOME_HERO_DATA: HeroData = {
  badge: "Welcome to Little Learners Academy",
  mainTitle: "Where Young Minds Blossom and ",
  highlightedText: "Dreams Take Flight.",
  paragraph: "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime.",
  stats: [
    { number: "+7000", label: "Students Passed Out" },
    { number: "+37", label: "Awards & Recognitions" },
    { number: "+15", label: "Experience Educators" }
  ]
};

export const COMMON_HERO_DATA = {
  about: {
    badge: "Overview",
    title: "Welcome to Little Learners Academy",
    description: "A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
  },
  academics: {
    badge: "Academics",
    title: "Nurturing Young Minds for Success",
    description: "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."}
};