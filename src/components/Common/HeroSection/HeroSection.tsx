import React from 'react';
import styles from './HeroSection.module.css';
import abstractImg from "../../../assets/images/Abstract Design.png";

interface HeroSectionProps {
  badge: string;
  title: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ badge, title, description }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCard}>
        <img src={abstractImg} className={styles.abstractImg} alt="" />

        <div className={styles.heroLeft}>
          <div className={styles.badge}>{badge}</div>
          <h1 className={styles.heroTitle}>{title}</h1>
        </div>

        <div className={styles.heroRight}>
          <p className={styles.heroDesc}>{description}</p>
        </div>
      </div>
    </section>
  );
};