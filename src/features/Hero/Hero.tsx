import React from 'react';
import styles from './Hero.module.css';
import { HERO_DATA } from '../../utils/data';
import heroImg from '../../assets/images/hero-image.png';

export const Hero = () => {
  const totalCircles = 22;

  return (
    <section className={styles.heroContainer}>
      <div className={styles.imageWrapper}>
        <div className={styles.orangeBackground}>
          <img src={heroImg} alt="Children playing" className={styles.heroImg} />
          {[...Array(totalCircles)].map((_, i) => {
            const angle = (i / totalCircles) * (Math.PI * 2.1);
            const spiralFactor = 0.95 - (i / totalCircles) * 0.45;
            const x = Math.cos(angle) * spiralFactor;
            const y = Math.sin(angle) * spiralFactor;

            return (
              <div 
                key={i} 
                className={styles.abstractCircle} 
                style={{ 
                  '--x': x, 
                  '--y': y,
                  '--i': i 
                } as React.CSSProperties} 
              />
            );
          })}
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.textSubContainer}>
          <span className={styles.badge}>{HERO_DATA.badge}</span>
          <h1 className={styles.heading}>
            {HERO_DATA.mainTitle}
            <span className={styles.orangeText}>{HERO_DATA.highlightedText}</span>
          </h1>
          <p className={styles.paragraph}>{HERO_DATA.paragraph}</p>
        </div>

        <div className={styles.statsBox}>
          {HERO_DATA.stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};