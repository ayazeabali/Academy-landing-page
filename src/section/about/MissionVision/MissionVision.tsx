import React from 'react';
import styles from './MissionVision.module.css';
import { MISSION_VISION_DATA } from '../../../data/mission';

export const MissionVision: React.FC = () => {
  const { badge, title, description, cards } = MISSION_VISION_DATA;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.badge}>{badge}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <img src={card.icon} alt={card.title} className={styles.icon} />
            </div>
            <p className={styles.cardText}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};