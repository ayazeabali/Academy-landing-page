import React from 'react';
import styles from './OurHistory.module.css';
import { HISTORY_DATA } from '../../../data/history';

export const OurHistory: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.badge}>{HISTORY_DATA.badge}</div>
        <h2 className={styles.title}>{HISTORY_DATA.title}</h2>
        <p className={styles.description}>{HISTORY_DATA.description}</p>
      </div>

      <div className={styles.historyContainer}>
        {HISTORY_DATA.items.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.iconWrapper}>
              <img 
                src={item.icon} 
                className={styles.containerSvg} 
                alt="" 
              />
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};