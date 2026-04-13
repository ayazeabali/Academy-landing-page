import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import { TESTIMONIALS_DATA } from '../../utils/data';

import ShapeIcon from '../../assets/icons/Shape.svg'; 
import ArrowIcon from '../../assets/icons/Icon (9).svg';

interface Review {
  image: string;
  name: string;
  content: string;
  rating?: number;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { reviews, badge, title, description } = TESTIMONIALS_DATA;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= reviews.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className={styles.container} aria-labelledby="testimonials-title">
      <header className={styles.subContainer}>
        <span className={styles.badge}>{badge}</span>
        <h2 id="testimonials-title" className={styles.heading}>{title}</h2>
        <p className={styles.paragraph}>{description}</p>
      </header>

      <div className={styles.carouselWrapper}>
        <button onClick={handlePrev} className={`${styles.navBtn} ${styles.prevBtn}`}>
          <img src={ArrowIcon} alt="Prev" className={styles.mirrorIcon} />
        </button>

        <div className={styles.itemsViewport}>
          <div 
            className={styles.itemsContainer}
            style={{ transform: `translateX(-${currentIndex * (100 / reviews.length)}%)` }}
          >
            {reviews.map((review: Review, index: number) => (
              <article key={index} className={styles.card}>
                <div className={styles.profileHeader}>
                  <div className={styles.profileImg}>
                    {/* صورة بروفايل واحدة مختلفة لكل كارد */}
                    <img src={review.image} alt={review.name} />
                  </div>
                  <h4 className={styles.name}>{review.name}</h4>
                </div>
                
                <div className={styles.ratingIcons}>
                   {[...Array(5)].map((_, i) => (
                     <img key={i} src={ShapeIcon} alt="star" />
                   ))}
                </div>
                
                <p className={styles.reviewContent}>{review.content}</p>
              </article>
            ))}
          </div>
        </div>

        <button onClick={handleNext} className={`${styles.navBtn} ${styles.nextBtn}`}>
          <img src={ArrowIcon} alt="Next" />
        </button>
      </div>
    </section>
  );
};