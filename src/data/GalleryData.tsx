export interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  images: string[];
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    category: "Classrooms",
    title: "Classrooms",
    description: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [
      "/src/assets/images/11.png",
      "/src/assets/images/12.png",
      "/src/assets/images/13.png",
      "/src/assets/images/14.png"
    ]
  },
  {
    id: 2,
    category: "Library",
    title: "Library",
    description: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development through a diverse collection of resources.",
    images: [
      "/src/assets/images/15.png",
      "/src/assets/images/16.png",
      "/src/assets/images/17.png",
      "/src/assets/images/18.png"
    ]
  },
  {
    id: 3,
    category: "Science Lab",
    title: "Science Lab",
    description: "Our hands-on science lab allows students to explore scientific concepts and conduct experiments, sparking curiosity about the natural world around them.",
    images: [
      "/src/assets/images/19.png",
      "/src/assets/images/20.png",
      "/src/assets/images/21.png",
      "/src/assets/images/22.png"
    ]
  },
  {
    id: 4,
    category: "Computer Lab",
    title: "Computer Lab",
    description: "Equipped with age-appropriate technology, the computer lab introduces students to digital literacy and computational thinking in a safe environment.",
    images: [
      "/src/assets/images/23.png",
      "/src/assets/images/24.png",
      "/src/assets/images/25.png",
      "/src/assets/images/26.png"
    ]
  },
  {
    id: 5,
    category: "Garden and Nature Area",
    title: "Garden and Nature Area",
    description: "Our garden and nature area provide opportunities for children to connect with nature and learn about plants and the environment through hands-on gardening.",
    images: [
      "/src/assets/images/27.png",
      "/src/assets/images/28.png",
      "/src/assets/images/29.png",
      "/src/assets/images/30.png"
    ]
  }
];