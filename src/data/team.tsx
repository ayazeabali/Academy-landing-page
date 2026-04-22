export interface TeamMember {
  id: number;
  name: string;
  qualification: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ms. Sarah Anderson",
    qualification: "Bachelor's Degree in Early Childhood Education",
    description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment.",
    image: "/src/assets/images/img2.png"
  },
  {
    id: 2,
    name: "Mr. David Roberts",
    qualification: "Master's Degree in Elementary Education",
    description: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students.",
    image: "/src/assets/images/img1.png"
  },
  {
    id: 3,
    name: "Ms. Emily Hernandez",
    qualification: "Diploma in Child Psychology",
    description: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging.",
    image: "/src/assets/images/img4.png"
  },
  {
    id: 4,
    name: "Mr. Michael Turner",
    qualification: "Bachelor's Degree in Physical Education",
    description: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    image: "/src/assets/images/img3.png"
  },
  {
    id: 5,
    name: "Ms. Jessica Lee",
    qualification: "Master's Degree in Special Education",
    description: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    image: "/src/assets/images/img6.png"
  },
  {
    id: 6,
    name: "Mr. William Parker",
    qualification: "Bachelor's Degree in Fine Arts",
    description: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    image: "/src/assets/images/img5.png"
  }
];