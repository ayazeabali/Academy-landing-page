import IconHolistic from '../assets/icons/Icon (15).svg';
import IconIndividual from '../assets/icons/Icon (1).svg'; 
import IconEnvironment from '../assets/icons/Icon (13).svg';
import IconPlay from '../assets/icons/Icon (12).svg';
import IconEducators from '../assets/icons/Icon (14).svg';
import IconParent from '../assets/icons/Icon (11).svg';

import IconThematic from '../assets/icons/Icon (32).svg'; 
import IconSteam from '../assets/icons/Icon (33).svg';
import IconLanguage from '../assets/icons/Icon (28).svg';
import IconArt from '../assets/icons/Icon (29).svg';
import IconOutdoor from '../assets/icons/Icon (30).svg';
import IconPlayBased from '../assets/icons/Icon (31).svg';

export interface FeatureItem {
  title: string;
  content: string;
  icon: string;
}

export interface SectionContent {
  badge: string;
  title: string;
  description: string;
  items: FeatureItem[];
}

export const FEATURES_DATA = {
  benefits: {
    badge: "Our Benefits",
    title: "Our Benefits",
    description: "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to provide an unparalleled learning experience.",
    items: [
      { 
        title: "Holistic Learning Approach", 
        content: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.", 
        icon: IconHolistic 
      },
      { 
        title: "Experienced Educators", 
        content: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
        icon: IconIndividual
      },
      { 
        title: "Nurturing Environment", 
        content: "We prioritize safety and provide a warm and caring atmosphere for every child.", 
        icon: IconEnvironment 
      },
      { 
        title: "Play-Based Learning", 
        content: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.", 
        icon: IconEducators
      },
      { 
        title: "Individualized Attention", 
        content: "Our small class sizes enable personalized attention, catering to each child's unique needs.", 
        icon: IconPlay
      },
      { 
        title: "Parent Involvement", 
        content: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.", 
        icon: IconParent
      }
    ]
  } as SectionContent,

  academics: {
    badge: "Our Features",
    title: "Our Special Features",
    description: "Our kindergarten school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!",
    items: [
      { 
        title: "Thematic Learning", 
        content: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.", 
        icon: IconThematic 
      },
      { 
        title: "STEAM Education", 
        content: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.", 
        icon: IconSteam 
      },
      { 
        title: "Language Immersion", 
        content: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.", 
        icon: IconLanguage 
      },
      { 
        title: "Art and Creativity", 
        content: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.", 
        icon: IconArt 
      },
      { 
        title: "Outdoor Education", 
        content: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, foster a connection with the environment.", 
        icon: IconOutdoor 
      },
      { 
        title: "Play-Based Learning", 
        content: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.", 
        icon: IconPlayBased 
      }
    ]
  } as SectionContent
};