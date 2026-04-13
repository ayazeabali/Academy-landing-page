
export const HERO_DATA = {
  badge: "Welcome to Little Learners Academy",
  mainTitle: "Where Young Minds Blossom and ",
  highlightedText: "Dreams Take Flight.",
  paragraph: "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!",
  stats: [
    {
      number: "+7000",
      label: "Students Passed Out"
    },
    {
      number: "+37",
      label: "Awards & Recognitions"
    },
    {
      number: "+15",
      label: "Experience Educators"
    }
  ]
};

export const FOOTER_DATA = {
  description: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  contact: {
    email: "hello@littlelearners.com",
    phone: "+91 91813 23 2309",
    address: "Somewhere in the World",
  },
  sections: [
    {
      title: "Home",
      links: ["Features", "Our Testimonials", "FAQ"]
    },
    {
      title: "Academics",
      links: ["Special Features", "Gallery"]
    },
    {
      title: "About Us",
      links: ["Our Mission", "Our Vision", "Awards and Recognitions", "History", "Teachers"]
    },
    {
      title: "Contact Us",
      links: ["Information", "Map & Direction"]
    }
  ]
};
import IconHolistic from '../assets/icons/Icon (15).svg';
import IconEducators from '../assets/icons/Icon (1).svg'; 
import IconEnvironment from '../assets/icons/Icon (13).svg';
import IconPlay from '../assets/icons/Icon (12).svg';
import IconIndividual from '../assets/icons/Icon (14).svg';
import IconParent from '../assets/icons/Icon (11).svg';

export const BENEFITS_DATA = {
  title: "Our Benefits",
  description: "With a dedicated team of experienced educators...",
  items: [
    { 
      title: "Holistic Learning Approach", 
      content: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.", 
      icon: IconHolistic 
    },
    { 
      title: "Experienced Educators", 
      content: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",

      icon:  IconIndividual
    },
    { 
      title: "Nurturing Environment", 
      content: "We prioritize safety and provide a warm and caring atmosphere for every child.", 
      icon: IconEnvironment 
    },
    { 
      title: "Play-Based Learning", 
      content: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.", 
      icon:  IconEducators
    },
    { 
      title: "Individualized Attention", 
      content: "Our small class sizes enable personalized attention, catering to each child's unique needs.", 
      icon:  IconPlay
    },
    { 
      title: "Parent Involvement", 
      content: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.", 
      icon:IconParent ,
    }
  ]
};

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  content: string;
  rating: number;
}

export const TESTIMONIALS_DATA = {
  badge: "Their Happy Words 🤗",
  title: "Our Testimonials",
  description: "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.",
  reviews: [
    {
      id: 1,
      name: "Jennifer B",
      image: "src/assets/icons/Icon (17).svg", 
      content: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
      rating: 5
    },
    {
      id: 2,
      name: "David K",
      image:"src/assets/icons/Icon (18).svg", 
      content: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
      rating: 5
    },
    {
      id: 3,

      name: "Emily L",
      image: "src/assets/icons/Icon (10).svg", 
      content: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
      rating: 5
    }
  ]
};
export const FAQ_DATA = {
  badge: "Solutions For The Doubts",
  title: "Frequently Asked Questions",
  description: "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.",
  questions: [
    {
      id: 1,
      question: "What are the school hours at Little Learners Academy?",
      answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
      id: 2,
      question: "Is there a uniform policy for students?",
      answer: "Yes, we have a simple and comfortable uniform policy to foster a sense of community and equality among our students."
    },
    {
      id: 3,
      question: "What extracurricular activities are available for students?",
      answer: "We offer a variety of activities including art, music, sports, and language clubs to cater to diverse interests."
    },
    {
      id: 4,
      question: "How do you handle food allergies and dietary restrictions?",
      answer: "We have strict protocols in place to ensure the safety of all students with allergies or specific dietary needs."
    },
    {
      id: 5,
      question: "What is the teacher-to-student ratio at Little Learners Academy?",
      answer: "We maintain a low teacher-to-student ratio to provide personalized attention and support for every child."
    },
    {
      id: 6,
      question: "How do you handle discipline and behavior management?",
      answer: "We use positive reinforcement and clear communication to guide students' behavior and social development."
    },
    {
      id: 7,
      question: "How do I apply for admission to Little Learners Academy?",
      answer: "You can find all the necessary information and application forms on our website or visit our campus for assistance."
    },
    {
      id: 8,
      question: "How do I apply for admission to Little Learners Academy?",
      answer: "You can find all the necessary information and application forms on our website or visit our campus for assistance."
    }
  ]
};
export const EXPLORE_DATA = {
  badge: "Explore More",
  title: "Navigate through our Pages",
  description: "Your gateway to discovering a wealth of valuable information about our kindergarten school. Feel free to explore and learn more about the enriching experiences that await your child.",
  cards: [
    {
      id: 1,
      title: "About Us",
      description: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators.",
      link: "/about"
    },
    {
      id: 2,
      title: "Academics",
      description: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning.",
      link: "/academics"
    },
    {
      id: 3,
      title: "Student Life",
      description: "Peek into the vibrant and enriching world of Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and events.",
      link: "/student-life"
    },
    {
      id: 4,
      title: "Admissions",
      description: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements.",
      link: "/admissions"
    }
  ]
};