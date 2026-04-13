import React from 'react';
import styles from './Explore.module.css';
import { EXPLORE_DATA } from '../../utils/data';
import { Button } from '../../components/Button/Button';

export const Explore = () => {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <span className={styles.badge}>{EXPLORE_DATA.badge}</span>
        <h2 className={styles.heading}>{EXPLORE_DATA.title}</h2>
        <p className={styles.paragraph}>{EXPLORE_DATA.description}</p>
      </div>

      <div className={styles.cardsGrid}>
        {EXPLORE_DATA.cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            
            <div className={styles.decoration}>
              <div className={styles.line}></div>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.line}></div>
            </div>

            <p className={styles.cardDescription}>{card.description}</p>
            
            <Button variant="primary" className={styles.cardBtn}>
              Learn More <span>→</span>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};