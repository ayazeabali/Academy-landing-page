import React, { useState, useRef } from 'react';
import styles from './RoomsGallery.module.css';
import type { GalleryItem } from '../../../data/GalleryData';
import arrowIcon from "../../../assets/icons/Icon (9).svg";

interface Props {
  data: GalleryItem[];
}

const RoomsGallery: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("All");
  
  const scrollRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const tabs = ["All", "Classrooms", "Library", "Science Lab", "Computer Lab", "Garden and Nature Area"];
  
  const filteredData = activeTab === "All" 
    ? data 
    : data.filter(item => item.category === activeTab);

  const scroll = (id: number, direction: 'left' | 'right') => {
    const container = scrollRefs.current[id];
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.container}>
      <div className={`${styles.header} ${styles.fadeIn}`}>
        <span className={styles.badge}>Our Gallery</span>
        <h2 className={styles.mainTitle}>Our Rooms Gallery</h2>
        <p className={styles.mainDesc}>Step into our Gallery and immerse yourself...</p>
      </div>

      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.cardsList}>
        {filteredData.map((item) => (
          <div key={item.id} className={styles.galleryCard}>
            <div 
              className={styles.imagesGrid}
              ref={(el) => { scrollRefs.current[item.id] = el; }}
            >
              {item.images.map((img, idx) => (
                <div key={idx} className={styles.imgContainer}>
                  <img src={img} alt="" className={styles.galleryImg} />
                </div>
              ))}
            </div>

            <div className={styles.cardInfo}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.navControls}>
                  <button 
                    onClick={() => scroll(item.id, 'left')} 
                    className={styles.navCircle}
                    aria-label="Previous"
                  >
                    <img src={arrowIcon} className={styles.arrowLeft} alt="" />
                  </button>
                  <button 
                    onClick={() => scroll(item.id, 'right')} 
                    className={styles.navCircle}
                    aria-label="Next"
                  >
                    <img src={arrowIcon} alt="" />
                  </button>
                </div>
              </div>
              <p className={styles.cardText}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsGallery;