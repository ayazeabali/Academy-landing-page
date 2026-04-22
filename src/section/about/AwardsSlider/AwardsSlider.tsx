import React, { useState } from 'react'; 
import styles from './AwardsSlider.module.css';
import { AWARDS_DATA } from '../../../data/awards';
import arrowIcon from "../../../assets/icons/Icon (27).svg";

export const AwardsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    if (currentIndex < AWARDS_DATA.items.length - 3) { 
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.badge}>{AWARDS_DATA.badge}</div>
        <h2 className={styles.title}>{AWARDS_DATA.title}</h2>
        <p className={styles.description}>{AWARDS_DATA.description}</p>
      </div>

      {/* حاوية السلايدر (المقصوصة) */}
      <div className={styles.sliderContainer}>
        <div 
          className={styles.grid} 
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {AWARDS_DATA.items.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconContainer}>
                <img src={item.icon} alt="Icon" className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.moreAwards}>
          {AWARDS_DATA.items.length - 3 - currentIndex} More Awards
        </div>
        <div className={styles.navigation}>
          <button onClick={prevSlide} className={styles.navBtn} disabled={currentIndex === 0}>
            <img 
              src={arrowIcon} 
              alt="Previous" 
              className={styles.navIcon} 
              style={{ transform: 'rotate(180deg)' }} 
            />
          </button>
          <button onClick={nextSlide} className={styles.navBtn} disabled={currentIndex >= AWARDS_DATA.items.length - 3}>
            <img src={arrowIcon} alt="Next" className={styles.navIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};