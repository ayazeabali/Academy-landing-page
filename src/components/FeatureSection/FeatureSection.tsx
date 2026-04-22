import React from 'react';
import styles from './FeatureSection.module.css';

interface FeatureItem {
  title: string;
  content: string;
  icon: string;
}

interface FeatureSectionProps {
  data: {
    badge: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ data }) => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.header}>
        <span className={styles.badge}>{data.badge}</span>
        <h2 className={styles.mainTitle}>{data.title}</h2>
        <p className={styles.mainDesc}>{data.description}</p>
      </div>

      <div className={styles.grid}>
        {data.items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={item.icon} alt={item.title} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardContent}>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};