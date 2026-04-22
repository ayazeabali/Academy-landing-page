
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'classrooms',
    title: 'Our Classrooms',
    description: 'Our classrooms are designed to be bright, airy, and stimulating, providing the perfect environment for learning and exploration.',
    images: [
      '/assets/images/classroom-1.jpg',
      '/assets/images/classroom-2.jpg',
      '/assets/images/classroom-3.jpg',
      '/assets/images/classroom-4.jpg',
    ],
  },
  {
    id: 'library',
    title: 'Library',
    description: 'A quiet space filled with a vast collection of books to inspire a love for reading and continuous learning.',
    images: [
      '/assets/images/library-1.jpg',
      '/assets/images/library-2.jpg',
    ],
  },
  {
    id: 'playground',
    title: 'Play Area',
    description: 'Safe and fun outdoor spaces where children can develop their physical skills and socialise with their peers.',
    images: [
      '/assets/images/play-1.jpg',
      '/assets/images/play-2.jpg',
    ],
  }
];

export const FOOTER_DATA = {
  sections: [
    {
      title: 'Home',
      links: [
        { label: 'Features', path: '/#features' },
        { label: 'Our Testimonials', path: '/#testimonials' },
        { label: 'FAQ', path: '/#faq' },
      ],
    },
    {
      title: 'About Us',
      links: [
        { label: 'Our Mission', path: '/about#mission' },
        { label: 'Our Vision', path: '/about#vision' },
        { label: 'Awards and Recognitions', path: '/about#awards' },
        { label: 'History', path: '/about#history' },
        { label: 'Teachers', path: '/about#team' },
      ],
    },
    {
      title: 'Academics',
      links: [
        { label: 'Special Features', path: '/academics#features' },
        { label: 'Gallery', path: '/academics#gallery' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { label: 'Information', path: '/contact' },
        { label: 'Map & Direction', path: '/contact#map' },
      ],
    },
  ],
};