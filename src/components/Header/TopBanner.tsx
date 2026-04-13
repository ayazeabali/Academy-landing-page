import React from 'react';
import styles from './Header.module.css';

export const TopBanner = () => {
  return (
    <div className={styles.topBanner}>
      <div className={styles.abstractLeft}></div> 
      <div className={styles.bannerContent}>
        <span>Admission is Open, Grab your seat now</span>
        <span className={styles.arrowIcon}>→</span>
      </div>
      <div className={styles.abstractRight}></div>
    </div>
  );
};