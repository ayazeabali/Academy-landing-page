import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/icons/Icon (16).svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          Admission is Open, Grab your seat now →
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logoImg} />
        </div>

        <div className={styles.navActionsWrapper}>
          <div className={`${styles.navButtonsContainer} ${isMenuOpen ? styles.showMobileMenu : ''}`}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/about" className={styles.navLink}>About Us</Link>
            <Link to="/academics" className={styles.navLink}>Academics</Link>
            <Link to="/admissions" className={styles.navLink}>Admissions</Link>
            <Link to="/student-life" className={styles.navLink}>Student Life</Link>
          </div>

          <Link to="/contact" className={`${styles.navLink} ${styles.contactBtn}`}>
            <span className={styles.contactText}>Contact</span>
          </Link>

          <button className={styles.menuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={menuIcon} alt="menu" />
          </button>
        </div>
      </nav>
    </header>
  );
};