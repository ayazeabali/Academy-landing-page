import React, { useState } from 'react'; 
import styles from './Header.module.css';
import { TopBanner } from '../../components/Header/TopBanner';
import { Button } from '../../components/Button/Button';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <TopBanner />
      
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <div className={styles.shape14}></div>
          </div>
          <span className={styles.logoText}>Little Learners</span>
        </div>

        <div className={`${styles.navButtonsContainer} ${isOpen ? styles.activeMenu : ''}`}>
          <Button variant="active">Home</Button>
          <Button variant="nav">About Us</Button>
          <Button variant="nav">Academics</Button>
          <Button variant="nav">Admission</Button>
          <Button variant="nav">Student Life</Button>
          <Button variant="nav">Contact</Button>
        </div>

        <button 
          className={styles.menuBtn} 
          onClick={() => setIsOpen(!isOpen)} 
        >
          <div className={styles.hamburgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>
    </header>
  );
};